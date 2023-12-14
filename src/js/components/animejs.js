/* eslint-disable  */
import anime from "animejs/lib/anime.es.js";

export default function anim() {
	const animatedText = document.getElementsByClassName("text-anim");
	for (var i = 0; i < animatedText.length; i++) {
		const wordWrap = animatedText.item(i);
		wordWrap.innerHTML = wordWrap.innerHTML.replace(
			/(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
			'$1<span class="letter-anim">$2</span>'
		);
	}

	const animatedLetter = document.getElementsByClassName("letter-anim");
	for (var i = 0; i < animatedLetter.length; i++) {
		const letterWrap = animatedLetter.item(i);
		letterWrap.innerHTML = letterWrap.textContent.replace(
			/\S/g,
			"<span class='letter'>$&</span>"
		);
	}

	// Writting
	const slideUp = anime.timeline({
		loop: false,
		autoplay: false,
	});

	slideUp.add({
		targets: ".slide-up .letter",
		translateY: ["1.1em", 0],
		opacity: [0, 1],
		translateZ: 0,
		duration: 750,
		delay: (el, i) => 30 * i,
	});

	// Opacity
	const fadeUp = anime.timeline({
		loop: false,
		autoplay: false,
	});

	fadeUp.add({
		targets: ".fade-up .letter",
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 1400,
		delay: (el, i) => 300 + 30 * i,
	});

	fadeUp.play();
	slideUp.play();
}
