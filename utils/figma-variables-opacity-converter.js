var themes = `
  --lbr-progress-bar-section-title-opacity-pressed: 50;
  --lbr-progress-bar-pager-padding-right: var(--spacing-x150);
  --lbr-progress-bar-pager-padding-top: var(--spacing-x1);
  --lbr-progress-bar-pager-padding-bottom: var(--spacing-x1);
  --lbr-progress-bar-section-color-disabled: var(--sjs-border-10);
  --lbr-progress-bar-section-color-disabled-completed: var(--sjs-border-25);
  --lbr-file-upload-item-loading-width: var(--size-x6);
  --lbr-file-upload-item-loading-height: var(--size-x6);
  --lbr-file-upload-item-loading-circle-color: var(--sjs-layer-1-foreground-100);
  --lbr-file-upload-item-loading-circle-opacity: 10;
`;

var themesArray = themes.split(/\r?\n/);

var result = themesArray.map((item) => {
  var [key, value] = item.split(/:/);
  if (key.indexOf("opacity") === -1) return item;
  value = +value.replace(";", "");
  if (isNaN(value) || value < 1) return item;
  item = item.replace(value, "" + (value / 100));
  return item;
});
console.dir(result.join("\r\n"));