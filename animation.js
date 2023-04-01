document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.main-title');

    anime({
        targets: title,
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 500
    });
});
