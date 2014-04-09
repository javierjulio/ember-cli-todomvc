// Model hook no longer needed since Ember will inherit the model from the parent
// http://emberjs.com/blog/2014/03/30/ember-1-5-0-and-ember-1-6-beta-released.html#toc_routes-inherit-model

var TodosIndexRoute = Ember.Route.extend({
/*
  model: function() {
    return this.modelFor('todos');
  }
*/
});

export default TodosIndexRoute;
