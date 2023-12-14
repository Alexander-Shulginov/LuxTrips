import el from '../helpers/getDomElems';

export default function flyingNavSlider() {
	// const sliderArea = el('rated__wrap');
	const sliderArea = el('tabs__wrapper');
	const btnNavLeft = el('place__nav--left');
	const btnNavRight = el('place__nav--right');
	const cssVisibleClass = 'place__nav--visible';
	const cssHiddenClass = 'place__nav--hidden';
	let sliderAreaParams;

	function getHorizonMousePosition(event) {
		return event.clientX - sliderAreaParams.left;
	}

	function getVerticalMousePosition(event) {
		return event.clientY - sliderAreaParams.top;
	}

	function setCursorHorizonPosition(btnArrow, event) {
		btnArrow.style.left = `${getHorizonMousePosition(event) - 30}px`;
	}

	function serCursorVerticalPosition(btnArrow, event) {
		btnArrow.style.top = `${getVerticalMousePosition(event) - 20}px`;
	}

	function getSizeHalfArea() {
		return sliderAreaParams.width / 2;
	}

	function getWindowWidth() {
		return document.body.clientWidth;
	}

	sliderArea.addEventListener('mousemove', (event) => {
		sliderAreaParams = sliderArea.getBoundingClientRect();
		if (getWindowWidth() > 1024) {
			if (getHorizonMousePosition(event) > getSizeHalfArea()) {
				setCursorHorizonPosition(btnNavRight, event);
				serCursorVerticalPosition(btnNavRight, event);
				btnNavLeft.classList.add(cssHiddenClass);
				btnNavRight.classList.remove(cssHiddenClass);
			} else {
				setCursorHorizonPosition(btnNavLeft, event);
				serCursorVerticalPosition(btnNavLeft, event);
				btnNavRight.classList.add(cssHiddenClass);
				btnNavLeft.classList.add(cssVisibleClass);
				btnNavLeft.classList.remove(cssHiddenClass);
			}
		}
	});

	window.addEventListener('resize', () => {
		sliderAreaParams = sliderArea.getBoundingClientRect();
		if (getWindowWidth() < 1024) {
			btnNavRight.removeAttribute('style');
			btnNavLeft.removeAttribute('style');
			btnNavRight.classList.remove(cssHiddenClass);
			btnNavLeft.classList.remove(cssHiddenClass);
		}
	});
}
