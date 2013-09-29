(function() {

var divFoo = document.getElementById("foo"),
    style = divFoo.style;
    
divFoo.className = "css-class css-class2";

//var color = window.getComputedStyle(divFoo, null).getPropertyValue("color");


var getStyle = function(el, cssProperty) {
    if (typeof getComputedStyle !== "undefined") {
        return window.getComputedStyle(el, null).getPropertyValue(cssProperty);
    } else {
        return el.currentStyle[cssProperty];
    }
};

var color = getStyle(divFoo, "color");


alert(color);

//alert(style.color);

}());

