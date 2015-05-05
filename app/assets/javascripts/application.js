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

function windowSizeCheck() {
  $('.card').off('click', cardCopySlide);
  if ($(window).width() < 656){
    cardCopyHide();
    $('.card').on('click', cardCopySlide);
  } else {
    cardCopyShow();
  }
}

$('document').ready(function() {
  windowSizeCheck();
  $(window).resize(windowSizeCheck);
});
// -------------------------------