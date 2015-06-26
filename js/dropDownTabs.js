$(function(){

  // DropDown Menu //

  $('li.menu-icon').click(function() {
      $('li.nav').slideToggle();
    });

  // Fix hidden links on window resize

  $(window).resize(function() {
    if ($(window).width() > 790) {
      $('.nav').removeAttr('style');
    }
  });

  // Tabs //

 $( "#tabs" ).tabs({
      event: "mouseover"
    });

}); // $function closure