const root = document.getElementById("root");
const bodyElement = document.body;

bodyElement.style.backgroundColor = "darkblue";

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

const h1 = document.createElement("h1");
h1.innerText = "This is Frank's Page";
h1.style.fontFamily = "Georgia, serif"
root.appendChild(h1);

root.style.textAlign = "center";
root.style.marginTop = "50px";
root.style.marginLeft = "400px";
root.style.marginRight = "400px";
root.style.backgroundColor = "lightblue";

const p = document.createElement("p");
p.innerText = "This is difficult, but I will prevail!";
p.style.fontFamily = "Georgia, serif"
root.appendChild(p);

const gifImage = document.createElement('img');
const gifUrl = "https://media.tenor.com/PIEwc5S4Oc0AAAAj/hol-horse-jojo-hftf.gif";
gifImage.src = gifUrl;

root.appendChild(gifImage);

