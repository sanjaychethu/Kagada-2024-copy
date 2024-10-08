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
const navLinkItems = document.querySelectorAll('.nav-links li a'); // Select all nav links

function closeMenu() {
    navLinks.style.opacity = '0';
    navLinks.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        navLinks.classList.remove('active');
        navLinks.style.pointerEvents = 'none';
        bars.forEach(bar => {
            bar.classList.remove('cross');
        });
    }, 300);
}

hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        closeMenu();
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

// Add click event to each nav link to close the menu
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
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

