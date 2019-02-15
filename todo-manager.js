import {ToDoActionBar} from './todo-action-bar';
import {ToDoItem} from './todo-item';

function ToDoManager()  {
    this.listOfToDo = [];
    this.toDoCounter = 0;
    this.toDoStatus = false;
    this.toDoChecked = false;
    this.toDoToInsert = [];
}

ToDoManager.prototype.init = function(toDoManager) {     
    const toDoItem = new ToDoItem();
    const toDoAction = new ToDoActionBar();
    toDoAction.init(toDoManager);
    toDoItem.init(toDoManager);
}

ToDoManager.prototype.render = function() {
    console.log("in render");
    var toDoContainer = document.getElementById("todo-list-wrapper");
    toDoContainer.innerHTML="";

    for(var i=0; i < this.toDoToInsert.length; i++){
        console.log("hi"+i);
        document.getElementById("todo-list-wrapper").appendChild(this.toDoToInsert[i]);
    }
}


export {ToDoManager};