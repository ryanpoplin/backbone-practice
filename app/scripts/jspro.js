GuitarView = Backbone.View.extend({
	
	className: "view",

	events: {
		"click .edit": "edit",
		"click .delete": "destroy",
		"click .save" : "save"
	},

	initialize: function() {
		$(this.el).html(this.model.get('guitar') + '<button class="edit">Edit</button>' + '<button class="delete">Delete</button>');
		$('#container').append(this.el );
	},

	edit: function() {
		$(this.el).html('<input class="input" value="' + this.model.get('guitar') + '"/> <button class="save">Save</button>');
	},

	destroy: function() {
		this.remove();
	},

	save: function() {
		this.model.set("guitar", $('.input').val())
		$(this.el).html(this.model.get('guitar') + '<button class="edit">Edit</button>' + '<button class="delete">Delete</button>');
	}
})

GuitarModel = Backbone.Model.extend({

	initialize: function() {

	}

})

// add form feed...
/*GuitarCollection = Backbone.Collection.extend({

	//
	model: GuitarModel,

	// initialize is not needed...
	initialize: function () {
		console.log('A Collection was created!');
	}

});*/

gibson = new GuitarModel({guitar:'Gibson Explorer'});
gibsonView = new GuitarView({model: gibson});

fender = new GuitarModel({guitar:'Fender Telecaster'});
fenderView = new GuitarView({model: fender});

jackson = new GuitarModel({guitar:'Floyd Rose'});
jacksonView = new GuitarView({model: jackson});
