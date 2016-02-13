var componentFolder = 'components';
var app = chip();
window.app = app;

// Auto-require the components
window.require.list().forEach(function(module) {
  if (module.indexOf('components/') === 0) {
    require(module);
  }
});

app.listen();
