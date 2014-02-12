<!DOCTYPE html>
<html>
<head>
	<title>Mondrian Generator</title>
	<script src="vendor/jquery-1.8.3.min.js"></script>
	<script src="mondrian.js"></script>
	<style>
		*, *:before, *:after{position:relative;background-position:0 0; background-repeat: no-repeat; -moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
		body:before{text-align:center;color:#000;font-size:15px;display:block;content:"refresh to regenerate";position:absolute;top:-38px;width:100%;}
		#mondrian{overflow:hidden;width:810px;height:810px;background:#fff;margin:60px auto;border:5px solid #000;transform:translateZ(0);-webkit-transform:translateZ(0);-moz-transform:translateZ(0);}
		.block{position:absolute;}
		.point{position:absolute;}
	</style>
</head>

<body>
	<div class="wrap">
		<div class="main">
			<div id="mondrian"></div>				
		</div>
	</div>
</body>

<script>
	$('document').ready(function(){
		$('#mondrian').mondrian();
	});
</script>

