var Router = Ember.Router.extend({
  location: 'auto'
});

Router.map(function() {
  this.resource('todos', { path: '/' }, function() {
    this.route('active');
    this.route('completed');
  });
});

export default Router;
