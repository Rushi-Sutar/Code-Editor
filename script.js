const htmlEditor = document.getElementById('html-editor');
const cssEditor = document.getElementById('css-editor');
const jsEditor = document.getElementById('js-editor');
const outputFrame = document.getElementById('output-frame');

function updateOutput() {
  const htmlCode = htmlEditor.value;
  const cssCode = `<style>${cssEditor.value}</style>`;
  const jsCode = `<script>${jsEditor.value}</script>`;

  const combinedCode = `${htmlCode}${cssCode}${jsCode}`;
  outputFrame.contentDocument.open();
  outputFrame.contentDocument.write(combinedCode);
  outputFrame.contentDocument.close();
}

htmlEditor.addEventListener('input', updateOutput);
cssEditor.addEventListener('input', updateOutput);
jsEditor.addEventListener('input', updateOutput);

updateOutput(); // Initial update
