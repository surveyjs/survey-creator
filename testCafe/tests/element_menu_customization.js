import { Selector, ClientFunction } from 'testcafe'
const assert = require('assert')
const title = `element menu customization`

const url = 'http://127.0.0.1:7777/example/elementMenuCustomization.html'

const init = ClientFunction(() => {
  Survey.Survey.cssType = 'bootstrap'
  Survey.defaultBootstrapCss.navigationButton = 'btn btn-green'

  var editorOptions = {}
  var editor = new SurveyEditor.SurveyEditor('editorElement', editorOptions)

  // Add a new item into element menu
  editor.onDefineElementMenuItems.add(function(editor, options) {
    options.items.unshift({
      text: 'Add Into Shared Repository',
      onClick: function(obj) {
        addIntoCustomItems(obj)
      },
    })
  })

  // Add a button to the toolbar
  editor.toolbarItems.push({
    id: 'toolboxCustomization',
    visible: true,
    title: 'Toolbox Customization',
    enabled: true,
    action: function() {
      showToolboxCustomization()
    },
  })

  var allToolboxItems = []

  //You have to replace getCustomItems/setCustomItems functions with the code that get/set data in the database
  window.getCustomItems = function() {
    var res = window.localStorage.getItem('sharedquestions')
    if (!res) return {}
    return JSON.parse(res)
  }
  window.setCustomItems = function(items) {
    var str = JSON.stringify(items)
    window.localStorage.setItem('sharedquestions', str)
  }

  window.addIntoCustomItems = function(element) {
    var json = new Survey.JsonObject().toJsonObject(element)
    json.type = element.getType()
    var item = {
      name: element.name,
      iconName: 'icon-' + element.getType(),
      title: element.title,
      json: json,
      isCopied: false,
      isUsed: isItemUsed(element.name),
      isStandard: false,
    }
    var items = getCustomItems()
    items[item.name] = item
    setCustomItems(items)
  }
  window.removeCustomItem = function(name) {
    var items = getCustomItems()
    delete items[name]
    setCustomItems(items)
    var container = document.getElementById('customItems')
    var div = document.getElementById('toobaritem_' + name)
    container.removeChild(div)
  }

  window.isItemUsed = function(name) {
    return editor.toolbox.indexOf(name) > -1
  }

  window.addToolBoxItemIntoList = function(container, item) {
    allToolboxItems.push(item)
    var div = document.createElement('div')
    div.id = 'toobaritem_' + item.name
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = item.name
    checkbox.checked = item.isUsed
    checkbox.id = item.name
    checkbox.dataItem = item
    checkbox.onchange = function() {
      this.dataItem.isUsed = this.checked
    }

    var label = document.createElement('label')
    label.style.marginLeft = '5px'
    label.htmlFor = item.name
    label.appendChild(document.createTextNode(item.title))

    var removeButton = null
    if (!item.isStandard) {
      removeButton = document.createElement('button')
      removeButton.style.marginLeft = '7px'
      removeButton.appendChild(document.createTextNode('Remove'))
      removeButton.onclick = function() {
        removeCustomItem(item.name)
      }
    }

    div.appendChild(checkbox)
    div.appendChild(label)
    if (removeButton) {
      div.appendChild(removeButton)
    }

    container.appendChild(div)
  }

  window.createDefaultItem = function(typeName) {
    var question = Survey.ElementFactory.Instance.createElement(typeName, 'q1')
    if (!question) {
      question = Survey.JsonObject.metaData.createClass(typeName)
    }
    var json = new Survey.JsonObject().toJsonObject(question)
    json.type = question.getType()
    return {
      name: typeName,
      iconName: 'icon-' + typeName,
      title: SurveyEditor.editorLocalization.getString('qt.' + typeName),
      json: json,
      isCopied: false,
      isUsed: isItemUsed(typeName),
      isStandard: true,
    }
  }

  window.loadAllToolboxItems = function() {
    allToolboxItems = []
    var container = document.getElementById('standardItems')
    container.innerHTML = ''
    var allTypes = Survey.ElementFactory.Instance.getAllTypes()
    for (var i = 0; i < allTypes.length; i++) {
      addToolBoxItemIntoList(container, createDefaultItem(allTypes[i]))
    }
    container = document.getElementById('customItems')
    container.innerHTML = ''
    var customItems = getCustomItems()
    for (var name in customItems) {
      var item = customItems[name]
      item.isUsed = isItemUsed(name)
      addToolBoxItemIntoList(container, item)
    }
    if (container.children.length == 0) {
      container.innerHTML =
        "Select the question, click on '...' and then click on the first item to add the question here."
    }
  }

  window.applyToolboxItems = function() {
    editor.toolbox.clearItems()
    var newItems = []
    for (var i = 0; i < allToolboxItems.length; i++) {
      if (allToolboxItems[i].isUsed) {
        editor.toolbox.addItem(allToolboxItems[i])
      }
    }
  }

  window.showToolboxCustomization = function() {
    loadAllToolboxItems()
    $('#toolboxCustomization').modal('show')
  }
})

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init()
})

test(`check element menu customization`, async t => {
  const getToolboxItemsCount = ClientFunction(
    () => document.querySelectorAll('.svd_toolbox div>.btn').length
  )

  const count = await getToolboxItemsCount()

  await t
    .click(`.svd_toolbar li:not([style~=none]):last-child button`)
    .click(`#toolboxCustomization #standardItems #toobaritem_matrixdynamic`)
    .click(`#toolboxCustomization .modal-footer input[value=OK]`)

  assert.equal(await getToolboxItemsCount(), count - 1)
})
