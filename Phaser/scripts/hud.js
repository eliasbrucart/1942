var hud = {
	backgroundSpeed: 0.5,
	background2Speed: 0.6,

	preload: function preload(){

	},

	create: function create(){
		game.stage.backgroundColor = 'ffffff';

		this.background = game.add.sprite(0, 0, 'background');
		this.background = game.add.sprite(0, 0, 'background2');
	},

	update: function update(){

	}
};