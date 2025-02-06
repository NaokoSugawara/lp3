
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
      type   : 'slide',
      perPage: 3,      
      perMove: 1,      
      gap: '2%',     
      arrows: false,
    
      breakpoints: {   
          1024: { perPage: 2 },
          767: { type: 'loop', autoplay: true, interval: 2000, perPage: 1, padding: '5%', gap: '10%', }
      },
      classes: {
        pagination: "splide__pagination your-class-pagination",
        page: "splide__pagination__page your-class-page",
      },
  }).mount();
});