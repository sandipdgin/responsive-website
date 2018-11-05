module.exports = function(grunt) {


  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          //'src/js/main.min.js': ['node_modules/jquery/jquery.js', 'node_modules/popper.js/dist/popper.js', 'node_modules/bootstrap/dist/js/bootstrap.js', 'src/js/devJs/*.js']
          //'src/js/main.min.js': ['node_modules/jquery/jquery.js', 'src/js/devJs/*.js', 'node_modules/bootstrap/dist/js/bootstrap.js', ],

          'src/js/scripts.min.js': ['src/js/devJs/scripts.js']
          //popper.js
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'src/css/styles.css': ['src/css/devCss/styles.css']
        }
      }
    }
  });

  // https://www.npmjs.com/package/grunt-antrol-cssmin

  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-antrol-cssmin');

  grunt.registerTask('default', 'Test demo', function(){
    //grunt.log.write("grunt task is running..");
  });  

  grunt.registerTask('demo', ['default', 'uglify', 'cssmin']);

};