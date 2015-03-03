activeReset = function(el) {
	// el is a temp variable
	if ($(el).hasClass("active")) {
		$("#slide-down").slideUp();
		$(el).removeClass("active");
	} else {
		$("#slide-down").slideDown();
		$("#primary-nav li").removeClass("active");
		$(el).addClass("active");
	}

}

$(document).on("click", "li.international", function(event){
	event.preventDefault();
	$("#international-drop").show();
	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();
	activeReset(this);

});

$(document).on("click", "li.politics", function(event){
	event.preventDefault();
	$("#politics-drop").show();
	$("#international-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();
	activeReset(this);
});

$(document).on("click", "li.business", function(event){
	event.preventDefault();
	$("#business-drop").show();
	$("#international-drop").hide();
	$("#politics-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();
	activeReset(this);
});

$(document).on("click", "li.technology", function(event){
	event.preventDefault();
	$("#technology-drop").show();
	$("#international-drop").hide();
	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();
	activeReset(this);
});

$(document).on("click", "li.culture", function(event){
	event.preventDefault();
	$("#culture-drop").show();
	$("#international-drop").hide();
	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#blogs-drop").hide();
	activeReset(this);
});

$(document).on("click", "li.blogs", function(event){
	event.preventDefault();
	$("#blogs-drop").show();
	$("#international-drop").hide();
	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	activeReset(this);
});



// Event preventDefault (as written above) will remove the anchor tag behavior
// $(document).on("click", "li.international", function(){
// 	$("#politics-drop").hide();
// 	$("#business-drop").hide();
// 	$("#technology-drop").hide();
// 	$("#culture-drop").hide();
// 	$("#blogs-drop").hide();
// 	$("#slide-down").slideToggle();
// });




// $(document).on("click", "li.international", function(){
// 	("#slide-down").slideDown( "slow", function(){
// 	});
// });



// $("international").click(function() {
// 	$("#international-drop").slideDown( "slow", function() {

// 	});
// });