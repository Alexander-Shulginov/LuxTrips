/* eslint-disable global-require */
import gulp from 'gulp';
import gulpPug from 'gulp-pug';
import newer from 'gulp-newer';
import paths from '../paths';
import { bs } from './serverInit';

function pugErrorsHandler(err) {
	console.error(err);
	this.emit('end');
}

export default async function pugCompile() {
	gulp.src(paths.template.src)
		.pipe(newer(paths.template.src))
		.pipe(
			gulpPug({
				data: {
					world: require('../../src/data/places/world.json'),
					africa: require('../../src/data/places/africa.json'),
					asia: require('../../src/data/places/asia.json'),
					europe: require('../../src/data/places/europe.json'),
					northAmerica: require('../../src/data/places/northAmerica.json'),
					russia: require('../../src/data/places/russia.json'),
					australia: require('../../src/data/places/australia.json'),
				},
			}).on('error', pugErrorsHandler),
		)
		.pipe(gulp.dest(paths.template.dest))
		.pipe(bs.stream());
}
