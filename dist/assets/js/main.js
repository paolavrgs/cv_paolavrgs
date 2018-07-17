// ABOUT HOVER
$('.about-card').hover(
  function(){
    $('.about-card').addClass('icon-hover');
    $(this).removeClass('icon-hover');
  },
  function(){
    $('.about-card').removeClass('icon-hover');
  }
);

//FEATURES HOVER
$('.icon-circle').hover(
  function(){
    $('.icon-circle').addClass('feature_gray');
    $(this).removeClass('feature_gray');

    var id = $(this).prop('id');
    $('.feature-img img, .feature-text span').removeClass('active')
    $('.' + id).addClass('active')
  },
  function(){
    $('.icon-circle').removeClass('feature_gray');
  }
);

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

$("a").click(function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 50
    }, 1500, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});
