var applyFilters = {
  getRecipes: function() {
    $.ajax({
      url: '/api/recipes/list',
      dataType: 'json'
    }).done(function(data){
      applyFilters.recipes = data;
    });
  },
  searchTerms: ['garlic','bacon'],
  filterRecipes: function() {
    if (applyFilters.searchTerms.length > 0) {
      applyFilters.recipes = $.map(applyFilters.recipes, function(recipe) {
        var count = 0;
        $.each(applyFilters.searchTerms, function(index, term) {
          var re = new RegExp(term.toLowerCase());
          if (re.test(recipe['ingredients'].toLowerCase())) {
            count++;
          }
        })
        if (count === applyFilters.searchTerms.length) {
          return recipe;
        }
      });
    }
  },
  displayRecipes: function() {
    if (applyFilters.recipes.length === 0 ) {
      $('.cards').append("No dishes matching those criteria. Please remove some filters.");
    } else {
      $.each(applyFilters.recipes, function(index, recipe) {
        applyFilters.render(recipe);
      });
    }
  },
  render: function(recipe) {

    $img = $('<img>').attr('src', recipe['image_url']);
    $divImg = $('<div>').addClass('card-image').append($img);

    $divHeader = $('<div>').addClass('card-header').append(recipe['title']);

    $p = $('<p>').html(recipe['description']);
    $divCopy = $('<div>').addClass('card-copy').append($p);

    $divCard = $('<div>').addClass('card');
    $divCard.append($divImg);
    $divCard.append($divHeader);
    $divCard.append($divCopy);

    $('.cards').append($divCard);
  }
};