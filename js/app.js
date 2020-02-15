let slideIndex = 1;
showSlides(slideIndex);

// Next / Previous controls 
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.slideshow__slide');
    const dots   = document.querySelectorAll('.slideshow__dot');

    console.log(slides);
    console.log(dots);

    if (n > slides.length) { slideIndex = 1 };

    if (n < 1) { slideIndex = slides.length };

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }