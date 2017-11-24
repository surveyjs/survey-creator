import { url } from '../settings'
import { Selector, ClientFunction } from 'testcafe'
const assert = require('assert')
const title = `remove properties`

const init = ClientFunction(() => {
  Survey.Survey.cssType = 'bootstrap'
  Survey.defaultBootstrapCss.navigationButton = 'btn btn-green'
  //remove a property to the page object. You can't set it in JSON as well
  Survey.JsonObject.metaData.removeProperty('survey', 'cookieName')
  var editorOptions = {}
  var editor = new SurveyEditor.SurveyEditor('editorElement', editorOptions)

  editor.onCanShowProperty.add(function(sender, options) {
    if (options.obj.getType() == 'survey') {
      options.canShow = options.property.name == 'title'
    }
  })
})

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init()
})

test(`check the prop doesn't exists`, async t => {
  const getPosition = ClientFunction(() =>
    document.documentElement.innerHTML.indexOf('cookieName')
  )

  assert.equal(await getPosition(), -1)
})
