for (var i = 1; i <= 20; i++)
{
   if ((i % 2) != 0) {
      continue;
   }
   alert(i + " is even");           // => 2, 4, 6, 8, 10
}