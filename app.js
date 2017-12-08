var pos1 = [0];
var pos2 = [0];

$(document).keypress(function(a) {
    if(a.which == 97)
    console.log("player1");
	
 $("#player1").animate({width: "+=100px"});
});


$(document).keypress(function(l) {
    if(l.which == 108)
    console.log("player2");
 $("#player2").animate({height: "+=100px"});
});




/*
$(document).keypress(function(a) {
    if(a.which == 97)
    console.log("player1");
 $("#player1").animate({width: "+=100px"});
});


$(document).keypress(function(l) {
    if(l.which == 108)
    console.log("player2");
 $("#player2").animate({width: "+=100px"});
});
*/