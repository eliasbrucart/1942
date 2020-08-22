var boot = {
	preload: function() {
		game.load.image('main','img/1942.png');
		game.load.image('background','img/background.png');
		game.load.image('background2','img/background-2.png');

		game.stage.backgroundColor = '#000000';
		game.physics.startSystem(Phaser.Physics.ARCADE);
	},
	create: function() {

	},
	update: function() {

	}
};