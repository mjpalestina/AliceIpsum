//Materilize selct setup
$(document).ready(function() {
  $('select').material_select();
});

//Copy to clipboard function
new Clipboard('.copybutton');

$(".copybutton").click(function(){
    console.log("Copy Me- Clicked");
  });

//Clear Button
$(".clearAliceIpsum").click(function(){
    $(".AliceIpsumLocation").empty();
      console.log("Clear Me- Clicked");
  });

//Blank array to hold selection
var aaiw = [];

//Ipsum generation
$(".makeAliceIpsum").click(function(){

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
    console.log("Chapters:", chapter);

  //Set null input to be all for error catching
  if (chapter == null ) {
      var chapter = ["aaiw_all"];
    };

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

 // console.log("ipsum:", ipsum);

//Check if Paragraph Tags are requested
  if (add_p_tag == true) {
    var p_open = "&lt;p&gt;";
    var p_close = "&lt;/p&gt;";
  };

//Loop through amount to output random AliceIpsum
  //If Characters is selected
  if (output_type.includes("book_characters")) {
    var random_ipsum = ipsum[Math.floor(Math.random()*ipsum.length)];
    var character_ipsum = random_ipsum.substring(0, amount ++);
    $(".AliceIpsumLocation").prepend(p_open, character_ipsum, p_close, " ");
      console.log("Character- random_ipsum:", character_ipsum);

  //If Paragraph is selected
  } else if (output_type.includes("book_paragraphs")) {
    for (i = 0; i < amount; i++ ) {
      var random_ipsum = ipsum[Math.floor(Math.random()*ipsum.length)];
    $(".AliceIpsumLocation").prepend("<p>", p_open, random_ipsum, p_close, + "</p>");
      console.log("Chapter- random_ipsum:", random_ipsum);
    };

  //If Sentences is selected
  } else if (output_type.includes("book_sentences")) {

      console.log("Chapter- book_sentences:", random_ipsum);

  } else if (output_type.includes("book_words")) {

      console.log("Chapter- book_words:", random_ipsum);

    };

});
