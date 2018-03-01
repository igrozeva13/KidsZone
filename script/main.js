//Open Navigation
  function openNav() {
      document.getElementById("sideNav").style.width = "100%";
  }

//Close Navigation
  function closeNav() {
      document.getElementById("sideNav").style.width = "0";
    }

//Contact Us Map

  function initMap() {
            var uluru = {lat: 34.857480, lng: -82.334496};
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 15,
              center: uluru
            });
            var marker = new google.maps.Marker({
              position: uluru,
              map: map
            });
          }

$(document).ready(function() {
  //mobile dropdown menu
  $(".dropdown-mobile").click(function() {
      $(this).next().slideToggle(500);
    })

  //FAQ
  $(".question").click(function() {
        $(this).siblings().slideToggle(100);
      })


  //Slideshow
  var slideIndex = 0;
  showSlides();

  function showSlides() {
      var slides = document.getElementsByClassName("mySlides");
      for (var i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1 }
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 4000);
  }
});
