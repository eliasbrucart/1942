var backgroundGame = {
	ybackground: 0,
	ybackground2: 0,
	speedBackground: 0.5,
	speedBackground2: 1.5,
	update: function(delta){
		this.ybackground += this.speedBackground;
		this.ybackground = this.ybackground % 480;

		this.ybackground2 += this.speedBackground2;
		this.ybackground2 = this.ybackground2 % 480;
	},

	draw: function(contexto){
		contexto.drawImage(background, 0, this.ybackground - 480);
		contexto.drawImage(background, 0, this.ybackground);

		contexto.drawImage(background, 0, this.ybackground2 - 480);
		contexto.drawImage(background2, 0, this.ybackground2);
	}
};