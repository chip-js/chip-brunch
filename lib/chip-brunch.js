
// module.exports = function ChipCompiler(config) {
//   this.config = config;
// }

// ChipCompiler.prototype.brunchPlugin = true;
// ChipCompiler.prototype.type = 'template';
// ChipCompiler.prototype.extension = 'html';
// ChipCompiler.prototype.compile = function compile(data, path, callback) {
//   callback(null, 'exports.template = ' + chip.template(JSON.stringify(data));
// }
// ChipCompiler.prototype.onCompile = function onCompile(generatedFiles) {
//   var app = chip.rootApp;
//   window.require.list().forEach(function(module) {
//     var name, template, controller;
//     if (module.indexOf('templates/') != -1)
//       name = module.replace('templates/', '');
//       template = require(module).template;
//       if (template) {
//         app.template(name, template);
//       }
//     } else if (module.indexOf('controllers/') != -1) {
//       name = module.replace('controllers/', '');
//       controller = require(module);
//       if (typeof controller === 'function') {
//         app.controller(name, controller);
//       }
//     }
//   });
// }
