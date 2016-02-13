exports.config = {

  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': /^vendor/,
        'js/test.js': /^test/
      }
    },
    stylesheets: {
      joinTo: 'css/app.css'
    },

    templates: {
      joinTo: {
        'js/app.js': /^app/
      }
    }
  },

  modules: {
    autoRequire: {
      'js/test.js': [ 'test/run-all' ]
    }
  }
};