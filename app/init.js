var chip = require('chip-js');
var app = chip();
window.app = app;

// Auto-require the components
window.require.list().forEach(function(module) {
  if (module.indexOf('components/') === 0) {
    require(module);
  }
});

app.listen();
