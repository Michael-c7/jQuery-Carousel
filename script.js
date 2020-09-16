// $(function() {
    
// });

let slides = Array.from($(".slide"));


function getSlideWidth(amountOfSlides = 0) {

    /*Variables */
    let currentSlide = document.querySelector('.current-slide');
    let currentSlideWidth = currentSlide.getBoundingClientRect().width;

    /*position slides */
    for(let i = 1; i < amountOfSlides; i+=1) {
        console.log(i)
        slides[i].style.transform = `translateX(${currentSlideWidth * i}px)`;
    } 
}

getSlideWidth(slides.length);






/* STEPS
1. position slides left to right X
- 1.1 : position absolute, on all the slides X
- 1.2 : position slide based on width of X
previous slide times its number(eg: 2nd slide) X
- 1.3 Hide all slides that are not the current slide from view X

2. get previous button working
- 2.1 : get current slide + previousElement
- 2.2 : transform:translate(by currentImage width)
- 2.3 : remove current-slide all images
- 2.4 : add current slide to the next slide

3. get next button working
- 3.1 : get current slide + NextElement
- 3.2 : transform:translate(by currentImage width)
- 3.3 : remove current-slide all images
- 3.4 : add current slide to the next slide
*/