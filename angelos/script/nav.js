const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".mobile-toggle")

navToggle.addEventListener('click', () => {
	const visibility = navbar.getAttribute('data-visible');

	if (visibility == "false") {
		navbar.setAttribute('data-visible', true);
	} else {
		navbar.setAttribute('data-visible', false)
	}
})

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});