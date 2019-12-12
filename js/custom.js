$( document ).ready(function() {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Jan 12, 2020 11:25').getTime(),
  x = setInterval(function() {

    let now = new Date().getTime(),
        distance = countDown - now;

    document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    
    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S MY BIRTHDAY!;
    //}

  }, second)



  $('.gallery').owlCarousel({
    loop:true,
    items:1,
    margin:0,
    nav:true,
    navText: [
      "<span></span>",
      "<span></span>"
    ],
    dots: false,
    responsiveClass:true,
    responsive:{
        768:{
            items:4,
            nav:true,
            destroy: true,
        }
    }
})


});