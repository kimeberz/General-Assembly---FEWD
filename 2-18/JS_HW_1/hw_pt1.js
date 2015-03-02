
// for loop, even numbers 0 through 20

for (var i = 1; i <= 20; i++)
{
   if ((i % 2) != 0) {
      continue;
   }
   alert(i + " is even");
}

// while loop, even numbers 0 through 20

var number = 0;
while (number <= 20) {
   number++;
   if ((number % 2) != 0) {
       continue;
   }
   alert(number + " is even");   
}  


