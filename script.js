const containerDiv = document.getElementById("main-container");
let count = 1;
const addDiv = () => {
  const newDiv = document.createElement("div");
  newDiv.id = `div-${count++}`;
  newDiv.classList.add("dynamic-div");
  containerDiv.appendChild(newDiv);
  console.log(newDiv);
};

const removeDiv = () => {
  const lastElement = containerDiv.lastElementChild;
  try {
    const removeingDiv = document.getElementById(lastElement.id);
    containerDiv.removeChild(removeingDiv);
  } catch (error) {
    console.log("There is no div to remove");
  }
};
