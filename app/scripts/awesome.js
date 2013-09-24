Guitars = Backbone.View.extend({
	
	className: "view",

	initialize: function() {
		// this.el is an empty 'div'
		$(this.el).html(this.model.get('guitar') + '<button class="edit">Edit</button>' + '<button class="delete">Delete</button>')
		$('#container').append(this.el )
	},

	events: {
		"click .edit": "edit",
		"click .delete": "destroy",
		"click .save" : "save"
	},

	edit: function() {
		$(this.el).html('<input class="input" value="' + this.model.get('guitar') + '"/> <button class="save">Save</button>')
		console.log ("You clicked edit")

	},

	destroy: function() {
		console.log ("You clicked delete")
		this.remove()
	},

	save: function() {
		console.log("You clicked save")
		this.model.set("guitars", $('.input').val())
		console.log (this.model.get('guitar'))
		$(this.el).html(this.model.get('guitar') + '<button class="edit">Edit</button>' + '<button class="delete">Delete</button>')
	}
})

GuitarModel = Backbone.Model.extend({

	initialize: function() {

	}

})



guitar = new GuitarModel({guitar:'Gibson'})
view = new Guitars({model: Guitar})

