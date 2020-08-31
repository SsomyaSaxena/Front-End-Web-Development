$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
    	$(this).remove();
    });
    event.stopPropogation();
});

$("input[type='text']").keypress(function(event){
   if(event.which === 13)
   {
   	var TodoText = $(this).val();
   	$(this).val("");
   	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ TodoText +"</li>");
   }
});

$(".fa-pencil-alt").click(function(){
  $("input[type='text']").fadeToggle(); 
});