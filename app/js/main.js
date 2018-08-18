// ===== About cards - hover =====
$('.about-card').hover(
  function(){
    $('.about-card').addClass('icon-hover');
    $(this).removeClass('icon-hover');
  },
  function(){
    $('.about-card').removeClass('icon-hover');
  }
);

// ===== Features - hover =====
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

// ===== Features - Slider =====
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
  focusOnSelect: true
});

// ===== Scroll links =====
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


// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});

// ===== Home - Particles effect =====
function particles() {
  $.each($(".particles"), function(){
     var bubblecount = ($(this).width()/50)*6;
     for(var i = 0; i <= bubblecount; i++) {
        var size = ($.rnd(30,40)/10);
        $(this).append('<span class="particle" style="top:' + $.rnd(5,90) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
     }
  });
}

jQuery.rnd = function(m,n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor( Math.random() * (n - m + 1) ) + m;
}

particles();

// ==== Change of img home ====
function cloudImage(){
  if ($(window).width() < 525) {
    $("#clouds").attr('src', 'assets/img/nubes_new_mobile.svg');
  } else {
    $("#clouds").attr('src', 'assets/img/nubes_new.svg');
  }
}

$(document).ready(function(){
  cloudImage()
})

window.onresize = cloudImage;
