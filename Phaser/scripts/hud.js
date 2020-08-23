var hud = {
	backgroundSpeed: 0.5,
	background2Speed: 0.6,

	preload: function preload(){

	},

	create: function create(){
		game.stage.backgroundColor = 'ffffff';

		this.background = game.add.sprite(0, 0, 'background');
		this.background2 = game.add.sprite(0, 0, 'background2');

		this.background3 = game.add.sprite(0, 0, 'background');
		this.background4 = game.add.sprite(0, 0, 'background2');
	},

	update: function update(){
		this.background.y += this.backgroundSpeed;
		this.background3.y = this.background.y - 800;
		this.background.y = this.backgroundSpeed.y % 800;

		this.background2.y += this.background2Speed;
		this.background4.y = this.background4.y - 800;
		this.background2.y = this.background2Speed.y % 800;
	}
};