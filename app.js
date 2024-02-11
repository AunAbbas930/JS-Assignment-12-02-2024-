function q1()
{
  var pass = "pakistan";
  var inPass = prompt("Please enter your password.");
  if(inPass === "")
  {
    alert("Please enter your password!");
  }
  else if(pass === inPass)
  {
    alert("Correct! The password you entered matches the original password.")
  }
  else
  {
    alert("Incorrect password!")
  }
}

function q2()
{
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else
{
greeting = "Good evening";
}
}

function q5()
{
var scoreStudents = [23, 56,72, 21, 23, 9, 24, 67, 78, 12, 55, 89, 43, 30];
console.log(scoreStudents);
scoreStudents.sort(function(a, b){return a - b});
console.log(scoreStudents);
}

function q9()
{
var array9 = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchArray = prompt("Enter an item to search:");
var flag;
for(i=0; i<= array9.length; i++)
{
  if(array9[i]===searchArray)
  {
  flag = true;
  break;
  }
}
  if(flag)
  {
    alert("Found!");
  }
  else
  {
    alert("Not Found!");
  }
}

function q10()
{
var input = prompt("Enter a sentence in any case:").toLowerCase();
inputString = input.split(" ");
for(i=0; i< inputString.length; i++)
{
  inputString[i] = inputString[i].charAt(0).toUpperCase() + inputString[i].slice(1);
}

inputString = inputString.join(" ");
alert("Title case:    "+inputString);
}


function q11()
{
var input = prompt("Enter a sentence in any case:").toUpperCase();
alert("Upper case:    "+input);
}