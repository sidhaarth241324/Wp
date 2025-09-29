// --- TextEditor class ---
class TextEditor {
  constructor(editorId) {
    this.editor = document.getElementById(editorId);
  }

  format(command, value = null) {
    this.editor.focus();
    document.execCommand(command, false, value);
  }
}

// --- Toolbar class ---
class Toolbar {
  constructor(editor) {
    this.editor = editor;
  }

  // Text style
  bold() { this.editor.format('bold'); }
  italic() { this.editor.format('italic'); }
  underline() { this.editor.format('underline'); }

  // Headings
  heading1() { this.editor.format('formatBlock', '<H1>'); }
  heading2() { this.editor.format('formatBlock', '<H2>'); }
  heading3() { this.editor.format('formatBlock', '<H3>'); }

  // Font
  setFontSize(size) { this.editor.format('fontSize', size); }
  setFontFamily(family) { this.editor.format('fontName', family); }

  // Alignment
  alignLeft() { this.editor.format('justifyLeft'); }
  alignCenter() { this.editor.format('justifyCenter'); }
  alignRight() { this.editor.format('justifyRight'); }
  alignJustify() { this.editor.format('justifyFull'); }

  // Color
  setTextColor(color) { this.editor.format('foreColor', color); }
  setHighlight(color) { this.editor.format('hiliteColor', color); }

  // Lists & Indent
  unorderedList() { this.editor.format('insertUnorderedList'); }
  orderedList() { this.editor.format('insertOrderedList'); }
  indent() { this.editor.format('indent'); }
  outdent() { this.editor.format('outdent'); }

  // Insert link
  insertLink() {
    const url = prompt("Enter URL:");
    if (!url) return;
    this.editor.format("createLink", url);
  }

  // Insert image via URL
  insertImageURL() {
    const url = prompt("Enter image URL:");
    if (!url) return;
    this.insertImageWrapper(url);
  }

  // Insert image via File
  insertImageFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      this.insertImageWrapper(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  // Common wrapper for drag & resize
  insertImageWrapper(src) {
    const wrapper = document.createElement("div");
    wrapper.style.display = "inline-block";
    wrapper.style.position = "relative";
    wrapper.style.cursor = "move";

    const img = document.createElement("img");
    img.src = src;
    img.style.maxWidth = "300px";
    img.style.display = "block";

    wrapper.appendChild(img);
    this.editor.editor.appendChild(wrapper);

    this.makeDraggable(wrapper);
    this.makeResizable(wrapper);
  }

  // Insert table
  insertTable(rows = 2, cols = 2) {
    const wrapper = document.createElement("div");
    wrapper.style.display = "inline-block";
    wrapper.style.position = "relative";
    wrapper.style.cursor = "move";

    const table = document.createElement("table");
    table.border = "1";
    table.style.borderCollapse = "collapse";

    for (let r = 0; r < rows; r++) {
      const row = table.insertRow();
      for (let c = 0; c < cols; c++) {
        const cell = row.insertCell();
        cell.innerText = "Cell";
        cell.contentEditable = true;
        cell.style.minWidth = "50px";
        cell.style.minHeight = "30px";
        cell.style.border = "1px solid #999";
        cell.style.padding = "5px";
      }
    }

    wrapper.appendChild(table);
    this.editor.editor.appendChild(wrapper);

    this.makeDraggable(wrapper);
    this.makeResizable(wrapper);
  }

  // --- Utility methods ---
  makeDraggable(el) {
    let isDown = false, offsetX = 0, offsetY = 0;
    el.addEventListener("mousedown", e => {
      isDown = true;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      el.style.position = "absolute";
      el.style.zIndex = 1000;
    });
    document.addEventListener("mousemove", e => {
      if (!isDown) return;
      el.style.left = e.pageX - offsetX + "px";
      el.style.top = e.pageY - offsetY + "px";
    });
    document.addEventListener("mouseup", () => isDown = false);
  }

  makeResizable(el) {
    el.style.resize = "both";
    el.style.overflow = "auto";
    el.style.display = "inline-block";
  }
}
clearFormatting() {
  const content = this.editor.editor.innerHTML;
  const div = document.createElement("div");
  div.innerHTML = content;
  
  // Remove all inline styles
  div.querySelectorAll('*').forEach(el => el.removeAttribute('style'));
  
  this.editor.editor.innerHTML = div.innerHTML;
}

// Reset editor content
resetEditor() {
  this.editor.editor.innerHTML = "Start typing here...";
}

// Copy as plain text
copyAsPlainText() {
  const text = this.editor.editor.innerText;
  navigator.clipboard.writeText(text)
    .then(() => alert("Copied as plain text!"))
    .catch(err => console.error(err));
}

// Copy as HTML
copyAsHTML() {
  const html = this.editor.editor.innerHTML;
  navigator.clipboard.writeText(html)
    .then(() => alert("Copied as HTML!"))
    .catch(err => console.error(err));
}

// Preview content
previewContent() {
  const previewWindow = window.open("", "_blank");
  previewWindow.document.write(`
    <html>
      <head>
        <title>Preview</title>
      </head>
      <body>
        ${this.editor.editor.innerHTML}
      </body>
    </html>
  `);
  previewWindow.document.close();
}
// --- Initialize editor and toolbar ---
const editorApp = new TextEditor('editor');
const toolbar = new Toolbar(editorApp);

// --- Toolbar button events ---
document.getElementById('boldBtn').addEventListener('click', () => toolbar.bold());
document.getElementById('italicBtn').addEventListener('click', () => toolbar.italic());
document.getElementById('underlineBtn').addEventListener('click', () => toolbar.underline());
document.getElementById('h1Btn').addEventListener('click', () => toolbar.heading1());
document.getElementById('h2Btn').addEventListener('click', () => toolbar.heading2());
document.getElementById('h3Btn').addEventListener('click', () => toolbar.heading3());
document.getElementById('fontFamily').addEventListener('change', e => toolbar.setFontFamily(e.target.value));
document.getElementById('fontSize').addEventListener('change', e => toolbar.setFontSize(e.target.value));
document.getElementById('alignLeftBtn').addEventListener('click', () => toolbar.alignLeft());
document.getElementById('alignCenterBtn').addEventListener('click', () => toolbar.alignCenter());
document.getElementById('alignRightBtn').addEventListener('click', () => toolbar.alignRight());
document.getElementById('alignJustifyBtn').addEventListener('click', () => toolbar.alignJustify());
document.getElementById('textColor').addEventListener('input', e => toolbar.setTextColor(e.target.value));
document.getElementById('highlightColor').addEventListener('input', e => toolbar.setHighlight(e.target.value));
document.getElementById('unorderedListBtn').addEventListener('click', () => toolbar.unorderedList());
document.getElementById('orderedListBtn').addEventListener('click', () => toolbar.orderedList());
document.getElementById('indentBtn').addEventListener('click', () => toolbar.indent());
document.getElementById('outdentBtn').addEventListener('click', () => toolbar.outdent());
document.getElementById('insertLinkBtn').addEventListener('click', () => toolbar.insertLink());
document.getElementById('insertImageURLBtn').addEventListener('click', () => toolbar.insertImageURL());

// --- Image upload ---
document.getElementById("uploadImageBtn").addEventListener("click", () => {
  document.getElementById("imageInput").click();
});
document.getElementById("imageInput").addEventListener("change", e => {
  const file = e.target.files[0];
  if (file) toolbar.insertImageFile(file);
  e.target.value = "";
});

// --- Table insertion ---
document.getElementById("insertTableBtn").addEventListener("click", () => {
  const rows = parseInt(prompt("Number of rows:", 2), 10);
  const cols = parseInt(prompt("Number of columns:", 2), 10);
  if (!isNaN(rows) && !isNaN(cols)) toolbar.insertTable(rows, cols);
});
// Clear formatting (remove all inline styles)

document.getElementById('clearFormattingBtn').addEventListener('click', () => toolbar.clearFormatting());
document.getElementById('resetEditorBtn').addEventListener('click', () => toolbar.resetEditor());
document.getElementById('copyPlainTextBtn').addEventListener('click', () => toolbar.copyAsPlainText());
document.getElementById('copyHTMLBtn').addEventListener('click', () => toolbar.copyAsHTML());
document.getElementById('previewBtn').addEventListener('click', () => toolbar.previewContent());
