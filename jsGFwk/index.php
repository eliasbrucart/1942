<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Mi Videojuego</title>

	<script src="Framework/jsGFwk.js"></script>
	<script src="Framework/jsGFwk2dFastAnimation.js"></script>
	<script src="Framework/jsGFwkBasicAnimation.js"></script>
	<script src="Framework/jsGFwkCollisions.js"></script>
	<script src="Framework/jsGFwkIO.js"></script>
	<script src="Framework/jsGFwkRM.js"></script>
	<script src="Framework/jsGFwkContainer.js"></script>
	<script src="Framework/jsGFwkDebugger.js"></script>
	<script src="Framework/jsGFwkJukebox.js"></script>
	<script src="Framework/jsGFwkTimers.js"></script>
	<script src="Framework/jsGFwkFonts.js"></script>
	<script src="Framework/jsGFwkScenes.js"></script>
	<script src="scripts/gamecontrol.js"></script>
	<!--<script src="scripts/framework.js" type="application/javascript"></script>
	<script src="scripts/keyboard.js" type="application/javascript"></script>
	<script src="scripts/mouse.js" type="application/javascript"></script> -->
	<script src="scripts/airplane.js" type="application/javascript"></script>
	<script src="scripts/enemy.js" type="application/javascript"></script>
	<script src="scripts/bullet.js" type="application/javascript"></script>
	<script src="scripts/background.js" type="application/javascript"></script>
	<script src="scripts/score.js" type="application/javascript"></script>
	<script src="scripts/hud.js" type="application/javascript"></script>
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
		jsGFwk.include("Container");
		//jsGFwk.include("Debugger");
		jsGFwk.include("Fonts");
		jsGFwk.include("Scenes");
		//jsGFwk.Debugger.on = false;
		jsGFwk.Fonts.createFont({name: 'retroBits', source:'font/zxBold.ttf'});
		jsGFwk.ResourceManager.addGraphic({name: "main", source: "img/1942.png"});
		jsGFwk.ResourceManager.addGraphic({name: "background1", source: "img/background.png"});
		jsGFwk.ResourceManager.addGraphic({name: "background2", source: "img/background-2.png"});

		var channelShoot;
		var channelExplosion;

		var explosion = {};
		
		explosion[jsGFwk.ResourceManager.sounds.format.wav] = {source: "sounds/WAV/P1942_Explosion.wav"};
		explosion[jsGFwk.ResourceManager.sounds.format.ogg] = {source: "sounds/OGG/P1942_Explosion.ogg"};

		jsGFwk.ResourceManager.addSound({name: "explosion", sources: explosion});

		var shoot = {};

		shoot[jsGFwk.ResourceManager.sounds.format.wav] = {source:"sounds/WAV/P1942_Shoot1.wav"};
		shoot[jsGFwk.ResourceManager.sounds.format.ogg] = {source:"sounds/OGG/P1942_Shoot1.ogg"};

		jsGFwk.ResourceManager.addSound({name:"shootSounds", sources:shoot});

		jsGFwk.createObject({
			id: "progressLoader",
			visible: true,
			init: function(){
				jsGFwk.ResourceManager.onResourcesLoadedCompleted = function(){
					jsGFwk.getGameObjects().progressLoader.destroy();
					jsGFwk.createObject(backgroundGame);
					jsGFwk.createObject(airplane);
					jsGFwk.createObject(gameControl);
					jsGFwk.createObject(score);

					channelShoot = new jsGFwk.Jukebox({
						volume: 0.5,
						channels: 5,
						source: jsGFwk.ResourceManager.sounds.shootSounds
					});

					channelExplosion = new jsGFwk.Jukebox({
						volume: 0.5,
						channels: 5,
						source: jsGFwk.ResourceManager.sounds.explosion
					});
					var containerBullets = jsGFwk.Container.createContainer("containerBullet",bullet,true);
					var containerEnemies = jsGFwk.Container.createContainer("containerEnemy",enemy,true);
					jsGFwk.Scenes.create({name:"menu", gameObjects: [hud] });
					jsGFwk.Scenes.create({name:"game", gameObjects: [backgroundGame, airplane, gameControl, score, containerBullets, containerEnemies] });
					jsGFwk.Scenes.scenes.menu.enable();
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

		var points = 0;

		jsGFwk.start();

		/*var spriteSheet = new Image(),
			background = new Image(),
			background2 = new Image(),
			points = 0,
			shootSound = new Audio(),
			explosionSound = new Audio();*/

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
		/*spriteSheet.src = 'img/1942.png';
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
		}*/
	</script>
</html>