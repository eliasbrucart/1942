var score = {
	id: 'score',
	visible: true,
	update: function(){
		if(points > lastPoints){
			localStorage['points'] = points;
			lastPoints = points;
		}
	},

	draw: function(contexto){
		contexto.save();
		contexto.font = '60pt retroBits';
		contexto.strokeStyle = 'black';

		var degree = contexto.createLinearGradient(0, 0, 0, 70);
		degree.addColorStop(0, "rgb(170, 119, 68)");
		degree.addColorStop(1, "white");
		contexto.fillStyle = degree;

		contexto.strokeText(points, 10, 40);
		contexto.fillText(points, 9, 39);

		contexto.strokeText('HI:' + lastPoints, 300, 40);
		contexto.fillText('HI:' + lastPoints, 299, 39);
		
		contexto.restore();
	}
};