$('.mobile-nav-btn').click(function(e){
		$('.mobile-nav').toggle();
		// this prevents the browser from doing the default link action
		e.preventDefault();
	});
var $window = $(window);
	  $window.on('resize', function (){
        if ($window.width() > 800)
        {
            $('.mobile-nav').hide();
        }
    });