const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
	const visibility = nav.getAttribute("data-visible");

	if (visibility == "false") {
		nav.setAttribute("data-visible", true);
	} else {
		nav.setAttribute("data-visible", false);
		navbar.classList.remove("navbar");
	}
});


const navbar = document.querySelector(".credits-top");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.target === navbar) {
			if (entry.intersectionRatio === 0) {
				// The navbar is out of view, show the burger
				burger.classList.add("burgermenu");
				nav.classList.add("navbar");
			} else {
				// The navbar is in view, hide the burger
				burger.classList.remove("burgermenu");
				nav.classList.remove("navbar");
			}
		}
	});
});

// Observe the navbar element
observer.observe(navbar);