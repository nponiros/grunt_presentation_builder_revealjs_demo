(function(CodeMirror) {
  function init(options) {
    function createEditor(textarea, options, mode) {
      options = options || {};
      if (mode) {
        options.mode = mode;
      }
      CodeMirror.fromTextArea(textarea, options)
    }

    const textareas = document.querySelectorAll('textarea[code]');
    for (let i = 0; i < textareas.length; i++) {
      const mode = textareas.dataset.mode;
      createEditor(textareas[i], options, mode);
    }
  }

  window.prepareCodemirror = init;
}(CodeMirror));