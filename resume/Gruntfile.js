'use strict';

// Wrapper function.
module.exports = function(grunt) {

  // Project and task configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

  });

  // Load the our desired plugins which provide specific tasks.
  grunt.loadNpmTasks('grunt-serve');

  // Default task.
  grunt.registerTask('default', ['connect:development', 'watch']);

  // Custom task.


};
