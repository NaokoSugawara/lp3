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
      type   : 'loop',  // Ensures infinite looping
      perPage: 1,      // Shows exactly 3 slides
      perMove: 1,      // Moves one slide at a time
      gap: '10px',     // Adjust spacing between slides if necessary
      // focus: 'center', // Ensures active slide stays centered
      breakpoints: {   // Adjusts slides per view for smaller screens
          1024: { perPage: 2 },
          768: { perPage: 1 }
      }
  }).mount();
});
