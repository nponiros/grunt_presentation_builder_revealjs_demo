(function(CodeMirror) {
  function init(options) {
    function createEditor(textarea, options) {
      options = options || {
        lineNumbers: true,
        matchBrackets: true
      };
      CodeMirror.fromTextArea(textarea, options)
    }

    const textareas = document.querySelectorAll('textarea[code]');
    for (let i = 0; i < textareas.length; i++) {
      createEditor(textareas[i], options);
    }
  }

  window.prepareCodemirror = init;
}(CodeMirror));