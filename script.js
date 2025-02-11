document.addEventListener('DOMContentLoaded', function() {
  // Menú móvil
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('nav ul');
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
  
  // Cambio de estilo en el header al hacer scroll
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Efecto Fade-in usando Intersection Observer
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  // Carrusel de Funciones: Desplazamiento Continuo en Bucle
  const featuresScroll = document.querySelector('.features-scroll');
  const featuresGrid = document.querySelector('.features-grid');
  
  // Duplicar el contenido de la grilla para lograr un bucle continuo
  const featuresGridClone = featuresGrid.cloneNode(true);
  featuresScroll.appendChild(featuresGridClone);
  
  let autoScrollActive = true;
  let autoScrollInterval = setInterval(() => {
    if (autoScrollActive && !isDragging) {
      featuresScroll.scrollLeft += 1;
      if (featuresScroll.scrollLeft >= featuresGrid.scrollWidth) {
        featuresScroll.scrollLeft = 0;
      }
    }
  }, 20);
  
  // Variables para controlar la interacción
  let isDragging = false, dragStartX = 0, scrollStart = 0;
  
  featuresScroll.addEventListener('pointerdown', (e) => {
    isDragging = true;
    autoScrollActive = false;
    dragStartX = e.clientX;
    scrollStart = featuresScroll.scrollLeft;
  });
  
  featuresScroll.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    featuresScroll.scrollLeft = scrollStart - deltaX;
  });
  
  const resumeScroll = () => {
    isDragging = false;
    autoScrollActive = true;
  };
  
  featuresScroll.addEventListener('pointerup', resumeScroll);
  featuresScroll.addEventListener('pointerleave', resumeScroll);
});
