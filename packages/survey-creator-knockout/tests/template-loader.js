module.exports = {
  process(src, filename, config, options) {
    return { code: 'module.exports = ' + JSON.stringify(src) + ';' };
  },
};
