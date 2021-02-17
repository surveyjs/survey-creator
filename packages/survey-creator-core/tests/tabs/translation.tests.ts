import {
  SurveyModel,
,Base
} from "survey-knockout";
import {
  Translation,
  TranslationGroup,
  TranslationItem,
  TranslationItemBase,
} from "../../src/tabs/translation";

  test("Fire callback on base objects creation", () => {
    var survey = new SurveyModel();
    survey.addNewPage("p1");
    var q = survey.pages[0].addNewQuestion("text", "q1");
    q.title = "some value";
    var cretorHash = {};
    var translation = new Translation(survey, (obj: Base) => {
        var type = obj.getType();
        if(!cretorHash[type]) {
            cretorHash[type] = 0;
        }
        cretorHash[type] = cretorHash[type] + 1;
    });
    expect(cretorHash["translation"]).toEqual(1);
    expect(cretorHash["translationgroup"]).toEqual(5);
    expect(cretorHash["translationitem"]).toEqual(2);
    expect(cretorHash["translationitemstring"]).toBeFalsy();
    var group = translation.root.groups[0];
    expect(group.items).toHaveLength(1);
    expect(group.items[0].name).toEqual("q1");
    group = group.groups[0];
    expect(group.items[0].name).toEqual("title");
    var val = group.locItems[0].values("");
    expect(cretorHash["translationitemstring"]).toEqual(1);
  });
