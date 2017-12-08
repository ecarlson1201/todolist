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
newFilterBox.onkeydown = function () {

}