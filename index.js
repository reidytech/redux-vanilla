var table1 = document.querySelector('#table1')
table1.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var text = target.textContent || text.innerText;
    element = document.getElementById(e.target.id);
    var intPattern = /[0-9]/g;
    if ((element.id).match(/cell[0-9]/g) !== null) {
        var selectedElement = intPattern.exec(element.id).pop();
        alert("You selected cell " + selectedElement);
        var textEntered = prompt("What would you like to change this cell to?", text);
        if (textEntered.match(/[0-9]/g)) {
            var popChange = textEntered;
            element.innerHTML = popChange;
        } else {
            alert("you Didn't enter a number");
        }
    } else {
        "Please select a table cell containing a number";
    }
}, false);

var table2 = document.querySelector('#table2')
table2.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var text = target.textContent || text.innerText;
    element = document.getElementById(e.target.id);
    var intPattern = /[0-9]/g;
    if ((element.id).match(/cell[0-9]/g) !== null) {
        var selectedElement = intPattern.exec(element.id).pop();
        alert("You selected cell " + selectedElement);
        alert("This cell will increment");
        selectedElement = parseInt(selectedElement, 10) + 1;
        element.innerHTML = selectedElement;
    } else {
        "Please select a table cell containing a number";
    }
}, false);