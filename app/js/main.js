$('.modal#keppleradmin').on('shown.bs.modal', function () {
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
  });
})

WebFont.load({
  google: {
    families: ['Quicksand:400,500,700']
  }
});