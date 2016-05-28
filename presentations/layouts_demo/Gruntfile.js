'use strict';

const OUTPUT_DIR = 'build/';
const LAYOUTS_DIR = '../../layouts/';
const NODE_MODULES_DIR = '../../node_modules/';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt, {
    requireResolution: true // Needed to find packages in directories above the current one
  });

  const dirs = {
    output: OUTPUT_DIR,
    layouts: LAYOUTS_DIR
  };

  grunt.initConfig({
    pbuilder: {
      main: require('./builder_config')(dirs)
    },
    clean: [OUTPUT_DIR],
    connect: {
      main: {
        options: {
          base: OUTPUT_DIR,
          port: 8080,
          hostname: '127.0.0.1',
          keepalive: true
        }
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          flatten: true,
          src: [NODE_MODULES_DIR + 'reveal.js/js/reveal.js'],
          dest: OUTPUT_DIR + 'js/'
        }, {
          expand: true,
          flatten: true,
          src: [
            NODE_MODULES_DIR + 'reveal.js/css/reveal.css',
            '../../css/theme.css',
            '../../css/extras.css'
          ],
          dest: OUTPUT_DIR + 'css/'
        }]
      }
    }
  });

  grunt.registerTask('build', ['clean', 'copy', 'pbuilder']);
  grunt.registerTask('serve', ['connect']);
  grunt.registerTask('default', ['build', 'serve']);
};