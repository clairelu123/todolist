$("ul").on("click", "li", function(){

	// console.log($(this).css("color"));
	$(this).toggleClass("complete");

	// $(this).css("color", "red");
	// $(this).css("text-decoration", "line-through");
})

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
})


$("input[type ='text']").keypress(function(event){
	if (event.which === 13) {
		var todotext = $(this).val();
		$(this).val("");
		// create new li and append to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todotext + "</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type ='text']").fadeToggle();
})