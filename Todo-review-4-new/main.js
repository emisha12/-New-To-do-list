/***************************** TO DO MANAGER *****************************************/

function ToDoManager()  {
    this.listOfToDo = [];
    this.toDoCounter =0;
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
    var toDoContainer = document.getElementById("todo-event");
    toDoContainer.innerHTML="";

    for(var i=0; i < this.toDoToInsert.length; i++){
        console.log("hi"+i);
        document.getElementById("todo-event").appendChild(this.toDoToInsert[i]);
    }
}

/***************************** TO DO ACTION BAR *****************************************/

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
            selectedToDoItem = document.querySelector(`[todoid="${j}"]`);
            if(toDoManager.listOfToDo[j].toDoStatus) {
                toDoManager.listOfToDo.splice(j,1);
                toDoManager.toDoToInsert.splice(j,1);
                toDoItem.updateListOfToDoAfterDelete(j, toDoManager);
               // console.log(toDoManager.toDoToInsert);
                toDoManager.toDoCounter--;
               // console.log(toDoManager.toDoCounter);
            }
        } 
        toDoManager.render();
    }
    
    ToDoActionBar.prototype.deleteSelected = function(toDoManager){  
        const toDoItem = new ToDoItem();
        for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {
            selectedToDoItem = document.querySelector(`[todoid="${j}"]`);
            if(toDoManager.listOfToDo[j].toDoChecked) {
                toDoManager.listOfToDo.splice(j,1);
                toDoManager.toDoToInsert.splice(j,1);
                toDoItem.updateListOfToDoAfterDelete(j, toDoManager);
                console.log(toDoManager.toDoToInsert);
                toDoManager.toDoCounter--;
            }
        } 
        toDoManager.render();
    }

/***************************** TO DO LIST ITEM *****************************************/


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

            var targetItem = event.target;
            toDoItemId =  (function (targetItem){
                while(true){
                    var targetAttributeValue = targetItem.getAttribute("data-name");
                    if(targetAttributeValue !== "todo-wrapper"){
                        targetItem = targetItem.parentElement;
                    }else{
                        break;
                    }
                }
                return targetItem.getAttribute("todoid");
            })(targetItem);

            
            selectedToDoItem = document.querySelector(`[todoid="${toDoItemId}"]`);
            selectedToDoItemContent  = selectedToDoItem.querySelector(`[element-type="para"]`);
            switch(clickedButton) {
                case "done": 
                toDoManager.listOfToDo[toDoItemId].completedEvent(selectedToDoItemContent);
                toDoManager.render();
                            break;
                case "delete":
                toDoManager.listOfToDo[toDoItemId].deleteToDo(toDoItemId, selectedToDoItem, toDoManager);
                            break;
                case "update":
                toDoManager.listOfToDo[toDoItemId].updateToDoList(toDoItemId, selectedToDoItemContent, toDoManager);
                toDoManager.render();
                            break;
                case "checkbox":
                toDoManager.listOfToDo[toDoItemId].setCheckedStatus();
                toDoManager.render();
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
            toDoManager.render();
        }
    }

    selectedToDoItemContent.onblur = function () {
        updateContent();
        toDoManager.render();
    }

    function updateContent(){
        selectedToDoItemContent.classList.remove("edit-todo-text");
        selectedToDoItemContent.removeAttribute("contenteditable");
        toDoManager.listOfToDo[toDoItemId].toDoText = selectedToDoItemContent.textContent;
        //localStorage.setObject("ListOfToDo",listOfToDo);
    }
}

ToDoItem.prototype.createTemplate= function(toDoText, toDoId){
    var hiddenTemplate, clone;
    hiddenTemplate = document.querySelector(`[id="hidden-todo-wrapper"]`);
    clone = hiddenTemplate.cloneNode(true);
    clone.querySelector(`[element-type="para"]`).innerHTML = toDoText;
    clone.classList.add("clone");
    clone.classList.remove("todo-item");
    clone.setAttribute("todoId", toDoId);
    clone.removeAttribute("id");
    return clone;
}

ToDoItem.prototype.deleteToDo= function(toDoItemId, selectedToDoItem, toDoManager){
   // selectedToDoItem.remove();
    toDoManager.listOfToDo.splice(toDoItemId,1);
    toDoManager.toDoToInsert.splice(toDoItemId,1);
    this.updateListOfToDoAfterDelete(toDoItemId, toDoManager);
    toDoManager.render();
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

/***************************** MAIN *****************************************/

function main(){
    const toDoManager = new ToDoManager();
    toDoManager.init(toDoManager);
}

main();