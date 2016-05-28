# Grunt presentation builder reveal.js demo

Demos of using the [grunt-presentation-builder](https://github.com/nponiros/grunt_presentation_builder) with grunt and reveal.js to build presentations from multiple slide files.
There are currently two demos, one under `./presentations/layouts_demo` showcasing the available layouts and one under `./presentations/code_demo` showing how you can have slides with code highlighting (uses [highlight.js](https://highlightjs.org/)) and slides with a code editor (uses [CodeMirror](http://codemirror.net/) and a special layout).

## Usage
TODO

## Directory Structure

### ./css

Contains stylesheets used by all presentations. theme.css is a modified reveal.js theme and extras.css has code used in the layouts.

### ./layouts

Various layouts which can be used for the individual slides. You can define which layout to use in the front matter of a slide by setting the `layout` attribute to the name of the layout file minus the extension. If no layout is specified the default.html layout is used.
Sections in the slide files will be put to the correct position in the layout file using `<%= sectionName %>` where _sectionName_ is the name used in the slide file.

### ./presentations

The demos. Each presentation contains a Gruntfile.js used to call the builder and copy the needed assets, an index.html file in which the slides will be rendered to and a folder with the slide files. The index.html file is also the entry point to the presentation and will automatically be written to the directory specified by the `outputDir` property of the pbuilder task.

### ./presentations/code_demo

The code demo has two additional directories (css and js) in which an extra stylesheet and an extra JavaScript file is stored needed in order to get the code editor to work with reveal.js. Also the index.html file loads extra JavaScript/stylesheets for CodeMirror and highlight.js and initializes highlight.js and CodeMirror. You can pass options for CodeMirror to the `prepareCodemirror` function used in index.html. The mode for CodeMirror can be used as front matter attribute in the slides using the editor. Only the mode for JavaScript is loaded in the index.html. Have a look at the official [manual](http://codemirror.net/doc/manual.html) on how to configure CodeMirror.

## TODO

* fix grunt-presentation-builder version in package.json
* add pdf task
* add usage information

## License

[MIT License](./LICENSE)
