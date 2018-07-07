function generate(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.strokeRect(10,10,200,100);
}
window.onload = generate;

window.fillBlue = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle="#000099";
    ctx.fillRect(10,10,200,100);
}


window.fillGreen = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle="#009900";
    ctx.fillRect(10,10,200,100);
}

