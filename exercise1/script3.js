var globalVar = "This is a global variable.";

var globalFunction = function(paramOne) {
    var localVar = "This is a local variable.";

    var localFunction = function() {
        var localVar = "hello, world!";
        
        alert(localVar);
    };
    
    localFunction();
    alert(localVar);
};

globalFunction(2);

