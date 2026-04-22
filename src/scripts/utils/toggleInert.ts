export default function toggleInert(element: Element | null) {
	if (!element) return;
	element.hasAttribute('inert')
		? element.removeAttribute('inert')
		: element.setAttribute('inert', '');
}
