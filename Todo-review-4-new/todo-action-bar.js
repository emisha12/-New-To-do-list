import {ToDoItem} from "./todo-item";

var ToDoActionBar = function(){
function checkExistanceInList(toDoText,toDoManager) {
        var exists;
        var toDoInput = document.getElementById("text-Box1"); 
        for(var i=0; i < toDoManager.listOfToDo.length; i++){
            if(toDoManager.listOfToDo[i].toDoText === toDoText) {
                toDoInput.value = "";
                alert("This already exists in the To Do List at " + (i+1) + "th position. Please enter another event.");
                exists = 1;
                break;
            }else {
                exists = 0;
            }
        }
        return exists;
    }
}

ToDoActionBar.prototype.init = function(toDoManager){
        var that = this;
        console.log(toDoManager.listOfToDo);
        console.log("in todoaction init"); 
        document.getElementById("addBtn").addEventListener('click', function() {
            that.addToDoEvent(toDoManager);
        });
        document.getElementById("delete-selected-Btn").addEventListener('click', function() {
            that.deleteSelected(toDoManager)
        });
        document.getElementById("delete-completed-Btn").addEventListener('click', function(){
            that.deleteCompleted(toDoManager);
        });
    }

ToDoActionBar.prototype.addToDoEvent = function(toDoManager){     
        var toDoEvent, hiddenTemplate, clone;  
        var toDoInput = document.getElementById("text-Box1");      
        var toDoText = toDoInput.value;
        const toDoActionBar = new TodoactionBar();
        if(!toDoText) {
           alert("enter some content");
        }else {  
            if(!toDoActionBar.checkExistanceInList(toDoText, toDoManager)) {
                hiddenTemplate = document.querySelector(`[data-divItem="divItem"]`);
                clone = hiddenTemplate.cloneNode(true);
                clone.querySelector(`[element-type="para"]`).innerHTML = toDoText;
                clone.classList.add("clone");
                clone.classList.remove("todo-item");
                clone.setAttribute("todoId", toDoManager.toDoCounter);
                //appending divItem to todo-event
                document.getElementById("todo-event").appendChild(clone);

                //clearing the text box
                toDoInput.value = "";

                toDoEvent = new ToDoItem(toDoManager.toDoCounter, toDoText, toDoManager.toDoStatus, toDoManager.toDoChecked);
                toDoManager.listOfToDo.push(toDoEvent);
                toDoManager.toDoCounter++;
               // localStorage.setObject("ListOfToDo",listOfToDo);
           }      
        }
   } 


ToDoActionBar.prototype.deleteCompleted = function(toDoManager) {
    var selectedToDoItem;
    for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {
        selectedToDoItem = document.querySelector(`[todoid="${j}"]`);
        if(toDoManager.listOfToDo[j].toDoStatus) {
            toDoManager.listOfToDo[j].deleteToDo(j, selectedToDoItem ,toDoManager);
        }
    } 
}

ToDoActionBar.prototype.deleteSelected = function(toDoManager){  
    var selectedToDoItem;
    for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {
        selectedToDoItem = document.querySelector(`[todoid="${j}"]`);
        //console.log(listOfToDo[j].toDoChecked); 
        if(toDoManager.listOfToDo[j].toDoChecked) {
            toDoManager.listOfToDo[j].deleteToDo(j, selectedToDoItem, toDoManager);
        }
    } 
}

export {ToDoAction};