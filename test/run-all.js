window.require.list().forEach(function(module) {
  if (/^test\/.*test-/.test(module)) {
    require(module);
  }
});
