var table__content;
var PP__content_title;
var PP;
var PP__table_btn;
var PP__table;

window.addEventListener('load', () => {
  PP = document.getElementById("PP");
  table__content = document.getElementById("table__content");
  PP__content_title = document.getElementsByClassName("PP__content-title");
  PP__table_btn = document.getElementById("PP__table-btn");
  PP__table = document.getElementById("PP__table");

  generate_tableOfContent()

  PP__table_btn.addEventListener('click', PP__actionTable)


  window.addEventListener('scroll', (event) => {
    PP__fixedTable()
  })
})

function generate_tableOfContent() {
  Array.prototype.forEach.call(PP__content_title, (element) => {

    let text = element.innerHTML

    let newItem = document.createElement("a");
    let newContent = document.createTextNode(text);
    newItem.appendChild(newContent);

    let key = `${text.replace(/[=?]/g, "").replace(/[^A-Z0-9]/ig, "-")}-${Math.floor(Math.random() * 999999)}`

    element.id = key;
    newItem.href = `#${key}`
    table__content.appendChild(newItem);
  })
}



function PP__fixedTable() {
  let { y, bottom } = PP.getBoundingClientRect()

  if (y <= 0 && bottom >= 70) {
    PP__table.style.position = "fixed"
  } else {
    PP__table.style.position = "absolute"
  }


}

function PP__actionTable() {
  if (!PP__table.classList.contains("Open")) {
    PP__table.classList.add("Open")
  } else {
    PP__table.classList.add("Close")
    setTimeout(() => {
      PP__table.classList.remove("Open")
      PP__table.classList.remove("Close")
    }, 300)
  }
}