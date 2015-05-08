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
    var starArray = (fullStars + emptyStars).split("");
    var count = 0;
    starArray = $.map(starArray, function(star) {
      count++;
      return "<span class='star-" + count + "'>" + star + "</span>";
    });

    addToFullCard('rating small-4 medium-4 large-4 columns', starArray.join(""));    
    
    $('#recipe-detail').html($fullCard);

    $('.star-1').on('click', starRating.star1Rate);

    $('.star-2').on('click', starRating.star1Rate);
    $('.star-2').on('click', starRating.star2Rate);
    
    $('.star-3').on('click', starRating.star1Rate);
    $('.star-3').on('click', starRating.star2Rate);
    $('.star-3').on('click', starRating.star3Rate);
    
    $('.star-4').on('click', starRating.star1Rate);
    $('.star-4').on('click', starRating.star2Rate);
    $('.star-4').on('click', starRating.star3Rate);
    $('.star-4').on('click', starRating.star4Rate);
    
    $('.star-5').on('click', starRating.star1Rate);
    $('.star-5').on('click', starRating.star2Rate);
    $('.star-5').on('click', starRating.star3Rate);
    $('.star-5').on('click', starRating.star4Rate);
    $('.star-5').on('click', starRating.star5Rate);   


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

var starRating = {
  disableRatings: function() {
    $('.star-1').off('click', starRating.star1Rate);

    $('.star-2').off('click', starRating.star1Rate);
    $('.star-2').off('click', starRating.star2Rate);
    
    $('.star-3').off('click', starRating.star1Rate);
    $('.star-3').off('click', starRating.star2Rate);
    $('.star-3').off('click', starRating.star3Rate);
    
    $('.star-4').off('click', starRating.star1Rate);
    $('.star-4').off('click', starRating.star2Rate);
    $('.star-4').off('click', starRating.star3Rate);
    $('.star-4').off('click', starRating.star4Rate);
    
    $('.star-5').off('click', starRating.star1Rate);
    $('.star-5').off('click', starRating.star2Rate);
    $('.star-5').off('click', starRating.star3Rate);
    $('.star-5').off('click', starRating.star4Rate);
    $('.star-5').off('click', starRating.star5Rate);  
  },
  star1Rate: function() {
    $('.star-1').addClass('star-selected');
    $('.star-1').html('★');
    starRating.disableRatings();
  },
  star2Rate: function() {
    $('.star-2').addClass('star-selected');
    $('.star-2').html('★');
  },
  star3Rate: function() {
    $('.star-3').addClass('star-selected');
    $('.star-3').html('★');
  },
  star4Rate: function() {
    $('.star-4').addClass('star-selected');
    $('.star-4').html('★');
  },
  star5Rate: function() {
    $('.star-5').addClass('star-selected');
    $('.star-5').html('★');
  }
}