var toDoStore = (function () {
    var toDoModule = {}
    var toDoList = []

    toDoModule.createToDos = function (toDoItem) {
        toDoList.push(toDoItem)
    }

    toDoModule.readToDos = function () {
        return toDoList
    }

    toDoModule.updateToDos = function (newToDo, oldToDo) {
        for (i = 0; i < toDoList.length; i++) {
            if (toDoList[i] === oldToDo) {
                toDoList[i] = newToDo
            }
        }
    }

    toDoModule.deleteToDos = function (toDo) {
        for (i = 0; i < toDoList.length; i++)
            if (toDoList[i] === toDo) {
                var toDoListIndex = i
                toDoList.splice(toDoListIndex, 1)
            }
    }

    return toDoModule
})()