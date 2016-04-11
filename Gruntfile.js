module.exports = function(grunt){
  grunt.initConfig({
    concat: {
      dist: {
        src: ['asset/sass/*.sass'],
        dest: 'asset/sass/dist.sass'
      }
    },
    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': ['src/input1.js', 'src/input2.js']
        }
      }
    },
    sass: {
      dist: {
        files: {
          'asset/compile/dist.css': 'asset/sass/dist.sass'
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  grunt.registerTask('default', ['concat:dist','sass:dist']);
}
