'use strict';

// All paths relative to Gruntfile.js
module.exports = function (dirs) {
  return {
    options: {
      layoutAttributes: { // Properties defined here can be used in any layout file and index.html. If front matters contain the same properties then those have precedence
        title: 'Layouts', // Title in index.html head
        footer: 'Copyright....'
      },
      slides: [ // Slide file names without extension
        'slide1',
        'slide2'
      ],
      index: './index.html',
      outputDir: dirs.output,
      layouts: [dirs.layouts + '*.html', './layouts/code_with_editor.html'],
      sectionSplitter: /---(.*)---/g
    },
    files: [{
      expand: true,
      cwd: './slides/',
      src: ['*.md']
    }]
  };
};
