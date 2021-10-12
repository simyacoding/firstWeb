var slides = document.querySelectorAll("#slide > img");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

var current = 0; //현재 이미지 인덱스 위치

// var = 모든 것이 들어간다, 전역변수
// let = 지역변수


console.log(slides);

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

prevSlide2();


function showSlides(n){
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[n].style.display = 'block';
}

function prevSlide(){
    if(current > 0 ){
        current -= 1; // 커런트가 0보다 크면 이전 위치로
    }else{
        current = slides.length-1;
    }
    showSlides(current);
}

function nextSlide(){

    if(current < slides.length-1){
        current  += 1;
    }else{
        current = 0;
    }
    showSlides(current);

}


function prevSlide2(){
    if(current > 0 ){
        current -= 1; // 커런트가 0보다 크면 이전 위치로
    }else{
        current = slides.length-1;
    }
    showSlides(current);

    setTimeout(prevSlide2, 2000);
}