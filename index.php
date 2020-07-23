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
</head>
<body>
	<!--Lienzo de dibujo-->
	<canvas id="miCanvas" width="640" height="480"></canvas>
</body>
	<script type="application/javascript">
		var spriteSheet = new Image();
		
		spriteSheet.onload = function(){
			for(var i = 0; i < 10; i++){
				var enemyClon = Object.create(enemy);
				enemyClon.x = (Math.random() * 400) + 40;
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
	</script>
</html>