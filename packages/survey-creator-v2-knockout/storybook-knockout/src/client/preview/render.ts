import { document, Node } from 'global';
import dedent from 'ts-dedent';
import { RenderMainArgs } from './types';

import * as ko from 'knockout';

const rootElement = document.getElementById('root');

export default function renderMain({
  storyFn,
  selectedKind,
  selectedStory,
  showMain,
  showError,
  forceRender,
  parameters,
}: RenderMainArgs) {
  const knockoutInstance = (!!parameters.knockout && parameters.knockout.instance) || ko;

  const storyContent = storyFn();
  showMain();

  if (typeof storyContent === 'string') {
    knockoutInstance.cleanNode(rootElement);
    rootElement.innerHTML = storyContent;
    knockoutInstance.applyBindings({}, rootElement);
  } else if (storyContent instanceof Node) {
    // Don't re-mount the element if it didn't change and neither did the story
    if (rootElement.firstChild === storyContent && forceRender === true) {
      return;
    }

    knockoutInstance.cleanNode(rootElement);
    rootElement.innerHTML = '';
    rootElement.appendChild(storyContent);
    knockoutInstance.applyBindings({}, rootElement);
  } else if (
    'template' in storyContent &&
    (typeof storyContent.template === 'string' || storyContent.template instanceof Node)
  ) {
    knockoutInstance.cleanNode(rootElement);
    if (typeof storyContent.template === 'string') {
      rootElement.innerHTML = storyContent.template;
    } else {
      rootElement.innerHTML = '';
      rootElement.appendChild(storyContent);
    }
    knockoutInstance.applyBindings(storyContent.context || {}, rootElement);
  } else {
    showError({
      title: `Expecting an HTML snippet or DOM node from the story: "${selectedStory}" of "${selectedKind}".`,
      description: dedent`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `,
    });
  }
}
