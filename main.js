var images=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", 
"https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg"];
var names = [
    "Ramprasad Chandrasekaran" , "Shalini Venkateshwaran" , "Ritvik Krishna. R"
];
var i = 0;
function nextpic(){
             i++;
         if (i == 4)
     {
         i=0;
     }
     document.getElementById("imgalbum").src = images[i];
     document.getElementById("imgalbum").src = names[i];
}
