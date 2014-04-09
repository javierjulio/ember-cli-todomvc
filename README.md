# ember-cli-todomvc

This is a port of [Ember.js TodoMVC](http://todomvc.com/architecture-examples/emberjs/) built using the new Ember command line utility [ember-cli](https://github.com/stefanpenner/ember-cli).

## Differences from the Getting Started guide

Due to using the latest version of Ember (version 1.5 at the time of writing) a few things have changed that made some of the code in the TodoMVC application unnecessary.

### Accepting Edits

The [Accepting Edits](http://emberjs.com/guides/getting-started/accepting-edits/) required creating a `EditTodoView` to demonstrate how to tap into when the element is added to the DOM so focus could be set on the input. This isn't necessary now (possibly) due to an Ember 1.4 change regarding [Lazily Bound Attributes](http://emberjs.com/blog/2014/02/12/ember-1-4-0-and-ember-1-5-0-beta-released.html#toc_lazily-bound-attributes). Merely defining the `autofocus="autofocus"` attribute is enough:

  ```handlebars
  ...
  {{input class="edit" value=title focus-out="acceptChanges"
          insert-newline="acceptChanges" autofocus="autofocus"}}
  ...
  ```

### Adding Child Routes

The [Adding Child Routes](http://emberjs.com/guides/getting-started/adding-child-routes/) section demonstrated setting up a `TodosIndexRoute` with a model hook. As of Ember 1.5, the model hook is no longer necessary since the default behavior is to [inherit the model from the parent route](http://emberjs.com/blog/2014/03/30/ember-1-5-0-and-ember-1-6-beta-released.html#toc_routes-inherit-model). So the original code below:

  ```javascript
  var TodosIndexRoute = Ember.Route.extend({
    model: function() {
      return this.modelFor('todos');
    }
  });
  
  export default TodosIndexRoute;
  ```
  
  can be simplified to just an empty route object:
  
  ```javascript
  var TodosIndexRoute = Ember.Route.extend({});
  
  export default TodosIndexRoute;
  ```
