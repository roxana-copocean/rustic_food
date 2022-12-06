// navbar menu
document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	});
});

// font awesome icons
const icons = document.querySelectorAll('.section-1-icons img');
let counter = 1;
setInterval(() => {
	counter++;
	const icon = document.querySelector('.change');
	icon.classList.remove('change');
	if (counter > icons.length) {
		icons[0].classList.add('change');
		counter = 1;
	} else {
		icon.nextElementSibling.classList.add('change');
	}
}, 4000);
