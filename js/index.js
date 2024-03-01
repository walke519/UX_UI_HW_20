var arrow = document.querySelector('.arrow');

function hideArrow() {
    arrow.style.transition = 'opacity 0.5s ease';
    arrow.style.opacity = 0;

    setTimeout(function() {
        arrow.style.display = 'none';
    }, 500);
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        hideArrow();
    }
});