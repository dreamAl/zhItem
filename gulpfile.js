let gulp=require('gulp');
let concat=require('gulp-concat');
let uglify = require('gulp-uglify');
let rename=require('gulp-rename');
let mincss=require('gulp-minify-css');
let imagemin=require('gulp-imagemin');
let connect=require('gulp-connect');
let sass=require('gulp-sass');

gulp.task("watchall", async ()=>{
	gulp.watch("skqitem/**/*.html",async ()=>{
	gulp.src("skqitem/**/*.html")
	.pipe(gulp.dest("dist"));
})
	gulp.watch("sassdemo/**/*", async ()=>{
		gulp.src("sassdemo/**/*")
		.pipe(sass())
		.pipe(gulp.dest('skqitem\\css'))
	})

gulp.watch('skqitem/**/*.js', async ()=>{
		gulp.src('skqitem/**/*.js')
		.pipe(concat('tools.js'))
		.pipe(gulp.dest('dist\\js'))
		.pipe(uglify())
		.pipe(rename('tools.min.js'))
		.pipe(gulp.dest('dist\\js'));
	});

	gulp.watch("skqitem/**/*.css",async ()=>{
		gulp.src("skqitem/**/*.css")
		.pipe(mincss())
		.pipe(gulp.dest('dist\\css'));
	})
 
	gulp.watch("skqitem/img/**/*.{jpg,png}",async ()=>{
		gulp.src("skqitem/img/**/*.{jpg,png}")
		.pipe(imagemin())
		.pipe(gulp.dest('dist\\img'));
	})
});

gulp.task("server",async ()=>{
	connect.server({root:'dist',livereload:true});	
});





