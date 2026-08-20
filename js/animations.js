function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    if (!('IntersectionObserver' in window)) {
        elements.forEach(element => element.classList.add('fade-in-up'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => observer.observe(element));
}

function animateOnLoad() {
    document.querySelectorAll('.animate-on-load').forEach((element, index) => {
        window.setTimeout(() => element.classList.add('fade-in-up'), 100 * index);
    });
}

function setupSectionAnimations() {
    const selectors = '.section-header, .about-text, .skills-container, .project-card, .timeline-item';
    document.querySelectorAll(selectors).forEach(element => element.classList.add('animate-on-scroll'));
    animateOnScroll();
}

document.addEventListener('DOMContentLoaded', () => {
    animateOnLoad();
    setupSectionAnimations();

    const currentSection = window.location.hash || '#landpage';
    const activeNavLink = document.querySelector(`.nav-link[href="${currentSection}"]`);
    activeNavLink?.classList.add('active');
});
