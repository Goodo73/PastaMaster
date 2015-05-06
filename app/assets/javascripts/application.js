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
  $('.phils-magic-search').slideToggle(300);
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
  $('.phils-magic-search').hide();
  $('.phils-magic-button').on('click', searchToggle);
  $('.phils-magic-search-img').on('click', toggleSearchTerm);
  $('.phils-magic-search-img').on('click', toggleSearchIconStyle);
  $('.phils-magic-go').on('click', applyFilters.getFilterShowRecipes);
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
  var state = $(this).children('.card-copy')[0]["style"]["cssText"];
  if (state === 'display: block;') {
    expandFullScreenView.call(this);
  }
  $(this).children('.card-copy').slideToggle(300);
}

function expandFullScreenView() {
  $.ajax({
    url: '/api/recipes/' + $(this)[0]['dataset']['id'],
    dataType: 'json'
  }).done(function(data) {
    recipeDetail.scroll = $(window).scrollTop();
    recipeDetail.render(data);
    recipeDetail.displayDetailed();
  });
}

function windowSizeCheck() {
  $('.card').off('click', expandFullScreenView);
  $('.card').off('click', cardCopySlide);
  if ($(window).width() < 656){
    cardCopyHide();
    $('.card').on('click', cardCopySlide);
  } else {
    cardCopyShow();
    $('.card').on('click', expandFullScreenView);
  }
}

$(document).ready(function() {
  windowSizeCheck();
  $(window).resize(windowSizeCheck);
});
// -------------------------------

// ------ Modal animation ------

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

