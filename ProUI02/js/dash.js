document.getElementById("downbtn01").onclick = function(){
    if(document.getElementById("downlist01").style.display == "block"){
       downlist01.style.display = "none";
    }
    else{
        downlist01.style.display = "block";
        downlist02.style.display = "none";
    }
}

document.getElementById("downbtn02").onclick = function(){
    if(document.getElementById("downlist02").style.display == "block"){
       downlist02.style.display = "none";
    }
    else{
        downlist02.style.display = "block";
        downlist01.style.display = "none";
    }
}

document.getElementById("setting").addEventListener("click", function () {
    if (document.getElementById("dstyles").style.display == "block") {
        dstyles.style.display = "none";
    }
    else {
        dstyles.style.display = "block";
    }
})

let elements = document.getElementsByClassName("isquares");
for (let item of elements) {
    item.addEventListener("mouseover", function(){
        let child = this.children[1]
        child.style.color = "white";
    })
    item.addEventListener("mouseleave", function(){
        let child = this.children[1]
        child.style.color = "rgb(87, 189, 214)";
    })
}

document.getElementById("share").onclick = function () {
        let maincontainer = document.getElementById("main-container").style
            if(chatbar02.style.display == "block"){
                maincontainer.position = "initial";
                maincontainer.left = "0px";
                maincontainer.width = "initial";
                chatbar02.style.display = "none";
                icontainer.style.marginLeft = "-15px";
                navbar.style.marginLeft = "0px"; 
            }
            else{
                maincontainer.position = "relative";
                maincontainer.left = "-170px";
                maincontainer.width = "85%";
                chatbar02.style.display = "block";
                icontainer.style.marginLeft = "0px";
                navbar.style.marginLeft = "15px";
            }
    }
   
    document.getElementById("mobmenu").onclick = function () {
        let maincont = document.getElementById("main-container").style
        let navb = document.getElementById("navbar").style
        if (maincont.left == "-160px") {
            maincont.position = "initial";
            maincont.left = "0px";
            maincont.width = "initial";
            navb.marginLeft = "0px";
            icontainer.style.marginLeft = "-15px";
        }
        else {
            maincont.position = "relative";
            maincont.left = "-160px";
            maincont.width = "96%";
            navb.marginLeft = "15px";
            icontainer.style.marginLeft = "0px";
        }
    }

    document.getElementById("carslide").onclick = function(){
        location.href = "carousel.html";
  }
  
  document.getElementById("dash01").onclick = function(){
    location.href = "index.html";
}
