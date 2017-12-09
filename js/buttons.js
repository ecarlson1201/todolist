(function () {
    var addToDoButton = document.getElementById("addButton")
    addToDoButton.onclick = function () {
        var valueInput = document.getElementById("myInput")
        if (valueInput.value === "") {
            alert("You Must Write Something To Do")
        }
        else {
            toDoStore.createToDos(valueInput.value)
        }
        valueInput.value = ''
        renderDom()
    }
})()

var newFilterBox = document.getElementById("myNewFilter")
newFilterBox.onkeyup = function () {
    var toDoArray = toDoStore.readToDos()
    var splitFilter = newFilterBox.value.split("")
    var currentFilterLetter = splitFilter[splitFilter.length - 1]

    for (i = 0; i < toDoArray.length; i++) {
        var currentToDo = toDoArray[i]
        var currentToDoLetter = currentToDo.charAt(splitFilter.indexOf(currentFilterLetter))
        if (currentToDoLetter != currentFilterLetter) {
            toDoStore.deleteToDos(currentToDo)
        }
    }
    renderDom()
}