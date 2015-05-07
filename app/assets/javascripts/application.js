// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

//= require api_accessor
//= require search_filters
//= require recipe_detail



// ------ Animation for header ------
$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  var userToggle = $('#js-mobile-user').unbind();
  $('#js-navigation-user').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

  userToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-user').slideToggle(function(){
      if($('#js-navigation-user').is(':hidden')) {
        $('#js-navigation-user').removeAttr('style');
      }
    });
  });
});
//  ---------------------------------


// ----------- Search slide -----------
function searchToggle() {
  $('.search-wrapper').slideToggle(300);
}

function toggleSearchTerm() {
  var category = $(this)[0]['dataset']['filter'];
  var idxOf = applyFilters.searchCategories.indexOf(category)
  if (idxOf === -1) {
    applyFilters.searchCategories.push(category);
  } else {
    applyFilters.searchCategories.splice(idxOf, 1);
  }
}

function toggleSearchIconStyle() {
  $(this).toggleClass('icon-selected');
}

$(document).ready(function() {
  $('.search-wrapper').hide();
  $('.search-dropdown').on('click', searchToggle);
  $('.search-img').on('click', toggleSearchTerm);
  $('.search-img').on('click', toggleSearchIconStyle);
  $('.search-execute').on('click', applyFilters.getFilterShowRecipes);
  $('.search-execute').on('click', searchToggle);
});
// ------------------------------------


// ----------- Dish slide -----------
function cardCopyHide() {
  $('.card-copy').hide();
}

function cardCopyShow() {
  $('.card-copy').show();
}

function cardCopySlide() {
  $(this).children('.card-copy').slideToggle(300);
}

function expandFullScreenView() {
  $.ajax({
    url: '/api/recipes/' + $(this).parent().parent()[0]['dataset']['id'],
    dataType: 'json'
  }).done(function(data) {
    recipeDetail.scroll = $(window).scrollTop();
    recipeDetail.render(data);
    recipeDetail.displayDetailed();
  });
}

function windowSizeCheck() {
  $('.card').off('click', cardCopySlide);
  if ($(window).width() < 656) {
    cardCopyHide();
    $('.card').on('click', cardCopySlide);
  } else {
    cardCopyShow();
  }
}

$(document).ready(function() {
  windowSizeCheck();
  $(window).resize(windowSizeCheck);
});
// -------------------------------

// ------ Sign-up / Login Modal animation ------

$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
//  ---------------------------------

// ------ About Modal animation ------

$(function() {
  $("#modal-2").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
//  ---------------------------------

// ------ Sign-up / Login form ------

$(document).ready(function($) {
  tab = $('.tabs h3 a');

  tab.on('click', function(event) {
    event.preventDefault();
    tab.removeClass('active');
    $(this).addClass('active');

    tab_content = $(this).attr('href');
    $('div[id$="tab-content"]').removeClass('active');
    $(tab_content).addClass('active');
  });
});

//  ---------------------------------

