const gulp = require('gulp')
const sass = require('gulp-sass')
const bourbon = require("bourbon").includePaths
const autoprefixer = require('gulp-autoprefixer')
const combineMq = require('gulp-combine-mq')
const rename = require('gulp-rename')
const browserSync = require('browser-sync')
const plumber = require('gulp-plumber')
const report = require('./report-error.js')
const sassLint = require('gulp-sass-lint')

const srcCSS = 'src/css/config.scss'

// Linter
gulp.task('css-lint', () => {
	gulp.src("src/css/**/*.scss")
		.pipe(sassLint({
				configFile: ".sass-lint.yml",
			}))
	  .pipe(sassLint.format())
	  .pipe(sassLint.failOnError())
})

//compile styl to css and autoprefix
gulp.task('css-dev', ["css-lint"], () => {
	gulp.src(srcCSS)
		.pipe(plumber({ errorHandler: report }))
		.pipe(sass({
			sourcemaps: true,
			includePaths: [bourbon, "node_modules"]
		}))
		.pipe(autoprefixer())
		.pipe(combineMq())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('dist/dev'))
		.pipe(browserSync.reload({stream:true}))
})

//compile all styl and autoprefix, and minify
gulp.task('css-prod', () => {
	gulp.src(srcCSS)
		.pipe(stylus())
		.pipe(autoprefixer())
		.pipe(combineMq())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('.tmp'))
})
