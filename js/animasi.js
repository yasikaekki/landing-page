const canvasKita = document.getElementById('myCanvas');
canvasKita.width = 1300;
canvasKita.height = 310;
const ctx = canvasKita.getContext('2d');
let x = 200, y = 0, r = 50;
let keatas = false, kebawah = false;
let kekanan = true, kekiri = false;
function animasi(){
    ctx.save();
    ctx.clearRect(0,0,canvasKita.width, canvasKita.height);
    ctx.fillStyle = "rgba(13, 110, 253)";
    ctx.fillRect(x, 0, 100, 70,);
    ctx.fillRect(x, 240, 100, 70,);
    ctx.fillRect(0, y, 70, 100);
    ctx.fillRect(1230, y, 70, 100);
    ctx.beginPath();
    ctx.fillStyle = "rgba(13, 110, 253, 0.3)";
    ctx.arc(x+r,y+r,r,0,Math.PI*2);
    ctx.fill();
    cekPosisi();
    if(keatas){
        y--;
    }
    if(kebawah){
        y++;
    }
    if(kekanan){
        x++;
    }
    if(kekiri){
        x--;
    }
    ctx.restore();
}
setInterval(animasi, 7);

function cekPosisi(){
    if(y+r == canvasKita.height-r){
        keatas = true;
        kebawah = false;
    } else if(y==0){
        keatas = false;
        kebawah = true;
    }
    if (x+r == canvasKita.width-r){
        kekanan = false;
        kekiri = true;
    } else if(x==0){
        kekanan = true;
        kekiri = false;
    }
}

