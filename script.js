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
    /*Variables */
    

    /*position slides */
    for(let i = 1; i < amountOfSlides; i+=1) {
        allSlides[i].style.transform = `translateX(${currentSlideWidth * i}px)`;
        widthArr.push(currentSlideWidth * i);
    } 
}

positionSlides(allSlides.length, currentSlideWidth);




// function changeToPreviousSlide(event) {
//     console.log(event.target);
//     let previousSlideValue = parseFloat(previousSlide.style.transform.match(digitAndDotRegex));
//     console.log(previousSlideValue);
// }

// previousBtn.addEventListener('click', changeToPreviousSlide);

let initNext = 0;
function changeToNextSlide(event) {
    // console.log(event.target);
    

    let nextSlideValue = parseFloat(nextSlide.style.transform.match(digitAndDotRegex));
    

    // change slide
    // slides.style.transform(`translateX(${nextSlideValue}`);
    slides.style.transform = `translateX(${-widthArr[initNext]}px)`;
    
    // update currentSlide class
        // remove currentSlide class from all classes
        allSlides.forEach(slide => slide.classList.remove("current-slide"));         
        
        // add currentSlide class to the current slide
        nextSlide.classList.add("current-slide");

    // add to the initNext value
    initNext+=1;
    console.log(-widthArr[initNext]);
    
    console.log(initNext);   
}       

nextBtn.addEventListener('click', changeToNextSlide);





/* STEPS
OR get transform: translateX(2714px); from next slides html
and use that

Current problem:
- Move by current slide width * amount of slides that come before it / after
1. get current slide
2. from current slide the amount of previous slides
2.5 from current slide get amount of next slides
2.7 save set 2  & 2.5 to variables
2.8 calculate step 2 on click of the prev / next button
3. transform:translateX(- slides(ul) * amountOfPrev/next slides)
    - current slide --> used to count
amount of slides before / after current slide 

---
1. position slides left to right X
- 1.1 : position absolute, on all the slides X
- 1.2 : position slide based on width of X
previous slide times its number(eg: 2nd slide) X
- 1.3 Hide all slides that are not the current slide from view X

2. get next button working
- 2.1 : get current slide + NextElement X
- 2.2 : transform:translate(by currentImage width)
- 2.3 : remove current-slide all images
- 2.4 : add current slide to the next slide

3. get previous button working
- 3.1 : listen for a click on the previous button
- 3.2 : get current slide + previousElement
- 3.3 : transform:translate(by currentImage width)
- 3.4 : remove current-slide all images
- 3.5 : add current slide to the next slide
*/