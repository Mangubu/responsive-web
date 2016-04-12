module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'asset/compile/style.css': 'asset/sass/style.sass'
        },
        options:{
          style: 'compact'
        }
      }
    },
    watch: {
      dist: {
        files: './*',
        tasks: ['default'],
        options: {
          spawn: false,
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
          port: 8000,
          hostname: '*',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-connect');


  grunt.registerTask('default', ['sass:dist','imagemin:dist','connect:dist']);
}
