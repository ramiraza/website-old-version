// preloader script
/*global $*/
(function() {
  $(document).ready(function() {
    var today = new Date();
    $('body').fadeIn(1500).addClass('show');
    $('#year').html(today.getFullYear());
  });

  $(window).on('scroll', () => {
    var $navScroll = $('.navbarScroll');

    if($(window).scrollTop() >= 250 ) {
      $navScroll.fadeIn($(window).scrollTop() + 100)

    }
    else {
      $navScroll.fadeOut($(window).scrollTop() - 150)
    }
  })

  $('.carousel').slick({
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

})();
