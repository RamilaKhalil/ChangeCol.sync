
var randomCol = function () {
    var hex = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 10)];
    }
    return color;
};
var stopPrint = function () {
    clearInterval(intervalId); 
    intervalId = null;
 };
 let intervalId ;
var startPrint = function () {
    intervalId =setInterval(print, 1000);
    function print() {
        document.body.style.backgroundColor = randomCol();
    };
};
document.addEventListener("DOMContentLoaded",
    function () {
    const element  = document.querySelector("#S");
    
      if(element) {
        element.addEventListener("click" , startPrint);
     } else {
        console.log("Element not found");
        
     }
     
     const element2  = document.querySelector("#St");
    
      if(element2) {
        element2.addEventListener("click" , stopPrint);
     } else {
        console.log("Element not found");
        
     }

     
       
    });
 
