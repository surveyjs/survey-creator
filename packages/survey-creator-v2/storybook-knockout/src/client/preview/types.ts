import { StoryFn } from '@storybook/addons';

export interface IKnockoutComponentStory {
  template: string | Node;
  context?: any;
}

export type StoryFnKnockoutReturnType = string | Node | IKnockoutComponentStory;

export interface IStorybookStory {
  name: string;
  render: () => any;
}

export interface IStorybookSection {
  kind: string;
  stories: IStorybookStory[];
}

export interface ShowErrorArgs {
  title: string;
  description: string;
}

export interface RenderMainArgs {
  storyFn: StoryFn<StoryFnKnockoutReturnType>;
  selectedKind: string;
  selectedStory: string;
  showMain: () => void;
  showError: (args: ShowErrorArgs) => void;
  forceRender: boolean;
  parameters: any;
}
