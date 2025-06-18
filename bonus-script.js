//const { createElement } = require("react");

console.log("hello from JS");

const root = document.getElementById("root");
const h2 = document.createElement("h2");
const links = [
  { text: "Homepage", url: "bonus.html" },
  { text: "Ramses", url: "ramses.html" },
  { text: "Frank", url: "frank.html" },
  { text: "Michelangelo", url: "mick.html" }
]

links.forEach(({ text, url }) => {
  const a = document.createElement("a");
  a.href = url;
  a.textContent = text;
  a.target = "_blank";
  a.style.display = "block";
  a.style.display = "inline-block" 
  a.style.marginRight = "40px"
  root.appendChild(a);

});

h2.innerText =
  "Hello! This is my HTML website created entirely from JavaScript";
h2.style.fontFamily = "Georgia, serif";
root.appendChild(h2);
root.style.textAlign = "center";
root.style.marginTop = "50px";

const h1 = document.createElement("h1")
h1.innerText = "Hello?"
h1.style.fontFamily = "Georgia, serif";
root.appendChild(h1);
