let library = document.getElementsByClassName("library");

for(i = 3; i<59; i++){
    let anchor = document.createElement("a");
    let temp = document.createElement("img");
    temp.src = "/res/img/"+i+(i>31 && i<58?".jpg":".png");
    anchor.href = temp.src;
    
    anchor.appendChild(temp);
    library[0].appendChild(anchor);
}

