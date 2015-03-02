var currentTurn = "X";

var TTT = {
	changeElement: function(piece) {
		if (currentTurn == "X") {
			$("#" + piece).html("X");
			
			this.checkWin();
			
			currentTurn = "O";
		} else {
			$("#" + piece).html("O");
			
			this.checkWin();
			
			currentTurn = "X";
		}
	},
	
	checkWin: function() {
		function sayWinner() {
			alert(currentTurn + " Wins!");
			return false;
		}
		
		var rowA = [$("#a1").html(), $("#a2").html(), $("#a3").html()];
		var rowB = [$("#b1").html(), $("#b2").html(), $("#b3").html()];
		var rowC = [$("#c1").html(), $("#c2").html(), $("#c3").html()];
		
		var colA = [$("#a1").html(), $("#b1").html(), $("#c1").html()];
		var colB = [$("#a2").html(), $("#b2").html(), $("#c2").html()];
		var colC = [$("#a3").html(), $("#b3").html(), $("#c3").html()];
		
		var diagOne = [$("#a1").html(), $("#b2").html(), $("#c3").html()];
		var diagTwo = [$("#a3").html(), $("#b2").html(), $("#c1").html()];
		
		//Check for width winners
		
		if (rowA[0] === rowA[1] && rowA[2] === rowA[0] && rowA[0] !== "") {
			sayWinner();
		} else if (rowB[0] === rowB[1] && rowB[2] === rowB[0] && rowB[0] !== "") {
			sayWinner();
		} else if (rowC[0] === rowC[1] && rowC[2] === rowC[0] && rowC[0] !== "") {
			sayWinner();
		}
		
		//Check for length winners
		
		if (colA[0] === colA[1] && colA[2] === colA[0] && colA[0] !== "") {
			sayWinner();
		} else if (colB[0] === colB[1] && colB[2] === colB[0] && colB[0] !== "") {
			sayWinner();
		} else if (colC[0] === colC[1] && colC[2] === colC[0] && colC[0] !== "") {
			sayWinner();
		}
		
		//Check for diagonal win
		
		if (diagOne[0] === diagOne[1] && diagOne[2] === diagOne[0] && diagOne[0] !== "") {
			sayWinner();
		} else if (diagTwo[0] === diagTwo[1] && diagTwo[2] === diagTwo[0] && diagTwo[0] !== "") {
			sayWinner();
		}
	}
};

$(".game-board td").on("click", function() {
	if ($(this).html() !== "") {
		alert("This spot has been taken...Sorry!");
		return false;
	} else {
		var gamePiece = $(this).attr("id");
		TTT.changeElement(gamePiece);
	}
});