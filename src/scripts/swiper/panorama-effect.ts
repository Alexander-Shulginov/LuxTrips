import type { SwiperModule } from 'swiper/types';

interface PanoramaEffectParams {
	depth: number;
	rotate: number;
}

const EffectPanorama: SwiperModule = ({ swiper, extendParams, on }) => {
	const s = swiper as any;

	extendParams({
		panoramaEffect: { depth: 300, rotate: 20 } satisfies PanoramaEffectParams,
	});

	on('beforeInit', () => {
		if (s.params.effect !== 'panorama') return;
		s.classNames.push(`${s.params.containerModifierClass}panorama`);
		s.classNames.push(`${s.params.containerModifierClass}3d`);
		Object.assign(s.params, { watchSlidesProgress: true });
		Object.assign(s.originalParams, { watchSlidesProgress: true });
	});

	on('progress', () => {
		if (s.params.effect !== 'panorama') return;
		const { depth = 200, rotate = 30 }: PanoramaEffectParams = s.params.panoramaEffect ?? {};
		const angleRad = (rotate * Math.PI) / 180;
		const halfAngleRad = angleRad / 2;
		const angleModifier = 1 / (180 / rotate);

		s.slides.forEach((slideEl: HTMLElement, i: number) => {
			const slideProgress: number = (slideEl as any).progress;
			const slideSize: number = s.slidesSizesGrid[i];
			const progressModifier = s.params.centeredSlides
				? 0
				: ((s.params.slidesPerView as number) - 1) * 0.5;
			const modifiedProgress = slideProgress + progressModifier;
			const angleCos = 1 - Math.cos(modifiedProgress * angleModifier * Math.PI);
			const translateX = `${modifiedProgress * (slideSize / 3) * angleCos}px`;
			const rotateY = modifiedProgress * rotate;
			const radius = (slideSize * 0.5) / Math.sin(halfAngleRad);
			const translateZ = `${radius * angleCos - depth}px`;
			slideEl.style.transform =
				s.params.direction === 'horizontal'
					? `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg)`
					: `translateY(${translateX}) translateZ(${translateZ}) rotateX(${-rotateY}deg)`;
		});
	});

	on('setTransition', (_s: unknown, duration: number) => {
		if (s.params.effect !== 'panorama') return;
		s.slides.forEach((slideEl: HTMLElement) => {
			slideEl.style.transition = `${duration}ms`;
		});
	});
};

export default EffectPanorama;
