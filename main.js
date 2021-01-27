var canvas = new fabric.Canvas('myCanvas')

block_Width = 30;
block_Height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_Img_object = "";

function player_update(){

    fabric.Image.fromURL("player.png" , function(Img){
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);
    });
}
function newImage(get_image){

    fabric.Image.fromURL(get_image , function(Img){
    block_Img_object = Img;

    block_Img_object.scaleToWidth(150);
    block_Img_object.scaleToHeight(140);
    block_Img_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_Img_object);
    });
}