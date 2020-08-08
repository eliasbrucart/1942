<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Mi Videojuego</title>

	<script src="scripts/framework.js" type="application/javascript"></script>
	<script src="scripts/keyboard.js" type="application/javascript"></script>
	<script src="scripts/mouse.js" type="application/javascript"></script>
	<script src="scripts/airplane.js" type="application/javascript"></script>
	<script src="scripts/enemy.js" type="application/javascript"></script>
	<script src="scripts/bullet.js" type="application/javascript"></script>
	<script src="scripts/background.js" type="application/javascript"></script>
	<script src="scripts/score.js" type="application/javascript"></script>

	<style>
		@font-face{
			font-family: 'retroBits';
			src: url('font/zxBold.ttf');
		}
	</style>
</head>
<body>
	<!--Lienzo de dibujo-->
	<canvas id="miCanvas" width="640" height="480"></canvas>
</body>
	<script type="application/javascript">
		var spriteSheet = new Image(),
			background = new Image(),
			background2 = new Image(),
			points = 0;

			var lastPoints = localStorage['points'] ? parseFloat(localStorage['points']) : 0;
		
		spriteSheet.onload = function(){
			framework.gameObjects.push(backgroundGame);
			framework.gameObjects.push(score);
			for(var i = 0; i < 10; i++){
				var enemyClon = Object.create(enemy);
				enemyClon.x = (Math.random() * 400) + 40;
				enemyClon.update = enemyClon.updateNormal;
				enemyClon.draw = enemyClon.drawNormal;
				framework.gameObjects.push(enemyClon);
			}
			for(var i = 0; i < 10; i++){
				var bulletClon = Object.create(bullet);
				framework.gameObjects.push(bulletClon);
			}
			framework.gameObjects.push(airplane);
			framework.init();
			mouse.init();
			keyboard.init();
		};
		spriteSheet.src = 'img/1942.png';
		background.src = 'img/background.png';
		background2.src = 'img/background-2.png';
	</script>
</html>