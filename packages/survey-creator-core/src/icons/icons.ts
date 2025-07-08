export function getIconsData(path) {
  const icons: { [index: string]: string } = {};
  path.keys().forEach((key: string) => {
    icons[key.substring(2, key.length - 4).toLowerCase()] = path(key);
  });
  return icons;
}