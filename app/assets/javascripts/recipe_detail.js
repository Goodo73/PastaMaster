var recipeDetail = {
  scroll: 0,
  render: function(recipe) {
    $fullCard = $('<div>').addClass('full-card wrapper');

    function addToFullCard(className, contents) {
      var $element = $('<div>').addClass('full-'+className);
      $element.html(contents);
      $fullCard.append($element);  
    }

    addToFullCard('close-btn', $('<span>').html('X'));
    addToFullCard('image', $('<img>').attr('src', recipe['image_url']));
    addToFullCard('header row large-12', $('<h3>').html(recipe['title']));
    addToFullCard('copy row large-12', recipe['description']);

    var recIng = recipe['ingredients'].replace(/\n\n/g,"\n"); //fancy bit
    recIng = recipe['ingredients'].replace(/\n\r/g,"\n"); //fancy bit
    recIng = recIng.replace(/\n/g,"<br>");

    addToFullCard('ingredients row large-6 columns', "<h5>Ingredients:</h5> \n" + recIng);
    
    var recMet = recipe['method'].replace(/\n\n/g,"\n"); //fancy bit
    recMet = recipe['method'].replace(/\n\r/g,"\n"); //fancy bit
    recMet = recMet.replace(/\n/g,"<br>");
    
    addToFullCard('method large-6 columns', "<h5>Method:</h5> \n" + recMet);
    addToFullCard('cook-time small-4 medium-4 large-4 columns', "Cook time: " + recipe['cook_time'] + " minutes");
    addToFullCard('nbr-cooked small-4 medium-4 large-4 columns', "Rated " + recipe['nbr_times_cooked'] + " times");
    addToFullCard('rating small-4 medium-4 large-4 columns', recipe['user_rating'] + " stars");
    
    $('#recipe-detail').html($fullCard);
    $('.full-close-btn').on('click', recipeDetail.close);

    console.log(recipe['ingredients']);

  },
  displayDetailed: function() {
    $('.card').hide();
    $('#recipe-detail').show();
    $(window).scrollTop(0);
  },
  close: function() {
    $('#recipe-detail').hide();
    $('.card').show();
    $(window).scrollTop(recipeDetail.scroll);
  }
};