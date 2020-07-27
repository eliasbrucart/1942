var backgroundGame = {
	y: 0,
	update: function(delta){
		this.y++;
		this.y = this.y % 480;
	},

	draw: function(contexto){
		contexto.drawImage(background, 0, this.y - 480);
		contexto.drawImage(background, 0, this.y);
	}
};