canvas = document.getElementById("my_Canvas");
ctx = canvas.getContext("2d");

car1 = "car1.png";
car1_x = 120;
car1_y = 70;
car1_width = 10;
car1_height = 10;

car2 = "car1.png";
car2_x = 120;
car2_y = 70;
car2_width = 10;
car2_height = 10;

background_img = "racin.jpg"


function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadrover;
    car2_imgTag.src = car2;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag , car1_x , car1_y , car1_width , car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag , car2_x , car2_y , car2_width , car2_height);
}
window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
      keypressed = e.keycode;
      console.log(keypressed);
    if(keypressed == 38){
        car1up();
          console.log("up arrow key");
      }
    if(keypressed == 40){
        car1down();
        console.log("down arrow key");
    }
    if(keypressed == 39){
        car1left();
        console.log("left arrow key");
    }
    if(keypressed == 37){
        car1right();
        console.log("right arrow key");
    }
    if(keypressed == 87){
        car1up();
          console.log("key w");
      }
    if(keypressed == 65){
        car1down();
        console.log("key a");
    }
    if(keypressed == 83){
        car1left();
        console.log("key s");
    }
    if(keypressed == 68){
        car1right();
        console.log("key d");
    }
}
function car1up(){
    if(car1_y >= 0){
    car1_y = car1_y - 10;
    console.log("x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
    }
}
function car1down(){
    if(car1_y <= 500){
    car1_y = car1_y + 10;
    console.log("x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
    }
}
function car1left(){
    if(car1_x >= 0){
    car1_x = car1_x - 10;
    console.log("x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
    }
}
function car1right(){
    if(car1_y <= 700){
    car1_x = car1_x + 10;
    console.log("x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
    }
}
function car2up(){
    if(car2_y >= 0){
    car2_y = car2_y - 10;
    console.log("x = " + car2_x + " | y = " +car2_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
    }
}
function car2down(){
    if(car2_y <= 500){
    car2_y = car2_y + 10;
    console.log("x = " + car1_2 + " | y = " +car2_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
    }
}
function car2left(){
    if(car2_x >= 0){
    car2_x = car2_x - 10;
    console.log("x = " + car2_x + " | y = " +car2_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
    }
}
function car2right(){
    if(car2_y <= 700){
    car2_x = car2_x + 10;
    console.log("x = " + car2_x + " | y = " +car2_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
    }
}
if(car1_x > 700){
    console.log("Car1 Won!");
    document.getElementById('game_status').innerHTML = "Car 1 Won!!";

}
