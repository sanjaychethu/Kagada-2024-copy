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
const bars = document.querySelectorAll('.hamburger .bar'); // Select the bars
const navLinkItems = document.querySelectorAll('.nav-links li a'); // Select all nav links

function closeMenu() {
    // Apply fade-out and slide-up animation
    navLinks.style.opacity = '0';
    navLinks.style.transform = 'translateY(-10px)';
    
    // Delay removal of the active class for smooth transition
    setTimeout(() => {
        navLinks.classList.remove('active');
        navLinks.style.pointerEvents = 'none';
        
        // Remove cross class to revert to hamburger icon
        bars.forEach(bar => {
            bar.classList.remove('cross');
        });
    }, 300);
}

hamburger.addEventListener('click', () => {
    // Only toggle menu in mobile view (screen width <= 768px)
    if (window.innerWidth <= 768) {
        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            navLinks.style.pointerEvents = 'auto'; // Enable clicking on the links
            navLinks.classList.add('active');
            
            setTimeout(() => {
                navLinks.style.opacity = '1';
                navLinks.style.transform = 'translateY(0)';
            }, 0);
            
            bars.forEach(bar => {
                bar.classList.add('cross');
            });
        }
    }
});

// Close the menu when a nav link is clicked (only for mobile view)
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            closeMenu();
        }
    });
});

// Scroll-to-top button functionality
let myButton = document.getElementById("scrollBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myButton.classList.add("show");
    } else {
        myButton.classList.remove("show");
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
