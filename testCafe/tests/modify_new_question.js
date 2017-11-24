import { url } from '../settings'
import { Selector, ClientFunction } from 'testcafe'
const assert = require('assert')
const title = `modify new question`

const init = ClientFunction(() => {
  Survey.Survey.cssType = 'bootstrap'
  Survey.defaultBootstrapCss.navigationButton = 'btn btn-green'
  //Add a tag property
  Survey.JsonObject.metaData.addProperty('questionbase', 'tag')
  //Make name and tag properties read-only
  Survey.JsonObject.metaData.findProperty(
    'questionbase',
    'name'
  ).readOnly = true
  Survey.JsonObject.metaData.findProperty('questionbase', 'tag').readOnly = true
  var editorOptions = {}
  var editor = new SurveyEditor.SurveyEditor('editorElement', editorOptions)

  var questionCounter = 1
  //Set the name property different from the default value
  //and set the tag property to a generated GUID value.
  editor.onQuestionAdded.add(function(sender, options) {
    var q = options.question
    var t = q.getType()
    q.name = 'Question' + t[0].toUpperCase() + t.substring(1) + questionCounter
    var guid = window.guid()
    q.tag = guid
    window.qguid = guid
    questionCounter++
  })

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    )
  }

  window.guid = guid
})

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init()
})

test(`check a guid in the tag`, async t => {
  const getGuidFromUi = ClientFunction(
    () => document.querySelectorAll('[title=tag] + td span')[0].title
  )
  const getGuid = ClientFunction(() => window.qguid)

  await t.click(`[title~=Radiogroup]`)

  assert.equal(await getGuidFromUi(), await getGuid())
})
