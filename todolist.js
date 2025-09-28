class Task {
    #body;
    #done = false;
    #div = document.createElement("div");
    #taskBody = document.createElement("span");
    #usrctrlElem = document.createElement("button");
    constructor(body) {
        this.#body = body;
        this.#taskBody.innerHTML = this.#body;
        this.#usrctrlElem.addEventListener("click",() => {
            this.#done = !this.#done;
        });
        this.#div.classList.add("task");
        this.#div.appendChild(this.#taskBody);
        this.#usrctrlElem.innerHTML = "Finish";
        this.#div.appendChild(this.#usrctrlElem);

    }
    isDone() {
        return this.#done;
    }
    Complete() {
        this.#done = true;
    }
    getBody() {
        return this.#body;
    }
    getElement() {
        return this.#div;
    }
    

}
let exampleTasks = [
    new Task("some body")
];

let activeTasks = [];
let userInputElem = document.getElementById("inputTask");
let btnAddTaskElem = document.getElementById("btnAdd");
let todoListElem = document.getElementById("todos");
let doneListEleme = document.getElementById("done");

btnAddTaskElem.addEventListener("click", () => {
    if(userInputElem.value == "") return;
    let curTask = new Task(userInputElem.value);
    todoListElem.appendChild(curTask.getElement());
    userInputElem.value = "";

})
// when the add button is pressed, make a task from userInput string
