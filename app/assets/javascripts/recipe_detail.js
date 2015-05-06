var recipeDetail = {
  scroll: 0,
  render: function(recipe) {
    $fullCard = $('<div>').addClass('full-card');

    function addToFullCard(className, contents) {
      var $element = $('<div>').addClass('full-'+className);
      $element.html(contents);
      $fullCard.append($element);  
    }

    addToFullCard('close-btn', $('<p>').html('close'));
    addToFullCard('image', $('<img>').attr('src', recipe['image_url']));
    addToFullCard('header', recipe['title']);
    addToFullCard('copy', recipe['description']);
    addToFullCard('ingredients', recipe['ingredients']);
    addToFullCard('method', recipe['method']);
    addToFullCard('rating', recipe['user_rating']);
    addToFullCard('cook-time', recipe['cook_time']);
    addToFullCard('nbr-cooked', recipe['nbr_times_cooked']);
    
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