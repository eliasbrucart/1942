var gameControl = {
	id: 'gameControl',
	visible: false,
	accumulator: 0,

	update: function(delta){
		this.accumulator += delta;
		if(this.accumulator > 0.5){
			this.accumulator = 0;
			jsGFwk.getGameObjects().containerEnemy.cloneObject({x: (Math.random() * 600) + 10, y: -20});
		}
	}
}