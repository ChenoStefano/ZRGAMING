
document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que ha sido visible
            }
        });
    });

    elementos.forEach(el => {
        observer.observe(el);
    });
});


window.addEventListener('scroll', function() {
  var mainHeader = document.getElementById('main-header');
  var navHeader = document.getElementById('nav-header');

  if (window.scrollY > mainHeader.clientHeight) {
      navHeader.classList.add('show');
  } else {
      navHeader.classList.remove('show');
  }
});

