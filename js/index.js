$(function() {

	var h = $(window).height();

	$("aside").click(function() {
		$(document).scrollTop(0);
	})

	$(document).scroll(function() {
		var top = $(document).scrollTop();

		if(top > 10) {
			$(".navbar").addClass("change");
			$("#navbar-collapse ul li").addClass("change2");
			$(".navbar-logo").addClass("change3");
			$(".navbar-brand").addClass("change4");
			$(".navbar-header span").css("background", "white")
		}
		if(top < 10) {
			$(".navbar").removeClass("change");
			$("#navbar-collapse ul li").removeClass("change2");
			$(".navbar-logo").removeClass("change3");
			$(".navbar-brand").removeClass("change4");
			$(".navbar-header span").css("background", "#000000")
		}
		if(top > 200) {
			$("aside").show();
		} else {
			$("aside").hide()
		}

	})

	$(".xs-icon").click(function() {
		$(".navbar").addClass("change");
		$("#navbar-collapse ul li").addClass("change2");
		$(".navbar-logo").addClass("change3");
		$(".navbar-brand").addClass("change4");
		$(".navbar-header span").css("background", "white");

	})

	//
	$(".down").click(function() {
		$(document).scrollTop(h);
	})

	//轮播
	$("#mycarousel").carousel({
		interval: 1000,
		wrap: true,
	})

})