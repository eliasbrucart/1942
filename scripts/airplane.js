var airplane = {
	id: 'airplane',
	visible: true,
	positions: [{x:38, y:6, width:24, height:16},
					{x:101, y:6, width:24, height:16},
					{x:166, y:6, width:24, height:16}],
	animationIndex: 0,
	speedMove: 20,
	mouseId: -1,
	mouseCoords: {x: 0, y: 0},
	x: 320,
	y: 240,
	width: 23,
	height: 16,
	radius: 10,
	center: {x: 11, y: 8},
	objetiveX: 0,
	objetiveY: 0,
	accumulatedTime: 0,
	accumulatedShotTime: 0,

	init: function(){
		var self = this;
		this.museId = jsGFwk.IO.mouse.registerClick(function(coord){
			self.mouseCoords = coord;
		});

		this.shootTimer = new jsGFwk.Timer({
			action: function(){
				jsGFwk.getGameObjects().containerBullets.cloneObject({x: this.x + 3, y: this.y - 10});
				channelShoot.play();
			},
			tickTime: 0.1
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

			jsGFwk.getGameObjects().containerBullets.cloneObject({x: this.x + 3, y: this.y - 10});
			//jsGFwk.getGameObjects().containerBullet.cloneObject({x: this.x + 3, y: this.y - 10});
			channelShoot.play();
		}
	},

	update: function(delta){
		this.accumulatedTime += delta;
		this.accumulatedShotTime += delta;
		//this.shoot();
		//this.updateWithMouse();
		this.x += (this.mouseCoords.x - this.x) / this.speedMove;
		this.y += (this.mouseCoords.y - this.y) / this.speedMove;
		this.shootTimer.tick(delta);
		this.actualImage = this.positions[this.animationIndex];
	},

	draw: function(contexto){
		contexto.drawImage(jsGFwk.ResourceManager.graphics.main.image, this.actualImage.x, this.actualImage.y,
			25, 16, this.x, this.y, 25, 16);
	}
};