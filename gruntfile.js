module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'app',
          livereload: 35729,
          open:true
        }
      }
    },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'app/css/screen.css': 'sass/screen.scss'
            }
        }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          // require('cssnano')() // minify the css file
        ]
      },
      dist: {
        src: 'app/css/*.css'
      }
    },
    stylefmt: {
      format: {
        files: {
         'app/css/screen.css': ['app/css/screen.css']
        }
      },
    },
    watch: {
      sasstasks: {
        files: ['sass/*/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      },
      htmltasks: {
        files: ['app/*.html'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-stylefmt');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['sass','postcss','stylefmt']);
  grunt.registerTask('server', ['connect','watch']);


};