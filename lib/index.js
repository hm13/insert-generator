const jscolor = require('jscolor-picker');
const x = 0;
const y = 0;
const w = document.getElementById("canvas").width;
const h = document.getElementById("canvas").height;

function generate(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.strokeRect(x,y,w,h);
}

window.update = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= '#' + document.getElementById("id1").jscolor;

    ctx.fillRect(x,y,w,h);
}

function setupGUI(){
    generate();
}

setupGUI();