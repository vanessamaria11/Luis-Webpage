$(document).ready(function(){
    startSlideShow();
})
var slideshowpics=["images/testA.png","images/testB.png"];
var showImage;
var count=0;

function displayPics(){
$("#slideshow").html("<img src=" + slideshowpics[count]+" width='100%'>");
}

function nextSlide(){
    count++;
    if (count === slideshowpics.length){
        count = 0;
    }
    displayPics();
    
}

function startSlideShow(){
    displayPics();
    showImage = setInterval(nextSlide, 3000);
}

function stopSlideshow(){
    clearInterval(showImage);
}