var projectNames = document.querySelector('.project-names')
projectNames.addEventListener('click', function(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
        var text = target.textContent || text.innerText;
        element = document.getElementById(e.target.id);
        if((element.id).match(/proj/g) !== null){
            if((element.id).match(/week/g) !== null){
               var textEntered = prompt("You wish to change the employee capacity of this cell. The current value is listed in the input box", text);

}, false);