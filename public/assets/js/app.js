//Materilize selct setup
$(document).ready(function() {
  $('select').material_select();
});

//Copy to clipboard function
new Clipboard('.copybutton');

$(".copybutton").click(function(){
console.log("Copy Me- Clicked");
  });

//Blank array to hold selection
var aaiw = [];

//Ipsum generation
$(".makeAliceIpsum").click(function(){
  //Emty previous ipsum
  $(".AliceIpsumLocation").empty();

  //Get selected chapters
  var chapter = $('#aaiw_chapters').val();

  //Error catch for no selection
  if (chapter == null ) {
      var chapter = ["missing"];
      var ipsum = 0;
      // $(".AliceIpsumLocation").append("<h3>Kindly select a chapter, if you would.</h3>");
    };

  console.log("Chapters", chapter);

  //Push selected chapters into array
  if (chapter.includes("aaiw_c1") || chapter.includes("aaiw_all")) {
      var ipsum = aaiw.concat(aaiw_chapter1);
    };

  if (chapter.includes("aaiw_c2") || chapter.includes("aaiw_all")) {
      var ipsum = aaiw.concat(aaiw_chapter2);
    };

  if (chapter.includes("aaiw_c3") || chapter.includes("aaiw_all")) {
      var ipsum = aaiw.concat(aaiw_chapter3);
    };

  //Returns set amount
  var amount = $('#ipsum_amount').val();
  console.log("Amount", amount);

  for (i = 0; i < amount; i++ ) {

    var random_ipsum = ipsum[Math.floor(Math.random()*ipsum.length)];

      $(".AliceIpsumLocation").append("<p>" + random_ipsum + "</p>");

      console.log(random_ipsum);
  };

});
