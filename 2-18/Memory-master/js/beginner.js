//Write an array called animals that has 6 different animals in it. Repeat each animal once.
var animals = ["Pug", "Pug", "Bear", "Bear", "Puglet", "Puglet", "Petit Bacon", "Petit Bacon", "Pookie", "Pookie", "Bo", "Bo"];


var pickedAnimals = new Array();

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	
	return array;
	//RETURN the variable "array" here
}

shuffleArray(animals);
//Call the function "shuffleArray" and pass in the "animals" array as a parameter

//Write the beginning of the FOR loop from 0 to 11

for (var i=0; i<12; i++) {
	$("#" + (i + 1) + " .name").html(animals[i]);
	$("#" + (i + 1)).attr("data-animal", animals[i]);
}

$(".game-board td").on("click", function() {
	var animalSelected = $(this).attr("data-animal");
	pickedAnimals.push(animalSelected);

	$(this).children(".name").fadeIn();

	function resetArray() {
		pickedAnimals = new Array();
	}

	if (pickedAnimals.length === 2 && pickedAnimals[0] === pickedAnimals[1]) {
		//Write the beginning of a FOR loop from 1 to 12
		for (var i = 1; i < 13; i++) {
			if ($("#" + i).attr("data-animal") === pickedAnimals[0]) {
				$("#" + i).children(".name").addClass("active").removeClass("name");
				$("#" + i).css("background-color", "#CCFFCC");
			}
		}

		resetArray();
		//Call the function resetArray here
	} else if (pickedAnimals.length === 2 && pickedAnimals[0] !== pickedAnimals[1]) {
		setTimeout(function() {
			alert("hey pugs");
			//Write an alert here saying whatever you like. This is triggered when the two animals don't match
			$(".name").fadeOut();
			resetArray();
			//Call the function resetArray here
		}, 500);
	}
});