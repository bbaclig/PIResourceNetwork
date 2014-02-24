$(document).ready(function() {
    $('.area').mouseenter(function() {
        $(this).animate({
            height: '+=5px',
            width: '+=5px'
        });
	    var target = $(this).attr("id");			
        if (target == 'Tacloban') {
            $('p').text("Tacloban:");  
        } 
        if (target == 'Guiuan') {
            $('p').text("Guiuan:");  
        } 
        if (target == 'Banayan') {
            $('p').text("Banayan:");  
        } 
    });
    $('.area').mouseleave(function() {
        $(this).animate({
            height: '-=5px',
            width: '-=5px'
        });
        $('p').text("Hover over an area to see its needed resources!");  
    });
});
