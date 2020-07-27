var bullet = {
	x: 0,
	y: 0,
	width: 17,
	height: 12,
	name: 'bullet',
	visible: false,
	speed: 2,

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

	update: function(delta){
		this.y -= this.speed;

		if(this.y + this.height < 0){
			this.visible = false;
		}

		for(var i = 0; i < framework.gameObjects.length; i++){
			if(framework.gameObjects[i].name === 'enemy'){
				if(this.collision(framework.gameObjects[i])){
					framework.gameObjects[i].impact();
					this.visible = true;
					break;
				}
			}
		}
	},

	draw: function(contexto){
		if(this.visible){
			contexto.drawImage(spriteSheet, 140, 82, 17, 12, this.x, this.y, this.width, this.height);
		}
	}
};