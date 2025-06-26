document.addEventListener("DOMContentLoaded", function() {
    const logoTrack = document.getElementById('logo-track');
    if (logoTrack) {
        // La animación CSS ya maneja el carrusel infinito.
        // Este JS es un marcador de posición para futuras interacciones,
        // como detener la animación al pasar el mouse por encima.
        
        logoTrack.addEventListener('mouseover', function() {
            logoTrack.style.animationPlayState = 'paused';
        });

        logoTrack.addEventListener('mouseout', function() {
            logoTrack.style.animationPlayState = 'running';
        });
    }
});