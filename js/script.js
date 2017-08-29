$(document).ready(function() {
	$('.mobile-nav-btn').click(function(e) {
		$('.mobile-nav-btn').removeClass('display');
		$('.mobile-nav-btn-active').removeClass('hide');
		$('.mobile-nav-btn').addClass('hide');
		$('.mobile-nav-btn-active').addClass('display');
		var mobileNav = $(this).attr("class");
		console.log(mobileNav);
		$(".mobile-nav").addClass("show");
		e.preventDefault();
	})
	$('.mobile-nav-btn-active').click(function(e) {
		$('.mobile-nav-btn').removeClass('hide');
		$('.mobile-nav-btn-active').removeClass('display');
		$('.mobile-nav-btn').addClass('display');
		$('.mobile-nav-btn-active').addClass('hide');
		var mobileNavActive = $(this).attr("class");
		console.log(mobileNavActive);
		$(".mobile-nav").removeClass("show");
		// this prevents the browser from doing the default link action
		e.preventDefault();
	})
	var $window = $(window);
	$window.on('resize', function() {
		if ($window.width() < 800) {
			$('.mobile-nav-btn.display').show();
			$('.mobile-nav.show').show();
		}
		if ($window.width() > 801) {
			$('.mobile-nav.show').removeClass('show');
			$('.mobile-nav-btn').addClass('display');
			$('.mobile-nav-btn.display').hide();
			$('.mobile-nav-btn-active.display').removeClass('display');
		}
	});
});