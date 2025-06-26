    document.addEventListener('DOMContentLoaded', () => {
        const services = document.querySelectorAll('.service');

        services.forEach(service => {
            service.addEventListener('click', () => {
                const serviceName = service.querySelector('h3').innerText;
                alert(`Vous avez cliqué sur: ${serviceName}`);
            });
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');

    // Fonction pour vérifier si un élément est visible dans la fenêtre
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.innerHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.innerWidth)
        );
    }

    // Animation des services
    function animateServices() {
        services.forEach(service => {
            if (isInViewport(service)) {
                service.classList.add('fadeIn');
            }
        });
    }

    window.addEventListener('scroll', animateServices);
    animateServices(); // Vérifier immédiatement au chargement
});
