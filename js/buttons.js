window.onload = function(){
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


var newFilterBox = document.getElementById("myNewFilter")
newFilterBox.onkeyup = function () {
    var splitFilter = newFilterBox.value.split("")
    var currentFilterLetter = splitFilter[splitFilter.length - 1]

    toDoStore.readToDos().forEach(function (toDo) {
        var currentToDoLetter = toDo.charAt(splitFilter.indexOf(currentFilterLetter))
        if (currentToDoLetter != currentFilterLetter) {
            var filteredToDo = document.getElementById(toDo);
            toDoStore.deleteToDos(toDo)
            renderDom()
            toDoStore.createToDos(toDo)
        }
    })
}

var refreshListButton = document.getElementById("refreshButton");
refreshListButton.onclick = function() {
    newFilterBox.value = ""
    renderDom()
}}