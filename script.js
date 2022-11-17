var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var slideIndex = 0;

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
slides[0].style.display = "block";


function plusSlides(n) {
    console.log('slideindex before', slideIndex)
    slides[slideIndex].style.display = "none"; 
    slideIndex = Math.abs(slideIndex+n)
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";  
    console.log(n)
    console.log('slideindex abs', slideIndex)
}

