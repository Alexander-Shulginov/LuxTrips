export default function preloader() {
	const isFirstVisit = !localStorage.getItem('visited');

	if (isFirstVisit) {
		document.body.classList.add('body--hidden');
		localStorage.setItem('visited', 'true');
		window.onload = function () {
			setTimeout(() => {
				document
					.querySelector('.preloader-wrapper')
					.classList.add('preload-complite');
				document
					.querySelector('.preloader-icon')
					.classList.add('preload-icon--hidden');
				document.body.classList.remove('body--hidden');
			}, 1800);
		};
	} else {
		document.body.classList.remove('body--hidden');
		const preloaderWrapper = document.querySelector('.preloader-wrapper');
		const preloaderIcon = document.querySelector('.preloader-icon');

		if (preloaderWrapper) {
			preloaderWrapper.style.display = 'none';
		}

		if (preloaderIcon) {
			preloaderIcon.style.display = 'none';
		}
	}
}
