var score = {
	update: function(){

	},

	draw: function(contexto){
		contexto.save();
		contexto.font = '20pt verdana';
		contexto.strokeStyle = 'black';
		contexto.fillStyle = 'white';
		contexto.strokeText(points, 10, 40);
		contexto.fillText(points, 9, 39);
		contexto.restore();
	}
};