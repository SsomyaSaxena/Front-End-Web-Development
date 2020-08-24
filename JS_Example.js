var fn=prompt("ENTER YOUR FIRST NAME");
var ln=prompt("ENTER YOUR LAST NAME");
var a=prompt("ENTER YOUR AGE");
console.log("Your full-name is "+fn+" "+ln+".");
console.log("You are "+a+" years old.")
if(a<18)
{
	console.log("You cant enter the club.");
}
else
{
	console.log("Please enter the club!");
}