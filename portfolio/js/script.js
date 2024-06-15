const navbarToggler = document.getElementById('navbar-toggler');
        const navLinks = document.getElementById('nav-links');

        navbarToggler.addEventListener('click', () => {
            navbarToggler.classList.toggle('active');
            navLinks.classList.toggle('active');
        });