//Version 01
//Create the factor variable
var factor=24;
var numbers=[];
//Create a statement that will check all the numbers that are under 24 and can go into to 24 without leaving a remainder.Store them in an array
//Print out all numbers that are lower than factor in an array
for (let index = 0; index <= factor; index++) 
{
   
    if (factor%index===0) 
    {
        numbers.push(index);
       
    }
}

console.log(numbers);


//Version 02
function solution(N) 
{
  
  var numbers=[];  
  for (let index = 0; index <= N; index++) 
{
   
    if (N%index===0) 
    {
        numbers.push(index);
    }
}
return numbers.length;
}