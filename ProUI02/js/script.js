document.getElementById("search").onclick = function clksearch() {
    search.style.width = "150px";
    mobmenu.style.display = "none";
    setting.style.display = "none";
    search.style.marginLeft = "0px";
    smallphoto.style.display = "none";
    share.style.display = "none";
    search.style.fontSize = "18px";
}

document.getElementById("search").onblur = function outofinput() {
    search.style.width = "90px";
    mobmenu.style.display = "block";
    setting.style.display = "block";
    search.style.marginLeft = "0px";
    smallphoto.style.display = "block";
    share.style.display = "block";
    search.style.fontSize = "16px";
}

document.getElementById("ecom").addEventListener("click", function () {
    if (document.getElementById("ecomsub").style.display == "block") {
        ecomsub.style.display = "none";
    }
    else {
        ecom.style.backgroundColor = "#313854";
        ecomsub.style.display = "block";
    }
})

document.getElementById("ui_drop").addEventListener("click", function () {
    if (document.getElementById("uisub").style.display == "block") {
        uisub.style.display = "none";
    }
    else {
        ui_drop.style.backgroundColor = "#313854";
        uisub.style.display = "block";
    }
})

document.getElementById("eforms").addEventListener("click", function () {
    if (document.getElementById("formsub").style.display == "block") {
        formsub.style.display = "none";
    }
    else {
        eforms.style.backgroundColor = "#313854";
        formsub.style.display = "block";
    }
})


document.getElementById("tables").addEventListener("click", function () {
    if (document.getElementById("tablesub").style.display == "block") {
        tablesub.style.display = "none";
    }
    else {
        tables.style.backgroundColor = "#313854";
        tablesub.style.display = "block";
    }
})

document.getElementById("iconset").addEventListener("click", function () {
    if (document.getElementById("iconsub").style.display == "block") {
        iconsub.style.display = "none";
    }
    else {
        iconset.style.backgroundColor = "#313854";
        iconsub.style.display = "block";
    }
})

document.getElementById("layouts").addEventListener("click", function () {
    if (document.getElementById("layoutsub").style.display == "block") {
        layoutsub.style.display = "none";
    }
    else {
        layouts.style.backgroundColor = "#313854";
        layoutsub.style.display = "block";
    }
})

document.getElementById("ready").addEventListener("click", function () {
    if (document.getElementById("readysub").style.display == "block") {
        readysub.style.display = "none";
    }
    else {
        ready.style.backgroundColor = "#313854";
        readysub.style.display = "block";
    }
})

document.getElementById("component").addEventListener("click", function () {
    if (document.getElementById("compsub").style.display == "block") {
        compsub.style.display = "none";
    }
    else {
        component.style.backgroundColor = "#313854";
        compsub.style.display = "block";
    }
})

document.getElementById("dash02").onclick = function(){
      location.href = "dash2.html";
}

document.getElementById("carusel").onclick = function(){
    location.href = "carousel.html";
}

let subs = document.getElementsByClassName("buttons");
   for(let item of subs){
       item.addEventListener("mouseleave", function(){
            item.style.backgroundColor = "#394263";
       })
       item.addEventListener("mouseover", function(){
            item.style.backgroundColor = "#313854";
       })
   }

document.getElementById("setting").addEventListener("click", function () {
    if (document.getElementById("styles").style.display == "block") {
        styles.style.display = "none";
    }
    else {
        styles.style.display = "block";
    }
})

document.getElementById("mobmenu").onclick = function () {
    let maincont = document.getElementById("main-container").style
    let navb = document.getElementById("navbar").style
    let headcontainer = document.getElementById("headcont").style
    let mainimg = document.getElementById("mainimg").style
    if (maincont.left == "-160px") {
        maincont.position = "initial";
        maincont.left = "0px";
        maincont.width = "initial";
        navb.marginLeft = "0px";
        headcontainer.marginLeft = "0px";
        mainimg.marginLeft = "-15px";
    }
    else {
        maincont.position = "relative";
        maincont.left = "-160px";
        maincont.width = "96%";
        navb.marginLeft = "15px";
        headcontainer.marginLeft = "0px";
        mainimg.marginLeft = "0px";
        headpart.style.width = "100%";
        headpart.style.marginLeft = "0px";
    }
}

document.getElementById("share").onclick = function () {
    let maincontainer = document.getElementById("main-container").style
    let nav = document.getElementById("navbar").style
    let headcontain = document.getElementById("headcont").style
    let mainimage = document.getElementById("mainimg").style
        if(chatbar.style.display == "block"){  
            maincontainer.position = "initial";
            maincontainer.left = "0px";
            maincontainer.width = "initial";
            nav.marginLeft = "0px";
            headcontain.marginLeft = "0px";
            mainimage.marginLeft = "-15px";
            chatbar.style.display = "none";   
        }
        else{
            maincontainer.position = "relative";
            maincontainer.left = "-170px";
            maincontainer.width = "85%";
            nav.marginLeft = "15px";
            headcontain.marginLeft = "0px";
            mainimage.marginLeft = "0px";
            chatbar.style.display = "block";
        }   
}

           

    var modal = document.getElementById("myModal");
   var img1 = document.getElementById("firimg");
   var modalImg = document.getElementById("img01");
    img1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.width = "55%";
}

var img2 = document.getElementById("secimg");
var modalImg = document.getElementById("img01");
img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.width = "55%";
}

var img4 = document.getElementById("thirdimg");
var modalImg = document.getElementById("img01");
img4.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.width = "55%";
}


var pics = document.querySelectorAll(".altimg");
var modalImg = document.getElementById("img01");
for (i = 0; i < pics.length; i++) {
    pics[i].onclick = function goslide() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.style.width = "55%";
        showSlides(index);
    }
}



var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
    window.location.reload();
}


$("#tables").click(function (event) {
    $(this).find('i').toggleClass('fas fa-angle-down');
});


let index = 1;

function plusImg(n) {
    showSlides(index += n);
}

function showSlides(n) {
    var i;
    var x = document.querySelectorAll(".altimg");
    if (n > x.length) {
        index = 1
    }
    if (n < 1) {
        index = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[index - 1].style.display = "block";
    modalImg.src = x[index - 1].src;
}

