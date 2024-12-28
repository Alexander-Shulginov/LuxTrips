import throttle from '../helpers/throttle';
import el from '../helpers/getDomElems';
import gsapHeader from './gsap/gsap-header';

export default function burgerMenu() {
	const burgerBtns = el('burger');
	const headerElem = el('header');
	const headerLinks = el('header__nav-link');
	const mainSection = el('main');
	const footerSection = el('footer');
	const cssBurgerIsActive = 'burger--open';
	const cssHeaderIsActive = 'header--mobile';
	const cssBodyIsHidden = 'body--hidden';

	let animationIsPlaying = false;

	function iconTransformToggle() {
		burgerBtns.classList.toggle(cssBurgerIsActive);
	}

	function headerItemsToggle() {
		headerElem.classList.toggle(cssHeaderIsActive);
	}

	function bodyVisibilityToggle() {
		document.body.classList.toggle(cssBodyIsHidden);
	}

	function toggleInertContent() {
		mainSection.hasAttribute('inert')
			? mainSection.removeAttribute('inert')
			: mainSection.setAttribute('inert', true);

		footerSection.hasAttribute('inert')
			? footerSection.removeAttribute('inert')
			: footerSection.setAttribute('inert', true);
	}

	function burgerClickHandler() {
		iconTransformToggle();
		headerItemsToggle();
		bodyVisibilityToggle();
		toggleInertContent();
		animationIsPlaying = !animationIsPlaying;
		if (animationIsPlaying) {
			gsapHeader();
		}
	}

	burgerBtns.addEventListener(
		'click',
		throttle(() => {
			burgerClickHandler();
		}, 1000),
	);

	headerLinks.forEach((link) => {
		link.addEventListener('click', () => {
			if (headerElem.classList.contains(cssHeaderIsActive)) {
				burgerClickHandler();
			}
		});
	});
}
