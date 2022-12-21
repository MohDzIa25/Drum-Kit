function sounds(key)
{
    switch (key) {
        case "w":
            var audio= new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("./sounds/crash.mp3");
            audio.play();
             break;
        case "l":
            var audio= new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
        console.log(innerHTML);
            break;
    }
}
function selected(key)
{
    var element =document.querySelector("."+key);
    element.classList.add("selected");

    setTimeout(function(){
     element.classList.remove("selected");
    },120,element);


}
var ar =document.querySelectorAll(".drum");
for(var i=0;i<7;i++)
{
    
    ar[i].addEventListener("click",
    function(){    
        var key=this.innerHTML;
        sounds(key);
        selected(key);
    });
}
document.addEventListener("keypress",function (event) {
    sounds(event.key);
    selected(event.key);
    
});
                                  
