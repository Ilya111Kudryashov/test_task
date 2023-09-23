$(function(){
  $('.product-list').slick({
        arrows:true,
        dots:false,
        infinite: true,
        slidesToShow: 19,
        slidesToScroll: 1,
        prevArrow:' <button class="slick-btn slick-prev"><img src="./images/icons/arrow-left.svg" alt="prev"></button>',
        nextArrow:'<button class="slick-btn slick-next"><img src="./images/icons/arrow-right.svg" alt="next"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 11,
              slidesToScroll: 1,
              infinite: true,
              arrows:false,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
              infinite: true,
              arrows:false,
            }
          },
         
        ]
    });
});