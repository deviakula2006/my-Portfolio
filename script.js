
        // --- SCROLL REVEAL ANIMATION ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // --- MOBILE MENU ---
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(15,12,41,0.95)';
                navLinks.style.width = '100%';
                navLinks.style.padding = '20px';
                navLinks.style.backdropFilter = "blur(10px)";
            }
        });

        // --- DARK / LIGHT MODE LOGIC ---
        const themeBtn = document.getElementById('theme-btn');
        const htmlElement = document.documentElement;
        
        // Function to update logos based on theme
        function updateLogos(theme) {
            const logos = document.querySelectorAll('.platform-logo');
            logos.forEach(img => {
                if (theme === 'light') {
                    // In light mode, remove invert so they are black (original SVG color usually black)
                    img.style.filter = 'none';
                } else {
                    // In dark mode, invert to white
                    img.style.filter = 'brightness(0) invert(1)';
                }
            });
        }

        // Check Local Storage
        if(localStorage.getItem('theme') === 'light'){
            htmlElement.setAttribute('data-theme', 'light');
            themeBtn.classList.replace('fa-moon', 'fa-sun');
            updateLogos('light');
        }

        themeBtn.addEventListener('click', () => {
            if (htmlElement.getAttribute('data-theme') === 'dark') {
                htmlElement.setAttribute('data-theme', 'light');
                themeBtn.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light');
                updateLogos('light');
            } else {
                htmlElement.setAttribute('data-theme', 'dark');
                themeBtn.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark');
                updateLogos('dark');
            }
        });
    