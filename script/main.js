$(document).ready(function(){

  function openNav() {
      document.getElementById("sideNav").style.width = "100%";
  }

  function closeNav() {
      document.getElementById("sideNav").style.width = "0";
    }

  $(".dropdown").click(function() {
    $(".mobile_submenu").toggle();
  })

});
