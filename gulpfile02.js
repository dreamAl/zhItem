let gulp=require('gulp');
let concat=require('gulp-concat');
let uglify = require('gulp-uglify');
let rename=require('gulp-rename');
let mincss=require('gulp-minify-css');
let imagemin=require('gulp-imagemin');
let connect=require('gulp-connect')
//复制文件
//task函数是定义任务。
// task函数的参数：
//第一个参数时任务名；
//第二个是任务对应代码
gulp.task("copy-html",async ()=>{
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\skqwww"));
});
gulp.task("concatfile",async ()=>{
	gulp.src(['js/ones.js','js/twos.js'])
	.pipe(concat("tools.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\skqwww\\js"));
});
gulp.task("concatanduglify",async ()=>{
	gulp.src(['js/ones.js','js/twos.js'])
	.pipe(concat("tools.js"))
	.pipe(uglify())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\skqwww\\js"));
});
gulp.task("concatanduglifyrename",async ()=>{
	gulp.src(['js/ones.js','js/twos.js'])
	.pipe(concat("tools.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\skqwww\\js"))
	.pipe(uglify())
	.pipe(rename("t`ools.min.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\skqwww\\js"));

});



gulp.task("minify",async ()=>{
	gulp.src('css/*.css')
	.pipe(mincss())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\skqwww\\css"));
});
gulp.task("imagemin",async ()=>{
	gulp.src('img/*.{png,jpg}')
	.pipe(imagemin())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\skqwww\\img"));
});
gulp.task("watchall",async ()=>{
	gulp.watch('*.html',async ()=>{
		gulp.src('*.html')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\taobao'));
	})

	gulp.watch(['js/index.js','js/goods.js'], async ()=>{
		gulp.src(['js/index.js','js/goods.js'])
		.pipe(concat('tools.js'))
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\taobao\\js'))
		.pipe(uglify())
		.pipe(rename('tools.min.js'))
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\taobao\\js'));
	});

	gulp.watch("css/*.css",async ()=>{
		gulp.src("css/*.css")
		.pipe(mincss())
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\taobao\\css'));
	})

	gulp.watch("img/*.{jpg,png}",async ()=>{
		gulp.src("img/*.{jpg,png}")
		.pipe(minimg())
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\taobao\\img'));
	})

});