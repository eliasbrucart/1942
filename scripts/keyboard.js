var keyboard = {
	keysPressed:{
		'65':false,
		'83':false,
		'68':false,
		'87':false
	},

	keyNotPressed: function(){
		var key = event.keyCode;
		keyboard.keysPressed[key] = false;
	},

	keyPressed: function(event){
		var key = event.keyCode;
		keyboard.keysPressed[key] = true;
	},

	init: function(){
		document.addEventListener('keydown', this.keyPressed, false);
		document.addEventListener('keyup', this.keyNotPressed, false);
	}
};