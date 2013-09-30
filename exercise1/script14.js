(function() {

var buttons = document.getElementsByTagName("a");

for (var i = 0, len = buttons.length; i < len; i = i + 1) {
    /*buttons[i].onclick = function() {
        var className = this.innerHTML.toLowerCase();
        
        document.body.className = className;
    };*/
    
    buttons[i].addEventListener("click", function(evt) {
        var className = this.innerHTML.toLowerCase();
        
        evt.preventDefault();
        
        document.body.className = className;
    }, false);    
}

}());

