$(document).mousemove(function(e) {
    $('.mag').offset({
        left: e.pageX -260,
        top: e.pageY -200
    });
});

$(document).ready(function(){
	
	var colors = ["red", "blue", "green", "yellow", "black", "white"];
	
	function getColor() {
	   return colors[Math.floor(Math.random() * colors.length)];
	}

	$('body').click(function() {
		// updates the body's html with the value returned by getColor
		$('gen').html(getColor());	
	});

});