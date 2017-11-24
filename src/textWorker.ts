import { SurveyJSON5 } from './json5'
import * as Survey from 'survey-knockout'

class TextParserPropery {
  isFound: boolean
  propertiesCount: number
  start: number
  end: number
  valueStart: number
  valueEnd: number
}

export class SurveyTextWorker {
  public static newLineChar: string
  public errors: Array<any>
  private surveyValue: Survey.Survey
  private jsonValue: any
  private surveyObjects: Array<any>
  private isSurveyAsPage: boolean

  constructor(public text: string) {
    if (!this.text || this.text.trim() == '') {
      this.text = '{}'
    }
    this.errors = []
    this.process()
  }
  public get survey(): Survey.Survey {
    return this.surveyValue
  }
  public get isJsonCorrect(): boolean {
    return this.surveyValue != null
  }
  protected process() {
    try {
      this.jsonValue = new SurveyJSON5(1).parse(this.text)
    } catch (error) {
      this.errors.push({
        pos: { start: error.at, end: -1 },
        text: error.message,
      })
    }
    if (this.jsonValue != null) {
      this.updateJsonPositions(this.jsonValue)
      this.surveyValue = new Survey.Survey(this.jsonValue)
      if (this.surveyValue.jsonErrors != null) {
        for (var i = 0; i < this.surveyValue.jsonErrors.length; i++) {
          var error = this.surveyValue.jsonErrors[i]
          this.errors.push({
            pos: { start: error.at, end: -1 },
            text: error.getFullDescription(),
          })
        }
      }
    }
    this.surveyObjects = this.createSurveyObjects()
    this.setEditorPositionByChartAt(this.surveyObjects)
    this.setEditorPositionByChartAt(this.errors)
  }
  private updateJsonPositions(jsonObj: any) {
    jsonObj['pos']['self'] = jsonObj
    for (var key in jsonObj) {
      var obj = jsonObj[key]
      if (obj && obj['pos']) {
        jsonObj['pos'][key] = obj['pos']
        this.updateJsonPositions(obj)
      }
    }
  }
  private createSurveyObjects(): Array<any> {
    var result = []
    if (this.surveyValue == null) return result
    this.isSurveyAsPage = false
    for (var i = 0; i < this.surveyValue.pages.length; i++) {
      var page = this.surveyValue.pages[i]
      if (i == 0 && !page['pos']) {
        page['pos'] = this.surveyValue['pos']
        this.isSurveyAsPage = true
      }
      result.push(page)
      for (var j = 0; j < page.questions.length; j++) {
        result.push(page.questions[j])
      }
    }
    return result
  }
  private setEditorPositionByChartAt(objects: any[]) {
    if (objects == null || objects.length == 0) return
    var position = { row: 0, column: 0 }
    var atObjectsArray = this.getAtArray(objects)
    var startAt: number = 0
    for (var i = 0; i < atObjectsArray.length; i++) {
      var at = atObjectsArray[i].at
      position = this.getPostionByChartAt(position, startAt, at)
      var obj = atObjectsArray[i].obj
      if (!obj.position) obj.position = {}
      if (at == obj.pos.start) {
        obj.position.start = position
      } else {
        if (at == obj.pos.end) {
          obj.position.end = position
        }
      }
      startAt = at
    }
  }
  private getPostionByChartAt(
    startPosition: any,
    startAt: number,
    at: number
  ): any {
    var result = { row: startPosition.row, column: startPosition.column }
    var curChar = startAt
    while (curChar < at) {
      if (this.text.charAt(curChar) == SurveyTextWorker.newLineChar) {
        result.row++
        result.column = 0
      } else {
        result.column++
      }
      curChar++
    }
    return result
  }
  private getAtArray(objects: any[]): any[] {
    var result = []
    for (var i = 0; i < objects.length; i++) {
      var obj = objects[i]
      var pos = obj.pos
      if (!pos) continue
      result.push({ at: pos.start, obj: obj })
      if (pos.end > 0) {
        result.push({ at: pos.end, obj: obj })
      }
    }
    return result.sort((el1, el2) => {
      if (el1.at > el2.at) return 1
      if (el1.at < el2.at) return -1
      return 0
    })
  }
}
