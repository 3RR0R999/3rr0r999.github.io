function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

function animateOnLoad() {
    const elements = document.querySelectorAll('.animate-on-load');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in-up');
        }, 100 * index);
    });
}

function setupSectionAnimations() {
    const sectionHeaders = document.querySelectorAll('.section-header');
    const aboutContent = document.querySelectorAll('.about-text, .skills-container');
    const projectCards = document.querySelectorAll('.project-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    sectionHeaders.forEach(header => header.classList.add('animate-on-scroll'));
    aboutContent.forEach(content => content.classList.add('animate-on-scroll'));
    projectCards.forEach(card => card.classList.add('animate-on-scroll'));
    timelineItems.forEach(item => item.classList.add('animate-on-scroll'));

    animateOnScroll();
}

document.addEventListener('DOMContentLoaded', () => {
    animateOnLoad();
    setupSectionAnimations();

    const currentSection = window.location.hash || '#landpage';
    const activeNavLink = document.querySelector(`.nav-link[href="${currentSection}"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }
});