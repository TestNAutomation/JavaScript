(function() {

var doc = document,
    pFoo = doc.getElementById("foo");
    

var html = pFoo.innerHTML;

html = html + "<br/>This was, too";
html = html + "<br/>This was, too 2";
html = html + "<br/>This was, too 3";

pFoo.innerHTML = "";


//doc.body.appendChild(el);

    
}());

