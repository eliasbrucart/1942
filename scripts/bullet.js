var bullet = {
	x: 0,
	y: 0,
	width: 17,
	height: 12,
	speed: 2,

	onInit: function(parameters){
		this.x = parameters.x;
		this.y = parameters.y;
	},

	collision: function(enemy){
		if(this.x + this.width < enemy.x){
			return false;
		}

		if(this.y + this.height < enemy.y){
			return false;
		}

		if(this.x > enemy.x + enemy.width){
			return false;
		}

		if(this.y > enemy.y + enemy.height){
			return false;
		}
		return true;
	},

	onUpdate: function(delta){
		var self = this;
		this.y -= this.speed;

		if(this.y + this.height < 0){
			this.visible = false;
		}

		jsGFwk.getGameObjects().containerEnemy.eachCloned(function (enemy, event){
			if(jsGFwk.Collisions.areCollidingBy(enemy, self, jsGFwk.Collisions.collidingModes.RECTANGLE)){
				channelExplosion.play();
				enemy.impact();
				self.destroy();
				points += 100;
				event.cancel = true;
			}
		});
	},

	onDraw: function(contexto){
		contexto.drawImage(jsGFwk.ResourceManager.graphics.main.image, 140, 82, 17, 12, this.x, this.y, this.width, this.height);
	}
};