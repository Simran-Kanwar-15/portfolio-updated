// ===== Smooth Scroll for Internal Links =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Navbar Active Link Highlight =====
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if(section){
      if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});

// ===== Button Click Animation =====
const buttons = document.querySelectorAll('.btn, .btn-outline');
buttons.forEach(btn => {
  btn.addEventListener('mousedown', () => btn.style.transform = "scale(0.95)");
  btn.addEventListener('mouseup', () => btn.style.transform = "scale(1)");
});