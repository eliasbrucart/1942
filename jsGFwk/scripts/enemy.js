var enemy = {
	x:(Math.random() * 400) + 40,
	y:1,
	width: 14,
	height: 15,
	explosionIndex: 0,
	explosionAccumulator: 0,

	onInit: function(parameters){
		this.x = parameters.x;
		this.y = parameters.y;
		this.onUpdate = this.updateNormal;
		this.onDraw = this.drawNormal;
	},

	impact: function(){
		this.onUpdate = this.updateDeath;
		this.onDraw = this.drawDeath;
	},

	updateDeath: function(delta){
		this.explosionAccumulator += delta;
		if(this.explosionAccumulator > 0.1){
			this.explosionAccumulator = 0;
			this.explosionIndex++;

			if(this.explosionIndex >= 3){
				this.destroy();
				/*this.explosionIndex = 0;
				this.y = -20;
				this.x = (Math.random() * 400) + 40;
				this.update = this.updateNormal;
				this.draw = this.drawNormal;*/
			}
		}
	},

	drawDeath: function(contexto){
		contexto.drawImage(jsGFwk.ResourceManager.graphics.main.image, 163 + (this.explosionIndex * 16), 79, 16, 15, this.x, this.y, 16, 15);
	},

	updateNormal: function(delta){
		this.y += 2;

		if(this.y > 480){
			this.destroy();
			/*this.y = -20;
			this.x = (Math.random() * 400) + 40;*/
		}
	},

	drawNormal: function(contexto){
		contexto.drawImage(jsGFwk.ResourceManager.graphics.main.image, 5, 200, 14, 15, this.x, this.y, 14, 15);
	},

	update: function(){
	},

	draw: function(contexto){
	}
};