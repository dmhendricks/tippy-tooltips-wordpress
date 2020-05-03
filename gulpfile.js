/**
 * Gulpfile for Tippy Tooltips
 *
 * If you have Gulp installed locally and it is <4.0, you need to prefix gulp commands with "npx". Examples:
 *    npx gulp
 *    npx gulp <task>
 * 
 * @since 1.0.0
 */

let pkg = require( './package.json' ),
  gulp = require( 'gulp' ),
  concat = require( 'gulp-concat' ),
  rename = require( 'gulp-rename' ),
  sourcemaps = require( 'gulp-sourcemaps' ),
  minifyJS = require( 'gulp-terser' );

// Set module options
let terser_options = { output: { comments: /^!/ } };

/**
 * Gulp Tasks
 */

// JavaScript assets
gulp.task( 'processJS', (done) => {

  gulp.src([
      `./node_modules/@popperjs/core/dist/umd/popper.js`,
      `./node_modules/tippy.js/dist/tippy-bundle.umd.js`,
      `./src/plugin.js`
    ])
    .on( 'error', console.error.bind( console ) )
    .pipe( sourcemaps.init() )
    .pipe( concat( pkg.name + '.js' ) )
    .pipe( gulp.dest( './dist/js' ) )
    .pipe( minifyJS( terser_options ) )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( sourcemaps.write( '.' ) )
    .pipe( gulp.dest( './dist/js' ) );

  done();

});

/**
 * Default task
 */
gulp.task( 'default', gulp.series( 'processJS' ) );
