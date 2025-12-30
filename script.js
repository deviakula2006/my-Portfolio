/* =========================================
   1. ANIMATION INITIALIZATION (AOS)
========================================= */
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        offset: 50, // Trigger sooner
        once: false, // Animation happens every time you scroll
        mirror: true, // Animates when scrolling back up
        anchorPlacement: 'top-bottom'
    });
});

/* =========================================
   2. TYPEWRITER EFFECT
========================================= */
const typeText = document.getElementById('typewriter');
if (typeText) {
    new Typewriter(typeText, {
        strings: ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver'],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
    });
}

/* =========================================
   3. NAVBAR SCROLL EFFECT
========================================= */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* =========================================
   4. MOBILE MENU
========================================= */
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

function toggleMenu() {
    navLinks.classList.toggle('active');
    // Change icon based on state
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Close menu when a link is clicked
function closeMenu() {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    }
}

/* =========================================
   5. DARK / LIGHT MODE TOGGLE
========================================= */
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const logoImg = document.querySelector('.logo-img');

// Load saved theme from local storage
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    } else {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    }
}

/* =========================================
   6. CONTACT FORM (MAILTO)
========================================= */
function sendMail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

    window.location.href = `mailto:devigangabhavani@gmail.com?subject=${subject}&body=${body}`;
}