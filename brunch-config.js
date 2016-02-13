exports.config = {

  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app/,
        'vendor.js': /^vendor/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },

    templates: {
      joinTo: {
        'app.js': /^app/
      }
    }
  },

  server: {
    port: 8080
  }
};