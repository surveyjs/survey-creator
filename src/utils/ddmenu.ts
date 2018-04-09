export default (menuItems, className) => {
  var container = document.createElement("div");
  container.className = "ddmenu-container " + className;

  var ioshack = document.createElement("div");
  ioshack.onclick = function() {
    return true;
  };
  ioshack.style.webkitTapHighlightColor = "rgba(0,0,0,0)";

  var ddmenu = document.createElement("div");
  ddmenu.className = "ddmenu";

  var icon = document.createElement("span");
  icon.onclick = function() {
    return true;
  };
  icon.setAttribute("tabindex", "0");
  icon.className = "glyphicon glyphicon-option-horizontal svd-main-color";

  var div = document.createElement("div");
  div.onclick = function() {
    return true;
  };
  div.setAttribute("tabindex", "0");

  var ul = document.createElement("ul");

  for (var i = 0; i < menuItems.length; i++) {
    ul.appendChild(menuItems[i]);
  }

  ddmenu.appendChild(icon);
  ddmenu.appendChild(div);
  ddmenu.appendChild(ul);

  container.appendChild(ioshack);
  container.appendChild(ddmenu);

  return container;
};
