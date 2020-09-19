/*Global variables */
let allSlides = Array.from($(".slide"));
let slides = document.querySelector(".slides");
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');

let currentSlide = document.querySelector('.current-slide');
let currentSlideWidth = currentSlide.getBoundingClientRect().width;

let digitAndDotRegex = /[\d.]+/g;
let widthArr = [0];





function positionSlides(amountOfSlides = 0, currentSlideWidth) {

    for(let i = 1; i < amountOfSlides; i+=1) {
        allSlides[i].style.transform = `translateX(${currentSlideWidth * i}px)`;
        widthArr.push(currentSlideWidth * i);
    } 
}

positionSlides(allSlides.length, currentSlideWidth);





let count = 0;

function moveSlides(event) {
    let closestButton = event.target.closest("button");
    // let slideWidth = -widthArr[count];
    // counting logic

        // prev slides stuff
        if(count > 0) { 
            if(closestButton === previousBtn) {
            count--;

        }
    }


        // next slides stuff
        if(count < allSlides.length -1) { 
            if(closestButton === nextBtn) {
            count++;
 
        }
    }

    count+=0;
    
    // change slide
    slides.style.transform = `translateX(${-widthArr[count]}px)`;

    console.log(count);
    console.log(-widthArr[count]);
    }





/*Event Listener */
previousBtn.addEventListener('click', moveSlides);
nextBtn.addEventListener('click', moveSlides);





/* 
---
STEPS
1. position slides left to right X

2. get next button working X

3. get previous button working X
*/