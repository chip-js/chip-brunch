exports.config = {
  npm: {
    enabled: true
  },

  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app|^node_modules/,
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