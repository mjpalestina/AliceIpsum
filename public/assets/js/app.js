$(".quotebutton").click(function(){

  var random_quote = quotes[Math.floor(Math.random()*quotes.length)];

    $(".randomquote").html(random_quote);

    console.log(random_quote);
});
