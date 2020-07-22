<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Mi Videojuego</title>
</head>
<body>
	<!--Lienzo de dibujo-->
	<canvas id="miCanvas" width="640" height="480"></canvas>
</body>
	<script type="application/javascript">
		var canvas = document.getElementById('miCanvas'),
			contexto = canvas.getContext('2d');

			document.addEventListener('keydown', keyPressed, false);
			document.addEventListener('keyup', keyNotPressed, false);
			canvas.addEventListener('click', clickMouse, false);

		var spriteSheet = new Image(),
			x = 10, y = 10;

		spriteSheet.onload = function(){
			getFrameAnimation(actualizarJuego);
			//setInterval(actualizarJuego, 1000/60); //setInterval creamos un bucle infinito, como el while(true)
		};

		window.getFrameAnimation = (function(){
			return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback, element){
				window.setTimeout(actualizarJuego, 1000/60);
			};
		})();

		var positions = [{x:38, y:6, width:24, height:16},
						{x:101, y:6, width:24, height:16},
						{x:166, y:6, width:24, height:16}],
					animationIndex = 0,
					lastFrame = new Date().getTime(),
					accumulatedTime = 0;

					isMoving = false;

					var speedMove = 20,
						objectiveX = 0,
						objectiveY = 0;

					var keysPressed = {
						'65':false,
						'83':false,
						'68':false,
						'87':false
					};

					function keyNotPressed(event){
						var key = event.keyCode;
						keysPressed[key] = false;
					}

					function keyPressed(event){
						var key = event.keyCode;
						keysPressed[key] = true;
					}

					function clickMouse(event){
						objectiveX = event.x;
						objectiveY = event.y;
					}

					function updateMouse(){
						x += (objectiveX - x) / speedMove;
						y += (objectiveY - y) / speedMove;
					}

					function updateKeyboard(){
						if(keysPressed['65']){
							x--;
							if (animationIndex > 0 && accumulatedTime > 1) {
								accumulatedTime = 0;
								animationIndex--;
							}
						}

						if(keysPressed['68']){
							x++;
							if(animationIndex < 4 && accumulatedTime > 1){
								accumulatedTime = 0;
								animationIndex++;
							}
						}

						if(keysPressed['83']){
							y++;
						}

						if(keysPressed['87']){
							y--;
						}

						if(!keysPressed['65'] && !keysPressed['68']){
							if(animationIndex !== 2 && accumulatedTime > 1){
								accumulatedTime = 0;
								animationIndex -= animationIndex > 2 ? 1 : -1;
							}
						}
					}

					var moveRight = function(){
						x++;
						if(animationIndex < 2 && accumulatedTime > 1){
							accumulatedTime = 0;
							animationIndex++;
						}
					}

					var moveLeft = function(){
						x--;
						if(animationIndex > 0 && accumulatedTime > 1){
							accumulatedTime = 0;
							animationIndex--;
						}
					}

					function updateAirplaneMovement(useMouse){
						if(useMouse){
							updateMouse();
							return;
						}

						updateKeyboard();
					}

				var moveCharacter = moveRight;

				function createEnemy(){
					return{
						x:(Math.random() * 400) + 40,
						y:1,

						update:function(){
							this.y++;
						},

						draw:function(contexto){
							contexto.drawImage(spriteSheet, 5, 200, 14, 15, this.x, this.y, 14, 15);
						}
					};
					
				}

				var fps = 0,
					fpsAccumulator = 0,
					finalFPS = 0;

				var enemies = [];

				for(var i = 0; i < 1000; i++){
					enemies.push(createEnemy());
				}

		function actualizarJuego(){
			contexto.fillStyle = "white";
			contexto.fillRect(0, 0, 640, 480);

			getFrameAnimation(actualizarJuego);

			var actualImage = positions[animationIndex];
			for(var i = 0; i < enemies.length; i++){
				enemies[i].update();
				enemies[i].draw(contexto);
			}
			var thisFrame = new Date().getTime(),
				delta = (thisFrame - lastFrame) / 1000;
			lastFrame = thisFrame;
			accumulatedTime += delta;

			updateAirplaneMovement(updateMouse);

			contexto.drawImage(spriteSheet, actualImage.x, actualImage.y, 25, 16, x, y, 25, 16);

			moveCharacter();

			if(x > 200){
				moveCharacter = moveLeft;
			}

			if(x <= 0){
				moveCharacter = moveRight;
			}

			if(!isMoving){
				if(animationIndex !== 2 && accumulatedTime > 1){
					accumulatedTime = 0;
					animationIndex -= animationIndex > 2 ? 1 : -1;
				}
			}

			fpsAccumulator += delta;
			fps++;
			if(fpsAccumulator >= 1){
				finalFPS = fps;
				fps = 0;
				fpsAccumulator = 0;
			}

			contexto.fillStyle = 'black';
			contexto.fillText('FPS:' + finalFPS,10,10);
			
		}

		spriteSheet.src = 'img/1942.png';
	</script>
</html>