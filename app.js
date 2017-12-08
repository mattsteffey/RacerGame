
$(document).keypress(function(a) {
    if(a.keyCode == 97)
	$("#player1").animate({marginLeft: "+=100px"});
		$pos1 += 1;
	
});


$(document).keypress(function(l) {
    if(l.keyCode == 108)
	 $("#player2").animate({marginLeft: "+=100px"});
	
});
