var hud = {
	id: 'hud',
	visible: true,

	init: function(){
		var self = this;
		this.mouseId = jsGFwk.IO.mouse.registerClick(function (coord) {
			var mouse = {
				x: coord.x,
				y: coord.y,
				width: 1,
				height: 1
			};
			if(jsGFwk.Collisions.areCollidingBy(mouse, {x: 270, y: 200, width: 120, height: 44},
					jsGFwk.Collisions.collidingModes.RECTANGLE)){
						jsGFwk.IO.mouse.unregisterClick(self.mouseId);
						jsGFwk.Scenes.scenes.game.enable();
			}
		});
	},

	update: function(){
	},

	draw: function(contexto){
		contexto.drawImage(jsGFwk.ResourceManager.graphics.main.image, 70, 706, 178, 45, 230, 30, 178, 45);

		contexto.drawImage(jsGFwk.ResourceManager.graphics.main.image, 6, 625, 62, 13, 270, 200, 120, 44);

		contexto.fillStyle = 'white';
		contexto.font = '34pt retroBits';
		contexto.fillText('Play', 280, 225);
	}
};