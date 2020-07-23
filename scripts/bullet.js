var bullet = {
	x: 0,
	y: 0,
	width: 17,
	height: 12,
	name: 'bullet',
	visible: false,
	speed: 2,

	update: function(delta){
		this.y -= this.speed;
		if(this.y + this.height < 0){
			this.visible = false;
		}
	},

	draw: function(contexto){
		if(this.visible){
			contexto.drawImage(spriteSheet, 140, 82, 17, 12, this.x, this.y, this.width, this.height);
		}
	}
};