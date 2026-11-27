import { expect, test } from "vitest";
import { PageAdorner } from "../src/components/page";
import { StringEditorViewModelBase } from "../src/components/string-editor";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { TabDesignerViewModel } from "../src/components/tabs/designer";
import { CreatorTester } from "./creator-tester";

function designerOf(creator: CreatorTester): TabDesignerViewModel {
  return (<TabDesignerPlugin>creator.getPlugin("designer")).model;
}

function ghostAdorner(creator: CreatorTester): PageAdorner {
  const adorner = new PageAdorner(creator, designerOf(creator).newPage);
  adorner.isGhost = true;
  return adorner;
}

function blurPageTitle(creator: CreatorTester, page: { locTitle: any }, text: string, relatedTarget?: HTMLElement): StringEditorViewModelBase {
  const editor = new StringEditorViewModelBase(page.locTitle, creator);
  editor.onBlur({
    target: { innerText: text, innerHTML: text, textContent: text },
    relatedTarget
  } as any);
  return editor;
}

function addQuestionButton(): HTMLButtonElement {
  const button = document.createElement("button");
  button.className = "svc-surface-btn__title-button";
  return button;
}

test("Add Question clicked from a ghost page title adds one question and keeps the title", async () => {
  const creator = new CreatorTester();
  creator.JSON = {};
  const adorner = ghostAdorner(creator);
  const page = adorner.page;
  blurPageTitle(creator, page, "Intro", addQuestionButton());
  adorner.addNewQuestion(adorner, undefined as any);
  await new Promise((resolve) => setTimeout(resolve, 0));

  expect(creator.survey.pages).toHaveLength(1);
  expect(creator.survey.pages[0]).toBe(page);
  expect(page.title).toBe("Intro");
  expect(page.elements).toHaveLength(1);
  const designer = designerOf(creator);
  expect(designer.newPage).toBeTruthy();
  expect(designer.newPage).not.toBe(page);
  expect(designer.newPage.elements).toHaveLength(0);
});

test("Add Question after a committed ghost page title does not duplicate the page", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const adorner = ghostAdorner(creator);
  const page = adorner.page;
  blurPageTitle(creator, page, "Intro", document.createElement("div"));
  expect(creator.survey.pages).toHaveLength(2);
  expect(page.elements).toHaveLength(0);

  adorner.addNewQuestion(adorner, undefined as any);

  expect(creator.survey.pages).toHaveLength(2);
  expect(creator.survey.pages.filter(p => p === page)).toHaveLength(1);
  expect(page.title).toBe("Intro");
  expect(page.elements).toHaveLength(1);
});

test("Leaving a ghost page title without Add Question still creates the page", () => {
  const creator = new CreatorTester();
  creator.JSON = {};
  const adorner = ghostAdorner(creator);
  blurPageTitle(creator, adorner.page, "Intro");
  expect(creator.survey.pages).toHaveLength(1);
  expect(creator.survey.pages[0].title).toBe("Intro");
  expect(creator.survey.pages[0].elements).toHaveLength(0);
  expect(designerOf(creator).newPage).toBeTruthy();
});
