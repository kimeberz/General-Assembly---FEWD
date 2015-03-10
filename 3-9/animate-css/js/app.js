
// this bit of JS will keep adding and removing the appropriate class, so it won't only work for the first click

$(document).on("click", "#my-div", function() {
	$(this).animateCSS("shake")
})


// this isnt working
// $(document).on("click", "#my-div", function(){
	
// 	var that = this;
// 	$(this).animateCSS("swing", function() {
// 		$(that).animateCSS("fadeOut", function()
// 			$(that).animateCSS("tada");
// 		});
// 	});
// });


// $(document).ready( function(){
//   $('#my-div').animateCSS("shake");
// });


// This bit of js will only work on the first click

// $(document).on("click", "#my-div", function() {
// 	$(this).addClass("shake")
// })