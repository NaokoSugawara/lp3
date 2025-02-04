console.log("Script loaded!");



// import Splide from '@splidejs/splide';

// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('.splide', {
//     type: 'loop',   // Enables infinite scrolling
//     perPage: 3,     // Number of slides visible per page
//     autoplay: true, // Auto slides transition
//     // width: 80%,
//     // padding: {left:100, right:100}
    
//   }).mount();
// });

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
      type   : 'slide',
      perPage: 3,      
      perMove: 1,      
      gap: '2%',     
      arrows: false,
    
      breakpoints: {   
          1024: { perPage: 2 },
          767: { perPage: 1 }
      }
  }).mount();
});