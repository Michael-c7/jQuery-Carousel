// $(function() {
    
// });

/*Global variables */
let allSlides = Array.from($(".slide"));
let slides = document.querySelector(".slides");
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');

let currentSlide = document.querySelector('.current-slide');
let currentSlideWidth = currentSlide.getBoundingClientRect().width;

// let nextSlide = currentSlide.nextElementSibling;
// let previousSlide = currentSlide.previousElementSibling;

let digitAndDotRegex = /[\d.]+/g;
let widthArr = [];


function positionSlides(amountOfSlides = 0, currentSlideWidth) {

    for(let i = 1; i < amountOfSlides; i+=1) {
        allSlides[i].style.transform = `translateX(${currentSlideWidth * i}px)`;
        widthArr.push(currentSlideWidth * i);
    } 
}

positionSlides(allSlides.length, currentSlideWidth);

console.log(widthArr);


let init = 0;


// console.log(slideWidth)

// function changeToPreviousSlide(event) {

        // let previousSlideWidth = -widthArr[init];
    // let slideWidth = -widthArr[init];

    // change slide
    // slides.style.transform = `translateX(${slideWidth}px)`;
    // init--;
    // add to the init value
//     if(isNaN(slideWidth) === true || isNaN(init) === true) {
//         init+=0;
//     } else {
//         init-=1;
//     }

//     if(slideWidth === -1) {
//         init === 0;
//     }


//     console.log(slideWidth);
    
//     console.log(init);   
// }




// function changeToNextSlide(event) {
        // let nextSlideValue = parseFloat(nextSlide.style.transform.match(digitAndDotRegex));
        // let nextSlideWidth = -widthArr[init];
    // let slideWidth = -widthArr[init];

    // change slide
    // slides.style.transform = `translateX(${slideWidth}px)`;
    
    // add to the init value
//     if(isNaN(slideWidth) === true || isNaN(init) === true) {
//         init+=0;
//     } else {
//         init+=1;
//     }

//     if(init === slideWidth ) {
//         init === 0;
//     }
    
//     console.log(slideWidth);
    
//     console.log(init);   
// }       


/*previous slides test */
    // console.log(allSlides.length);
let count = 0;
function moveSlides(event) {
    let closestButton = event.target.closest("button");

    // counting logic

        // prev slides stuff
        if(count > 0) { 
            if(closestButton === previousBtn) {
            count--;
        }
    }
        // next slides stuff
        if(count < allSlides.length) { 
            if(closestButton === nextBtn) {
            count++;
        }
    }

    count+=0;
    console.log(count);

    }
    
    
     
    


/*Event Listener */
previousBtn.addEventListener('click', moveSlides);
nextBtn.addEventListener('click', moveSlides);


/* TODO
When do we want to iterate the count variable?
- keep in 0 - 4 range 
if it hits 0 or 4 can still iterate up or down 
provided its going in the range

*/


/* 
Known Bugs:(most severe to least severe)

1. previous button broken(delayed)

2. when you get to the very end
of the previous slide & the next slide
clicking buttons no longer move the slides

---
STEPS
1. position slides left to right X

2. get next button working X

3. get previous button working
(copy of next button button just move slides 
in opposite direction of the next button)
*/