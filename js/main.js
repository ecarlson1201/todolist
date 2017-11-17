

function newElement() {
    var li = document.createElement("li")
    var valueInput = document.getElementById("myInput").value
    var t = document.createTextNode(valueInput)
    li.appendChild(t)
    li.className = "item"
    if (valueInput === "") {
        alert("You Must Write Something To Do")
    }
    else {
        document.getElementById("myUl").appendChild(li)
    }
    document.getElementById("myInput").value = ""

    li.onclick = function () {
        var classNameString = li.className;
        var splitClassName = classNameString.split(' ');
        var checkMarkActual = document.createTextNode("X")
        var checkMark = document.createElement("button")
        checkMark.className = "checkMark"
        checkMark.appendChild(checkMarkActual)
        var foundIt = false

        for (i = 0; i < splitClassName.length; i++) {

            if (splitClassName[i] === "checked") {
                splitClassName.splice(0, 1);
                foundIt = true;
                li.removeChild(li.childNodes[1, 2])
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

function newFilter() {
    var li = document.createElement("li")
    var valueFilter = document.getElementById("myNewFilter").value
    var f = document.createTextNode(valueFilter)
    li.appendChild(f)
    li.className = "newFilter"
    if (valueFilter === "") {
        alert("You Must Specify A Filter")
    }
    else {
        document.getElementById("myFilterUl").appendChild(li)
    }
    document.getElementById("myNewFilter").value = ""
}

function clearFilters() {
    var myFilters = document.getElementsByClassName("newFilter");
    for (i = 0; i < myFilters.length; i++)
        myFilters[i].style.display = "none";

    var myItems = document.getElementsByClassName("item");
    for (i = 0; i < myItems.length; i++)
        myItems[i].style.display = "none";
}