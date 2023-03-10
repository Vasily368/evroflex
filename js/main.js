
$(document).ready(function(){
  $('.production__slider').slick({
     responsive: [
      {
        breakpoint: 945,
        settings: {
          arrows: false
        }
      }
      ]
  });

  $('.product__slider').slick({
    dots:true,
    slidesToShow: 4,
    slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true
        }
      },

      {
        breakpoint: 945,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },

      {
        breakpoint: 827,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
       {
        breakpoint: 645,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots:false
        }
      }
      ]
  });
});

$(document).ready(function(){
  $('.content__btn').click(function(){
    $('.content__wrapper').slideToggle(900, function(){
      if ($(this).is(':hidden')) {
        $('.content__btn-title').html('Показать все решения');
        $('.content__btn').addClass('content__btn-hidden');
      } else {
        $('.content__btn-title').html('СКРЫТЬ все решения');
        $('.content__btn').removeClass('content__btn-hidden');
      }             
    });
    return false;
  });
});



$(document).ready(function(){
  $(".header__menu-btn").on("click",function(){
   $(".header__menu").slideToggle("slow");
    });
});




$(document).ready(function () {
  $('.hidden__btn').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.forma__hidden-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});



