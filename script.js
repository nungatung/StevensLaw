// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle dropdowns on mobile
const dropdowns = document.querySelectorAll('.Navbar-item.dropdown > a');

dropdowns.forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = toggle.parentElement;
      parent.classList.toggle('open');
    }
  });
});


document.querySelectorAll('a[href="#contact"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.getElementById('contact');
    const header = document.querySelector('.header');
    const offset = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 10;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


// Testimonial slider functionality
let slideIndex = 0;
  const track = document.getElementById("testimonialTrack");
  const cards = document.querySelectorAll(".testimonial-card");
  const totalSlides = cards.length;

  function moveSlide(step) {
    slideIndex += step;

    if (slideIndex < 0) slideIndex = totalSlides - 1;
    if (slideIndex >= totalSlides) slideIndex = 0;

    const offset = slideIndex * track.offsetWidth;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  // Auto-slide 
  setInterval(() => {
    moveSlide(1);
  }, 8000);