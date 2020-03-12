import { Selector } from "testcafe";

class Page {
  constructor() {
    this.questions = Selector(".svd_question");
  }
  toolBarQuestion(questionType) {
    return Selector(`.svd_toolbox_item`).withAttribute("title", questionType);
  }
  selectElementInPropertyGrid(element) {
    return element.find(".icon-actioneditelement");
  }
  creatorTab(tabName) {
    return Selector("a.nav-link").withText(tabName);
  }
  propertyGridCategory(categoryName) {
    return Selector(".svd-accordion-tab-header")
      .child("span")
      .withText(categoryName);
  }
}

export default new Page();
