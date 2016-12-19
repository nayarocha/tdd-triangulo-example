//===== Gruntfile.js =====
module.exports = function(grunt) {
  grunt.initConfig({
    mutationTest: {
      options: {
        testFramework: 'mocha'
      },
      target: {
        options:{
          code: ['./*.js', './src/*.js'],
          specs: './test_*.js',
          mutate: './*.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-mutation-testing');
  grunt.registerTask('default', ['mutationTest']);
};
