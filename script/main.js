$(document).ready(function(){

  function openNav() {
      document.getElementById("sideNav").style.width = "100%";
  }

  function closeNav() {
      document.getElementById("sideNav").style.width = "0";
    }

  $(".dropdown-1").click(function() {
      $(".mobile_submenu-1").slideToggle(500);
    })

  $(".dropdown-2").click(function() {
        $(".mobile_submenu-2").slideToggle(500);
      })

  $(".question").click(function() {
        $(this).siblings().slideToggle(100);
      })

});
