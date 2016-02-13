
app.component('main-app', {
  template: require('./main-app-template'),

  created: function() {

  },

  attached: function() {

  },

  detached: function() {

  },

  sayHello: function(event) {
    event.preventDefault();
    alert('Hello ' + (this.name || 'you') + '!');
    this.input.focus();
  }
});
