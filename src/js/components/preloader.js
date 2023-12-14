export default function preloader() {
	window.onload = function () {
		window.setTimeout(() => {
			document
				.querySelector('.preloader-wrapper')
				.classList.add('preload-complite');
			document
				.querySelector('.preloader-icon')
				.classList.add('preload-icon--hidden');
			document.body.classList.remove('body--hidden');
		}, 2000);
	};
}
