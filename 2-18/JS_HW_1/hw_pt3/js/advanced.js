//Define a variable here called currentTurn and make it equal to the STRING "X"

var TTT = {
	changeElement: function(piece) {
		if (currentTurn == "X") {
			$("#" + piece).html("X");
			
			//Call the function checkWin
			
			//Make currentTurn equal to "O"
		} else {
			$("#" + piece).html("O");
			
			//Call the function checkWin
			
			//Make currentTurn equal to "X"
		}
	},
	
	checkWin: function() {
		//Write the logic for checking for a win
	}
};

//Bind a click event to the DOM td element with the class .game-board
	if ($(this).html() !== "") {
		//Write an alert here that says "This spot has been taken...Sorry!"
		//Return false here
	} else {
		var gamePiece = $(this).attr("id");
		//Call the function TTT.changeElement passing in the above variable (gamePiece) as a parameter
	}
});