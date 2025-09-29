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
  // --- Insert Image ---
insertImageURL() {
    const url = prompt("Enter image URL:");
    if (!url) return;
    this.addImage(url);
}

insertImageFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => this.addImage(e.target.result);
    reader.readAsDataURL(file);
}

addImage(src) {
    const img = document.createElement("img");
    img.src = src;
    img.style.maxWidth = "100%";   // fits inside page
    img.style.height = "auto";
    img.style.display = "block";
    img.style.margin = "10px 0";
    img.style.cursor = "pointer";

    // Resizable using simple drag handle
    const wrapper = document.createElement("div");
    wrapper.style.display = "inline-block";
    wrapper.style.position = "relative";
    wrapper.appendChild(img);

    const resizer = document.createElement("div");
    resizer.style.width = "10px";
    resizer.style.height = "10px";
    resizer.style.background = "blue";
    resizer.style.position = "absolute";
    resizer.style.right = "0";
    resizer.style.bottom = "0";
    resizer.style.cursor = "se-resize";
    wrapper.appendChild(resizer);

    let isResizing = false;
    resizer.addEventListener("mousedown", e => {
        e.preventDefault();
        isResizing = true;
    });
    document.addEventListener("mousemove", e => {
        if (!isResizing) return;
        const rect = wrapper.getBoundingClientRect();
        img.style.width = Math.min(e.pageX - rect.left, wrapper.parentElement.clientWidth) + "px";
    });
    document.addEventListener("mouseup", () => isResizing = false);

    // Append to last page
    const pages = this.editor.editor.querySelectorAll('.page');
    const lastPage = pages[pages.length - 1];
    lastPage.appendChild(wrapper);
}

// --- Insert Table ---
insertTable() {
    // Ask user for rows and columns
    const rows = parseInt(prompt("Enter number of rows:", "2"));
    const cols = parseInt(prompt("Enter number of columns:", "2"));

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Invalid input!");
        return;
    }

    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.margin = "10px 0";

    for (let r = 0; r < rows; r++) {
        const tr = table.insertRow();
        for (let c = 0; c < cols; c++) {
            const td = tr.insertCell();
            td.contentEditable = "true";
            td.innerText = "Cell";
            td.style.border = "1px solid #999";
            td.style.padding = "5px";
            td.style.minWidth = "50px";
            td.style.minHeight = "30px";
        }
    }

    // Table wrapper for resizing
    const wrapper = document.createElement("div");
    wrapper.style.width = "100%";
    wrapper.style.display = "inline-block";
    wrapper.style.position = "relative";
    wrapper.appendChild(table);

    const resizer = document.createElement("div");
    resizer.style.width = "10px";
    resizer.style.height = "10px";
    resizer.style.background = "blue";
    resizer.style.position = "absolute";
    resizer.style.right = "0";
    resizer.style.bottom = "0";
    resizer.style.cursor = "se-resize";
    wrapper.appendChild(resizer);

    let isResizing = false;
    resizer.addEventListener("mousedown", e => {
        e.preventDefault();
        isResizing = true;
    });
    document.addEventListener("mousemove", e => {
        if (!isResizing) return;
        const rect = wrapper.getBoundingClientRect();
        table.style.width = Math.min(e.pageX - rect.left, wrapper.parentElement.clientWidth) + "px";
    });
    document.addEventListener("mouseup", () => isResizing = false);

    // Append to last page
    const pages = this.editor.editor.querySelectorAll('.page');
    const lastPage = pages[pages.length - 1];
    lastPage.appendChild(wrapper);
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

    const parent = element.parentElement;
    const rect = parent.getBoundingClientRect();

    // Relative to parent
    let left = e.clientX - rect.left - offsetX;
    let top = e.clientY - rect.top - offsetY;

    // Fit inside page
    left = Math.max(0, Math.min(left, rect.width - element.offsetWidth));
    top = Math.max(0, Math.min(top, rect.height - element.offsetHeight));

    element.style.left = left + 'px';
    element.style.top = top + 'px';
  });

  document.addEventListener('mouseup', () => isDown = false);
}

makeResizable(element) {
  element.style.position = 'absolute';
  element.style.boxSizing = 'border-box';

  const resizer = document.createElement('div');
  resizer.style.width = '10px';
  resizer.style.height = '10px';
  resizer.style.background = 'blue';
  resizer.style.position = 'absolute';
  resizer.style.right = '0';
  resizer.style.bottom = '0';
  resizer.style.cursor = 'se-resize';
  element.appendChild(resizer);

  let isResizing = false;

  resizer.addEventListener('mousedown', e => {
    e.stopPropagation();
    isResizing = true;
  });

  document.addEventListener('mousemove', e => {
    if (!isResizing) return;

    const parent = element.parentElement;
    const rect = parent.getBoundingClientRect();

    let width = e.clientX - element.getBoundingClientRect().left;
    let height = e.clientY - element.getBoundingClientRect().top;

    // Keep inside page
    width = Math.min(width, rect.width - element.offsetLeft);
    height = Math.min(height, rect.height - element.offsetTop);

    element.style.width = width + 'px';
    element.style.height = height + 'px';
  });

  document.addEventListener('mouseup', () => isResizing = false);
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

}
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

class FindReplace {
  constructor(editorId) {
    this.editor = document.getElementById(editorId);
    this.modal = document.getElementById("findReplaceModal");
    this.findInput = document.getElementById("findInput");
    this.replaceInput = document.getElementById("replaceInput");
    this.findStatus = document.getElementById("findStatus");

    document.getElementById("findReplaceBtn").addEventListener("click", () => this.openModal());
    document.getElementById("closeModalBtn").addEventListener("click", () => this.closeModal());
    document.getElementById("findBtn").addEventListener("click", () => this.findText());
    document.getElementById("replaceBtn").addEventListener("click", () => this.replaceText());
  }

  openModal() {
    this.modal.style.display = "flex";
  }

  closeModal() {
    this.modal.style.display = "none";
    this.findStatus.textContent = "";
    this.findInput.value = "";
    this.replaceInput.value = "";
  }

  findText() {
    const text = this.editor.innerHTML;
    const searchWord = this.findInput.value;

   const regex = new RegExp(searchWord, "g");
const matches = text.match(regex);

if (matches) {
  this.findStatus.textContent = `✅ Found "${searchWord}" (${matches.length} times)`;
  this.findStatus.style.color = "green";
} else {
  this.findStatus.textContent = `❌ "${searchWord}" not found`;
  this.findStatus.style.color = "red";
}
  }

  replaceText() {
    const searchWord = this.findInput.value;
    const replaceWord = this.replaceInput.value;

    if (!searchWord) return;

    const regex = new RegExp(searchWord, "g");
    if (this.editor.innerHTML.includes(searchWord)) {
      this.editor.innerHTML = this.editor.innerHTML.replace(regex, replaceWord);
      this.findStatus.textContent = `🔄 Replaced all "${searchWord}" with "${replaceWord}"`;
      this.findStatus.style.color = "blue";
    } else {
      this.findStatus.textContent = `❌ Nothing to replace`;
      this.findStatus.style.color = "red";
    }
  }
}

// Initialize after page load
window.onload = () => {
  new FindReplace("editor");
};
class MetadataManager {
  constructor() {
    this.modal = document.getElementById("metadataModal");
    this.titleInput = document.getElementById("docTitle");
    this.authorInput = document.getElementById("docAuthor");
    this.metadata = { title: "Untitled", author: "Unknown" };

    // Buttons
    document.getElementById("saveMetadataBtn").addEventListener("click", () => this.saveMetadata());
    document.getElementById("closeMetadataBtn").addEventListener("click", () => this.closeModal());
  }

  openModal(callback) {
    this.modal.style.display = "flex";
    this.callback = callback; // export function to call later
  }

  closeModal() {
    this.modal.style.display = "none";
  }

  saveMetadata() {
    this.metadata.title = this.titleInput.value || "Untitled";
    this.metadata.author = this.authorInput.value || "Unknown";
    this.closeModal();

    if (this.callback) this.callback(this.metadata);
  }
}
// Initialize Metadata Manager
const metadataManager = new MetadataManager();

// PDF Export
document.getElementById("exportPDFBtn").addEventListener("click", () => {
  metadataManager.openModal((meta) => {
    const element = document.getElementById("editor");
    const opt = {
      margin: 10,
      filename: meta.title + ".pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
    html2pdf().from(element).set(opt).save();
  });
});

// Word Export
document.getElementById("exportWordBtn").addEventListener("click", () => {
  metadataManager.openModal((meta) => {
    const editorContent = document.getElementById("editor").innerHTML;
    const blob = new Blob(
      [
        `<html><head><meta charset="UTF-8"><title>${meta.title}</title>
        <meta name="author" content="${meta.author}"></head>
        <body>${editorContent}</body></html>`
      ],
      { type: "application/msword" }
    );
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = meta.title + ".doc";
    link.click();
  });
});


