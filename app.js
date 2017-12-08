$(window).keypress(function(a) {
    if(a.which == 97)
    console.log("player1");
 $("#player1").animate({width: "+=100px"});
});


$(window).keypress(function(l) {
    if(l.which == 108)
    console.log("player2");
 $("#player2").animate({width: "+=100px"});
});