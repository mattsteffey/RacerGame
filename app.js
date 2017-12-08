var p1 = 0;
var p2 = 0;


//P1 FUNCTIONALITY
$(document).keypress(function(a) {
    if(a.keyCode == 97)
	$("#player1").animate({marginLeft: "+=50px"}, -200);
	
});

$(document).keypress(function(a) {
	if(a.keyCode == 97)
     p1 += 1;
 	 if (p1 === 20) {alert("Player 1 Wins!");}

});

//P2 FUNCTIONALITY
$(document).keypress(function(l) {
    if(l.keyCode == 108)
	 $("#player2").animate({marginLeft: "+=50px"}, -200);
	
});

$(document).keypress(function(l) {
	if(l.keyCode == 108)
     p2 += 1;
 	if (p2 === 20) {alert("Player 2 Wins!");}

});

