// class TextEditor {
//   constructor(editorId) {
//     this.editor = document.getElementById(editorId);
//   }

//   format(command, value = null) {
//     this.editor.focus();
//     document.execCommand(command, false, value);
//   }
// }

// class Toolbar {
//   constructor(editor) {
//     this.editor = editor;
//   }

//   // Text style
//   bold() { this.editor.format('bold'); }
//   italic() { this.editor.format('italic'); }
//   underline() { this.editor.format('underline'); }

//   // Headings
//   heading1() { this.editor.format('formatBlock', '<H1>'); }
//   heading2() { this.editor.format('formatBlock', '<H2>'); }
//   heading3() { this.editor.format('formatBlock', '<H3>'); }

//   // Font
//   setFontSize(size) { this.editor.format('fontSize', size); }
//   setFontFamily(family) { this.editor.format('fontName', family); }

//   // Alignment
//   alignLeft() { this.editor.format('justifyLeft'); }
//   alignCenter() { this.editor.format('justifyCenter'); }
//   alignRight() { this.editor.format('justifyRight'); }
//   alignJustify() { this.editor.format('justifyFull'); }

//   // Color
//   setTextColor(color) { this.editor.format('foreColor', color); }
//   setHighlight(color) { this.editor.format('hiliteColor', color); }

//   // Lists & Indent
//   unorderedList() { this.editor.format('insertUnorderedList'); }
//   orderedList() { this.editor.format('insertOrderedList'); }
//   indent() { this.editor.format('indent'); }
//   outdent() { this.editor.format('outdent'); }

//   // Insert link
//   insertLink() {
//     const url = prompt("Enter URL:");
//     if (!url) return;
//     this.editor.format("createLink", url);
//   }

//   // Insert image via URL
//   insertImageURL() {
//     const url = prompt("Enter image URL:");
//     if (!url) return;
//     const img = document.createElement("img");
//     img.src = url;
//     img.style.maxWidth = "300px";
//     img.style.cursor = "move";
//     img.draggable = true;
//     this.makeDraggable(img);
//     this.makeResizable(img);
//     this.editor.appendChild(img);
//   }

//   // Insert image via file
//   insertImageFile(file) {
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = e => {
//       const img = document.createElement("img");
//       img.src = e.target.result;
//       img.style.maxWidth = "300px";
//       img.style.cursor = "move";
//       img.draggable = true;
//       this.makeDraggable(img);
//       this.makeResizable(img);
//       this.editor.appendChild(img);
//     };
//     reader.readAsDataURL(file);
//   }

//   // Insert table
//   insertTable(rows = 2, cols = 2) {
//     const table = document.createElement("table");
//     table.border = "1";
//     table.style.borderCollapse = "collapse";
//     table.style.cursor = "move";
//     table.style.width = "auto";

//     for (let r = 0; r < rows; r++) {
//       const row = table.insertRow();
//       for (let c = 0; c < cols; c++) {
//         const cell = row.insertCell();
//         cell.innerText = "Cell";
//         cell.contentEditable = true;
//         cell.style.minWidth = "50px";
//         cell.style.minHeight = "30px";
//         cell.style.padding = "5px";
//         cell.style.border = "1px solid #999";
//       }
//     }

//     this.makeDraggable(table);
//     this.makeResizable(table);
//     this.editor.appendChild(table);
//   }

//   // --- Utilities ---
//   makeDraggable(element) {
//     let offsetX = 0, offsetY = 0, isDown = false;
//     element.addEventListener('mousedown', e => {
//       isDown = true;
//       offsetX = e.offsetX;
//       offsetY = e.offsetY;
//       element.style.position = 'absolute';
//       element.style.zIndex = 1000;
//     });
//     document.addEventListener('mousemove', e => {
//       if (!isDown) return;
//       element.style.left = (e.pageX - offsetX) + 'px';
//       element.style.top = (e.pageY - offsetY) + 'px';
//     });
//     document.addEventListener('mouseup', () => isDown = false);
//   }

//   makeResizable(element) {
//     element.style.resize = "both";
//     element.style.overflow = "auto";
//     element.style.display = "inline-block";
//   }
// }

// // --- Initialize ---
// const editorApp = new TextEditor('editor');
// const toolbar = new Toolbar(editorApp);

// // --- Toolbar buttons ---
// document.getElementById('boldBtn').addEventListener('click', () => toolbar.bold());
// document.getElementById('italicBtn').addEventListener('click', () => toolbar.italic());
// document.getElementById('underlineBtn').addEventListener('click', () => toolbar.underline());

// document.getElementById('h1Btn').addEventListener('click', () => toolbar.heading1());
// document.getElementById('h2Btn').addEventListener('click', () => toolbar.heading2());
// document.getElementById('h3Btn').addEventListener('click', () => toolbar.heading3());

// document.getElementById('fontFamily').addEventListener('change', e => toolbar.setFontFamily(e.target.value));
// document.getElementById('fontSize').addEventListener('change', e => toolbar.setFontSize(e.target.value));

// document.getElementById('alignLeftBtn').addEventListener('click', () => toolbar.alignLeft());
// document.getElementById('alignCenterBtn').addEventListener('click', () => toolbar.alignCenter());
// document.getElementById('alignRightBtn').addEventListener('click', () => toolbar.alignRight());
// document.getElementById('alignJustifyBtn').addEventListener('click', () => toolbar.alignJustify());

// document.getElementById('textColor').addEventListener('input', e => toolbar.setTextColor(e.target.value));
// document.getElementById('highlightColor').addEventListener('input', e => toolbar.setHighlight(e.target.value));

// document.getElementById('unorderedListBtn').addEventListener('click', () => toolbar.unorderedList());
// document.getElementById('orderedListBtn').addEventListener('click', () => toolbar.orderedList());
// document.getElementById('indentBtn').addEventListener('click', () => toolbar.indent());
// document.getElementById('outdentBtn').addEventListener('click', () => toolbar.outdent());

// document.getElementById('insertLinkBtn').addEventListener('click', () => toolbar.insertLink());
// document.getElementById('insertImageURLBtn').addEventListener('click', () => toolbar.insertImageURL());





// --- TextEditor Class ---
class TextEditor {
  constructor(editorId) {
    this.editor = document.getElementById(editorId);
  }

  format(command, value = null) {
    this.editor.focus();
    document.execCommand(command, false, value);
  }

  reset() {
    this.editor.innerHTML = "";
  }

  getHTML() {
    return this.editor.innerHTML;
  }

  getText() {
    return this.editor.innerText;
  }

  preview() {
    const previewWindow = window.open("", "_blank");
    previewWindow.document.write(`<html><head><title>Preview</title></head><body>${this.getHTML()}</body></html>`);
  }
}

// --- Toolbar Class ---
class Toolbar {
  constructor(editor) {
    this.editor = editor;
  }

  // --- Text style ---
  bold() { this.editor.format('bold'); }
  italic() { this.editor.format('italic'); }
  underline() { this.editor.format('underline'); }

  // --- Headings ---
  heading1() { this.editor.format('formatBlock', '<H1>'); }
  heading2() { this.editor.format('formatBlock', '<H2>'); }
  heading3() { this.editor.format('formatBlock', '<H3>'); }

  // --- Font ---
  setFontSize(size) { this.editor.format('fontSize', size); }
  setFontFamily(family) { this.editor.format('fontName', family); }

  // --- Alignment ---
  alignLeft() { this.editor.format('justifyLeft'); }
  alignCenter() { this.editor.format('justifyCenter'); }
  alignRight() { this.editor.format('justifyRight'); }
  alignJustify() { this.editor.format('justifyFull'); }

  // --- Color ---
  setTextColor(color) { this.editor.format('foreColor', color); }
  setHighlight(color) { this.editor.format('hiliteColor', color); }

  // --- Lists & Indent ---
  unorderedList() { this.editor.format('insertUnorderedList'); }
  orderedList() { this.editor.format('insertOrderedList'); }
  indent() { this.editor.format('indent'); }
  outdent() { this.editor.format('outdent'); }

  // --- Links ---
  insertLink() {
    const url = prompt("Enter URL:");
    if (!url) return;
    this.editor.format("createLink", url);
  }

  // --- Images ---
  insertImageURL() {
    const url = prompt("Enter image URL:");
    if (!url) return;
    const img = document.createElement("img");
    img.src = url;
    this.applyImageProps(img);
    this.editor.editor.appendChild(img);
  }

  insertImageFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement("img");
      img.src = e.target.result;
      this.applyImageProps(img);
      this.editor.editor.appendChild(img);
    };
    reader.readAsDataURL(file);
  }

  applyImageProps(img) {
    img.style.maxWidth = "300px";
    img.style.cursor = "move";
    img.draggable = true;
    this.makeDraggable(img);
    this.makeResizable(img);
  }

  // --- Tables ---
  insertTable(rows = 2, cols = 2) {
    const table = document.createElement("table");
    table.border = "1";
    table.style.borderCollapse = "collapse";
    table.style.cursor = "move";

    for (let r = 0; r < rows; r++) {
      const row = table.insertRow();
      for (let c = 0; c < cols; c++) {
        const cell = row.insertCell();
        cell.innerText = "Cell";
        cell.contentEditable = true;
        cell.style.minWidth = "50px";
        cell.style.minHeight = "30px";
        cell.style.padding = "5px";
        cell.style.border = "1px solid #999";
      }
    }

    this.makeDraggable(table);
    this.makeResizable(table);
    this.editor.editor.appendChild(table);
  }

  // --- Clear & Reset ---
  clearFormatting() {
    this.editor.format('removeFormat');
  }

  resetEditor() {
    this.editor.reset();
  }

  // --- Copy ---
  copyPlainText() {
    navigator.clipboard.writeText(this.editor.getText());
    alert("Text copied!");
  }

  

  // --- Preview ---
  previewContent() {
    this.editor.preview();
  }

  // --- Drag & Resize Utilities ---
  makeDraggable(element) {
    let offsetX = 0, offsetY = 0, isDown = false;
    element.addEventListener('mousedown', e => {
      isDown = true;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      element.style.position = 'absolute';
      element.style.zIndex = 1000;
    });
    document.addEventListener('mousemove', e => {
      if (!isDown) return;
      element.style.left = (e.pageX - offsetX) + 'px';
      element.style.top = (e.pageY - offsetY) + 'px';
    });
    document.addEventListener('mouseup', () => isDown = false);
  }

  makeResizable(element) {
    element.style.resize = "both";
    element.style.overflow = "auto";
    element.style.display = "inline-block";
  }
// --- Find & Replace ---
findAndReplace() {
  const findText = prompt("Enter text to find:");
  if (!findText) return;

  const content = this.editor.getText(); // get plain text for searching

  if (!content.includes(findText)) {
    alert(`"${findText}" not found in the document.`);
    return; // stop if word not found
  }

  alert(`"${findText}" found in the document.`);

  const replaceText = prompt("Enter replacement text:");
  if (replaceText === null) return;

  // Replace all occurrences in HTML
  const htmlContent = this.editor.getHTML();
  const regex = new RegExp(findText, 'g'); // global replace
  const newContent = htmlContent.replace(regex, replaceText);
  this.editor.editor.innerHTML = newContent;

  alert(`All occurrences of "${findText}" have been replaced with "${replaceText}".`);
}


}

// --- Initialize Editor ---
const editorApp = new TextEditor('editor');
const toolbar = new Toolbar(editorApp);

// --- Toolbar Event Listeners ---
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
document.getElementById('findReplaceBtn').addEventListener('click', () => toolbar.findAndReplace());


const uploadBtn = document.getElementById('uploadImageBtn');
const imageInput = document.getElementById('imageInput');
uploadBtn.addEventListener('click', () => imageInput.click());
imageInput.addEventListener('change', e => toolbar.insertImageFile(e.target.files[0]));

document.getElementById('insertTableBtn').addEventListener('click', () => toolbar.insertTable());
document.getElementById('clearFormattingBtn').addEventListener('click', () => toolbar.clearFormatting());
document.getElementById('resetEditorBtn').addEventListener('click', () => toolbar.resetEditor());
document.getElementById('copyPlainTextBtn').addEventListener('click', () => toolbar.copyPlainText());

document.getElementById('previewBtn').addEventListener('click', () => toolbar.previewContent());
// --- Export Functions ---
class Exporter {
  constructor(editor) {
    this.editor = editor;
  }

  // --- Export PDF ---
  exportPDF(title = "Document", author = "Author") {
    const opt = {
      margin:       0.5,
      filename:     `${title}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Add metadata by injecting a hidden div with title/author
    const metaDiv = document.createElement('div');
    metaDiv.style.display = 'none';
    metaDiv.innerHTML = `<p>Title: ${title}</p><p>Author: ${author}</p>`;
    this.editor.editor.appendChild(metaDiv);

    html2pdf().set(opt).from(this.editor.editor).save().then(() => {
      metaDiv.remove(); // clean up
    });
  }

  // --- Export Word (.doc) ---
  exportWord(title = "Document", author = "Author") {
    let header = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' 
            xmlns:w='urn:schemas-microsoft-com:office:word' 
            xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>${title}</title></head>
      <body>
      <h2>${title}</h2>
      <h4>Author: ${author}</h4>
    `;
    let footer = "</body></html>";
    let sourceHTML = header + this.editor.getHTML() + footer;

    const blob = new Blob(['\ufeff', sourceHTML], {
      type: 'application/msword'
    });

    // Download file
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.doc`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  }
}

// --- Initialize Exporter ---
const exporter = new Exporter(editorApp);

// --- Add Export Event Listeners ---
document.getElementById('exportPDFBtn')?.addEventListener('click', () => {
  const title = prompt("Enter document title:", "My Document") || "Document";
  const author = prompt("Enter author name:", "Author") || "Author";
  exporter.exportPDF(title, author);
});

document.getElementById('exportWordBtn')?.addEventListener('click', () => {
  const title = prompt("Enter document title:", "My Document") || "Document";
  const author = prompt("Enter author name:", "Author") || "Author";
  exporter.exportWord(title, author);
});
// --- Dark Mode / Light Mode ---
class ThemeManager {
  constructor() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.applyTheme(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
  }

  applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }
}

// --- Initialize ThemeManager ---
const themeManager = new ThemeManager();

// --- Event Listener for toggle button ---
document.getElementById('toggleDarkModeBtn').addEventListener('click', () => {
  themeManager.toggleTheme();
});
// --- Auto-save Class ---
class AutoSave {
  constructor(editor, interval = 5000) { // default 5 seconds
    this.editor = editor;
    this.interval = interval;
    this.key = 'wordpad-autosave';
    this.startAutoSave();
    this.loadContent();
  }

  startAutoSave() {
    setInterval(() => {
      const content = this.editor.getHTML();
      localStorage.setItem(this.key, content);
      this.showStatus("Auto-saved");
    }, this.interval);
  }

  loadContent() {
    const savedContent = localStorage.getItem(this.key);
    if (savedContent) {
      this.editor.editor.innerHTML = savedContent;
      this.showStatus("Restored previous session");
    }
  }

  clear() {
    localStorage.removeItem(this.key);
    this.showStatus("Auto-save cleared");
  }

  showStatus(message) {
    // Simple floating message at bottom-right
    let statusEl = document.getElementById('autosaveStatus');
    if (!statusEl) {
      statusEl = document.createElement('div');
      statusEl.id = 'autosaveStatus';
      statusEl.style.position = 'fixed';
      statusEl.style.bottom = '10px';
      statusEl.style.right = '10px';
      statusEl.style.background = 'rgba(0,0,0,0.7)';
      statusEl.style.color = '#fff';
      statusEl.style.padding = '5px 10px';
      statusEl.style.borderRadius = '4px';
      statusEl.style.fontSize = '12px';
      statusEl.style.zIndex = 10000;
      document.body.appendChild(statusEl);
    }
    statusEl.innerText = message;
    // Fade out after 2 seconds
    setTimeout(() => {
      statusEl.innerText = '';
    }, 2000);
  }
}
const autoSave = new AutoSave(editorApp); // default interval 5 sec

