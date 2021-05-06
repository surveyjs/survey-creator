import * as ko from 'knockout';
import { TabDesignerViewModel } from '@survey/creator';
import { ImplementorBase, Survey } from 'survey-knockout-ui';

const template = require('./designer.html');
// import template from "./designer.html";

ko.components.register('svc-tab-designer', {
  viewModel: {
    createViewModel: (params: any) => {
      const model = new TabDesignerViewModel<Survey>(params.creator);
      new ImplementorBase(model);
      return model;
    },
  },
  template: template
});
