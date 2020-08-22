<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>1942 Phaser</title>
	<script src="phaser/phaser.min.js" type="application/javascript"></script>
</head>
<body>
	<script type="application/javascript">
		var game = undefined;

		window.onload = function(){
			game = new Phaser.Game(640, 480, Phaser.AUTO, '');
		};
	</script>
</body>
</html>