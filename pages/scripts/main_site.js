var video;
var fraction = 0.8;

const newEvents = document.querySelector(".underline__text");
newEvents.style.width = 100;
document.addEventListener("scroll", function(){
    if(isInView(newEvents)){
        newEvents.classList.add("underline__text--active");
    }else{
        newEvents.classList.remove("underline__text--active");
    }
    
},false);

function isInView(element){
    const rect = element.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < (window.innerHeight - 200 || document.documentElement.clientHeight - 200);
}

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('#image-matrix img');
    var classes = ['slideInFromLeft', 'slideInFromRight', 'slideInFromTop', 'slideInFromBottom'];

    images.forEach(function (image) {
        var randomIndex = Math.floor(Math.random() * classes.length);
        var randomClass = classes[randomIndex];
        image.classList.add(randomClass);
    });

    video = document.getElementById("demo1");
});

function checkScroll() {
    if (!video) return; // If video is still not defined, exit the function

    var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
        b = y + h, //bottom
        visibleX, visibleY, visible;

    visibleX = Math.max(0, Math.min(w, window.scrollX + window.innerWidth - x, r - window.scrollX));
    visibleY = Math.max(0, Math.min(h, window.scrollY + window.innerHeight - y, b - window.scrollY));

    visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
        video.play();
    } else {
        video.pause();
    }
}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

window.onload = function() {
    document.getElementById("hoverOver").onmouseenter = function() {mouseEnter()};
    document.getElementById("navigator").onmouseleave = function() {mouseLeave()};
    document.getElementsById("link1").onclick = function() {window.scrollTo(0)};
    document.getElementsById("link2").onclick = function() {document.getElementById("featuresPage").scrollIntoView()};
    document.getElementsById("link3").onclick = function() {document.getElementById("featuresPage").scrollIntoView()};
    document.getElementsById("link4").onclick = function() {document.getElementById("featuresPage").scrollIntoView()};

    function mouseEnter() {
        document.getElementById("navigator").className = "navDown";
    }

    function mouseLeave() {
        document.getElementById("navigator").className = "navUp";
    }

    function jumpTo(link) {
        document.getElementById("featuresPage").scrollIntoView();
      }
};

function showB1() {
    var x = document.getElementById('sharing-main-box');
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function showB2() {
    var x = document.getElementById("tree-main-box");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function showB3() {
    var x = document.getElementById("profile-main-box");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}