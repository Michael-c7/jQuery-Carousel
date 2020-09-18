// $(function() {
    
// });

/*Global variables */
let allSlides = Array.from($(".slide"));
let slides = document.querySelector(".slides");
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');

let currentSlide = document.querySelector('.current-slide');
let currentSlideWidth = currentSlide.getBoundingClientRect().width;

let nextSlide = currentSlide.nextElementSibling;

let previousSlide = currentSlide.previousElementSibling;
let digitAndDotRegex = /[\d.]+/g;
let widthArr = [];


function positionSlides(amountOfSlides = 0, currentSlideWidth) {

    for(let i = 1; i < amountOfSlides; i+=1) {
        allSlides[i].style.transform = `translateX(${currentSlideWidth * i}px)`;
        widthArr.push(currentSlideWidth * i);
    } 
}

positionSlides(allSlides.length, currentSlideWidth);

let init = 0;

function changeToPreviousSlide(event) {
    let previousSlideWidth = -widthArr[init];
    // change slide
    slides.style.transform = `translateX(${previousSlideWidth}px)`;
    
    // add to the init value
    if(isNaN(previousSlideWidth) === true) {
        init+=0;
    } else {
        init-=1;
    }
    
    console.log(previousSlideWidth);
    
    console.log(init);   
}







function changeToNextSlide(event) {
    // let nextSlideValue = parseFloat(nextSlide.style.transform.match(digitAndDotRegex));
    let nextSlideWidth = -widthArr[init];
    // change slide
    slides.style.transform = `translateX(${nextSlideWidth}px)`;
    
    // add to the init value
    if(isNaN(nextSlideWidth) === true) {
        init+=0;
    } else {
        init+=1;
    }
    
    console.log(nextSlideWidth);
    
    console.log(init);   
}       



previousBtn.addEventListener('click', changeToPreviousSlide);
nextBtn.addEventListener('click', changeToNextSlide);





/* STEPS
OR get transform: translateX(2714px); from next slides html
and use that

Current problem:
- 

---
1. position slides left to right X
- 1.1 : position absolute, on all the slides X
- 1.2 : position slide based on width of X
previous slide times its number(eg: 2nd slide) X
- 1.3 Hide all slides that are not the current slide from view X

2. get next button working X
- 2.1 : get current slide + NextElement X 
- 2.2 : transform:translate(by currentImage width) X
- 2.3 : remove current-slide all images X
- 2.4 : add current slide to the next slide X

3. get previous button working
(copy of next button button just move slides 
in opposite direction of the next button)
*/