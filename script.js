console.log("Hello! If you see this, the script is working.");

/*
<<<<<<< HEAD

- [ ] Select the section with an id of container without using querySelector.
- [ ] Select the section with an id of container using querySelector.
- [ ] Select all of the list items with a class of "second".
- [ ] Select a list item with a class of third, but only the list item inside of the ol tag.

- [ ] Give the section with an id of container the text "Hello!".
- [ ] Add the class main to the div with a class of footer.
- [ ] Remove the class main on the div with a class of footer.
- [ ] Create a new li element.

- [ ] Give the li the text "four".
- [ ] Append the li to the ul element.
- [ ] Loop over all of the lis inside the ol tag and give them a background color of "green".
- [ ] Remove the div with a class of footer.
*/

// Try rewriting this without using querySelector
//const header = document.querySelector("#container");
//console.log("header", header);

//Select the section with an id of container without using querySelector
console.log("Problem 1");

const container = document.getElementById("container");
console.log("container", container);

//Selecting section with id of container using querySelector
console.log("Problem 2");

const containerQuery = document.querySelector("#container");
console.log("containerQuery", containerQuery);

// Selecting all list items with a class of "second"
console.log("Problem 3");

const secondItems = document.getElementsByClassName("second");
console.log("secondItems", secondItems);

// Selecting a list item with a class of third, but only the list item inside of the ol tag
console.log("Problem 4");
const thirdOlItem = document.querySelector("ol .third");
console.log("thirdOlItem", thirdOlItem)

//- [ ] Give the section with an id of container the text "Hello!"
console.log("Problem 5");
newP = document.createElement('p');
newP.innerText = "hello";
containerByID = document.getElementById("container");
containerByID.appendChild(newP);
console.log("Hello", newP);

//- [ ] Add the class main to the div with a class of footer.
console.log("Problem 6");
footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");
console.log("Class main", footerDiv.classList);
//- [ ] Remove the class main on the div with a class of footer.
console.log("problem 7");
footerDiv.classList.remove("main");
console.log("probelm 7", footerDiv.classList);
//- [ ] Create a new li element.
console.log('problem 8');
newLi = document.createElement("li");
console.log("new list", newLi);


//- [ ] Give the li the text "four".
console.log('problem 9');
newLi.innerText = "four";
console.log('New Li Text', newLi.innerText)
//- [ ] Append the li to the ul element.
console.log('problem 10');
ulElement = document.querySelector('ul');
ulElement.appendChild(newLi);
console.log('new element', ulElement, newLi)
//- [ ] Loop over all of the lis inside the ol tag and give them a background color of "green".
console.log('problem 11');
olLis = document.querySelectorAll("ol li");
olLis.forEach(li => {
    li.style.backgroundColor = "green";
});
console.log('change the background color:', 'green');
//- [ ] Remove the div with a class of footer.
console.log('Problem 12');

footerDiv.remove();

function check(item){
    if(item){
        return true;
    }
return false;
}

console.log('removed class of footer', check(footerDiv));
