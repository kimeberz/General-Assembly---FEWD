/*$(document).on("dblclick", "#my-button", function() {
  alert("I was clicked")
});*/

$(document).on("click", "my-button", function() {
  $("#my-div).slideUp()";
});

/*$(document).on("focus", "my-input", function() {
  alert("I was focused")
})*/


$(document).on("click", "#my-button", function() {
  $("#my-div").slideDown(3000, "linear", function() {
    $("#my-div").slideUp(200, "linear", function() {
      alert("I am done with everything")
    })
  })
})

$(document).on("click", "#my-button", function() {
  $("#my-div").fadeToggle(600);
})

// down and jump back up
$(document).on("click", "#my-button", function() {
  $("#my-div").animate({
    "margin-top":"+=200px",
    "margin-left":"+=200px",
    "opacity":"0.2"
  }, 3000, "swing", function() {
    $("#my-div").animate({
      "margin-top":"0",
      "opacity":"1"
    })
  });
});