export const lazyLoadBgImg = () => {
	const lazyBackgrounds = document.querySelectorAll('[data-lazy]');

	const options = {
		root: null,
		rootMargin: '200px 0px',
	};

	const observerInstans = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const div = entry.target;
				const bgUrl = div.dataset.lazy;
				div.setAttribute('style', `background-image: url(${bgUrl});`);
				observer.unobserve(div);
			}
		});
	}, options);

	lazyBackgrounds.forEach((bg) => observerInstans.observe(bg));
};
