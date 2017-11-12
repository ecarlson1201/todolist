

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

    li.onclick = function () {
        var classNameString = li.className;
        var splitClassName = classNameString.split(' ');
        var checkMark = document.createTextNode("+")
        var foundIt = false

        for (i = 0; i < splitClassName.length; i++) {

            if (splitClassName[i] === "checked") {
                splitClassName.splice(0, 1);
                foundIt = true;
                li.removeChild(li.childNodes[1,2])
                break;
            }
        }
        if (!foundIt) {
            splitClassName.splice(0, 0, "checked");
            li.appendChild(checkMark)
        }
        var returnClass = splitClassName.join(" ");
        li.className = returnClass;
    }

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


