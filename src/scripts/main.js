import showdown from "showdown";

const converter = new showdown.Converter();
const preview = document.querySelector("#preview");

document.querySelector("#markDownText").addEventListener("keyup", function (e) {
  preview.innerHTML = converter.makeHtml(e.target.value);
});
