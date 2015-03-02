//Write an array called animals that has 6 different animals in it. Repeat each animal once.

//Define a new array called pickedAnimals

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	//RETURN the variable "array" here
}

//Call the function "shuffleArray" and pass in the "animals" array as a parameter

//Write the beginning of the FOR loop from 0 to 11
	$("#" + (i + 1) + " .name").html(animals[i]);
	$("#" + (i + 1)).attr("data-animal", animals[i]);
}

$(".game-board td").on("click", function() {
	var animalSelected = $(this).attr("data-animal");
	//Push this new variable animalSelected into the pickedAnimals array

	$(this).children(".name").fadeIn();

	//Write a function called resetArray that sets the pickedAnimals variable equal to a new array

	//Evaluate if the length of pickedAnimals is 2 and the first two indexes of this array are equal
		//Write the beginning of a FOR loop from 1 to 12
			if ($("#" + i).attr("data-animal") === pickedAnimals[0]) {
				$("#" + i).children(".name").addClass("active").removeClass("name");
				$("#" + i).css("background-color", "#CCFFCC");
			}
		}
		//Call the function resetArray here
	} //Write an else if evaluating if the length of pickedAnimals equals 2 and the first two indexes are not equal
		setTimeout(function() {
			//Write an alert here saying whatever you like. This is triggered when the two animals don't match
			$(".name").fadeOut();
			//Call the function resetArray here
		}, 500);
	}
});