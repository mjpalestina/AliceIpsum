$(".quotebutton").click(function(){

  var amount = $('#quote_amount').val();

  for (i = 0; i < amount; i++ ) {

    var random_quote = quotes[Math.floor(Math.random()*quotes.length)];

      $(".randomquote").append(random_quote);

      console.log(random_quote);
      console.log(amount);
  };


});
