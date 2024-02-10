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