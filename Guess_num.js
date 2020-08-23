var n=prompt("ENTER YOUR GUESSED NUMBER!");
var sn=25;
if(n<25)
{
	alert("You guessed low.");
}
else if(Number(n)==25)
{
	alert("You guessed correct! CONGRATS!");
}
else
{
	alert("You guessed high.");
}