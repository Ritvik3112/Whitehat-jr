canvas = document.getElementById("my_Canvas");
ctx = canvas.getContext("2d");

function draw(){
ctx.beginpath();
ctx.strokeStyle = red;
ctx.linewidth = 2;
ctx.rect(150 , 143 , 430 , 200);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = blue;
ctx.linewidth = 2;
ctx.rect(200 , 143 , 430 , 200);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = yellow;
ctx.linewidth = 2;
ctx.rect(250 , 143 , 430 , 200);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = green;
ctx.linewidth = 2;
ctx.rect(300 , 143 , 430 , 200);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = pink;
ctx.linewidth = 2;
ctx.rect(350 , 143 , 430 , 200);
ctx.stroke();
}

function clear(){
  ctx.clearRect(0 , 0 , canvas.height , canvas.width);
}
