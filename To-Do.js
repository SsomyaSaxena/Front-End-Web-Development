var todo=[];
var v=prompt("What do you wanna do?");
while(v!="Quit")
{	
  if(v=="New")
  {	
  var a = prompt("Add a job please.");	
  todo.push(a);
  console.log("New Job added.");
  }
  if(v=="List")
  { 
  	list();
  }	
  if(v=="Delete")
  {
  	var d=prompt("Enter task index to delete");
    todo.splice(d,1)
  	console.log("One task deleted");
  }	
  var v=prompt("What do you wanna do?");
}
console.log("You quit!");

function list()
{
	console.log("**********");
  	todo.forEach(function(todos,i){
  		console.log(i+": "+todos);
  	})
  	console.log("**********");
}