window.onload = function(){

	contents = document.getElementsByClassName("content");

	activateAnimationOnScroll();
	window.onscroll = activateAnimationOnScroll;
}


function activateAnimationOnScroll() {
	var scrollPos = document.documentElement.scrollTop;;

	console.log("\n");
	for(content of contents)
	{
		console.log(content.getBoundingClientRect().top);
		if(content.getBoundingClientRect().top < 500)
		{
			content.style.animationPlayState = "running";
		}
	}	
}