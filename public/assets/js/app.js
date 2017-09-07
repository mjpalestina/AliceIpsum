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

  //Get selected Type
  var output_type = $('#output_type').val();

  //Get selected chapters
  var chapter = $('#aaiw_chapters').val();

    //Error catch for no selection
    if (chapter == null ) {
        var chapter = ["aaiw_all"];
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

//Loop through amount to output random AliceIpsum


  if (output_type.includes("quote_characters")) {
    var random_ipsum = ipsum[Math.floor(Math.random()*ipsum.length)];
    var character_ipsum = random_ipsum.substring(0, amount ++);
      console.log("character_ipsum:", character_ipsum);
    $(".AliceIpsumLocation").append(character_ipsum);

      } else {

    for (i = 0; i < amount; i++ ) {
      var random_ipsum = ipsum[Math.floor(Math.random()*ipsum.length)];
        $(".AliceIpsumLocation").append("<p>" + random_ipsum + "</p>");
      };
    };

  console.log(random_ipsum);

});
