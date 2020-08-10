<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Mi Videojuego</title>

	<script src="Framework/jsGFwk.js"></script>
	<script src="Framework/jsGFwk2dFastAnimation.js"></script>
	<script src="Framework/jsGFwkCollisions.js"></script>
	<script src="Framework/jsGFwkIO.js"></script>
	<script src="Framework/jsGFwkRM.js"></script>
	<!--<script src="scripts/framework.js" type="application/javascript"></script>
	<script src="scripts/keyboard.js" type="application/javascript"></script>
	<script src="scripts/mouse.js" type="application/javascript"></script> -->
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
		jsGFwk.settings.canvas = "miCanvas";
		jsGFwk.settings.clearColor = "rgb(0, 0, 0)";
		jsGFwk.settings.frameRate = 1000 / 60;
		jsGFwk.include("FastAnimation");
		jsGFwk.include("IO");
		jsGFwk.include("Collisions");
		jsGFwk.include("ResourceManager");
		jsGFwk.ResourceManager.addGraphic({name: "main", source: "img/1942.png"});
		jsGFwk.ResourceManager.addGraphic({name: "background1", source: "img/background.png"});
		jsGFwk.ResourceManager.addGraphic({name: "background2", source: "img/background-2.png"});
		
		jsGFwk.createObject({
			id: "progressLoader",
			visible: true,
			init: function(){
				jsGFwk.ResourceManager.onResourcesLoadedCompleted = function(){
					jsGFwk.getGameObjects().progressLoader.destroy();
					jsGFwk.createObject(backgroundGame);
					jsGFwk.createObject(airplane);
				};
			},
			update: function(delta){

			},
			draw: function(context){
				context.fillStyle = "white";
				context.font = "30pt verdana";
				context.fillText(jsGFwk.ResourceManager._totalLoadedResources + '/' + jsGFwk.ResourceManager._totalResources, 250, 220);
			}
		});

		jsGFwk.start();

		var spriteSheet = new Image(),
			background = new Image(),
			background2 = new Image(),
			points = 0,
			shootSound = new Audio(),
			explosionSound = new Audio();

			var lastPoints = localStorage['points'] ? parseFloat(localStorage['points']) : 0;

			function canExecute(format){
				var soundTest = new Audio();
				return (!!(soundTest.canPlayType && soundTest.canPlayType(format).replace(/no/,'')));
			}
		
		/*spriteSheet.onload = function(){
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
		};*/
		spriteSheet.src = 'img/1942.png';
		background.src = 'img/background.png';
		background2.src = 'img/background-2.png';

		if('audio/ogg; codecs="vorbis"'){
			shootSound.src = 'sounds/P1942_Shoot1.ogg';
			explosionSound.src = 'sounds/OGG/P1942_Explosion.ogg';
		} else if('audio/wav; codecs="1"'){
			shootSound.src = 'sounds/WAV/P1942_Shoot1.wav';
			explosionSound.src = 'sounds/P1942_Explosion.wav';
		} else if('audio/mpeg;'){
			shootSound.src = 'sounds/MP3/P1942_Shoot1.mp3';
			explosionSound.src = 'sounds/MP3/P1942_Explosion.mp3';
		}
	</script>
</html>