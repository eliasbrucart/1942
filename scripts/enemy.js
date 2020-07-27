var enemy = {
	x:(Math.random() * 400) + 40,
	y:1,
	name: 'enemy',
	explosionIndex: 0,
	explosionAccumulator: 0,

	impact: function(){
		this.update = this.updateDeath;
		this.draw = this.drawDeath;
	},

	updateDeath: function(delta){
		this.explosionAccumulator += delta;
		if(this.explosionAccumulator > 0.1){
			this.explosionAccumulator = 0;
			this.explosionIndex++;

			if(this.explosionIndex >= 3){
				this.explosionIndex = 0;
				this.y = -20;
				this.x = (Math.random() * 400) + 40;
				this.update = this.updateNormal;
				this.draw = this.drawNormal;
			}
		}
	},

	drawDeath: function(contexto){
		contexto.drawImage(spriteSheet, 163 + (this.explosionIndex * 16), 79, 16, 15, this.x, this.y, 16, 15);
	},

	updateNormal: function(){
		this.y++;

		if(this.y > 480){
			this.y = -20;
			this.x = (Math.random() * 400) + 40;
		}
	},

	drawNormal: function(contexto){
		contexto.drawImage(spriteSheet, 5, 200, 14, 15, this.x, this.y, 14, 15);
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