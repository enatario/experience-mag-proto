const gulp = require('gulp')
const realFavicon = require ('gulp-real-favicon')
const fs = require('fs')
const runSequence = require('run-sequence')
const configPath = `${process.cwd()}/src/data/config.json`
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))

const src = 'src/assets/favicon/'
const path = 'assets/favicon/'
const baseFavicon = config.favicon.filename
const faviconData = src + 'faviconData.json'

gulp.task('generate-favicon', function(done) {
	realFavicon.generateFavicon({
		masterPicture: src + baseFavicon,
		dest: src,
		iconsPath: path,
		design: {
			ios: {
				pictureAspect: 'noChange',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#da532c',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: '#ffffff',
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false
		},
		markupFile: faviconData
	}, function() {
		done()
	})
})

gulp.task('inject-favicon-markups', function() {
	return gulp.src('src/html/partials/base/base-favicon.hbs')
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(faviconData)).favicon.html_code))
		.pipe(gulp.dest('src/html/partials/base/'))
})

gulp.task('check-for-favicon-update', function(done) {
	const currentVersion = JSON.parse(fs.readFileSync(faviconData)).version
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	})
})

gulp.task('make-favicons', () => {
	if (baseFavicon) {
		runSequence(
			'generate-favicon',
			'inject-favicon-markups',
			'check-for-favicon-update'
		)
	} else {
		console.error('No base favicon. Please add filename to config.js and add image file to src/assets/favicon.')
	}
})
