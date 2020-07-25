var enemy = {
	x:(Math.random() * 400) + 40,
	y:1,

	impact: function(){
		this.y = -20;
		this.x = (Math.random() * 400) + 40;
	},

	update: function(){
		this.y++;

		if(this.y > 480){
			this.y = -20;
			this.x = (Math.random() * 400) + 40;
		}
	},

	draw: function(contexto){
		contexto.drawImage(spriteSheet, 5, 200, 14, 15, this.x, this.y, 14, 15);
	}
};