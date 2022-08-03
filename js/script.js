$(function () {
  $(window).scroll(function () {
    // sticky menu start
    //this is for sticky menu
    var sticky = $(this).scrollTop()
    if (sticky > 50) {
      $(".menu-bar").addClass("sticky-menu")
    } else {
      $(".menu-bar").removeClass("sticky-menu")
    }
    //this is for sticky menu padding
    if (sticky > 50) {
      $(".logo").addClass("scroll-logo")
    } else {
      $(".logo").removeClass("scroll-logo")
    }
    // sticky menu end


    // back to top start
    //back to to button animation
    if (sticky > 50) {
      $(".bottom-to-top").fadeIn(300)
    } else {
      $(".bottom-to-top").fadeOut(300)
    }
  })
  //back to top button click
  $(".bottom-to-top").click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 2000)
  })
  // back to top end
  // banner slider start
  $('.banner-slide-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: true,
    prevArrow: '.ban-left',
    nextArrow: '.ban-right'
  });
  // banner slider end

  // counter up start
  $('.counter').counterUp({
    delay: 10,
    time: 1200,
  });
  // counter up end

  // brand slider start
  $('.brand-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    initialSlide: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      //  for large device
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
      //  for medium device
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
      //  for small device
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
      //  for xtra small device
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }

      ]

  });
  // brand slider end

  // venobox start
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
  });
  // for video
  new VenoBox({
    selector: '.my-video-links',
  });
  // venobox end


  //smooth scroll start

  //  for menu
  var html_body = $('html, body');
  $('.nav-item a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 125
        }, 1500);
        return false;
      }
    }
  });
  //  for logo
  $('.navbar-brand img').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 125
        }, 1500);
        return false;
      }
    }
  });
  //  smooth scrool end

  //  nice scrool start
  $(function() {  
    $("#port-2nd-drop").niceScroll({cursorcolor:"#00F"});
});
  //  nice scrool end
})
// custom mobile menu start
let mobile_menu = document.getElementById("mobile-menu");
let bars = document.querySelector(".bars");
let line_one = document.querySelector(".line-one");
let line_two = document.querySelector(".line-two");
let line_three = document.querySelector(".line-three");


bars.addEventListener("click", function () {
  mobile_menu.classList.toggle("slide-menu");
  line_one.classList.toggle("close-line1");
  line_two.classList.toggle("close-line2");
  line_three.classList.toggle("close-line3");
})

// custom mobile menu end