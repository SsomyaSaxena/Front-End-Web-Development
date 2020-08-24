var mov = [ { title:"The Great Gatsby" , rating:"5 stars" , watch:"T"} , { title:"Frozen" , rating:"4.5 stars" , watch:"F"} , 
             { title:"Shutter Island" , rating:"5 stars" , watch:"T"} , { title:"The Player" , rating:"3.5 stars" , watch:"F"} ];

mov.forEach(function(movie){
	var result = "You have ";
	if(movie.watch=="T")
	{
		result= result + " have watched ";
	}
	else
	{
		result = result + " not seen ";
	}

	result += "\""+movie.title+"\" - ";
	result += movie.rating;
	console.log(result);
});