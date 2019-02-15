/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-manager */ \"./todo-manager.js\");\n/***************************** TO DO MANAGER *****************************************/\n\n// function ToDoManager()  {\n//     this.listOfToDo = [];\n//     this.toDoCounter = 0;\n//     this.toDoStatus = false;\n//     this.toDoChecked = false;\n//     this.toDoToInsert = [];\n// }\n\n// ToDoManager.prototype.init = function(toDoManager) {     \n//     const toDoItem = new ToDoItem();\n//     const toDoAction = new ToDoActionBar();\n//     toDoAction.init(toDoManager);\n//     toDoItem.init(toDoManager);\n// }\n\n// ToDoManager.prototype.render = function() {\n//     console.log(\"in render\");\n//     var toDoContainer = document.getElementById(\"todo-list-wrapper\");\n//     toDoContainer.innerHTML=\"\";\n\n//     for(var i=0; i < this.toDoToInsert.length; i++){\n//         console.log(\"hi\"+i);\n//         document.getElementById(\"todo-list-wrapper\").appendChild(this.toDoToInsert[i]);\n//     }\n// }\n\n/***************************** TO DO ACTION BAR *****************************************/\n\n// function ToDoActionBar(){\n//     this.checkExistanceInList = function(toDoText,toDoManager){\n//             var exists;\n//             var toDoInput = document.getElementById(\"text-Box1\"); \n//             for(var i=0; i < toDoManager.listOfToDo.length; i++){\n//                 if(toDoManager.listOfToDo[i].toDoText === toDoText) {\n//                     toDoInput.value = \"\";\n//                     alert(\"This already exists in the To Do List at \" + (i+1) + \"th position. Please enter another event.\");\n//                     exists = 1;\n//                     break;\n//                 }else {\n//                     exists = 0;\n//                 }\n//             }\n//             return exists;\n//         }\n//     }\n    \n//     ToDoActionBar.prototype.init = function(toDoManager){\n//             var that = this; \n//             document.getElementById(\"addBtn\").addEventListener('click', function() {\n//                 that.addToDoEvent(toDoManager);\n//             });\n//             document.getElementById(\"delete-selected-Btn\").addEventListener('click', function() {\n//                 that.deleteSelected(toDoManager)\n//             });\n//             document.getElementById(\"delete-completed-Btn\").addEventListener('click', function(){\n//                 that.deleteCompleted(toDoManager);\n//             });\n//         }\n    \n//     ToDoActionBar.prototype.addToDoEvent = function(toDoManager){     \n//             var toDoEvent, clone;  \n//             var toDoInput = document.getElementById(\"text-Box1\");      \n//             var toDoText = toDoInput.value;\n//             const toDoActionBar = new ToDoActionBar();\n//             const toDoItem = new ToDoItem();\n//             if(!toDoText) {\n//                alert(\"enter some content\");\n//             }else {  \n//                 if(!toDoActionBar.checkExistanceInList(toDoText, toDoManager)) {\n//                     clone = toDoItem.createTemplate(toDoText, toDoManager.toDoCounter);\n    \n//                     //clearing the text box\n//                     toDoInput.value = \"\";\n    \n//                     toDoEvent = new ToDoItem(toDoManager.toDoCounter, toDoText, toDoManager.toDoStatus, toDoManager.toDoChecked);\n//                     toDoManager.listOfToDo.push(toDoEvent);\n//                     toDoManager.toDoToInsert.push(clone);\n//                     toDoManager.toDoCounter++;\n//                     toDoManager.render();\n//                    // localStorage.setObject(\"ListOfToDo\",listOfToDo);\n//                }      \n//             }\n//        } \n    \n    \n//     ToDoActionBar.prototype.deleteCompleted = function(toDoManager) {\n//         const toDoItem = new ToDoItem();\n//         for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {\n//             if(toDoManager.listOfToDo[j].toDoStatus) {\n//                 toDoManager.listOfToDo.splice(j,1);\n//                 toDoManager.toDoToInsert.splice(j,1);\n//                 toDoItem.updateListOfToDoAfterDelete(j, toDoManager);\n//                 toDoManager.toDoCounter--;\n//                 toDoManager.render();\n//             }\n//         } \n//     }\n    \n//     ToDoActionBar.prototype.deleteSelected = function(toDoManager){  \n//         const toDoItem = new ToDoItem();\n//         for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {\n//             if(toDoManager.listOfToDo[j].toDoChecked) {\n//                 toDoManager.listOfToDo.splice(j,1);\n//                 toDoManager.toDoToInsert.splice(j,1);\n//                 toDoItem.updateListOfToDoAfterDelete(j, toDoManager);\n//                 toDoManager.toDoCounter--;\n//                 toDoManager.render();\n//             }\n//         } \n//     }\n\n/***************************** TO DO LIST ITEM *****************************************/\n\n\n// var ToDoItem = function(toDoId, toDoText, toDoStatus, toDoChecked) {\n//     this.toDoId = toDoId;\n//     this.toDoText = toDoText;\n//     this.toDoStatus = toDoStatus;\n//     this.toDoChecked = toDoChecked;\n// }\n\n// ToDoItem.prototype.init = function(toDoManager){\n//     var that = this;\n//     document.getElementById(\"todo-list-wrapper\").addEventListener('click', function(){\n//         that.operations(event,toDoManager);\n//     });\n// }\n\n// ToDoItem.prototype.operations = function(event, toDoManager){\n//     var clickedButton, selectedToDoItemContent, toDoItemId, selectedToDoItem, selectedToDoItemContent;\n//         if(event.target !== event.currentTarget){\n//             clickedButton = event.target.getAttribute(\"element-type\");\n\n//             var targetItem = event.target;\n//             toDoItemId =  (function (targetItem){\n//                 while(true){\n//                     var targetAttributeValue = targetItem.getAttribute(\"data-name\");\n//                     if(targetAttributeValue !== \"todo-wrapper\"){\n//                         targetItem = targetItem.parentElement;\n//                     }else{\n//                         break;\n//                     }\n//                 }\n//                 return targetItem.getAttribute(\"todoid\");\n//             })(targetItem);\n\n            \n//             selectedToDoItem = document.querySelector(`[todoid=\"${toDoItemId}\"]`);\n//             selectedToDoItemContent  = selectedToDoItem.querySelector(`[element-type=\"para\"]`);\n//             switch(clickedButton) {\n//                 case \"done\": \n//                 toDoManager.listOfToDo[toDoItemId].completedEvent(selectedToDoItemContent);\n//                 toDoManager.render();\n//                             break;\n//                 case \"delete\":\n//                 toDoManager.listOfToDo[toDoItemId].deleteToDo(toDoItemId, toDoManager);\n//                             break;\n//                 case \"update\":\n//                 toDoManager.listOfToDo[toDoItemId].updateToDoList(toDoItemId, selectedToDoItemContent, toDoManager);\n//                 toDoManager.render();\n//                             break;\n//                 case \"checkbox\":\n//                 toDoManager.listOfToDo[toDoItemId].setCheckedStatus();\n//                 toDoManager.render();\n//                             break;\n//             }\n//     }\n//     event.stopPropagation();\n// }\n\n// ToDoItem.prototype.completedEvent = function(selectedToDoItemContent) {\n//     switch(this.toDoStatus) {\n//         case false:\n//             selectedToDoItemContent.classList.add(\"completed\");\n//             selectedToDoItemContent.classList.remove(\"not-completed\");\n//             event.target.textContent = \"Not Done\";\n//             this.toDoStatus = true;\n//             break;\n//         case true:\n//             selectedToDoItemContent.classList.add(\"not-completed\");\n//             selectedToDoItemContent.classList.remove(\"completed\");\n//             event.target.textContent = \"Done\";\n//             this.toDoStatus = false;\n//             break;\n//     }\n// // localStorage.setObject(\"ListOfToDo\",listOfToDo);\n// }  \n\n// ToDoItem.prototype.setCheckedStatus= function() {\n//     switch(this.toDoChecked) {\n//         case false:\n//                     this.toDoChecked = true;\n//                     break;\n//         case true:\n//                     this.toDoChecked = false;\n//                     break;\n//     }\n//      //localStorage.setObject(\"ListOfToDo\",listOfToDo);\n// }\n\n// ToDoItem.prototype.updateToDoList= function(toDoItemId, selectedToDoItemContent, toDoManager){\n//     selectedToDoItemContent.setAttribute(\"contenteditable\",\"true\");\n//     selectedToDoItemContent.classList.add(\"edit-todo-text\");\n\n//     selectedToDoItemContent.onkeypress = function(event) {\n//     if(event.keyCode === 13) {\n//             updateContent();\n//             toDoManager.render();\n//         }\n//     }\n\n//     selectedToDoItemContent.onblur = function () {\n//         updateContent();\n//         toDoManager.render();\n//     }\n\n//     function updateContent(){\n//         selectedToDoItemContent.classList.remove(\"edit-todo-text\");\n//         selectedToDoItemContent.removeAttribute(\"contenteditable\");\n//         toDoManager.listOfToDo[toDoItemId].toDoText = selectedToDoItemContent.textContent;\n//         //localStorage.setObject(\"ListOfToDo\",listOfToDo);\n//     }\n// }\n\n// ToDoItem.prototype.createTemplate= function(toDoText, toDoId){\n//     var hiddenTemplate, clone;\n//     hiddenTemplate = document.querySelector(`[id=\"hidden-todo-wrapper\"]`);\n//     clone = hiddenTemplate.cloneNode(true);\n//     clone.querySelector(`[element-type=\"para\"]`).innerHTML = toDoText;\n//     clone.classList.add(\"clone\");\n//     clone.classList.remove(\"todo-item\");\n//     clone.setAttribute(\"todoId\", toDoId);\n//     clone.removeAttribute(\"id\");\n//     return clone;\n// }\n\n// ToDoItem.prototype.deleteToDo= function(toDoItemId, toDoManager){\n//    // selectedToDoItem.remove();\n//     toDoManager.listOfToDo.splice(toDoItemId,1);\n//     toDoManager.toDoToInsert.splice(toDoItemId,1);\n//     this.updateListOfToDoAfterDelete(toDoItemId, toDoManager);\n//     toDoManager.render();\n//     //localStorage.setObject(\"ListOfToDo\",listOfToDo);\n//     toDoManager.toDoCounter--;\n// }\n\n// ToDoItem.prototype.updateListOfToDoAfterDelete = function(toDoItemId, toDoManager){\n//     var i;\n//     for(i = toDoItemId; i < toDoManager.listOfToDo.length; i++) {\n//         document.querySelector(`[todoid=\"${toDoManager.listOfToDo[i].toDoId}\"]`).setAttribute(\"todoid\", `${toDoManager.listOfToDo[i].toDoId-1}`);\n//         toDoManager.listOfToDo[i].toDoId -= 1;\n//     }\n//     console.log(toDoManager.listOfToDo);\n// }\n\n/***************************** MAIN *****************************************/\n\n\n\nfunction main(){\n    const toDoManager = new _todo_manager__WEBPACK_IMPORTED_MODULE_0__[\"ToDoManager\"]();\n    toDoManager.init(toDoManager);\n}\n\nmain();\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./todo-action-bar.js":
/*!****************************!*\
  !*** ./todo-action-bar.js ***!
  \****************************/
/*! exports provided: ToDoActionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoActionBar\", function() { return ToDoActionBar; });\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ \"./todo-item.js\");\n\n\nfunction ToDoActionBar(){\n    this.checkExistanceInList = function(toDoText,toDoManager){\n            var exists;\n            var toDoInput = document.getElementById(\"text-Box1\"); \n            for(var i=0; i < toDoManager.listOfToDo.length; i++){\n                if(toDoManager.listOfToDo[i].toDoText === toDoText) {\n                    toDoInput.value = \"\";\n                    alert(\"This already exists in the To Do List at \" + (i+1) + \"th position. Please enter another event.\");\n                    exists = 1;\n                    break;\n                }else {\n                    exists = 0;\n                }\n            }\n            return exists;\n        }\n    }\n    \n    ToDoActionBar.prototype.init = function(toDoManager){\n            var that = this; \n            document.getElementById(\"addBtn\").addEventListener('click', function() {\n                that.addToDoEvent(toDoManager);\n            });\n            document.getElementById(\"delete-selected-Btn\").addEventListener('click', function() {\n                that.deleteSelected(toDoManager)\n            });\n            document.getElementById(\"delete-completed-Btn\").addEventListener('click', function(){\n                that.deleteCompleted(toDoManager);\n            });\n        }\n    \n    ToDoActionBar.prototype.addToDoEvent = function(toDoManager){     \n            var toDoEvent, clone;  \n            var toDoInput = document.getElementById(\"text-Box1\");      \n            var toDoText = toDoInput.value;\n            const toDoActionBar = new ToDoActionBar();\n            const toDoItem = new _todo_item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]();\n            if(!toDoText) {\n               alert(\"enter some content\");\n            }else {  \n                if(!toDoActionBar.checkExistanceInList(toDoText, toDoManager)) {\n                    clone = toDoItem.createTemplate(toDoText, toDoManager.toDoCounter);\n    \n                    //clearing the text box\n                    toDoInput.value = \"\";\n    \n                    toDoEvent = new _todo_item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"](toDoManager.toDoCounter, toDoText, toDoManager.toDoStatus, toDoManager.toDoChecked);\n                    toDoManager.listOfToDo.push(toDoEvent);\n                    toDoManager.toDoToInsert.push(clone);\n                    toDoManager.toDoCounter++;\n                    toDoManager.render();\n                   // localStorage.setObject(\"ListOfToDo\",listOfToDo);\n               }      \n            }\n       } \n    \n    \n    ToDoActionBar.prototype.deleteCompleted = function(toDoManager) {\n        const toDoItem = new _todo_item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]();\n        for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {\n            if(toDoManager.listOfToDo[j].toDoStatus) {\n                toDoManager.listOfToDo.splice(j,1);\n                toDoManager.toDoToInsert.splice(j,1);\n                toDoItem.updateListOfToDoAfterDelete(j, toDoManager);\n                toDoManager.toDoCounter--;\n                toDoManager.render();\n            }\n        } \n    }\n    \n    ToDoActionBar.prototype.deleteSelected = function(toDoManager){  \n        const toDoItem = new _todo_item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]();\n        for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {\n            if(toDoManager.listOfToDo[j].toDoChecked) {\n                toDoManager.listOfToDo.splice(j,1);\n                toDoManager.toDoToInsert.splice(j,1);\n                toDoItem.updateListOfToDoAfterDelete(j, toDoManager);\n                toDoManager.toDoCounter--;\n                toDoManager.render();\n            }\n        } \n    }\n\n\n\n//# sourceURL=webpack:///./todo-action-bar.js?");

/***/ }),

/***/ "./todo-item.js":
/*!**********************!*\
  !*** ./todo-item.js ***!
  \**********************/
/*! exports provided: ToDoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoItem\", function() { return ToDoItem; });\nvar ToDoItem = function(toDoId, toDoText, toDoStatus, toDoChecked) {\n    this.toDoId = toDoId;\n    this.toDoText = toDoText;\n    this.toDoStatus = toDoStatus;\n    this.toDoChecked = toDoChecked;\n}\n\nToDoItem.prototype.init = function(toDoManager){\n    var that = this;\n    document.getElementById(\"todo-list-wrapper\").addEventListener('click', function(){\n        that.operations(event,toDoManager);\n    });\n}\n\nToDoItem.prototype.operations = function(event, toDoManager){\n    var clickedButton, selectedToDoItemContent, toDoItemId, selectedToDoItem, selectedToDoItemContent;\n        if(event.target !== event.currentTarget){\n            clickedButton = event.target.getAttribute(\"element-type\");\n\n            var targetItem = event.target;\n            toDoItemId =  (function (targetItem){\n                while(true){\n                    var targetAttributeValue = targetItem.getAttribute(\"data-name\");\n                    if(targetAttributeValue !== \"todo-wrapper\"){\n                        targetItem = targetItem.parentElement;\n                    }else{\n                        break;\n                    }\n                }\n                return targetItem.getAttribute(\"todoid\");\n            })(targetItem);\n\n            \n            selectedToDoItem = document.querySelector(`[todoid=\"${toDoItemId}\"]`);\n            selectedToDoItemContent  = selectedToDoItem.querySelector(`[element-type=\"para\"]`);\n            switch(clickedButton) {\n                case \"done\": \n                toDoManager.listOfToDo[toDoItemId].completedEvent(selectedToDoItemContent);\n                toDoManager.render();\n                            break;\n                case \"delete\":\n                toDoManager.listOfToDo[toDoItemId].deleteToDo(toDoItemId, toDoManager);\n                            break;\n                case \"update\":\n                toDoManager.listOfToDo[toDoItemId].updateToDoList(toDoItemId, selectedToDoItemContent, toDoManager);\n                toDoManager.render();\n                            break;\n                case \"checkbox\":\n                toDoManager.listOfToDo[toDoItemId].setCheckedStatus();\n                toDoManager.render();\n                            break;\n            }\n    }\n    event.stopPropagation();\n}\n\nToDoItem.prototype.completedEvent = function(selectedToDoItemContent) {\n    switch(this.toDoStatus) {\n        case false:\n            selectedToDoItemContent.classList.add(\"completed\");\n            selectedToDoItemContent.classList.remove(\"not-completed\");\n            event.target.textContent = \"Not Done\";\n            this.toDoStatus = true;\n            break;\n        case true:\n            selectedToDoItemContent.classList.add(\"not-completed\");\n            selectedToDoItemContent.classList.remove(\"completed\");\n            event.target.textContent = \"Done\";\n            this.toDoStatus = false;\n            break;\n    }\n// localStorage.setObject(\"ListOfToDo\",listOfToDo);\n}  \n\nToDoItem.prototype.setCheckedStatus= function() {\n    switch(this.toDoChecked) {\n        case false:\n                    this.toDoChecked = true;\n                    break;\n        case true:\n                    this.toDoChecked = false;\n                    break;\n    }\n     //localStorage.setObject(\"ListOfToDo\",listOfToDo);\n}\n\nToDoItem.prototype.updateToDoList= function(toDoItemId, selectedToDoItemContent, toDoManager){\n    selectedToDoItemContent.setAttribute(\"contenteditable\",\"true\");\n    selectedToDoItemContent.classList.add(\"edit-todo-text\");\n\n    selectedToDoItemContent.onkeypress = function(event) {\n    if(event.keyCode === 13) {\n            updateContent();\n            toDoManager.render();\n        }\n    }\n\n    selectedToDoItemContent.onblur = function () {\n        updateContent();\n        toDoManager.render();\n    }\n\n    function updateContent(){\n        selectedToDoItemContent.classList.remove(\"edit-todo-text\");\n        selectedToDoItemContent.removeAttribute(\"contenteditable\");\n        toDoManager.listOfToDo[toDoItemId].toDoText = selectedToDoItemContent.textContent;\n        //localStorage.setObject(\"ListOfToDo\",listOfToDo);\n    }\n}\n\nToDoItem.prototype.createTemplate= function(toDoText, toDoId){\n    var hiddenTemplate, clone;\n    hiddenTemplate = document.querySelector(`[id=\"hidden-todo-wrapper\"]`);\n    clone = hiddenTemplate.cloneNode(true);\n    clone.querySelector(`[element-type=\"para\"]`).innerHTML = toDoText;\n    clone.classList.add(\"clone\");\n    clone.classList.remove(\"todo-item\");\n    clone.setAttribute(\"todoId\", toDoId);\n    clone.removeAttribute(\"id\");\n    return clone;\n}\n\nToDoItem.prototype.deleteToDo= function(toDoItemId, toDoManager){\n    toDoManager.listOfToDo.splice(toDoItemId,1);\n    toDoManager.toDoToInsert.splice(toDoItemId,1);\n    this.updateListOfToDoAfterDelete(toDoItemId, toDoManager);\n    toDoManager.render();\n    //localStorage.setObject(\"ListOfToDo\",listOfToDo);\n    toDoManager.toDoCounter--;\n}\n\nToDoItem.prototype.updateListOfToDoAfterDelete = function(toDoItemId, toDoManager){\n    var i;\n    for(i = toDoItemId; i < toDoManager.listOfToDo.length; i++) {\n        document.querySelector(`[todoid=\"${toDoManager.listOfToDo[i].toDoId}\"]`).setAttribute(\"todoid\", `${toDoManager.listOfToDo[i].toDoId-1}`);\n        toDoManager.listOfToDo[i].toDoId -= 1;\n    }\n    console.log(toDoManager.listOfToDo);\n}\n\n\n\n//# sourceURL=webpack:///./todo-item.js?");

/***/ }),

/***/ "./todo-manager.js":
/*!*************************!*\
  !*** ./todo-manager.js ***!
  \*************************/
/*! exports provided: ToDoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoManager\", function() { return ToDoManager; });\n/* harmony import */ var _todo_action_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-action-bar */ \"./todo-action-bar.js\");\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item */ \"./todo-item.js\");\n\n\n\nfunction ToDoManager()  {\n    this.listOfToDo = [];\n    this.toDoCounter = 0;\n    this.toDoStatus = false;\n    this.toDoChecked = false;\n    this.toDoToInsert = [];\n}\n\nToDoManager.prototype.init = function(toDoManager) {     \n    const toDoItem = new _todo_item__WEBPACK_IMPORTED_MODULE_1__[\"ToDoItem\"]();\n    const toDoAction = new _todo_action_bar__WEBPACK_IMPORTED_MODULE_0__[\"ToDoActionBar\"]();\n    toDoAction.init(toDoManager);\n    toDoItem.init(toDoManager);\n}\n\nToDoManager.prototype.render = function() {\n    console.log(\"in render\");\n    var toDoContainer = document.getElementById(\"todo-list-wrapper\");\n    toDoContainer.innerHTML=\"\";\n\n    for(var i=0; i < this.toDoToInsert.length; i++){\n        console.log(\"hi\"+i);\n        document.getElementById(\"todo-list-wrapper\").appendChild(this.toDoToInsert[i]);\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./todo-manager.js?");

/***/ })

/******/ });