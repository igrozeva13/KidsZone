  function openNav() {
      document.getElementById("sideNav").style.width = "100%";
  }

  function closeNav() {
      document.getElementById("sideNav").style.width = "0";
    }

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

  $(".dropdown-mobile").click(function() {
      $(this).next().slideToggle(500);
    })

  $(".question").click(function() {
        $(this).siblings().slideToggle(100);
      })

});
