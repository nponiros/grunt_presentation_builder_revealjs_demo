'use strict';

// All paths relative to Gruntfile.js
module.exports = function (dirs) {
  return {
    options: {
      layoutAttributes: { // Properties defined here can be used in any layout file and index.html. If front matters contain the same properties then those have precedence
        title: 'Code', // Title in index.html head
        footer: 'Copyright....'
      },
      slides: [ // Slide file names without extension
        'slide1', {
          slides: [ // Nested slides (currently only reveal.js) -> default prefix <section> suffix </section>
            'slide2',
            'slide3'
          ]
        }, {
          slides: [
            'slide4',
            'slide5'
          ]
        }
      ],
      index: './index.html',
      outputDir: dirs.output,
      layouts: [dirs.layouts + '*.html'],
      sectionSplitter: /---(.*)---/g
    },
    files: [{
      expand: true,
      cwd: './slides/',
      src: ['*.md']
    }]
  };
};
