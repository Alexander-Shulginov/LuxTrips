import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapRated() {
    const tl = gsap.timeline();
    const sectionTitle = document.querySelector('.section-title__decor');

    tl.to(sectionTitle, {
        scrollTrigger: {
            trigger: '.rated',
            start: '-65%',
            onEnter: () => {
                if (sectionTitle) {
                    sectionTitle.classList.add('section-title__decor--visible');
                }
            },
        },
    });
}
