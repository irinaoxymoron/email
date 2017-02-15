var gulp = require('gulp'),
    emailBuilder = require('gulp-email-builder'),
    replace = require('gulp-replace');

var current_date = new Date().toString(),
    email_subject = 'Kadis',
    remote_imgs_basepath = 'https://www.dropbox.com/home/img/',
    email_builder_options = {
        encodeSpecialChars: true,
        emailTest : {
            // Your Email
            email : 'zjablik91@mail.ru' 
            // Your email Subject
            subject : email_subject + ' [' + current_date + ']',
            // Optional
            transport: {
                type: 'SMTP',
                options: {
                    service: 'gmail',
                    auth: {
                        user: 'my.gmail.account@gmail.com',
                        pass: 'my_password'
                    }
                }
            }
        },
    };

gulp.task('default', function() {
  gulp.src(['./explore_and_taste.html'])
    .pipe(replace(/src="imgs\//g, 'src="' + remote_imgs_basepath))
    .pipe(emailBuilder(email_builder_options))
    .pipe(gulp.dest('./ready_to_send'));
});