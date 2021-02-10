import React, { Component } from "react";
import { SurveyElementBase } from "survey-react";

class TabbedMenuComponent extends SurveyElementBase {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div>Tabbed menu should be here</div>;
    /* <svc-tabbed-menu
        params="items: creator.tabs, viewType: creator.koViewType"
    ></svc-tabbed-menu
    > */
  }
}

export default TabbedMenuComponent;
