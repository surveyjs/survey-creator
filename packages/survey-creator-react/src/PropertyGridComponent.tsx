import React, { Component } from "react";

class PropertyGridComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="svc-property-panel">
        <div className="svc-property-panel__header">{this.props.title}</div>
        <div className="svc-property-panel__expander">
          <div>ko template: | name: 'survey-content', data: survey |</div>
        </div>
      </div>
    );
    /* <svc-property-panel
        params="title: 'Question Properties',survey: creator.propertyGrid.koSurvey()"
    ></svc-property-panel> */

    /*
    <div class="svc-property-panel__header" data-bind="text: title"></div>
    <div class="svc-property-panel__expander">
      <!-- ko template: { name: 'survey-content', data: survey  } -->
      <!-- /ko -->
    </div>
     */
  }
}

export default PropertyGridComponent;
