var table__content;
var PP__content_title;
var PP;
var PP__table_btn;
var PP__table;

const PP__TABLE_OPEN = "PP__table-open";
const PP__TABLE_CLOSE = "PP__table-close";
const PP__FIXED = "PP__fixed";

window.addEventListener("load", () => {
  PP = document.getElementById("PP");
  table__content = document.getElementById("table__content");
  PP__content_title = document.getElementsByClassName("PP__content-title");
  PP__table_btn = document.getElementById("PP__table-btn");
  PP__table = document.getElementById("PP__table");

  generate_tableOfContent();

  PP__table_btn.addEventListener("click", PP__actionTable);
  window.addEventListener("scroll", PP__fixedTable);
});

function PP__validationWidth(value = 768) {
  if ($(document).width() <= value) {
    return true;
  } else {
    return false;
  }
}

function generate_tableOfContent() {
  Array.prototype.forEach.call(PP__content_title, (element, key) => {
    let text = element.innerHTML;

    let newItem = document.createElement("a");
    let newContent = document.createTextNode(text);
    newItem.appendChild(newContent);

    let id = `${text.replace(/[=?]/g, "").replace(/[^A-Z0-9]/gi, "-")}-${key}`;

    element.id = id;
    newItem.href = `#${id}`;
    newItem.classList.add("table__content-link");
    table__content.appendChild(newItem);

    newItem.addEventListener("click", PP__navigation_table);
  });
}

function PP__fixedTable() {
  if (PP__validationWidth()) {
    let { y, bottom } = PP.getBoundingClientRect();
    if (y <= 0 && bottom >= 70) {
      PP__table.style.left = "0px";
      PP__table.classList.add(PP__FIXED);
    } else {
      PP__table.classList.remove(PP__FIXED);
      PP__table.style.left = "";
    }
  }
}

function PP__actionTable() {
  if (PP__validationWidth()) {
    if (!PP__table.classList.contains(PP__TABLE_OPEN)) {
      PP__table.classList.add(PP__TABLE_OPEN);
    } else {
      PP__table.classList.add(PP__TABLE_CLOSE);
      setTimeout(() => {
        PP__table.classList.remove(PP__TABLE_OPEN);
        PP__table.classList.remove(PP__TABLE_CLOSE);
      }, 300);
    }
  }
}

function PP__navigation_table() {
  if (PP__validationWidth()) {
    PP__table.classList.add(PP__TABLE_CLOSE);
    setTimeout(() => {
      PP__table.classList.remove(PP__TABLE_OPEN);
      PP__table.classList.remove(PP__TABLE_CLOSE);
    }, 300);
  }
}
