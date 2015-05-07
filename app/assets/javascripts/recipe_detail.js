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

    var recIng = recipe['ingredients'].replace(/\n\n/g,"\n");
    recIng = recipe['ingredients'].replace(/\n\r/g,"\n");
    recIng = recIng.replace(/\n/g,"<br>");
    addToFullCard('ingredients row large-6 columns', "<h5>Ingredients:</h5> \n" + recIng);

    var recMet = recipe['method'].replace(/\n\n/g,"\n");
    recMet = recipe['method'].replace(/\n\r/g,"\n");
    recMet = recMet.replace(/\n/g,"<br>");
    addToFullCard('method large-6 columns', "<h5>Method:</h5> \n" + recMet);
    
    addToFullCard('spacer small-12 medium-12 large-12 columns', "");

    addToFullCard('cook-time small-4 medium-4 large-4 columns', "Cook: " + recipe['cook_time'] + " mins");
    addToFullCard('nbr-cooked small-4 medium-4 large-4 columns', "Rated " + recipe['nbr_times_cooked'] + " times");
    
    
    var fullStars = Array(Math.round(recipe['user_rating'])+1).join('★');
    var emptyStars = Array(5-Math.round(recipe['user_rating'])+1).join('☆');
    addToFullCard('rating small-4 medium-4 large-4 columns', fullStars + emptyStars);
    
    $('#recipe-detail').html($fullCard);
    $('.full-close-btn').on('click', recipeDetail.close);

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