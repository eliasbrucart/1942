var airplane = {
	id: 'airplane',
	visible: 'true',
	positions: [{x:38, y:6, width:24, height:16},
					{x:101, y:6, width:24, height:16},
					{x:166, y:6, width:24, height:16}],
	animationIndex: 0,
	speedMove: 20,
	mouseId: -1,
	mouseCoords: {x: 0, y: 0},
	x: 320,
	y: 240,
	objetiveX: 0,
	objetiveY: 0,
	accumulatedTime: 0,
	accumulatedShotTime: 0,

	init: function(){
		var self = this;
		this.museId = jsGFwk.IO.mouse.registerClick(function(coord){
			self.mouseCoords = coord;
		});
	},

	updateWithKeys: function(){
		if(keyboard.keysPressed['65']){
			this.x--;
			if (this.animationIndex > 0 && this.accumulatedTime > 1) {
				this.accumulatedTime = 0;
				this.animationIndex--;
			}
		}

		if(keyboard.keysPressed['68']){
			this.x++;
			if(this.animationIndex < 4 && this.accumulatedTime > 1){
				this.accumulatedTime = 0;
				this.animationIndex++;
			}
		}

		if(keyboard.keysPressed['83']){
			this.y++;
		}

		if(keyboard.keysPressed['87']){
			this.y--;
		}

		if(!keyboard.keysPressed['65'] && !keyboard.keysPressed['68']){
			if(this.animationIndex !== 2 && this.accumulatedTime > 1){
				this.accumulatedTime = 0;
				this.animationIndex -= this.animationIndex > 2 ? 1 : -1;
			}
		}
	},

	updateWithMouse: function(){
		this.x += (mouse.x - this.x) / this.speedMove;
		this.y += (mouse.y - this.y) / this.speedMove;
	},

	shoot: function(){
		if(this.accumulatedShotTime > 0.5){
			this.accumulatedShotTime = 0;

			for(var i = 0; i < framework.gameObjects.length; i++){
				if(framework.gameObjects[i].name === 'bullet' && !framework.gameObjects[i].visible){
					framework.gameObjects[i].x = this.x + 3;
					framework.gameObjects[i].y = this.y - 10;
					framework.gameObjects[i].visible = true;
					break;
				}

			}
		}
	},

	update: function(delta){
		this.accumulatedTime += delta;
		this.accumulatedShotTime += delta;
		//this.shoot();
		//this.updateWithMouse();
		this.x += (this.mouseCoords.x - this.x) / this.speedMove;
		this.y += (this.mouseCoords.y - this.y) / this.speedMove;
		this.actualImage = this.positions[this.animationIndex];
	},

	draw: function(contexto){
		contexto.drawImage(jsGFwk.ResourceManager.graphics.main.image, this.actualImage.x, this.actualImage.y,
			25, 16, this.x, this.y, 25, 16);
	}
};