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

  //Empty previous ipsum
  $(".AliceIpsumLocation").empty();

  //Get amount
  var amount = $('#ipsum_amount').val();
    console.log("Amount", amount);

  //Get selected Type
  var output_type = $('#output_type').val();
    console.log("Output Type:", output_type);

  //Checks if tags are requested
  var add_p_tag = $('#add_p_tag').prop('checked');
    console.log("Paragraph Tags:", add_p_tag);

  //Get selected chapters
  var chapter = $('#aaiw_chapters').val();

  //Error catch for no selection
  if (chapter == null ) {
      var chapter = ["aaiw_all"];
    };
    console.log("Chapters:", chapter);

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


//Loop through amount to output random AliceIpsum
  //If Characters is selected
  if (output_type.includes("book_characters")) {
    var random_ipsum = ipsum[Math.floor(Math.random()*ipsum.length)];
    var character_ipsum = random_ipsum.substring(0, amount ++);
      console.log("character_ipsum:", character_ipsum);
    $(".AliceIpsumLocation").append(character_ipsum);
        console.log("Character- random_ipsum:", random_ipsum);

  } else {
  //If Paragraph is selected
  for (i = 0; i < amount; i++ ) {
    var random_ipsum = ipsum[Math.floor(Math.random()*ipsum.length)];

    if (add_p_tag == true) {
      var p_open = "open";
      var p_close = "close";
    };

      $(".AliceIpsumLocation").append("<br>", p_open, random_ipsum, p_close, + "<br>");
        console.log("Chapter- random_ipsum:", random_ipsum);
    };
  };
});
