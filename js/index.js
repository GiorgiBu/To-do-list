const toDoForm = document.querySelector(".add-to-do-form");
const addedToDoUl = document.querySelector(".added-to-do-ul");
const warning = document.querySelector(".warning");
const addInput = toDoForm.addInput;
const addButton = toDoForm.addButton;
let data = [];

function addElementInArray(content){
    let tempObj = {
        content,
        isChecked: false,
    };
    data.push(tempObj);
    console.log(data);
}

function addElement(e){
    e.preventDefault();
    if(addInput.value.length < 5){
        warning.classList.add("active");
    }else{
        warning.classList.remove("active");
        addElementInArray(addInput.value);
    }
    addInput.value = "";
    addInput.blur();
}

addButton.addEventListener("click", addElement);
toDoForm.addEventListener("submit", addElement);



// toDoForm.addEventListener("submit", (e) =>{
//     e.preventDefault();
// });

// window.addEventListener("keyup", (e) => {
//     e.preventDefault();
//     console.log(e);
//     if(e.key === "Enter"){
//         addElement(e);
//     }
// });