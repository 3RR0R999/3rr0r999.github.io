const year = document.getElementById('current-year');
if (year) year.textContent = new Date().getFullYear();

const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateScrollState() {
    navbar?.classList.toggle('scrolled', window.scrollY > 10);

    const scrollPosition = window.scrollY + 100;
    sections.forEach(section => {
        const isActive = scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight;
        if (!isActive) return;

        navLinks.forEach(link => {
            const isCurrent = link.getAttribute('href') === `#${section.id}`;
            link.classList.toggle('active', isCurrent);
            if (isCurrent) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;

        event.preventDefault();
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('load', updateScrollState);
