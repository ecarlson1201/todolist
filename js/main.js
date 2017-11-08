

function newElement() {
    var li = document.createElement("li")
    var valueInput = document.getElementById("myInput").value
    var t = document.createTextNode(valueInput)
    li.appendChild(t)
    li.className = "item"
    if (valueInput === "") {
        alert("You Must Write Something")
    }
    else {
        document.getElementById("myUl").appendChild(li)
    }
    document.getElementById("myInput").value = ""

    var close = document.createElement("button")
    var x = document.createTextNode("x")
    close.className = "close"
    close.appendChild(x)
    li.appendChild(close)

    close.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}