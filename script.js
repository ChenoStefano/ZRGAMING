document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
            document.getElementById('contactForm').reset();
        } else {
            return response.text().then(text => { throw new Error(text) });
        }
    })
    .catch(error => {
        alert('Hubo un problema con el envío: ' + error.message);
    });
});

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

