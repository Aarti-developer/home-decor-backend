"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

!function (a, b, c, d) {
  var e = a(b);
  a.fn.lazyload = function (f) {
    function g() {
      var b = 0;
      i.each(function () {
        var c = a(this);
        if (!j.skip_invisible || c.is(":visible")) if (a.abovethetop(this, j) || a.leftofbegin(this, j)) ;else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
          if (++b > j.failure_limit) return !1;
        } else c.trigger("appear"), b = 0;
      });
    }

    var h,
        i = this,
        j = {
      threshold: 0,
      failure_limit: 0,
      event: "scroll",
      effect: "show",
      container: b,
      data_attribute: "original",
      skip_invisible: !0,
      appear: null,
      load: null,
      placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
    };
    return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function () {
      return g();
    }), this.each(function () {
      var b = this,
          c = a(b);
      b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function () {
        if (!this.loaded) {
          if (j.appear) {
            var d = i.length;
            j.appear.call(b, d, j);
          }

          a("<img />").bind("load", function () {
            var d = c.attr("data-" + j.data_attribute);
            c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
            var e = a.grep(i, function (a) {
              return !a.loaded;
            });

            if (i = a(e), j.load) {
              var f = i.length;
              j.load.call(b, f, j);
            }
          }).attr("src", c.attr("data-" + j.data_attribute));
        }
      }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function () {
        b.loaded || c.trigger("appear");
      });
    }), e.bind("resize", function () {
      g();
    }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function (b) {
      b.originalEvent && b.originalEvent.persisted && i.each(function () {
        a(this).trigger("appear");
      });
    }), a(c).ready(function () {
      g();
    }), this;
  }, a.belowthefold = function (c, f) {
    var g;
    return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold;
  }, a.rightoffold = function (c, f) {
    var g;
    return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold;
  }, a.abovethetop = function (c, f) {
    var g;
    return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height();
  }, a.leftofbegin = function (c, f) {
    var g;
    return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width();
  }, a.inviewport = function (b, c) {
    return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c));
  }, a.extend(a.expr[":"], {
    "below-the-fold": function belowTheFold(b) {
      return a.belowthefold(b, {
        threshold: 0
      });
    },
    "above-the-top": function aboveTheTop(b) {
      return !a.belowthefold(b, {
        threshold: 0
      });
    },
    "right-of-screen": function rightOfScreen(b) {
      return a.rightoffold(b, {
        threshold: 0
      });
    },
    "left-of-screen": function leftOfScreen(b) {
      return !a.rightoffold(b, {
        threshold: 0
      });
    },
    "in-viewport": function inViewport(b) {
      return a.inviewport(b, {
        threshold: 0
      });
    },
    "above-the-fold": function aboveTheFold(b) {
      return !a.belowthefold(b, {
        threshold: 0
      });
    },
    "right-of-fold": function rightOfFold(b) {
      return a.rightoffold(b, {
        threshold: 0
      });
    },
    "left-of-fold": function leftOfFold(b) {
      return !a.rightoffold(b, {
        threshold: 0
      });
    }
  });
}(jQuery, window, document);

(function ($) {
  var _ref, _ref2;

  $(document).ready(function () {
    $("img.lazy").lazyload({
      effect: "fadeIn"
    });
  });
  /*  Menu modal */

  if ($('#menu__wrapper').length > 0) {
    $('#menu__wrapper').each(function () {
      $(this).iziModal({
        width: 1137,
        overlayColor: 'rgba(0, 0, 0, 0.7)',
        overlay: true,
        closeButton: true,
        overlayClose: true,
        zIndex: 9999
      });
    });
  }

  ; // Thanks modal

  /******************************************/

  /*  Slider features */

  var mySwiper = new Swiper('.features__slider-wrapper .swiper-container', {
    speed: 1000,
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev'
    }
  });
  /******************************************/

  var calc = $('.calc__slider-wrap > .slider').slick({
    loop: false,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    accessibility: false,
    infinite: false,
    speed: 500,
    cssEase: 'ease-in-out',
    touchThreshold: 100
  });
  var a = 0,
      m = 1,
      btnNextCalc = $('.btn--next'),
      line = document.getElementById('progress_line'),
      indexbar = 20;
  btnNextCalc.on('click', function () {
    if (m == 1) {
      document.querySelectorAll('.step-1 input[type="checkbox"]').forEach(function (e) {
        if (e.checked) {
          console.log(e.checked);
          console.log('start---1'); // console.log(++a);

          m = 2;
          console.log(m);
        }
      });

      if (m == 2) {
        calc.slick('slickNext');
        line.style.height = indexbar + '%';
        line.style.transition = 'all .3s ease-out';
        var text = document.getElementById('progress_text');
        text.innerText = indexbar + '%';

        if (indexbar !== 100) {
          indexbar = indexbar + 25;
        }

        ;
        $('.calc__swipe').addClass('calc__swipe--animation');
        console.log('z');
      }
    } else if (m == 2) {
      console.log('start---2');
      m = 3;
      setTimeout(function () {
        if (m == 3) {
          console.log('startprev---3');
          calc.slick('slickNext');
          line.style.height = indexbar + '%';
          line.style.transition = 'all .3s ease-out';
          var text = document.getElementById('progress_text');
          text.innerText = indexbar + '%';

          if (indexbar !== 100) {
            indexbar = indexbar + 25;
          }

          ;
        }
      }, 100);
    } else if (m == 3) {
      document.querySelectorAll('.step-3 input[type="checkbox"]').forEach(function (e) {
        if (e.checked) {
          m = 4;
          console.log('start---3');
        }

        ;
      });

      if (m == 4) {
        calc.slick('slickNext');
        line.style.height = indexbar + '%';
        line.style.transition = 'all .3s ease-out';
        var text = document.getElementById('progress_text');
        text.innerText = indexbar + '%';

        if (indexbar !== 100) {
          indexbar = indexbar + 30;
        }

        ;
      }
    } else if (m == 4) {
      document.querySelectorAll('.step-4 input[type="checkbox"]').forEach(function (e) {
        if (e.checked) {
          console.log('start---4');
          m = 5;
        }
      });

      if (m == 5) {
        calc.slick('slickNext');
        calcBtn.slideNext();
        line.style.height = indexbar + '%';
        line.style.transition = 'all .3s ease-out';
        var text = document.getElementById('progress_text');
        text.innerText = indexbar + '%';

        if (indexbar !== 100) {
          indexbar = indexbar + 25;
        }

        ;
      }
    } else if (m == 5) {// line.style.height = indexbar + '%';
      // line.style.transition = 'all .3s ease-out';
      // var text = document.getElementById('progress_text');
      //     text.innerText = indexbar+'%';
      // if(indexbar !== 100){
      //     indexbar = indexbar + 5;
      // };
    }
  });
  var hero = new Swiper('.mr-hero .swiper-container', {
    speed: 5000,
    loop: true,
    spaceBetween: 0,
    simulateTouch: false,
    autoheight: true,
    swipe: false
  });
  setInterval(function () {
    hero.slideNext();
  }, 8000);
  /******************************************/

  /*  Slider Calculate steps */

  $(".calc__progressbar").ionRangeSlider({
    min: 0,
    max: 999,
    step: 1,
    from: 5,
    grid_num: 12,
    swipe: true,
    top: 100,
    values: 0,
    grid: true,
    grid_margin: 400,
    to_min: 10,
    postfix: 'м<sup>2</sup>',
    force_edges: true,
    // force UI in the box
    hide_min_max: true // show/hide MIN and MAX labels

  });
  /******************************************/

  var calced = new Swiper('.step-3__slider > .swiper-container', (_ref = {
    speed: 1000,
    infinity: false,
    spaceBetween: 30,
    swipe: false,
    slidesPerView: 'auto'
  }, _defineProperty(_ref, "spaceBetween", 30), _defineProperty(_ref, "observer", true), _defineProperty(_ref, "observeParents", true), _defineProperty(_ref, "simulateTouch", true), _defineProperty(_ref, "fadeEffect", {
    Crossfade: true
  }), _defineProperty(_ref, "navigation", {
    nextEl: '.step-3__prev-slider',
    prevEl: '.step-3__next-slider'
  }), _defineProperty(_ref, "breakpoints", {
    1100: {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },
    512: {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
  }), _ref));
  /******************************************/

  var calced = new Swiper('.step-4__slider > .swiper-container', (_ref2 = {
    speed: 1000,
    infinity: false,
    spaceBetween: 30,
    swipe: false,
    slidesPerView: 'auto'
  }, _defineProperty(_ref2, "spaceBetween", 30), _defineProperty(_ref2, "observer", true), _defineProperty(_ref2, "observeParents", true), _defineProperty(_ref2, "simulateTouch", true), _defineProperty(_ref2, "fadeEffect", {
    Crossfade: true
  }), _defineProperty(_ref2, "navigation", {
    nextEl: '.step-3__prev-slider',
    prevEl: '.step-3__next-slider'
  }), _defineProperty(_ref2, "breakpoints", {
    1100: {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },
    512: {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
  }), _ref2));
  /******************************************/

//   var calcBtn = new Swiper('.calc__slider-wrap-btns .swiper-container', {
//     speed: 1000,
//     simulateTouch: false,
//     touchRatio: 0
//   });
//   $('body').on('submit', 'form', function (e) {
//     e.preventDefault();
//     var formData = $(this).serializeArray();
//     $.ajax({
//       type: 'POST',
//       url: '/wp-admin/admin-ajax.php',
//       data: formData,
//       beforeSend: function beforeSend() {
//         $('button[type="submit"]').attr('disabled', true);
//       },
//       success: function success(data) {
//         console.log('success', formData);
//         $('#modal-form').iziModal('close');
//         $('.modal-thanks__wrap').iziModal('open');
//         setTimeout(function () {
//           $('.modal-thanks__wrap').iziModal('close');
//         }, 5000);
//       },
//       error: function error(data) {
//         console.log('error: ' + formData);
//       }
//     });
//     return false;
//   });
  /******************************************/

  /******************************************/

  $('a[data-scroll]').click(function () {
    $('#menu__wrapper').iziModal('close');
    var offset = 0; // <-- change the value here

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top + offset
        }, 1000, 'swing');
        return false;
      }
    }
  });
  /******************************************/
  // $('.widjet').addClass('hidden');
  $('.widjet, .phone').css('visibility', 'hidden');
  $(window).scroll(function () {
    var footerOffset = $('.footer').offset().top;
    var footerHeight = $('.footer').height();
    $('.widjet, .phone').css('transition', 'all .5s ease');

    if ($(this).scrollTop() > 100 && $(this).scrollTop() < footerOffset - 1000) {
      $('.widjet, .phone').css({
        'opacity': '1',
        'transition': 'all .5s ease',
        'visibility': 'visible'
      });
    } else {
      $('.widjet, .phone').css({'opacity': '0', 'visibility': 'hidden'});
    }
  });
  /******************************************/

  $('.footer__arrow-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
  /******************************************/

  $('.checkcontainer').each(function (index) {
    console.log(this);
    $(this).on('click', function () {
      console.log(this);
      $(this).children('input[type="checkbox"]').checked;
      $('.checkmark').toggleClass('check');
      console.log($(this).children('input[type="checkbox"]'));
    });
  });
  /*  Validation phone input */

  $('input[type="tel"]').inputmask({
    "mask": "(099) 999-99-99"
  });
  $('input[type="tel"]').on('change focus keyup keydown', function () {
    var userName = $(this).val();

    if (userName.length > 2) {
      $(this).removeClass('error-phone');
    } else {
      $(this).addClass('error-phone');
    }
  });
  $('input[type="tel"]').on('change keyup keydown', function () {
    var myVar = $(this).val();
    var digit = ('' + myVar)[2];

    if (digit == '0') {
      $(this).val(' ');
      $(this).blur().focus();
    }

    $('button[type="submit"]').attr('disabled', 'disabled');
    var re = new RegExp("_$");

    if (!re.test(myVar)) {
      $(this).removeClass('error-phone');
      $('button[type="submit"]').removeAttr('disabled');
      $('button[type="submit"]').removeAttr('disabled').find('.shine-button__el').addClass('animate');
    } else {
      $(this).addClass('error-phone');
    }
  });
  /******************************************/

  $(window).scroll(function () {
    var footerOffset = $('.btn--advantage').offset().top;
    var footerHeight = $('.btn--advantage').height();
    $('.btn--advantage').css('transition', 'all .5s ease');

    if ($(this).scrollTop() > footerOffset - footerHeight - 500) {
      setTimeout(function () {
        $('.btn--advantage').addClass('advantage_animated');
      }, 2000);
    } else {
      $('.btn--advantage').removeClass('advantage_animated');
    }
  });
  $('.typed-cursor').hide();
  AOS.init({
    startEvent: 'load',
    duration: 1200,
    easing: 'ease-in-out-back'
  });
})(jQuery);



// Read More button
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}