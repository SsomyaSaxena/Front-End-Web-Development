var numSquares= 6;
var colors= genrandomcolor(numSquares);
var pickedcolor=pickcolor();
var colordisplay=document.querySelector("#CD");
var messdisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var modebuttons = document.querySelectorAll(".mode");
colordisplay.textContent=pickedcolor;

startgame();

function startgame()
{
	setupgame();
	modechoice();
	reset();
}

function modechoice()
{
  for( var i =0; i<modebuttons.length; i++)
  {
	modebuttons[i].addEventListener("click",function(){
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "EASY" ? numSquares=3 : numSquares=6;
		reset();
	})
  }
}

function setupgame()
{
  for(i=0;i<squares.length;i++)
  {
	// squares[i].style.backgroundColor=colors[i]; - done by reset() now
	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedcolor)
		{
			messdisplay.textContent="Correct!";
			BGcolor(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
			resetbutton.textContent="PLAY AGAIN";
		}
		else
		{
			this.style.backgroundColor="#232323";
			messdisplay.textContent="Try again!";
		}

	});
  }
}

function reset()
{
  colors=genrandomcolor(numSquares);
  pickedcolor=pickcolor();
     colordisplay.textContent=pickedcolor;
     messdisplay.textContent="";
     resetbutton.textContent="NEW COLORS";
     for(var i=0;i<squares.length;i++)
     {
       if(colors[i])	
       {	        	
       	squares[i].style.display="block"
        squares[i].style.backgroundColor=colors[i];
       }
       else
       {
         squares[i].style.display="none";
       }	
     }	 
     h1.style.backgroundColor="#2660bd";
}

// easybtn.addEventListener("click",function(){
//  easybtn.classList.add("selected");
//  hardbtn.classList.remove("selected");
//  numSquares=3;
//  colors=genrandomcolor(numSquares);
//  pickedcolor=pickcolor();
//  colordisplay.textContent=pickedcolor;
//  for(var i=0;i<squares.length;i++)
//     {
//       if(colors[i])	
//       {	
// 	  squares[i].style.backgroundColor=colors[i];
// 	  }
// 	  else
// 	  {
// 	  	squares[i].style.display="none";
// 	  }	
//     }	
// });

// hardbtn.addEventListener("click",function(){
//    easybtn.classList.remove("selected");
//    hardbtn.classList.add("selected");
//    numSquares=6;
//    colors=genrandomcolor(numSqaures);
//    pickedcolor=pickcolor();
//    colordisplay.textContent=pickedcolor;
//    for(var i=0;i<squares.length;i++)
//     {
// 	  squares[i].style.backgroundColor=colors[i];	
// 	  squares[i].style.display="block";
//     }	
//  });


resetbutton.addEventListener("click",function()
{
	colors=genrandomcolor(numSquares);
	pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    messdisplay.textContent="";
    this.textContent="NEW COLORS";
    for(var i=0;i<squares.length;i++)
    {
	  squares[i].style.backgroundColor=colors[i];
    }	 
    h1.style.backgroundColor="#2660bd";
});

function BGcolor(color)
{
	for(i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickcolor()
{
	var random = Math.floor(Math.random()*colors.length);
	console.log(random);
	console.log(colors[random]);
	return colors[random];
}

function genrandomcolor(num)
{
  var arr=[];
  for(i=0;i<num;i++)
  {
  	arr.push(randomcolor());
  }
  return arr;
}

function randomcolor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}