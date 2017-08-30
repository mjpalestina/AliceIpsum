$(document).ready(function() {
  $('select').material_select();
});

new Clipboard('.copybutton');

$(".copybutton").click(function(){
console.log("Copy Me- Clicked");
  });

var aaiw = [];

var ipsum = aaiw.concat(aaiw_chapter1, aaiw_chapter2, aaiw_chapter3);

$(".makeAliceIpsum").click(function(){

var chapter = [];

console.log(chapter);




  $(".AliceIpsumLocation").empty();

  var amount = $('#ipsum_amount').val();

console.log(amount);

  for (i = 0; i < amount; i++ ) {

    var random_ipsum = ipsum[Math.floor(Math.random()*ipsum.length)];

      $(".AliceIpsumLocation").append("<p>" + random_ipsum + "</p>");

      console.log(random_ipsum);

  };

});
