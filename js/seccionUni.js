function scrollCarousel(direction) {
    const carousel = document.querySelector('.universidades-carousel');
    const scrollAmount = 200; // Ajusta la distancia del desplazamiento
    carousel.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
  }
  