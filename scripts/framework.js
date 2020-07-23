var framework = {
	lastFrame : 0,
	accumulatedTime : 0,
	contexto: null,
	canvas: null,
	gameObjects:[],

	init:function(){
		var self = this;

		this.canvas = document.getElementById('miCanvas');
		this.contexto = this.canvas.getContext('2d');

		window.getFrameAnimation = (function(){
			return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback, element){
				window.setTimeout(updateGame, 1000/60);
			};
		})();

		getFrameAnimation(self.mainLoop);
	},

	mainLoop:function(){
		var thisFrame = new Date().getTime(),
		delta = (thisFrame - framework.lastFrame) / 1000;
		framework.lastFrame = thisFrame;
		framework.accumulatedTime += delta;

		framework.contexto.fillStyle = 'white';
		framework.contexto.fillRect(0, 0, 640, 480);

		for(var i = 0; i < framework.gameObjects.length; i++){
			framework.gameObjects[i].update(delta);
			framework.gameObjects[i].draw(framework.contexto);
		}

		getFrameAnimation(framework.mainLoop);
	}
};