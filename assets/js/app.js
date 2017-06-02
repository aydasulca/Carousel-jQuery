$( "#right" ).click(function() {
  $( ".galeria-slider" ).animate({ "left": "+=350px" }, "slow" );
});

$( "#left" ).click(function(){
  $( ".galeria-slider" ).animate({ "left": "-=350px" }, "slow" );
});
