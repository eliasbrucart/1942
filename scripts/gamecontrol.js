var gameControl = {
	id: 'gameControl',
	visible: false,
	accumulator: 0,

	onUpdate: function(delta){
		this.accumulator += delta;
		if(this.accumulator > 0.5){
			this.accumulator = 0;
			jsGFwk.getGameObjects().containerEnemies.cloneObject({x: (Math.random() * 600) + 10, y: -20});
		}
	}
};