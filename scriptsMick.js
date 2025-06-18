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
h1.innerText = "Hello? This is Michelangelo Raphael Page"
h1.style.fontFamily = "Georgia, serif";
root.appendChild(h1);

const img = document.createElement("img");
img.src = "img/turtle.jpg"; // Ensure the image path is correct
img.alt = "Michelangelo TMNT";
img.style.width = "300px";
img.style.display = "block";
img.style.margin = "20px auto";

const p1 = document.createElement("p");
p1.innerText = "Michelangelo is a fictional character and one of the four main protagonists of the Teenage Mutant Ninja Turtles (TMNT) franchise.";
p1.style.fontFamily = "Georgia, serif";
p1.style.margin = "20px 0";
root.appendChild(p1);

root.appendChild(img);

const p2 = document.createElement("p");
p2.innerText = "Michelangelo is known for his love of pizza, his laid-back personality, and his nunchaku skills. He is often portrayed as the jokester of the group, bringing humor and light-heartedness to the team.";
p2.style.fontFamily = "Georgia, serif";  
p2.style.margin = "20px 0";
root.appendChild(p2);

const footer = document.createElement("footer");
footer.innerText = "© 2025 Michelangelo Javier. All rights reserved.";
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.width = "100%";
footer.style.backgroundColor = "#f1f1f1";
footer.style.textAlign = "center";
footer.style.padding = "10px";
footer.style.fontFamily = "Georgia, serif";
footer.style.fontSize = "14px";
footer.style.color = "#333";

root.appendChild(footer);


