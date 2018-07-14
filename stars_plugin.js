(function($)
{
	$.fn.stars = function(no, size)
	{	
		var x = $(this);
		if(size > 5){size = 5};
		var i = 0;
		var xval = x.width();
		var yval = x.height();
		var mouse_x = 0;
		var mouse_y = 0;
		
		x.mousemove(function(e){
			mouse_x = e.clientX-300;
			mouse_y = e.clientY-50;
		});
		$(document).ready(function(){
			x.css('background-color', 'black');
			dots(no);
			$('.dot').css('width', '2px').css('height', '2px').css('position', 'absolute').css('background-color', 'white').css('border-radius', '50%');
		});
			
		function move(name)
		{
			var x = (Math.random()*xval);
			var y = (Math.random()*yval);
			var w = Math.random()*size;
			var time = Math.random()*60 + 1;
			$(name).css('transition', 'transform '+time+'s');
			$(name).css("transform", 'translateX('+ x +'px) translateY(' + y + 'px) scale('+w+')');
				
			setInterval(function(){
				x = (Math.random()*xval);
				y = (Math.random()*yval);
				w = Math.random()*size;
				console.log(w);
				time = Math.random()*(x+y);
				$(name).css("transform", 'translateX('+ x +'px) translateY(' + y + 'px) scale('+w+')');
				$(name).css('transition', 'transform ' + time + 's');
				setInterval(function(){
					var tp = $(name).position().top;
					var lt = $(name).position().left;
				
					if(lt < mouse_x+100 && lt > mouse_x-100)
					{
						if(tp < mouse_y+100 && tp > mouse_y-100)
						{	
							move_away(name, mouse_x, mouse_y, lt, tp);
						}
					}
				}, 100);
		
				
			}, 5000);
		}
			
		function move_away(name, mx, my, dx, dy)
		{
			var ml = (dx+100)*Math.sign(dx-mx);
			var mt = (dy+100)*Math.sign(dy-mx);
			$(name).css('transition', 'translate 5s');
			$(name).css("transform", 'translateX('+ ml +'px) translateY(' + mt + 'px)');
		}
		function dots(value)
		{
			for(i=1; i<=value; i++)
			{
				x.prepend($('<div id="dot'+ i +'" class="dot"></div>'));
			}
			for(i=1; i<=no; i++)
			{
				var name = "#dot" + i;
				move(name);
			}
		}
	}
}
)(jQuery);