var enemy = {
	x:(Math.random() * 400) + 40,
	y:1,

	update:function(){
		this.y++;
	},

	draw:function(contexto){
		contexto.drawImage(spriteSheet, 5, 200, 14, 15, this.x, this.y, 14, 15);
	}
};