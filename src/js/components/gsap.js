import gsapBook from './gsap/gsap-book';
import gsapContact from './gsap/gsap-contact';
import gsapCustomise from './gsap/gsap-customise';
import gsapHero from './gsap/gsap-hero';
import gsapPackages from './gsap/gsap-packages';
import gsapRated from './gsap/gsap-rated';
import gsapWhy from './gsap/gsap-why';

export default function gsapInit() {
	gsapHero();
	gsapRated();
	gsapPackages();
	gsapBook();
	gsapWhy();
	gsapCustomise();
	gsapContact();
}
