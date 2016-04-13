module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'asset/compile/css/style.css': 'asset/sass/style.sass'
        },
        options:{
          style: 'compact'
        }
      }
    },
    watch: {
      sass: {
        files: ['**/*.sass'],
        tasks: ['sass'],
        options: {
          livereload: true,
          spawn: false
        },
      },
    },
    imagemin: {                          // Task
      dist: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'asset/img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'asset/compile/img'                  // Destination path prefix
        }]
      }
    },
    connect: {
      dist: {
        options: {
          port: 8000
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-connect');


  grunt.registerTask('default', ['sass:dist','connect:dist','watch:sass']);
}
