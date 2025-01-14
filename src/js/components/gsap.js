import gsapWhy from './gsap/gsap-why';
import gsapBook from './gsap/gsap-book';
import gsapHero from './gsap/gsap-hero';
import gsapRated from './gsap/gsap-rated';
import gsapContact from './gsap/gsap-contact';
import gsapReviews from './gsap/gsap-reviews';
import gsapPackages from './gsap/gsap-packages';
import gsapSubscribe from './gsap/gsap-subscribe';
import gsapCustomise from './gsap/gsap-customise';

export default function gsapInit() {
	gsapWhy();
	gsapHero();
	gsapBook();
	gsapRated();
	gsapContact();
	gsapReviews();
	// gsapPackages();
	gsapCustomise();
	gsapSubscribe();
}
