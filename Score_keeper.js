var p1= document.querySelector("#p1");
var p2= document.querySelector("#p2");
var p1display= document.querySelector("#p1disp");
var p2display= document.querySelector("#p2disp");
var resetbutt= document.querySelector("#reset");
var numinput= document.querySelector("input[type='number']");
var WSnumber=document.querySelector("p span");
var p1score=0;
var p2score=0; 
var gameover=false;
var WS=5;

p1.addEventListener("click",function()
{
  if(!gameover)
  {	
  p1score++;
  if(p1score===WS)
  {
  	p1display.classList.add("winner");
  	gameover=true;
  }
  p1display.textContent=p1score;
  }
}
);

p2.addEventListener("click",function()
{
  if(!gameover)
  {	
  p2score++;
  if(p2score===WS)
  {
  	p2display.classList.add("winner");
  	gameover=true;
  }	
  p2display.textContent=p2score;
  }
}
);
resetbutt.addEventListener("click", function()
{
	reset();
});
function reset()
{
	p1score=0;
	p2score=0;
	p1display.textContent="0";
	p2display.textContent="0";
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameover=false;
}
numinput.addEventListener("change",function()
{
   WSnumber.textContent=numinput.value;
   WS=Number(numinput.value);
   reset();
})
