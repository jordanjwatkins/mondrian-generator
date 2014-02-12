(function($){
	$.fn.mondrian = function() {
		var $canvas = $(this);
		var unitSize = 100;
		var units = 8;
		var points = getPoints({x:0,y:0}, units, units);		
		var colors = ["ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","cc0000","ffec00","0000cc"];			
		var count = 0;
			
		build();
		
		function build() {
			while (points.length > 0) {
				addBlock(randPoint());
				count++;				
			}
		}
		
		function getSize(point) {
			var tries = 0;
			do {
				var size = randSize();
				tries++;
				if (tries > 5) {
					return false;
				}
			} while (!fits(point, size)); 
			return size;
		}
		
		function fits(point, size) {
			var fits = true;
			var tmpPoints = getPoints(point, size.x, size.y);
			for (tmpPoint in tmpPoints) {
				if (!isActive(tmpPoints[tmpPoint])) {
					return false;
				}
			}			
			for (index in points) {
				for (tmpPoint in tmpPoints) {						
					if (JSON.stringify(points[index]) === JSON.stringify(tmpPoints[tmpPoint])) {
						points.splice(index, 1);
					}						
				}
			}
			return true;			
		}
		
		function getPoints(origin, width, height) {
			var points = [];			
			var y = 0;
			var x = 0;		
			for (var i = 0; i < width; i++) {				
				for (var j = 0; j < height; j++) {
					y = origin.y + j * unitSize;
					x = origin.x + i * unitSize;
					points.push({"x": x, "y": y});		
				}			
			}					
			return points;
		}
		
		function addBlock(point) {	
			var size = getSize(point);
			if (size) {
				var color = randItem(colors);
				var $block = $('<div id="block-'+count+'" class="block"></div>').css({'background': '#'+color, 'left': point.x, 'top': point.y, 'height': size.y * unitSize, 'width': size.x * unitSize, 'border':'5px solid #000'});			
				$canvas.append($block);
			}
		}
		
		function isActive(point) {
			for (var index in points) {				
				if (point.x == points[index].x && point.y == points[index].y) {
					return true;				
				}
			}
			return false;
		}
		
		function randPoint() {
			var index = Math.floor(Math.random()*points.length);
			var point = points[index];
			return point;
		}
		
		function addPoint(point) {
			$block = $('<div id="point-'+count+'" class="point"></div>').width(4).height(4).css({'background': '#000', 'left': point.x-2+'px', 'top': point.y-2+'px'});
			$canvas.append($block);			
		}
				
		function randSize() {			
			do {
				var size = {x:randNum(units-1), y:randNum(units-1)};
				if (chanceContinue(size.x != size.y, 9, 10)) { continue; }
				if (chanceContinue((size.x < 9  ||  size.y < 9), 9, 10)) { continue; }
				if (chanceContinue(size.x * size.y == 1, 990, 1000)) { continue; }				
				break;						
			} while (1==1);
			return size;
		}

		function chanceContinue(cond, chances, whole) {
			if (cond) {
				if (randNum(whole) < chances) {
					return true;
				}
			}			
			return false;
		}
					
		function randNum(max) {
			return Math.floor(Math.random()*max+1);		
		}
		
		function randItem(items) {
			return items[Math.floor(Math.random()*items.length)];
		}
	}	
})(jQuery);