(function () {
    function makeSlideshow(slides) {
        // const slides = document.getElementById(slidesId)
        const slidesInner = slides.querySelector('.slides-inner')
        const images = slidesInner.querySelectorAll('img')
    
        const delay = parseInt(slides.dataset.delay)
        const transition = parseInt(slides.dataset.transition)
        slidesInner.style.transition = `${transition}ms`
    
        const slidesWidth = slides.clientWidth
        let  index = 0
    
        setInterval (function () {
            index += 1
            if (index === images.length) {
                index = 0
            }
    
            slidesInner.style.transform = `translate3d(${index * -slidesWidth}px, 0, 0)`
    
        }, delay)
    } //end makeSlideshow

    const slideshows = document.querySelectorAll('.slide-show')
    for (let i = 0; i < slideshows.length; i += 1) {
        makeSlideshow(slideshows[i])
    }
    
    // makeSlideshow('slides', 3000)
    // makeSlideshow('slides-2', 2000)
})() //IIFE
