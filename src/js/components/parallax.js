export default function parallaxInit() {
	const rootElem = document.querySelector('.parallax');
	const innerElems = document.querySelectorAll('.book__img');

	let windowWidth = null;
	let windowHeight = null;
	let windowCenterX = null;
	let windowCenterY = null;

	let inputX = 0;
	let inputY = 0;

	let offsetX = 0;
	let offsetY = 0;

	function updateDimensions() {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		windowCenterX = windowWidth / 2;
		windowCenterY = windowHeight / 2;
	}

	function onMouseMove(event) {
		const { clientX, clientY } = event;

		if (windowCenterX !== null && windowCenterY !== null) {
			inputX = (clientX - windowCenterX) / windowCenterX;
			inputY = (clientY - windowCenterY) / windowCenterY;
		}
	}

	function setPosition(element, x, y) {
		element.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(
			1,
		)}px, 0)`;
	}

	function onAnimationFrame() {
		const positionX = (inputX * windowWidth) / 20;
		const positionY = (inputY * windowHeight) / 20;
		offsetX += (positionX - offsetX) * 0.05;
		offsetY += (positionY - offsetY) * 0.05;

		for (let index = 0; index < innerElems.length; index++) {
			const layer = innerElems[index];
			const layerDepth = 0.2;
			const xOffset = offsetX * layerDepth * -1;
			const yOffset = offsetY * layerDepth * -1;

			setPosition(layer, xOffset, yOffset);
		}

		window.requestAnimationFrame(onAnimationFrame);
	}

	updateDimensions();
	window.addEventListener('resize', updateDimensions);

	rootElem.addEventListener('mousemove', onMouseMove);

	window.requestAnimationFrame(onAnimationFrame);
}
