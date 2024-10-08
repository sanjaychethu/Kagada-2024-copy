const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        // Toggle the active class on accordion
        accordion.classList.toggle('active');
        
        // Show or hide the panel
        const panel = accordion.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

        // Rotate icon
        const icon = accordion.querySelector('i');
        if (icon) {
            icon.style.transform = icon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    });
});

//nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const bars = document.querySelectorAll('.hamburger .bar');

hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.style.opacity = '0';
        navLinks.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            navLinks.classList.remove('active');
            navLinks.style.pointerEvents = 'none';
            bars.forEach(bar => {
                bar.classList.remove('cross');
            });
        }, 300);
    } else {
        navLinks.style.pointerEvents = 'auto';
        navLinks.classList.add('active');
        setTimeout(() => {
            navLinks.style.opacity = '1';
            navLinks.style.transform = 'translateY(0)';
        }, 0);
        bars.forEach(bar => {
            bar.classList.add('cross');
        });
    }
});
