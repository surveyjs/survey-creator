import * as ko from 'knockout';

ko.components.register('svc-template-renderer', {
  viewModel: {
    createViewModel: (params: any) => {
      return params;
    }
  },
  template: `<!-- ko template: { name: templateName, data: templateData } --><!-- /ko -->`
});