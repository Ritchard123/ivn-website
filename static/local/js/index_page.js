const marquee = document.getElementById('marquee');
const forwardBtn = document.getElementById('forward_btn');
const backwardBtn = document.getElementById('backward_btn');
let scrollAmount = 1;

marquee.addEventListener('mouseover', () => {
  marquee.stop();
});

marquee.addEventListener('mouseout', () => {
  marquee.start();
});

forwardBtn.addEventListener('click', () => {
  marquee.scrollLeft += scrollAmount;
});

backwardBtn.addEventListener('click', () => {
  marquee.scrollLeft -= scrollAmount;
});




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
}

function currentSlide(index){
  let dots=document.getElementsByClassName("dot");
  let slides=document.getElementsByClassName("mySlides")

  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active";
}


// Logo design
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
    // Custom color function for each letter
    color: function (el, i, l) {
      var colors = ['#00f', '#f00', '#ff0', '#0f0']; // Blue, Red, Yellow, Green
      return colors[i % colors.length];
    }
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

