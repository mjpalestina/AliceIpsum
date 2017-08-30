$(document).ready(function() {
  $('select').material_select();
});

new Clipboard('.copybutton');

$(".copybutton").click(function(){
console.log("Copy Me- Clicked");
  });

var ipsum = [];

$(".makeAliceIpsum").click(function(){

//console.log(chapter);

  // if
  //
  // push asiw_chapter1

  $(".AliceIpsumLocation").empty();

  var amount = $('#ipsum_amount').val();

console.log(amount);

  for (i = 0; i < amount; i++ ) {

    var random_ipsum = ipsum[Math.floor(Math.random()*ipsum.length)];

      $(".AliceIpsumLocation").append("<p>" + random_ipsum + "</p>");

      console.log(random_ipsum);

  };

});
