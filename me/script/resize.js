let resizeTimer;
window.addEventListener("resize", () => {
	document.body.classList.add("resize-animation-stopper");
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(() => {
		document.body.classList.remove("resize-animation-stopper");
	}, 400);
});

let resizeeTimer;
window.addEventListener("scroll", () => {
	document.body.classList.add("resize-animation-stopper");
	clearTimeout(resizeeTimer);
	resizeeTimer = setTimeout(() => {
		document.body.classList.remove("resize-animation-stopper");
	}, 400);
});