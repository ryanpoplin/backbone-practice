// Backbone’s Views glues together user events (clicks, pressed keys …), render HTML views and templates, and interacts with models which contains the data of the application.
// var AppView = Backbone.View.extend({
  // el - stands for element. Every view has a element associate in with HTML 
  //      content will be rendered.
  // el: '#container',
  // It's the first function called when this view it's instantiated.
  // initialize: function(){
    // this.render();
  // },
  // $el - it's a cached jQuery object (el), in which you can use jQuery functions 
  //       to push content. Like the Hello World in this case.
  // render: function(){
    // this.$el.html("Ryan is learning the Backbone.js/Underscore.js/jQuery way...");
  // }
// });

// var appView = new AppView();

// _.template(templateString, [data], [settings])

// var Appa = {};

/*var Appa.*/var View = Backbone.View.extend({
  el: $('#container'),
  // template which has the placeholder 'who' to be substitute later 
  template: _.template("<h3>Ryan Poplin is <%= who %><h3>"),
  initialize: function(){
    this.render();
    $(this.el).html(this.model.get('guitar') + '<button class="edit">Edit</button>' + '<button class="delete">Delete</button>')
    $('#container').append(this.el )
  },
  events: {
    // an offline example...
    "click .submit" : "submit", // move the .user-input value to the localStorage API?
    "click .edit" : "edit", // .edit-input value replaces .user-input value in localStorage API?
    "click .save" : "save"
  },

  submit: function () {

  },

  edit: function () {

  },

  render: function(){
    // render the function using substituting the varible 'who' for 'world!'. 
    this.$el.html(this.template({who: 'learning Backbone.js and Underscore.js...'}));
  }
});

var appa = new View();

/* = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }/*,
    toggle: function(){
      this.save({ completed: !this.get('completed')});
    }*/
// });

"use strict";

// Models are the heart of every application. It contains the interactive data and the logic surrounding it, such as data validation, getters and setters, default values, data initialization, conversions and so on.
        
var app = {}; // create namespace for our app
          
//--------------
// Models
//--------------
  
  // testing...        
  /*var todo = new app.Todo({title: 'Learn Backbone.js', completed: false}); // create object with the attributes specified.
  todo.get('title'); // "Learn Backbone.js" 
  todo.get('completed'); // false
  todo.get('created_at'); // undefined
  todo.set('created_at', Date());
  todo.get('created_at'); // "Wed Sep 12 2012 12:51:17 GMT-0400 (EDT)"*/
  
  /*app.Todo = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    },
    toggle: function(){
      this.save({ completed: !this.get('completed')});
    }
  });*/
        
//--------------
// Collections
//--------------

// collections are ordered sets of models, where you can get and set models in the collection, listen for events when any element in the collection changes, and fetching for model’s data from the server.

  // A "url" property or function must be specified
  // Define localStorage since I don't have a Parse database or anything...

  /*app.TodoList = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Store("backbone-todo")*/
    /*completed: function() {
      return this.filter(function( todo ) {
        return todo.get('completed');*/
      // });
    /*},
    remaining: function() {
      return this.without.apply( this, this.completed() );
    }      
  });*/
        
  // instance of the Collection
  // app.todoList = new app.Todo();
  // testing...
  /*var todoList = new app.TodoList()
  todoList.create({title: 'Learn Backbone\'s Collection'}); // notice: that `completed` willto false by default.
  var lmodel = new app.Todo({title: 'Learn Models', completed: true});
  todoList.add(lmodel); // ["Learn Backbone's Collection", "Learn Models"]
  todoList.pluck('title'); // [false, true]
  JSON.stringify(todoList); // "[{"title":"Learn BacCollection","completed":false,"id":"d9763e99-2267-75f5-62c3-9d7e40742aa6"},{"title"Models","completed":tr

  //--------------
  // Views
  //--------------
  
  /*
  process data and link it to templates and it finally renders HTML based on events or data changes.

  // There are 4 basic properties in a view: el, initialize, render, and events.

  // Every view needs to reference a DOM at all times. Therefore, the view will inject content into this element. This is the el property. this.el is created from view’s el,tagName, className, id or attributes properties. If none of these are specified, then this.el is an empty div. The view.$el it’s a cached jQuery object of the view’s element (view.el).

  // Initialize/construtor: Here you have the option to pass parameters that will be attached to a model, collection or view.el.

  // render: In this function, you inject the markup into the elements. Not all views require having a render function, as you are going to see in the sample code, they can call other view’s render functions.

  // delegated events: Events are written in the {"<EVENT_NAME> <ELEMENT_ID>": "<FUNCTION_CALLBACK>"} format. E.g. events: {'keypress #new-todo': 'createTodoOnEnter'}
  */
  
  // renders the full list of todo items calling TodoView for each one.
    /*app.AppView = Backbone.View.extend({
      el: '#todoapp',
      initialize: function () {
        this.input = this.$('#new-todo');
        app.todoList.on('add', this.addAll, this);
        app.todoList.on('reset', this.addAll, this);
        app.todoList.fetch(); // Loads list from local storage
      },
      events: {
        'keypress #new-todo': 'createTodoOnEnter'
      },
      createTodoOnEnter: function(e){
        if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
          return;
        }
        app.todoList.create(this.newAttributes());
        this.input.val(''); // clean input box
      },
      addOne: function(todo){
        var view = new app.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
      },
      addAll: function(){
        this.$('#todo-list').html(''); // clean the todo list
        app.todoList.each(this.addOne, this);
      },
      newAttributes: function(){
        return {
          title: this.input.val().trim(),
          completed: false
        }
      }
    });

    //--------------
    // Initializers
    //--------------   

    app.appView = new app.AppView();


  // renders individual todo items list (li)
  //app.TodoView = Backbone.View.extend({
    /*tagName: 'li',
    template: _.template($('#item-template').html()),
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      // this.input = this.$('.edit');
      return this; // enable chained calls
    },
    initialize: function(){
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this); // remove: Convenience Backbone's functremoving      the view from the DOM.
    },      
    events: {
      'dblclick label' : 'edit',
      'keypress .edit' : 'updateOnEnter',
      'blur .edit' : 'close',
      'click .toggle': 'toggleCompleted',
      'click .destroy': 'destroy'
    },
    edit: function(){
      this.$el.addClass('editing');
      this.input.focus();
    },
    close: function(){
      var value = this.input.val().trim();
      if(value) {
        this.model.save({title: value});
      }
      this.$el.removeClass('editing');
    },
    updateOnEnter: function(e){
      if(e.which == 13){
        this.close();
      }
    },
    toggleCompleted: function(){
      this.model.toggle();
    },
    destroy: function(){
      this.model.destroy();
    }      
  });

  // renders the full list of todo items calling TodoView for each one.
  app.AppView = Backbone.View.extend({
    el: '#todoapp',
    initialize: function () {
      this.input = this.$('#new-todo');
      app.todoList.on('add', this.addAll, this);
      app.todoList.on('reset', this.addAll, this);
      app.todoList.fetch(); // Loads list from local storage
    },
    events: {
      'keypress #new-todo': 'createTodoOnEnter'
    },
    createTodoOnEnter: function(e){
      if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
        return;
      }
      app.todoList.create(this.newAttributes());
      this.input.val(''); // clean input box
    },
    addOne: function(todo){
      var view = new app.TodoView({model: todo});
      $('#todo-list').append(view.render().el);
    },
    addAll: function(){
      this.$('#todo-list').html(''); // clean the todo list
      // filter todo item list
      switch(window.filter){
        case 'pending':
          _.each(app.todoList.remaining(), this.addOne);
          break;
        case 'completed':
          _.each(app.todoList.completed(), this.addOne);
          break;            
        default:
          app.todoList.each(this.addOne, this);
          break;
      }
    },
    newAttributes: function(){
      return {
        title: this.input.val().trim(),
        completed: false
      }
    }
  });

  //--------------
  // Routers
  //--------------
  
  app.Router = Backbone.Router.extend({
    routes: {
      '*filter' : 'setFilter'
    },
    setFilter: function(params) {
      console.log('app.router.params = ' + params);
      window.filter = params.trim() || '';
      app.todoList.trigger('reset');
    }
  });     

  //--------------
  // Initializers
  //--------------   

  app.router = new app.Router();
  Backbone.history.start();    
  app.appView = new app.AppV*/