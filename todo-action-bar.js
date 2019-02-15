import {ToDoItem} from "./todo-item";

function ToDoActionBar(){
    this.checkExistanceInList = function(toDoText,toDoManager){
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
            var toDoEvent, clone;  
            var toDoInput = document.getElementById("text-Box1");      
            var toDoText = toDoInput.value;
            const toDoActionBar = new ToDoActionBar();
            const toDoItem = new ToDoItem();
            if(!toDoText) {
               alert("enter some content");
            }else {  
                if(!toDoActionBar.checkExistanceInList(toDoText, toDoManager)) {
                    clone = toDoItem.createTemplate(toDoText, toDoManager.toDoCounter);
    
                    //clearing the text box
                    toDoInput.value = "";
    
                    toDoEvent = new ToDoItem(toDoManager.toDoCounter, toDoText, toDoManager.toDoStatus, toDoManager.toDoChecked);
                    toDoManager.listOfToDo.push(toDoEvent);
                    toDoManager.toDoToInsert.push(clone);
                    toDoManager.toDoCounter++;
                    toDoManager.render();
                   // localStorage.setObject("ListOfToDo",listOfToDo);
               }      
            }
       } 
    
    
    ToDoActionBar.prototype.deleteCompleted = function(toDoManager) {
        const toDoItem = new ToDoItem();
        for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {
            if(toDoManager.listOfToDo[j].toDoStatus) {
                toDoManager.listOfToDo.splice(j,1);
                toDoManager.toDoToInsert.splice(j,1);
                toDoItem.updateListOfToDoAfterDelete(j, toDoManager);
                toDoManager.toDoCounter--;
                toDoManager.render();
            }
        } 
    }
    
    ToDoActionBar.prototype.deleteSelected = function(toDoManager){  
        const toDoItem = new ToDoItem();
        for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {
            if(toDoManager.listOfToDo[j].toDoChecked) {
                toDoManager.listOfToDo.splice(j,1);
                toDoManager.toDoToInsert.splice(j,1);
                toDoItem.updateListOfToDoAfterDelete(j, toDoManager);
                toDoManager.toDoCounter--;
                toDoManager.render();
            }
        } 
    }

export {ToDoActionBar};