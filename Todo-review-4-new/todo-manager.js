import {ToDoAction} from './todo-action';
import {ToDoItem} from './todo-item';

var ToDoManager = function() {
        this.listOfToDo = [];
        this.toDoCounter =0;
        this.toDoStatus =false;
        this.toDoChecked =false;
    }

    ToDoManager.prototype.init = function(toDoManager) {     
        const toDoItem = new ToDoItem();
        const toDoAction = new ToDoAction();
        console.log(toDoAction);
        toDoAction.init(toDoManager);
        toDoItem.init(toDoManager);
    }


export {ToDoManager};