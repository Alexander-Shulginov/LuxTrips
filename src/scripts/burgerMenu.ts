import gsapHeader from './gsap/gsapHeader';
import throttle from './utils/throttle';
import toggleInert from './utils/toggleInert';

const CSS = {
	burgerOpen: 'burger--open',
	headerMobile: 'header--mobile',
	bodyHidden: 'body--hidden',
} as const;

export default function burgerMenu(): void {
	const burgerBtn = document.querySelector<HTMLButtonElement>('.burger');
	const headerElem = document.querySelector<HTMLElement>('.header');
	const headerLinks = document.querySelectorAll<HTMLAnchorElement>('.navigation__nav-link');
	const mainSection = document.querySelector('main');
	const footerSection = document.querySelector('footer');

	if (!burgerBtn || !headerElem) return;

	const btn = burgerBtn;
	const header = headerElem;

	let isOpen = false;

	function open(): void {
		isOpen = true;
		btn.classList.add(CSS.burgerOpen);
		header.classList.add(CSS.headerMobile);
		document.body.classList.add(CSS.bodyHidden);
		btn.setAttribute('aria-expanded', 'true');
		toggleInert(mainSection);
		toggleInert(footerSection);
		gsapHeader();
	}

	function close(): void {
		isOpen = false;
		btn.classList.remove(CSS.burgerOpen);
		header.classList.remove(CSS.headerMobile);
		document.body.classList.remove(CSS.bodyHidden);
		btn.setAttribute('aria-expanded', 'false');
		toggleInert(mainSection);
		toggleInert(footerSection);
	}

	btn.addEventListener('click', throttle(() => (isOpen ? close() : open()), 1000));

	headerLinks.forEach((link) => {
		link.addEventListener('click', () => {
			if (isOpen) close();
		});
	});
}
