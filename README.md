# Grunt presentation builder reveal.js demo

Demos of using the [grunt-presentation-builder](https://github.com/nponiros/grunt_presentation_builder) with grunt and reveal.js to build presentations from multiple slide files.
There are currently two demos, one under `./presentations/layouts_demo` showcasing the available layouts and one under `./presentations/code_demo` showing how you can have slides with code highlighting (uses [highlight.js](https://highlightjs.org/)) and slides with a code editor (uses [CodeMirror](http://codemirror.net/) and a special layout).

## Usage

Clone the repo:

```bash
git clone https://github.com/nponiros/grunt_presentation_builder_revealjs_demo.git
```

Then install all dependencies and grunt-cli:

```bash
npm install
npm install -g grunt-cli
```

The Gruntfile.js files define a number of tasks with the most interesting being `build`, `serve` and the `default` task. The `default` task runs `build` and then `serve`.
First cd into a presentation demo and run the `default` task with:

```bash
cd ./presentations/layouts_demo
grunt
```

You can now go to `localhost:8080` in your browser to view the demo presentation. You can also first build the presentation and then serve it with:

```bash
cd ./presentations/layouts_demo
grunt build
grunt serve
```

### Configuration

You can configure the grunt-presentation-builder (pbuilder task) in the builder_config.js files. Have a look at [grunt-presentation-builder](https://github.com/nponiros/grunt_presentation_builder) for more information on what is available.

If you need more stylesheets/JavaScript files you can augment the copy task to copy more files into the build directories. Also adjust the index.html to load the new stylesheets/JavaScript. Checkout [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) for more information about this task.

If you would like to use a different port than 8080 you can configure the connect task. Checkout [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) for more information about this task.

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

* add pdf task

## License

[MIT License](./LICENSE)
