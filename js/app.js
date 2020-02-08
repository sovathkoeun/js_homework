const dateElement = document.querySelector('#date');
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};
let time = new Date();
dateElement.innerHTML = time.toLocaleString("en-US", options);

const listElement = document.querySelector('#list');
const inputElement = document.querySelector('#input');

let list = [];
let id = 0;

document.addEventListener('keyup', event => {
    if (event.key === "Enter") {
        const toDo = inputElement.value;
        if (toDo) {
            addToDo(toDo);
            list.push({
                id: id,
                name: toDo,
                done: false,
            });
            id++;
            localStorage.setItem("TODO", JSON.stringify(list));
        }
       ClearInput(inputElement);
    }
});

function addToDo(todo, id, done) {
    const lineCross = done ? line : "";
    const items = `  
        <li class="item"> 
            <i class="fa fa-pencil" job="complete" id="${id}"></i>
            <p class="text ${lineCross}">${todo}</p>
        </li>
    `;
    listElement.insertAdjacentHTML("beforeend", items);
}

function ClearInput() {
    inputElement.value = "";
}