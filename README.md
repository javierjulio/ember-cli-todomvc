# ember-cli-todomvc

This is a port of [Ember.js TodoMVC](http://todomvc.com/architecture-examples/emberjs/) built using the new Ember command line utility [ember-cli](https://github.com/stefanpenner/ember-cli).

**Help Needed:** I haven't been able to run successfully the first set of tests ported over from Stefan's [EAK implementation of Ember TodoMVC](https://github.com/stefanpenner/ember-app-kit-todos/). I don't understand what's wrong with my import statement in the first test since the path looks right. I've tried a few different ones but I keep getting the same error. If you have experience with this I'd appreciate any help.

```
ember-cli-todomvc: (master) ember server
Livereload server on port 31929
Serving on http://0.0.0.0:4200
ENOENT, no such file or directory 'tmp/tree_merger-tmp_dest_dir-v3Zaj9hl.tmp/ember-todos/routes/todos.js' Error: ENOENT, no such file or directory 'tmp/tree_merger-tmp_dest_dir-v3Zaj9hl.tmp/ember-todos/routes/todos.js'
    at Object.fs.statSync (fs.js:684:18)
    at addModule (/Users/JavierJulio/Projects/ember-cli-todomvc/node_modules/broccoli-es6-concatenator/index.js:81:46)
    at addModule (/Users/JavierJulio/Projects/ember-cli-todomvc/node_modules/broccoli-es6-concatenator/index.js:124:9)
    at /Users/JavierJulio/Projects/ember-cli-todomvc/node_modules/broccoli-es6-concatenator/index.js:57:7
    at invokeCallback (/Users/JavierJulio/.node/lib/node_modules/ember-cli/node_modules/rsvp/dist/commonjs/rsvp/promise.js:228:21)
    at publish (/Users/JavierJulio/.node/lib/node_modules/ember-cli/node_modules/rsvp/dist/commonjs/rsvp/promise.js:176:9)
    at publishFulfillment (/Users/JavierJulio/.node/lib/node_modules/ember-cli/node_modules/rsvp/dist/commonjs/rsvp/promise.js:312:5)
    at flush (/Users/JavierJulio/.node/lib/node_modules/ember-cli/node_modules/rsvp/dist/commonjs/rsvp/asap.js:41:9)
    at process._tickCallback (node.js:415:13)
Error: ENOENT, no such file or directory 'tmp/tree_merger-tmp_dest_dir-v3Zaj9hl.tmp/ember-todos/routes/todos.js'
ENOENT, no such file or directory 'tmp/tree_merger-tmp_dest_dir-H4wZoNFb.tmp/ember-todos/routes/todos.js' Error: ENOENT, no such file or directory 'tmp/tree_merger-tmp_dest_dir-H4wZoNFb.tmp/ember-todos/routes/todos.js'
    at Object.fs.statSync (fs.js:684:18)
    at addModule (/Users/JavierJulio/Projects/ember-cli-todomvc/node_modules/broccoli-es6-concatenator/index.js:81:46)
    at addModule (/Users/JavierJulio/Projects/ember-cli-todomvc/node_modules/broccoli-es6-concatenator/index.js:124:9)
    at /Users/JavierJulio/Projects/ember-cli-todomvc/node_modules/broccoli-es6-concatenator/index.js:57:7
    at invokeCallback (/Users/JavierJulio/.node/lib/node_modules/ember-cli/node_modules/rsvp/dist/commonjs/rsvp/promise.js:228:21)
    at publish (/Users/JavierJulio/.node/lib/node_modules/ember-cli/node_modules/rsvp/dist/commonjs/rsvp/promise.js:176:9)
    at publishFulfillment (/Users/JavierJulio/.node/lib/node_modules/ember-cli/node_modules/rsvp/dist/commonjs/rsvp/promise.js:312:5)
    at flush (/Users/JavierJulio/.node/lib/node_modules/ember-cli/node_modules/rsvp/dist/commonjs/rsvp/asap.js:41:9)
    at process._tickCallback (node.js:415:13)
Error: ENOENT, no such file or directory 'tmp/tree_merger-tmp_dest_dir-H4wZoNFb.tmp/ember-todos/routes/todos.js'
```

## Setup

To install and start up the app run the following commands:

```
npm install -g ember-cli
git clone https://github.com/javierjulio/ember-cli-todomvc.git
cd ember-cli-todomvc
npm install
ember server
```

Go to [http://localhost:4200](http://localhost:4200) in your web browser.

## Differences from the Getting Started guide

Due to using the latest version of Ember (version 1.5 at the time of writing) a few things have changed that made some of the code in the TodoMVC application unnecessary.

### Accepting Edits

The [Accepting Edits](http://emberjs.com/guides/getting-started/accepting-edits/) required creating a `EditTodoView` to demonstrate how to tap into when the element is added to the DOM so focus could be set on the input. This isn't necessary now (possibly) due to an Ember 1.4 change regarding [Lazily Bound Attributes](http://emberjs.com/blog/2014/02/12/ember-1-4-0-and-ember-1-5-0-beta-released.html#toc_lazily-bound-attributes). Merely defining the `autofocus="autofocus"` attribute is enough:

```html
<!-- ... additional lines truncated for brevity ... --->

{{input class="edit" value=title focus-out="acceptChanges"
        insert-newline="acceptChanges" autofocus="autofocus"}}

<!-- ... additional lines truncated for brevity ... --->
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
