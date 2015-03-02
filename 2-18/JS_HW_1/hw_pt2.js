function max(num1, num2) {
	if (num1>num2) {
		return num1;
	}
	return num2;
}

// tests for defining a max function.
max(1, 2) == 2
max(9, 18) == 18
max(18, 3) == 18
max(3, 3) == 3

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. Check out the Math module built in to JavaScript to help you.

function maxOfThree(num1, num2, num3) {
	if (num1>num2 && num1>num3) {
		return num1;
	} else if (num2>num1 && num2>num3) {
		return num2;
	}
	return num3;
};

// tests for defining max of three function.
maxOfThree(1, 2, 18) == 18
maxOfThree(9, 15, 4) == 15
maxOfThree(19, 3, 2) == 19
maxOfThree(3, 9, 6) == 9