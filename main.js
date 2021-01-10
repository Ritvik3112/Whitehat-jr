function getPara1(){
    var inputs = [];
    for (i = 1; i <= 6; i++){
        inputs.push(document.getElementById("input_left" + i).value);
    }
    inputs.join(". ");
    document.getElementById("show_para1").innerHTML = inputs.join(". ");
}
function getPara2(){
    var inputs2 = [];
    for (i = 1; i <= 6; i++){
        inputs2.push(document.getElementById("input_right" + i).value);
    }
    inputs2.join(". ");
    document.getElementById("show_para2").innerHTML = inputs2.join(". ");
}