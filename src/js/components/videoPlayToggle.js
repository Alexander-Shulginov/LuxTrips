export default function videoPlayToggle() {
	const bookElems = document.querySelectorAll('.book__item');
	const videoElems = document.querySelectorAll('.book__video');

	if (bookElems) {
		bookElems.forEach((elem, index) => {
			elem.addEventListener('mouseenter', () => {
				videoElems[index].play();
			});

			elem.addEventListener('mouseleave', () => {
				videoElems[index].pause();
			});
		});
	}
}
