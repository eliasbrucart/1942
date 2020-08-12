var bullet = {
	x: 0,
	y: 0,
	width: 17,
	height: 12,
	name: 'bullet',
	visible: false,
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
		this.y -= this.speed;

		if(this.y + this.height < 0){
			this.visible = false;
		}

		/*for(var i = 0; i < framework.gameObjects.length; i++){
			if(framework.gameObjects[i].name === 'enemy'){
				if(this.collision(framework.gameObjects[i])){
					framework.gameObjects[i].impact();
					this.visible = true;
					points += 100;
					explosionSound.play();
					break;
				}
			}
		}*/
	},

	onDraw: function(contexto){
		contexto.drawImage(jsGFwk.ResourceManager.graphics.main.image, 140, 82, 17, 12, this.x, this.y, this.width, this.height);
	}
};