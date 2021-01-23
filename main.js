canvas = document.getElementById("my_Canvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_the_line = 1;

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e){
     document.getElementById("input_col").value;
     document.getElementById("width_of_the_line").value;
     mouseEvent = "mousedown";
}
canvas.addEventListener("mouseUp" , my_mouseUp);

function my_mouseUp(e){
      mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove" , my_mousemove);

    function my_mousemove(e){
        current_position_of_x = e.clientX - canvas.offsetLeft;
        current_position_of_y = e.clientY - canvas.offsetTop;
    
        if(mouseEvent == "mousedown"){
            console.log("Current position of x and y coordinates = ")
            console.log("x = " + current_position_of_x , "y = " + current_position_of_y);
    
          ctx.beginpath();
          ctx.strokeStyle = red;
          ctx.linewidth = 2;
          ctx.rect(current_position_of_x , current_position_of_y , radius , 0 , 2 * Math.PI);
          ctx.stroke();

          last_position_of_x = current_position_of_mouse_x;
          last_position_of_y = current_position_of_mouse_y;
        }
    }
    canvas.addEventListener("touchmove" , my_touchmove);

    function my_touchmove(e){
        current_position_of_x = e.clientX[0] - canvas.offsetLeft;
        current_position_of_y = e.clientY[0] - canvas.offsetTop;
       
          ctx.beginpath();
          ctx.strokeStyle = red;
          ctx.linewidth = 2;
          ctx.rect(current_position_of_x , current_position_of_y , radius , 0 , 2 * Math.PI);
          ctx.stroke();

          last_position_of_touch_x = current_position_of_touch_x;
          last_position_of_y = current_position_of_touch_y;
    }

