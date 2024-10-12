// Preloader
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Project Modal Functions
function showProjectModal(title, duration, details) {
    document.getElementById('modal-project-title').textContent = title;
    document.getElementById('modal-project-details').textContent = details;
    document.getElementById('project-modal').style.display = 'block';
}

function closeProjectModal() {
    document.getElementById('project-modal').style.display = 'none';
}

// Accordion Functionality for Courses Section
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';

        // Close other accordion contents
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
            }
        });
    });
});

// Smooth Scroll Effect for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show Back to Top button when scrolling
window.onscroll = function () {
    const backToTop = document.getElementById('back-to-top');
    if (document.documentElement.scrollTop > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }

    // Add scroll animation class to sections
    document.querySelectorAll('.scroll-animation').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight) {
            section.classList.add('in-view');
        }
    });
};

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
