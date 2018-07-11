// ABOUT HOVER
$('#control').hover(function(ev) {

  var hover = ['blog','gallery','create'];

  $.each( hover, function(index, val) {
    $('.icon-' + val).addClass('icon-' + val + '_hover').removeClass('icon-' + val);
    $('#' + val + ' ' + 'h1').addClass('card-title_hover');
  });

  // Mouse leave
  $('#control').mouseleave(function() {
    $.each( hover, function(index, value) {
      $('.icon-' + value + '_hover').addClass('icon-' + value).removeClass('icon-' + value + '_hover');
      $('#' + value + ' ' + 'h1').removeClass('card-title_hover');
    });
  });
})

$('#blog').hover(function(ev) {

  var hover = ['control','gallery','create'];

  $.each( hover, function(index, val) {
    $('.icon-' + val).addClass('icon-' + val + '_hover').removeClass('icon-' + val);
    $('#' + val + ' ' + 'h1').addClass('card-title_hover');
  });

  // Mouse leave
  $('#blog').mouseleave(function() {
    $.each( hover, function(index, value) {
      $('.icon-' + value + '_hover').addClass('icon-' + value).removeClass('icon-' + value + '_hover');
      $('#' + value + ' ' + 'h1').removeClass('card-title_hover');
    });
  });
})

$('#gallery').hover(function(ev) {

  var hover = ['blog','control','create'];

  $.each( hover, function(index, val) {
    $('.icon-' + val).addClass('icon-' + val + '_hover').removeClass('icon-' + val);
    $('#' + val + ' ' + 'h1').addClass('card-title_hover');
  });

  // Mouse leave
  $('#gallery').mouseleave(function() {
    $.each( hover, function(index, value) {
      $('.icon-' + value + '_hover').addClass('icon-' + value).removeClass('icon-' + value + '_hover');
      $('#' + value + ' ' + 'h1').removeClass('card-title_hover');
    });
  });
})

$('#create').hover(function(ev) {

  var hover = ['blog','gallery','control'];

  $.each( hover, function(index, val) {
    $('.icon-' + val).addClass('icon-' + val + '_hover').removeClass('icon-' + val);
    $('#' + val + ' ' + 'h1').addClass('card-title_hover');
  });

  // Mouse leave
  $('#create').mouseleave(function() {
    $.each( hover, function(index, value) {
      $('.icon-' + value + '_hover').addClass('icon-' + value).removeClass('icon-' + value + '_hover');
      $('#' + value + ' ' + 'h1').removeClass('card-title_hover');
    });
  });
})

//FEATURES HOVER
$('#red').hover(function(ev) {
  var features = ['light-blue','dark-blue','dark-red'];

  $.each( features, function(index, a) {
    $('#' + a).addClass('feature_gray');
  });

  // Mouse leave
  $('#red').mouseleave(function() {
    $.each( features, function(index, r) {
      $('#' + r).removeClass('feature_gray');
    });
  });
})

$('#light-blue').hover(function(ev) {
  var features = ['red','dark-blue','dark-red'];

  $.each( features, function(index, a) {
    $('#' + a).addClass('feature_gray');
  });

  // Mouse leave
  $('#light-blue').mouseleave(function() {
    $.each( features, function(index, r) {
      $('#' + r).removeClass('feature_gray');
    });
  });
})

$('#dark-blue').hover(function(ev) {
  var features = ['red','light-blue','dark-red'];

  $.each( features, function(index, a) {
    $('#' + a).addClass('feature_gray');
  });

  // Mouse leave
  $('#dark-blue').mouseleave(function() {
    $.each( features, function(index, r) {
      $('#' + r).removeClass('feature_gray');
    });
  });
})

$('#dark-red').hover(function(ev) {
  var features = ['red','dark-blue','light-blue'];

  $.each( features, function(index, a) {
    $('#' + a).addClass('feature_gray');
  });

  // Mouse leave
  $('#dark-red').mouseleave(function() {
    $.each( features, function(index, r) {
      $('#' + r).removeClass('feature_gray');
    });
  });
})

// SLIDERS
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
