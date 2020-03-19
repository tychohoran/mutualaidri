$(document).ready(function(){
	$(".page-link").click(function(){
		var parentDiv = $(this).parent().parent();
		var bodyDiv = parentDiv.find(".page-body");
		bodyDiv.css("max-height", "none");
		var h = bodyDiv.height()+"px";
		if(parentDiv.hasClass("selected")){
			bodyDiv.css("max-height", h);
			setTimeout(() => {  bodyDiv.css("max-height", "0"); }, 1);
		} else {
			bodyDiv.css("max-height", "0");
			setTimeout(() => {  bodyDiv.css("max-height", h); }, 1);
		}
		parentDiv.toggleClass("selected");
	});
});