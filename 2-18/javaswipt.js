var saying = "hello world";

alert(saying);

var num1 = 3;
var num2 = 2;

alert(saying + (num1 + num2) );

var kim = ["kim", "UX noob", 100, "SF"]

alert(kim[3])


function sayHello() {
    alert("Hello world!");
}

// Invoke the function
sayHello();

// pass function arguments in
function sayHello(name) {
    alert("Hello " + name);
}

// pass in the value of kim 
sayHello(kim);

// -------

function addTwo(num1, num2) {
    return num1 + num2;
}

var sum = addTwo(1, 3)

alert(sum);


// for loop -----

for (var 1 = 0; i < 20; i++) {
	console.log(i);
}

// else ifs --------

var num = 0;

if (num >= 5 && num <= 10) {
    alert("Number is between 5 and 10");
} else if (num > 10) {
    alert("number bigger than 10")
} else if (num === 0) {
    alert("numbah be zero")
} else {
    alert("Number is less than 4");
}

// marathon exercise 

var time = prompt("What is your best marathon time?");

if (time >=4 && time <=5) {
    alert("you're so average")
} else if (time <=2 && time <=4) {
        alert("excellent time")
    } else if (time >4) {
        alert("hurry up foo")
    }

    // marathon pt 2

var time = prompt("What is your best marathon time?");

if (time >5) {
    alert("hurry up foo")
} else if (time >=4 && time <=5) {
    alert("you're so average")
} else if (time <=2 && time <=4) {
        alert("excellent time")
    }
  

// for loop even numbers through 20

for (var i = 1; i <= 20; i++)
{
   if ((i % 2) != 0) {
      continue;
   }
   alert(i + " is even");           // => 2, 4, 6, 8, 10
}

// for while loop for even numbers between 0 and 20

var number = 0;
while (number <= 20) {
   number++;
   if ((number % 2) != 0) {
       continue;
   }
   alert(number + " is even");     // => 2, 4, 6, 8, 10 
}  


