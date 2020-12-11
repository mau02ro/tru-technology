var table__content;
var PP__content_title;

window.addEventListener('load', () => {
  table__content = document.getElementById("table__content");
  PP__content_title = document.getElementsByClassName("PP__content-title")

  generate_tableOfContent()
})

function generate_tableOfContent() {
  Array.prototype.forEach.call(PP__content_title, (element) => {
    console.log(element.innerHTML)

    let text = element.innerHTML

    let newItem = document.createElement("a");
    let newContent = document.createTextNode(text);
    newItem.appendChild(newContent);

    let key = `${text.replace(/[=?]/g, "").replace(/[^A-Z0-9]/ig, "-")}-${Math.floor(Math.random() * 999999)}`

    element.id = key;
    newItem.href = `#${key}`
    // añade el elemento creado y su contenido al DOM 
    table__content.appendChild(newItem);
  })
}
