const images=[
    {
        pic : "/res/img/21.png",
        cap : "3:16 Metal Works"
    },
    {
        pic : "/res/img/32.jpg",
        cap : "20+ Years of Industry Experience"
    },
    {
        pic : "/res/img/16.png",
        cap : "Mobile Welding"
    },
    {
        pic : "/res/img/58.png",
        cap : "Custom Fabrication"
    },
    {
        pic : "/res/img/59.png",
        cap : "6G Certified"
    },
    {
        pic : "/res/img/27.png",
        cap : "The Shop"
    }
]
const photo = document.getElementsByClassName("photo");
const caption = document.getElementsByClassName("caption");

let buttons = document.getElementsByClassName("browse");

changeImage = function(index){
    document.getElementsByClassName("active")[0].classList.remove("active");
    
    photo[0].src = images[index].pic;
    caption[0].innerHTML = images[index].cap;

    document.getElementById(index).classList.add("active");
}

for(i=0; i<images.length; i++){
    let temp = document.createElement("button");
    temp.innerHTML = i;
    temp.onclick = function(i) {changeImage(i.target.innerHTML)};
    temp.id = i;
    if (i==0) temp.classList.add("active");
    buttons[0].appendChild(temp);
}

let currentImage = 0;
nextImage=function(){
    currentImage ++;
    changeImage(currentImage%images.length);
}
let interval = setInterval(nextImage,3000);