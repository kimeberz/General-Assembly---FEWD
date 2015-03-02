var myArray = ["apple", "banana", "Orange"];

myArray.push("grape", "peach");

myArray.unshift("kiwi");

myArray.forEach(function(fruit) {
    console.log(fruit)
});

console.log(myArray);

// map function

var myArray = [2, 3, 4, 5];

var newArray = myArray.map(function(currentValue, index, array) {
    return currentValue * 2;
});

console.log(newArray);

// in class friends exercise

var friends = [
    'Moe', 
    'Larry', 
    'Curly',
    'Jane',
    'Emma',
    'Elizabeth',
    'Elinor',
    'Mary',
    'Darcy',
    'Grey',
    'Lydia',
    'Harriet'
];

// find the last friend
// console.log(friends[friends.length -1]);

friends.push("kim");

friends.unshift("bo");

friends[6]="Liz"

friends.sort();

friends.reverse();

console.log(friends);


// split up the string and sort it

var friends2 = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";

var friends2Array = friends2.split(",");
friends2Array.sort();

friends2Array.reverse();


// an example of an object. encapsulates information about a certain thing. attributes, etc.
var kim = {
    firstName: "Kim",
    lastName: "Eberz",
    role: "UXD",
    sayName: function() {
    	// this refers to *this* function, which is DRY (donotrepeatyourself)
        alert(this.firstName + " " + this.lastName);
    }
};

kim.sayName();

// examples of arrays and objects 

var john = {
    firstName: "John",
    lastName: "Doe",
    age:36,
    address: "1234 Park Street"
};

john.address = "1234 Park Lane"

console.log(john);

// more arrays and objects

var users = [{
    firstName: "John",
    lastName: "Doe",
    age:36,
    address: "1234 Park Street"
},
{
	firstName: "Bob",
    lastName: "Doe",
    age:36,
    address: "1234 Park Street"
}];

// gimme bob
users[1].firstName