var images=[
    "5https://images-na.ssl-images-amazon.com/images/I/51wZfvZev-L._SX258_BO1,204,203,200_.jpg" , "20190605_113335.jpg" , "20190604_171905.jpg" , "IMG_20191223_100410.jpg"
];
var i = 0;
function nextpic(){
     if (i == 0)
     {
         i++;
     }
     if (i == 4)
     {
         i=1;
     }
     document.getElementById("imgalbum").src = images[i];
}
var names = [
    "Ramprasad Chandrasekaran" , "Shalini Venkateshwaran" , "Ritvik Krishna. R"
];
function nextname(){

    if (i == 0)
    {
        i++;
    }
    if (i == 3)
    {
        i=0;
    }
    document.getElementById("display_name").innerHTML = names
    console.log(names)
}

