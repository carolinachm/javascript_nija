window.addEventListener("load", start);

var globalNames = ["Um", "Dois", "Tres"];
var inputName = null;

function start() {
  inputName = document.querySelector("#inputName");
  preventfromSubmit();
  render();
  activateInput();

}

function preventfromSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
}

function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
    console.log(globalNames);
  }
  function handleTyping(event) {
    if (event.key === "Enter") insertName(event.target.value);
  }

  inputName.addEventListener("keyup", handleTyping);
  inputName.focus();
}

function render() {
  function createDeleteButton(index) {
    function deleteName() {
      console.log(deleteName);
      globalNames.splice(index, 1);
      render();
    }
    var button = document.createElement("button");
    button.classList.add("deleteButton");
    button.textContent = "x";

    button.addEventListener("click", deleteName);
    return button;
  }
  var divNames = document.querySelector("#names");
  divNames.innerHTML = "";

  var ul = document.createElement("ul");

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement("li");
    var button = createDeleteButton(i);

    var span = document.createElement("span");
    span.textContent = currentName;

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
}
function clearInput() {
  inputName.value = "";
  inputName.focus();
}
