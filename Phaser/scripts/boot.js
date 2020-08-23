var boot = {
	preload: function preload() {
		game.load.image('main','img/1942.png');
		game.load.image('background','img/background.png');
		game.load.image('background2','img/background-2.png');

		var textLoading = "...";
		var style = {
			font: "60pt retroBits",
			fill: "#ffffff"
		};

		this.textLoading = game.add.text(200, 210, textLoading, style);

		game.stage.backgroundColor = '#000000';
		game.physics.startSystem(Phaser.Physics.ARCADE);
	},
	create: function create() {

	},
	update: function update() {
		game.stage.backgroundColor = 'black';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.textLoading.text = "Loading";
	}
};