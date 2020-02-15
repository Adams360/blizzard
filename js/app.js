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
    const slides = document.querySelectorAll('.showcase__slide');
    const dots   = document.querySelectorAll('.dot');

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


    const targets = document.querySelectorAll('img');


  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {

      entries.forEach(entry => {

        if(entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-lazy');

          img.setAttribute('src', src);
          img.classList.add('fade-bottom');

          observer.disconnect();
        }
      })

    });

    io.observe(target);
    
  };

  targets.forEach(lazyLoad);
