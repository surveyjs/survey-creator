export default function insertAtCursor(inputArea, text) {
  var selection = document["selection"];
  if (!!selection) {
    inputArea.focus();
    var sel = selection.createRange();
    sel.text = text;
  } else if (!!inputArea.selectionStart || inputArea.selectionStart === "0") {
    var startPos = inputArea.selectionStart;
    var endPos = inputArea.selectionEnd;
    inputArea.value =
      inputArea.value.substring(0, startPos) +
      text +
      inputArea.value.substring(endPos, inputArea.value.length);
  } else {
    inputArea.value += text;
  }
}
