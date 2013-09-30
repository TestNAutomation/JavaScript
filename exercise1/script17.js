(function() {

var mouseHandler = function(evt) {
    var target = eventUtility.getTarget(evt),
        classData = target.getAttribute("data-body-class");
    
    if (classData) {
        eventUtility.preventDefault(evt);
        
        if (evt.type === "click") {
            document.body.className = "";
        } else {
            document.body.className = classData;
        }
    }
};

eventUtility.addEvent(document, "click", mouseHandler);
eventUtility.addEvent(document, "mouseover", mouseHandler);

/*var buttons = document.getElementsByTagName("a");

var buttonClick = function(evt) {
    var target = eventUtility.getTarget(evt),
        className = target.innerHTML.toLowerCase();
        
    eventUtility.preventDefault(evt);
    
    document.body.className = className;
};

for (var i = 0, len = buttons.length; i < len; i = i + 1) {
    eventUtility.addEvent(buttons[i], "click", buttonClick);   
    //removeEvent(buttons[i], "click", buttonClick);    
    
}*/

}());

