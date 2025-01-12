export default function preloader() {
	window.onload = () => {
		document.body.classList.add('body--hidden');
		window.setTimeout(() => {
			document
				.querySelector('.loadscreen')
				.classList.add('loadscreen__complite');
			document.body.classList.remove('body--hidden');
		}, 1000);
	};
}
