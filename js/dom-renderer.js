var renderDom = function () {
    var renderedLiList = document.getElementById("myUl")
    renderedLiList.innerHTML = ""

    toDoStore.readToDos().forEach(function (toDo) {
        var newLi = document.createElement("li")
        newLi.appendChild(document.createTextNode(toDo))
        newLi.className = "item"
        newLi.id = toDo

        newLi.onclick = function () {
            newLi.classList.toggle("checked")
        }

        var closeButton = document.createElement("button")
        closeButton.className = "close"
        closeButton.appendChild(document.createTextNode("x"))
        newLi.appendChild(closeButton)
        renderedLiList.appendChild(newLi)

        closeButton.onclick = function (e) {
            var x = e.target.parentElement.innerText.slice(0, -1)
            toDoStore.deleteToDos(x)
            renderDom()
        }
    });
}