import { SurveyModel, SurveyElementTemplateData } from "survey-core";
import { CreatorBase } from "@survey/creator";
import React from 'react';
import {
    SurveyQuestion,
  } from "survey-react-ui";

interface IDragOverFeedbackComponentProps {
    shouldRender: boolean;
    creator: CreatorBase<SurveyModel>;
    feedback: SurveyElementTemplateData;
}
interface IDragOverFeedbackComponentState {
}
export class DragOverFeedbackComponent extends React.Component<IDragOverFeedbackComponentProps, IDragOverFeedbackComponentState> {
    render(): JSX.Element {
        if (!this.props.shouldRender) {
             return null;
        }

        const feedback = this.props.feedback;
        const element = feedback ? feedback.data : null;
      
        return (
        <div style={{ pointerEvents: "none" }}>
          <SurveyQuestion
            creator={this.props.creator}
            element={element}
          ></SurveyQuestion>
        </div>
        );
    }
}