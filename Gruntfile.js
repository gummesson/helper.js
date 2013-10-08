module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    concat: {
      js: {
        src: ['lib/intro.js',
              'lib/globals.js',
              'lib/exports.js',
              'lib/internal.js',
              'lib/element.js',
              'lib/children.js',
              'lib/siblings.js',
              'lib/manipulation.js',
              'lib/attributes.js',
              'lib/classes.js',
              'lib/content.js',
              'lib/css.js',
              'lib/dimensions.js',
              'lib/events.js',
              'lib/utilities.js',
              'lib/outro.js'],
        dest: 'build/helper.js',
        nonull: true
      }
    },

    jshint: {
      files: ['Gruntfile.js', '<%= concat.js.dest %>'],
      options: {
        globals: {
          module: true,
          define: true,
          XMLHttpRequest: true
        }
      }
    },

    uglify: {
      options: {
        report: 'gzip'
      },

      dist: {
        src: ['<%= concat.js.dest %>'],
        dest: 'dist/helper.min.js'
      }
    }
  });

  grunt.registerTask('default', ['concat', 'jshint', 'uglify']);

};
