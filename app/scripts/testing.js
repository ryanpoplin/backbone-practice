// extend returns a 'constructor'
Circle = Backbone.Model.extend({
	
	defaults: function () {
		return {

			color: '#'+Math.floor(Math.random()*16777215).toString(16),
			size: Math.floor(Math.random() * 200 + 10),
			x: Math.floor(Math.random() * 400 + 10),
			y: Math.floor(Math.random() * 400 + 10),
			opacity: Math.random * 1

		}
	},

	// initialize is not needed...
	initialize: function () {
		console.log('A Model was created!');
	}

	// 

});

//

// extend returns a 'constructor'
// a 'Collection' can...
CircleCollection = Backbone.Collection.extend({

	//
	model: Circle,

	// initialize is not needed...
	initialize: function () {
		console.log('A Collection was created!');
	}

});

CircleView = Backbone.View.extend({
	
	className: 'circle',

	events: {
		'click': 'destroy'
	},

	initialize: function () {

		console.log('A new view...');
		
		$('#container').append(this.el);
		this.render();

		var thatEl = this.$el
		setInterval(function(){
			that.$el.css({

				x: Math.floor(Math.random() * 400 + 10),
				y: Math.floor(Math.random() * 400 + 10)

			});
		}, 3000);
	},

	render: function () {
		this.$el.css({
			background: this.model.get('color'),
			height: 	this.model.get('size') + 'px',
			width: 		this.model.get('size') + 'px',
			top: 		this.model.get('y') + 'px',
			left: 		this.model.get('x') + 'px',
			opacity:    this.model.get('opacity')
		});
	},

	destroy: function () {
		console.log('deleting a circle...');
		this.model.destroy();
		this.remove();
	}

});

// stub out some fake JSON
var circleData = [
	{
		color: 'red',
		size: 10,
		x: 300,
		y: 100
	},
	{
		color: 'yellow',
		size: 15,
		x: 350,
		y: 150
	},
	{
		color: 'blue',
		size: 20,
		x: 400,
		y: 200
	},
	{
		color: 'purple',
		size: 25,
		x: 450,
		y: 250
	}
];

// create an instance of CircleCollection
var circles = new CircleCollection();

circles.on('add', function (circle) {
	new CircleView({model: circle});
});

circles.on('remove', function (model, collection){
	$('h1').text(collection.length + ' circles remaining.');
});	

// the 'add' method...
circles.add(circleData);

for (var i = 0; i < 400; i++) {
	circles.add({});
}

