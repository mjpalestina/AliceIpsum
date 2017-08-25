new Clipboard('.copybutton');
$(".copybutton").click(function(){
console.log("Copy Me Clicked");
  });

$(".quotebutton").click(function(){

  $(".randomquote").empty();

  var amount = $('#quote_amount').val();

  for (i = 0; i < amount; i++ ) {

    var random_quote = quotes[Math.floor(Math.random()*quotes.length)];

      $(".randomquote").append("<p>" + random_quote + "</p>");

      console.log(random_quote);
      console.log(amount);
  };

});
