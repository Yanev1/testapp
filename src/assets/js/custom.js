function myTest() {
    alert('Welcome to custom js');
}


$(document).ready(function() {

  "use strict";

// JQUERY LIGHT BOX

if ( $.isFunction($.fn.fluidbox) ) {
  $('a').fluidbox();
}

//ROUNDED TIMES COUNTDOWN

// if(isExists('#rounded-countdown')){
  var remainingSec = $('.countdown1').data('remaining-sec');
  $('.countdown1').ClassyCountdown({
    theme: "flat-colors-very-wide",
    end: $.now() + remainingSec
  });
// }
});


//     $(document).ready(function() {
//       var remainingSec = $('.countdown1').data('remaining-sec');
//       $('.countdown1').ClassyCountdown({
//     theme: "flat-colors-very-wide",
//     end: $.now() + remainingSec
// });
// });

// $(function() {
//   console.log("Hello!");
//     // alert('Hello, custom js');
// })
