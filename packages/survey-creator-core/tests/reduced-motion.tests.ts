import { afterEach } from "vitest";
import { settings, reducedMotionMediaQuery } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { scrollElementIntoView } from "../src/utils/creator-utils";

function setReducedMotion(matches: boolean): void {
  (globalThis as any).__setMatchMedia(reducedMotionMediaQuery, matches);
}

function rootHasDisabledAnimations(creator: CreatorTester): boolean {
  return creator.getRootCss().indexOf("svc-creator--disable-animations") > -1;
}

afterEach(() => {
  settings.animationEnabled = true;
  settings.respectReducedMotion = true;
  setReducedMotion(false);
});

test("root css tracks reduced motion only after the creator is mounted", (): void => {
  settings.animationEnabled = true;
  settings.respectReducedMotion = true;
  setReducedMotion(true);
  const creator = new CreatorTester();
  expect(rootHasDisabledAnimations(creator)).toBe(false);

  const root = document.createElement("div");
  document.body.appendChild(root);
  creator.setRootElement(root);
  expect(rootHasDisabledAnimations(creator)).toBe(true);

  setReducedMotion(false);
  expect(rootHasDisabledAnimations(creator)).toBe(false);

  setReducedMotion(true);
  expect(rootHasDisabledAnimations(creator)).toBe(true);

  creator.unsubscribeRootElement();
  setReducedMotion(false);
  expect(rootHasDisabledAnimations(creator)).toBe(true);

  creator.dispose();
  root.remove();
});

test("respectReducedMotion false keeps creator animations on", (): void => {
  settings.animationEnabled = true;
  settings.respectReducedMotion = false;
  setReducedMotion(true);
  const creator = new CreatorTester();
  const root = document.createElement("div");
  creator.setRootElement(root);
  expect(rootHasDisabledAnimations(creator)).toBe(false);
  creator.dispose();
});

test("animationEnabled false disables animations without reduced motion", (): void => {
  setReducedMotion(false);
  const creator = new CreatorTester();
  creator["animationEnabled"] = false;
  expect(rootHasDisabledAnimations(creator)).toBe(true);
  creator.dispose();
});

test("toolbox animations follow reduced motion", (): void => {
  settings.animationEnabled = true;
  settings.respectReducedMotion = true;
  setReducedMotion(false);
  const creator = new CreatorTester();
  creator.toolbox.supportOnElementRerenderedEvent = false;
  creator.sidebar.supportOnElementRerenderedEvent = false;
  expect(creator.toolbox.animationAllowed).toBe(true);
  expect(creator.sidebar.animationAllowed).toBe(true);

  setReducedMotion(true);
  expect(creator.toolbox.animationAllowed).toBe(false);
  expect(creator.sidebar.animationAllowed).toBe(false);

  settings.respectReducedMotion = false;
  expect(creator.toolbox.animationAllowed).toBe(true);
  expect(creator.sidebar.animationAllowed).toBe(true);
  creator.dispose();
});

test("scrollElementIntoView uses auto while reduced motion is requested", (): void => {
  settings.animationEnabled = true;
  settings.respectReducedMotion = true;
  const root = document.createElement("div");
  const el = document.createElement("div");
  el.id = "reduced-motion-target";
  let behavior: ScrollBehavior;
  el.scrollIntoView = ((options: ScrollIntoViewOptions) => {
    behavior = options.behavior;
  }) as typeof el.scrollIntoView;
  root.appendChild(el);

  setReducedMotion(false);
  scrollElementIntoView(el.id, root);
  expect(behavior).toBe("smooth");

  setReducedMotion(true);
  scrollElementIntoView(el.id, root);
  expect(behavior).toBe("auto");
});

test("scrollToElement drops smooth scrolling while reduced motion is requested", (): void => {
  settings.animationEnabled = true;
  settings.respectReducedMotion = true;
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const page = creator.survey.pages[0];
  const calls: Array<any> = [];
  creator.survey.scrollElementToTop = (options: any) => { calls.push(options); };
  const el = document.createElement("div");

  setReducedMotion(false);
  creator.scrollToElement(page, page, el);
  expect(calls[0].scrollIntoViewOptions.behavior).toBe("smooth");

  setReducedMotion(true);
  creator.scrollToElement(page, page, el);
  expect(calls[1].scrollIntoViewOptions.behavior).toBeUndefined();

  creator["animationEnabled"] = false;
  setReducedMotion(false);
  creator.scrollToElement(page, page, el);
  expect(calls[2].scrollIntoViewOptions.behavior).toBeUndefined();
  creator.dispose();
});
