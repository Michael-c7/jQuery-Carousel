/*Global variables */
let allSlides = Array.from($(".slide"));
let slides = document.querySelector(".slides");

let currentSlide = document.querySelector('.current-slide');
let currentSlideWidth = currentSlide.getBoundingClientRect().width;

let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');

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

        // prev slides decrement / go to previous slide
            if(count > 0) { 
                if(closestButton === previousBtn) {
                count--;

            }
        }

        // next slides increment / go to next slide
            if(count < allSlides.length -1) { 
                if(closestButton === nextBtn) {
                count++;
    
            }
        }
        count+=0;


        // change slide in DOM
        slides.style.transform = `translateX(${-widthArr[count]}px)`;

        
        // hide preview button
        if(count === 0 || count === -0) {
            previousBtn.setAttribute("hidden", true);
        } else {
            previousBtn.removeAttribute("hidden");
        }
    
        // if equal to length of widthArr remove next button 
        if(count === widthArr.length - 1) {
            nextBtn.setAttribute("hidden", true);
        } else {
            nextBtn.removeAttribute("hidden");
        }
    }





/*Event Listener */
previousBtn.addEventListener('click', moveSlides);
nextBtn.addEventListener('click', moveSlides);
