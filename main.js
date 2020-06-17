var currentCount = parseInt(document.getElementById("count").innerHTML, 10);

document.getElementById("increase").addEventListener("click", function(){
    console.log("Add");
    document.getElementById("count").innerHTML = ++currentCount;
});

document.getElementById("decrease").addEventListener("click", function(){
    console.log("Minus");
    document.getElementById("count").innerHTML = --currentCount;
});