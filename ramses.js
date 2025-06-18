// Simple JavaScript code to display a message on the Ramses Hobbies page
console.log("This is Ramses Hobbies Page");

// Create and append a heading element
const h1 = document.createElement("h1");
h1.innerText = "Ramses Hobbies";
h1.style.fontFamily = "Georgia, serif";
document.getElementById("root").appendChild(h1);

// Create and append a paragraph element
const p = document.createElement("p");
p.innerText = "This page is dedicated to Ramses and his hobbies.";
p.style.fontFamily = "Georgia, serif";
document.getElementById("root").appendChild(p);
h1.style.textAlign = "center";
p.style.textAlign = "center";
p.style.marginTop = "20px";
h1.style.marginTop = "20px";
h1.style.color = "blue";
h1.style.textDecoration = "underline";
p.style.color = "green";
p.style.textDecoration = "underline";
p.style.fontSize = "20px";
p.style.fontWeight = "bold";
p.style.lineHeight = "1.5";
p.style.marginBottom = "20px";  