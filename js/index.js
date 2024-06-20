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

function createElementFromArray(objectToBeCreated){
    let liElement = document.createElement("li");
    liElement.classList.add("added-to-do-li", "d-flex", "justify-content-between", "align-items-center", "point-three-second-transition");

    let liElementleftSide = document.createElement("div");
    liElementleftSide.classList.add("li-left-side", "d-flex", "align-items-center");
    liElement.insertAdjacentElement("afterbegin",liElementleftSide);

    let checkCircle = document.createElement("button");
    checkCircle.classList.add("mark-circle", "point-three-second-transition");
    liElementleftSide.insertAdjacentElement("afterbegin", checkCircle);
    checkCircle.addEventListener("click", (e) => {
        checkCircle.closest(".added-to-do-li").classList.toggle("checked");
        objectToBeCreated.isChecked = !objectToBeCreated.isChecked;
        console.log(data);
        console.log(objectToBeCreated);
    });

    



    let content = document.createElement("h5");
    content.textContent = objectToBeCreated.content;
    content.classList.add("li-text");
    liElementleftSide.insertAdjacentElement("beforeend", content);


    let deleteButtonWrapper = document.createElement("button");
    deleteButtonWrapper.classList.add("d-flex", "delete-svg");
    deleteButtonWrapper.insertAdjacentHTML("beforeend", `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1); cursor: pointer;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
    `);
    liElement.insertAdjacentElement("beforeend", deleteButtonWrapper);


    addedToDoUl.insertAdjacentElement("afterbegin",liElement);
}

function addElement(e){
    e.preventDefault();
    if(addInput.value.length < 5){
        warning.classList.add("active");
    }else{
        warning.classList.remove("active");
        addElementInArray(addInput.value);
        createElementFromArray(data[data.length - 1]);
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