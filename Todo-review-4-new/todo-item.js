var ToDoItem = function(toDoId, toDoText, toDoStatus, toDoChecked) {
        this.toDoId = toDoId;
        this.toDoText = toDoText;
        this.toDoStatus = toDoStatus;
        this.toDoChecked = toDoChecked;
    }
 
    ToDoItem.prototype.init = function(toDoManager){
        var that = this;
        document.getElementById("todo-event").addEventListener('click', function(){
            that.operations(event,toDoManager);
        });
    }

    ToDoItem.prototype.operations = function(event, toDoManager){
        var clickedButton, selectedToDoItemContent, toDoItemId, selectedToDoItem, selectedToDoItemContent;
            if(event.target !== event.currentTarget){
                clickedButton = event.target.getAttribute("element-type");
                toDoItemId  = event.target.parentElement.getAttribute("todoid");
                selectedToDoItem = document.querySelector(`[todoid="${toDoItemId}"]`);
                selectedToDoItemContent  = selectedToDoItem.querySelector(`[element-type="para"]`);
                switch(clickedButton) {
                    case "done": 
                    toDoManager.listOfToDo[toDoItemId].completedEvent(selectedToDoItemContent);
                                break;
                    case "delete":
                    toDoManager.listOfToDo[toDoItemId].deleteToDo(toDoItemId, selectedToDoItem, toDoManager);
                                break;
                    case "update":
                    toDoManager.listOfToDo[toDoItemId].updateToDoList(toDoItemId, selectedToDoItemContent, toDoManager);
                                break;
                    case "checkbox":
                    toDoManager.listOfToDo[toDoItemId].setCheckedStatus();
                                break;
                }
        }
        event.stopPropagation();
    }

    ToDoItem.prototype.completedEvent = function(selectedToDoItemContent) {
        switch(this.toDoStatus) {
            case false:
                selectedToDoItemContent.classList.add("completed");
                selectedToDoItemContent.classList.remove("not-completed");
                event.target.textContent = "Not Done";
                this.toDoStatus = true;
                break;
            case true:
                selectedToDoItemContent.classList.add("not-completed");
                selectedToDoItemContent.classList.remove("completed");
                event.target.textContent = "Done";
                this.toDoStatus = false;
                break;
        }
    // localStorage.setObject("ListOfToDo",listOfToDo);
    }  

    ToDoItem.prototype.setCheckedStatus= function() {
        switch(this.toDoChecked) {
            case false:
                        this.toDoChecked = true;
                        break;
            case true:
                        this.toDoChecked = false;
                        break;
        }
         //localStorage.setObject("ListOfToDo",listOfToDo);
    }
   
    ToDoItem.prototype.updateToDoList= function(toDoItemId, selectedToDoItemContent, toDoManager){
        selectedToDoItemContent.setAttribute("contenteditable","true");
        selectedToDoItemContent.classList.add("edit-todo-text");

        selectedToDoItemContent.onkeypress = function(event) {
        if(event.keyCode === 13) {
                updateContent();
            }
        }

        selectedToDoItemContent.onblur = function () {
            updateContent();
        }

        function updateContent(){
            selectedToDoItemContent.classList.remove("edit-todo-text");
            selectedToDoItemContent.removeAttribute("contenteditable");
            toDoManager.listOfToDo[toDoItemId].toDoText = selectedToDoItemContent.textContent;
            //localStorage.setObject("ListOfToDo",listOfToDo);
        }
    }

    ToDoItem.prototype.deleteToDo= function(toDoItemId, selectedToDoItem, toDoManager){
        selectedToDoItem.remove();
        toDoManager.listOfToDo.splice(toDoItemId,1);
        this.updateListOfToDoAfterDelete(toDoItemId, toDoManager);
        //localStorage.setObject("ListOfToDo",listOfToDo);
        toDoManager.toDoCounter--;
    }

    ToDoItem.prototype.updateListOfToDoAfterDelete = function(toDoItemId, toDoManager){
        var i;
        for(i = toDoItemId; i < toDoManager.listOfToDo.length; i++) {
            document.querySelector(`[todoid="${toDoManager.listOfToDo[i].toDoId}"]`).setAttribute("todoid", `${toDoManager.listOfToDo[i].toDoId-1}`);
            toDoManager.listOfToDo[i].toDoId -= 1;
        }
    }


export {ToDoItem};