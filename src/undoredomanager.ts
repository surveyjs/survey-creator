import * as Survey from "survey-knockout";
import { throws } from "assert";

export class UndoRedo {
  private survey: Survey.Survey;

  constructor(survey: Survey.Survey) {
    this.survey = survey;

    this.survey.onPropertyValueChangedCallback = (
      name: string,
      oldValue: any,
      newValue: any
    ) => {
      const actions = this._actions;
      const transaction = this._transaction;

      if (!transaction) {
        const action = new Action(name);
        action.addSurveyChange(name, oldValue, newValue, survey);
        this.addAction(action);
        return;
      }

      transaction.addSurveyChange(name, oldValue, newValue, survey);

      console.log(
        `changed!!! name: ${name} oldValue: ${oldValue} newValue: ${newValue}`
      );
    };
  }

  private _transaction: Action = null;
  private _actions: Action[] = [];
  private _currentActionIndex: number = -1;

  private addAction(action: Action) {
    this._actions.push(action);
    this._currentActionIndex++;
  }

  public startTransaction(name: string) {
    if (this._transaction) return;
    this._transaction = new Action(name);
  }
  public stopTransaction() {
    this.addAction(this._transaction);
    this._transaction = null;
  }
  public undo() {
    const index = this._currentActionIndex;
    const currentAction = this._actions[index];

    if (!currentAction) return;

    currentAction.rollback();
    this._currentActionIndex--;
  }
  public redo() {
    const index = this._currentActionIndex;
    const nextAction = this._actions[index + 1];

    if (!nextAction) return;

    nextAction.apply();
    this._currentActionIndex++;
  }
}

export class Action {
  constructor(name: string) {
    this._name = name;
  }

  private _name: string;
  private _surveyChanges: SurveyChange[] = [];

  apply() {
    const changes = this._surveyChanges;
    for (let index = 0; index < changes.length; index++) {
      const surveyChange = changes[index];
    }
  }

  rollback() {}

  addSurveyChange(
    name: string,
    oldValue: any,
    newValue: any,
    survey: Survey.Survey
  ) {
    this._surveyChanges.push(
      new SurveyChange(name, oldValue, newValue, survey)
    );
  }
}

export class SurveyChange {
  private _name: string;
  private _oldValue: any;
  private _newValue: any;
  private _survey: Survey.Survey;

  constructor(
    name: string,
    oldValue: any,
    newValue: any,
    survey: Survey.Survey
  ) {
    this._name = name;
    this._newValue = newValue;
    this._oldValue = oldValue;
    this._survey = survey;
  }
}
