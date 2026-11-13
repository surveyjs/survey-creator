import { vi } from "vitest";
import { CreatorTester } from "./creator-tester";

test("creator root installs tooltips for its own [data-sv-tooltip] controls", (): void => {
  vi.useFakeTimers();
  const creator = new CreatorTester();
  const root = document.createElement("div");
  root.className = creator.getRootCss();
  const button = document.createElement("span");
  button.setAttribute("title", "Clear");
  button.setAttribute("data-sv-tooltip", "Clear");
  root.appendChild(button);
  document.body.appendChild(root);
  creator.setRootElement(root);

  button.dispatchEvent(new MouseEvent("pointerover", { bubbles: true }));
  vi.advanceTimersByTime(200);
  const tooltip = root.querySelector(".sv-tooltip.sv-tooltip--visible");
  expect(tooltip, "the tooltip is mounted inside the creator theme root").toBeTruthy();
  expect(tooltip?.textContent).toBe("Clear");
  expect(button.hasAttribute("title"), "the native tooltip is suppressed while shown").toBe(false);

  button.dispatchEvent(new MouseEvent("pointerout", { bubbles: true }));
  expect(root.querySelector(".sv-tooltip--visible")).toBeFalsy();
  expect(button.getAttribute("title")).toBe("Clear");

  vi.useRealTimers();
  creator.unsubscribeRootElement();
  creator.dispose();
  root.remove();
});

test("creator root inside a shadow root installs tooltips for that root", (): void => {
  vi.useFakeTimers();
  const creator = new CreatorTester();
  const shadowHost = document.createElement("div");
  document.body.appendChild(shadowHost);
  const shadowRoot = shadowHost.attachShadow({ mode: "open" });
  const root = document.createElement("div");
  root.className = creator.getRootCss();
  const button = document.createElement("span");
  button.setAttribute("data-sv-tooltip", "Clear");
  const sibling = document.createElement("span");
  root.appendChild(button);
  root.appendChild(sibling);
  shadowRoot.appendChild(root);
  creator.setRootElement(root);

  // Both ends of the move are in one shadow tree, so only a listener on the shadow root sees it.
  button.dispatchEvent(new MouseEvent("pointerover", { bubbles: true, composed: true, relatedTarget: sibling }));
  vi.advanceTimersByTime(200);
  expect(shadowRoot.querySelector(".sv-tooltip.sv-tooltip--visible")?.textContent).toBe("Clear");

  vi.useRealTimers();
  creator.unsubscribeRootElement();
  creator.dispose();
  shadowHost.remove();
});
