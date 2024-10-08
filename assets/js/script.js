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
    navLinks.style.opacity = '0'; // Start fading out
    navLinks.style.transform = 'translateY(-10px)'; // Slide up
    setTimeout(() => {
        navLinks.classList.remove('active'); // Remove active class
        navLinks.style.pointerEvents = 'none'; // Disable pointer events
        bars.forEach(bar => {
            bar.classList.remove('cross'); // Remove cross class to revert to hamburger
        });
    }, 300);
}

hamburger.addEventListener('click', () => {
    if (window.innerWidth <= 768) { // Check if in mobile view
        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            navLinks.style.pointerEvents = 'auto'; // Enable pointer events
            navLinks.classList.add('active'); // Add active class
            setTimeout(() => {
                navLinks.style.opacity = '1'; // Fade in
                navLinks.style.transform = 'translateY(0)'; // Slide down
            }, 0);
            bars.forEach(bar => {
                bar.classList.add('cross'); // Add cross class to transform hamburger
            });
        }
    }
});

// Close the menu when a nav link is clicked (only in mobile view)
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // Only apply this behavior in mobile view
            closeMenu();
        }
    });
});


// Get the button
let myButton = document.getElementById("scrollBtn");

// When the user scrolls down 100px from the top of the document, show the button
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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

