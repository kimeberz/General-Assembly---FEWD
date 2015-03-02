// Step 1: Add a link to your own custom JS file before the closing body tag.
// Step 2: Bind click events to the +5 and -5 point buttons and change the innerHTML of the score display appropriately.
// Step 3: Bind a click event to the set score button and set the innerHTML of the score display to the score entered in the text box.
// Bonus: Create a check in your code to make sure the score will not go negative.
// Super Bonus: Create a function to make the changes to the score display rather than having to write your logic over and over.

document.getElementById("increase-5").addEventListener("click", function() {
	document.getElementById("score").innerHTML = "5 Points";
});
