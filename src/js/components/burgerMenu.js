import throttle from '../helpers/throttle';
import el from '../helpers/getDomElems';

export default function burgerMenu() {
	const burgerBtns = el('burger');
	const headerElem = el('header');
	const headerLinks = el('header__nav-link');
	const cssBurgerIsActive = 'burger--open';
	const cssHeaderIsActive = 'header--mobile';
	const cssBodyIsHidden = 'body--hidden';

	function iconTransformToggle() {
		burgerBtns.classList.toggle(cssBurgerIsActive);
	}

	function headerItemsToggle() {
		headerElem.classList.toggle(cssHeaderIsActive);
	}

	function bodyVisibilityToggle() {
		document.body.classList.toggle(cssBodyIsHidden);
	}

	function burgerClickHandler() {
		iconTransformToggle();
		headerItemsToggle();
		bodyVisibilityToggle();
	}

	burgerBtns.addEventListener('click', throttle(() => {
		burgerClickHandler();
	}, 500));

	headerLinks.forEach((link) => {
		link.addEventListener('click', () => {
			if (headerElem.classList.contains(cssHeaderIsActive)) { burgerClickHandler(); }
		});
	});
}
