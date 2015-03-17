/*lets now do some form validation -- use a plugin for good field validation*/

$(document).on("click", "#submit", function() {
  var firstname_entered = $("input[name='firstname']").val();
  var lastname_entered = $("input[name='lastname']").val();

  
  var dataObj = {
    firstname: firstname_entered,
    lastname: lastname_entered
  };
  
  for (info in dataObj) {
    if (dataObj[info] === "") {
      alert("please enter yo stuff!");
      return false;
    } 
  }
  
  alert("Thanks for submitting yo digits!")
});