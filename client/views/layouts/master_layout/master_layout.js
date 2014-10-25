
/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.MasterLayout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {
};

Template.MasterLayout.rendered = function () {
		$('#main-wrapper').click(function(){
			$(".main-header,.sidebar-left").removeClass("active" ,600, "easeOutSine" );
	        $(".mail-sidebar").removeClass("active" ,600, "easeOutSine" );
		});

		$('.sidebar').mCustomScrollbar({
		    theme:"light-thin",
		    scrollInertia:150,
		    autoHideScrollbar:true ,
		    advanced:{
		     updateOnContentResize: true,
		     updateOnBrowserResize: true
			 }
		});

		//Sidebar menus dropdown
		$('.sidemenu > li > a').click(function(e){
			console.log()
		 	if(!$('.sidebar').hasClass('sidebar-dropdown')){
				$('.sidemenu > li').children('ul').slideUp({ duration: 600, easing: "easeInOutQuart" });
			}
			if($(this).parent().children('ul').is(':hidden')){
				$(this).parent().children('ul').slideToggle({ duration: 600, easing: "easeInOutQuart" });
			}
		});

    $('#sidebar-collapse').click(function(){
     $('.sidemenu li ul').css('display','');
     $('.sidebar,.main-header').toggleClass( "sidebar-collapse");
    });

   //Sidebar Toggle when screen size is less
   $("#sidebar-toggle").click(function(e) {
      e.preventDefault();
      $(".main-header,.sidebar-left").toggleClass("active" ,600, "easeOutSine" );
      $(".mail-sidebar").toggleClass("active" ,600, "easeOutSine" );
   });

  //Panel options for removing and minimising panels
  $('.panel-options .fa-chevron-down').click(function(){
    $(this).parents('.panel').children('.panel-body').slideToggle("slow");
  });

  $('.panel-options .fa-times').click(function(){
    $(this).parents('.panel').remove();
  });

	//Popover
	$('#popover').popover();
	$('#popover-full-top').popover();
	$('#popover-top').popover();
	$('#popover-right').popover();
	$('#popover-left').popover();
	$('#popover-bottom').popover();

	//Tooltip
	$('#tooltip-top').tooltip();
	$('#tooltip-right').tooltip();
	$('#tooltip-left').tooltip();
	$('#tooltip-bottom').tooltip();

	//Loading Button
	$("#loading-example-btn").click(function() {
    $(this).button("loading"), setTimeout(function() {
      $("#loading-example-btn").button("reset");
      $("#loading-example-btn").html("Loading Done!");
      },2000);
	});

	//toggle gallery
	$('#toggle-gallery').on('change', function () {

		var borderless = $(this).is(':checked');
      $('#blueimp-gallery').data('useBootstrapModal', !borderless);
      $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
	});
};

Template.MasterLayout.destroyed = function () {
};


