class Task {
    #body;
    #done = false;
    #delete = false;
    #div = document.createElement("div");
    #taskBody = document.createElement("span");
    #usrctrlElem = document.createElement("button");
    constructor(body) {
        this.#body = body;
        this.#taskBody.innerHTML = this.#body;
        this.#usrctrlElem.addEventListener("click",() => {
            this.Complete();
            handleClickExternally(); // JavaScript: messy, but it works!
        });
        this.#div.classList.add("task");
        this.#div.appendChild(this.#taskBody);
        this.#usrctrlElem.innerHTML = "Finish";
        this.#div.appendChild(this.#usrctrlElem);

    }
    isDone() {
        return this.#done;
    }
    isDelete() {
        return this.#delete;
    }
    Complete() {
        if(this.isDone()) {
            this.#delete = true;
        }
        this.#done = true;
        // emit a check for updating todoList
        this.#usrctrlElem.innerHTML = "delete";
    }
    getBody() {
        return this.#body;
    }
    getElement() {
        return this.#div;
    }
    

}

class TodoList {
    #active = [];
    #done = [];
    #todoElem;
    #doneElem;
    constructor(TodoElem,DoneElem) {
        this.#todoElem = TodoElem;
        this.#doneElem = DoneElem;
    }
    Add(task) {
        this.#active.push(task);
        this.UpdateTodos();
    }
    Complete(task) {
        this.#active.splice(this.#active.indexOf(task),1);
        this.#done.push(task);
        
    }
    Remove(task) {
        this.#done.splice(this.#done.indexOf(task),1);
        

    }
    PutToLists() {
        for (let i=0;i<this.#active.length;i++) {
            if(this.#active[i].isDone()) {
                this.Complete(this.#active[i]);
            }
        }
        for(let i=0;i<this.#done.length;i++) {
            if(this.#done[i].isDelete()) {
                this.Remove(this.#done[i]);
            }
        }
    }
    UpdateElems() {
        this.PutToLists();
        this.UpdateTodos();
        this.UpdateDone();
    }

    UpdateTodos() {
        this.#todoElem.innerHTML = "";
        const length = this.#active.length;
        for(let i=0;i<length;i++) {
            this.#todoElem.appendChild(this.#active[i].getElement());
        }
    }
    UpdateDone() {
        this.#doneElem.innerHTML = "";
        const length = this.#done.length;
        for(let i=0;i<length;i++) {
            this.#doneElem.appendChild(this.#done[i].getElement());
        }

    }
    

}
let exampleTasks = [
    new Task("some body")
];
function handleClickExternally() {
    tdl.UpdateElems();
}
let activeTasks = [];
let userInputElem = document.getElementById("inputTask");
let btnAddTaskElem = document.getElementById("btnAdd");
let todoListElem = document.getElementById("todos");
let doneListElem = document.getElementById("done");
const tdl = new TodoList(todoListElem,doneListElem);
btnAddTaskElem.addEventListener("click", () => {
    if(userInputElem.value == "") return;
    let curTask = new Task(userInputElem.value);
    tdl.Add(curTask);
    userInputElem.value = ""; // clear the input
})

