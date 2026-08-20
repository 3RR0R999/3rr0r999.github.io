# CRT Terminal Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the existing Hugo Barroso Munoz static portfolio into a green-and-black phosphor CRT terminal portfolio and synchronize current CV content without changing the stack.

**Architecture:** Keep the existing single-page HTML structure and section IDs, but replace the generic card/timeline presentation with semantic terminal-style command blocks. Keep styling in the existing CSS file and behavior in the existing vanilla JS files; no new runtime abstraction or dependency is needed.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Font Awesome CDN already present, GitHub Pages.

## Global Constraints

- Keep the current dependency-free static HTML/CSS/vanilla JavaScript stack and GitHub Pages deployment.
- Use `assets/docs/cv.pdf` as the source for current professional dates and content.
- Preserve useful information that exists only on the page, including quantum programming and hobbies.
- Keep the current CV download, LinkedIn link, project images, and external company/institution links.
- Design mobile-first at 390px and widen the terminal panels at desktop sizes.
- Add descriptive image alt text and keyboard-visible focus states.
- Respect `prefers-reduced-motion` for cursor blinking and reveal animations.
- Verify the result in a browser at mobile and desktop sizes with no console errors.

---

### Task 1: Replace Page Content With Terminal Semantics

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Existing section IDs, local images, `assets/docs/cv.pdf`, and current external links.
- Produces: Semantic terminal-oriented markup consumed by `styles/main.css`, `js/main.js`, and `js/animations.js`.

- [ ] **Step 1: Update document metadata and navigation markup**

Keep the current stylesheet and script references, but change the title and replace the generic logo/nav labels with terminal labels:

```html
<title>Hugo Barroso Munoz // portfolio</title>
<meta name="description" content="Hugo Barroso Munoz, software engineer specializing in distributed systems, high-performance services, and cloud architectures.">
```

```html
<nav id="navbar" aria-label="Primary navigation">
  <div class="container terminal-nav">
    <a href="#landpage" class="logo">hugo@portfolio:~$</a>
    <span class="terminal-status"><span class="status-dot" aria-hidden="true"></span> online</span>
    <div class="nav-links">
      <a href="#about" class="nav-link">./about</a>
      <a href="#projects" class="nav-link">./projects</a>
      <a href="#resume" class="nav-link">cat resume</a>
    </div>
    <a href="https://linkedin.com/in/hugobarrosomuñoz" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn profile">
      <i class="fab fa-linkedin" aria-hidden="true"></i>
    </a>
  </div>
</nav>
```

- [ ] **Step 2: Replace the hero with `whoami` output and command actions**

Preserve `id="landpage"` and use real CV summary copy:

```html
<section id="landpage" class="landpage-section">
  <div class="terminal-noise" aria-hidden="true"></div>
  <div class="container">
    <div class="landpage-content terminal-window">
      <p class="terminal-prompt"><span>guest@hugo</span>:~$ whoami</p>
      <h1 class="landpage-title animate-on-load">Hugo<br><span>Barroso Munoz</span><i class="terminal-cursor" aria-hidden="true"></i></h1>
      <p class="landpage-subtitle animate-on-load">Software engineer specializing in distributed systems, high-performance services, and cloud architectures.</p>
      <div class="cta-button animate-on-load">
        <a href="#projects" class="btn btn-primary">./work</a>
        <a href="assets/docs/cv.pdf" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">cat resume.pdf</a>
      </div>
    </div>
  </div>
  <div class="scroll-indicator"><a href="#about" aria-label="Scroll to about section">scroll to execute more <span aria-hidden="true">v</span></a></div>
</section>
```

- [ ] **Step 3: Reshape About content into summary, grouped skills, and languages**

Keep the current page-only paragraphs about the origin of the career and hobbies. Add the CV skills without deleting existing skills:

```html
<section id="about" class="about-section">
  <div class="container">
    <div class="section-header">
      <p class="section-kicker">01 // about</p>
      <h2 class="section-title">cat about.txt</h2>
      <div class="section-divider"></div>
    </div>
    <div class="about-content">
      <div class="about-text">
        <h3>Software engineer / systems thinker</h3>
        <p>I'm a passionate Computer Science Engineer with experience ranging from low level like C or assembly to high level such as Vue.js or Django. I love efficiency and optimizations.</p>
        <p>My journey in computer science began in high school with IT subject. Today, I combine technical knowledge with creative thinking in the projects I'm in.</p>
        <p>When I'm not coding, you can find me enjoying martial arts, exploring the world, photography, or playing piano.</p>
      </div>
      <div class="skills-container">
        <h3>// skills</h3>
        <div class="skills-grid">
          <div class="skill-group"><span class="skill-label">backend & systems</span><p>Python · Java · C · TypeScript · Distributed Systems · REST · Microservices</p></div>
          <div class="skill-group"><span class="skill-label">data & infra</span><p>PostgreSQL · MongoDB · Docker · Kubernetes · Git · ArgoCD · Jenkins · CI/CD</p></div>
          <div class="skill-group"><span class="skill-label">architecture</span><p>DDD · CQRS · TDD · SOLID · Hexagonal · Event-Driven · Kafka · RabbitMQ</p></div>
          <div class="skill-group"><span class="skill-label">security & observability</span><p>TLS 1.3 · Certificates & PKI · AES/RSA · Wireshark · Nmap · Datadog · Sentry</p></div>
          <div class="skill-group"><span class="skill-label">page-only toolkit</span><p>Hardware · Assembly · SQL · Network Security · Analytical Thinking · Scrum</p></div>
          <div class="skill-group"><span class="skill-label">languages</span><p>Spanish: native · English: C1 · Russian: A1</p></div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Add the magnetotherapy project and alt text while preserving all existing projects**

Add the new CV project before the existing project cards. Every image gets descriptive alt text and the current image assets stay in place:

```html
<div class="project-card">
  <div class="project-index">01</div>
  <div class="project-image project-image-empty" aria-hidden="true"><span>[ hardware / personal / 2025 ]</span></div>
  <div class="project-details">
    <h3 class="project-title">Portable Magnetotherapy Device</h3>
    <p class="project-description">Developed a portable device capable of generating controlled magnetic fields for tendinitis treatment.</p>
    <div class="project-tech"><span class="tech-tag">Hardware</span><span class="tech-tag">Embedded Systems</span></div>
  </div>
</div>
```

Use these alt texts for the existing image-backed projects:

```html
<img src="assets/images/chess.jpg" alt="Chess board representing an online multiplayer chess platform">
<img src="assets/images/java.jpg" alt="Java code representing a gym management platform">
<img src="assets/images/proc.jpg" alt="Processor diagram representing a pipelined RISC-V CPU">
<img src="assets/images/server.jpg" alt="Server hardware representing a concurrent HTTP server in C">
<img src="assets/images/quantum.jpg" alt="Quantum circuit representing simulated programming gates">
```

- [ ] **Step 5: Update project section labels and preserve project-only details**

Keep the existing chess, gym, RISC-V, C HTTP server, and quantum gate copy. Change only the surrounding structure and tech tags so each card reads as terminal output:

```html
<section id="projects" class="projects-section">
  <div class="container">
    <div class="section-header">
      <p class="section-kicker">02 // projects</p>
      <h2 class="section-title">ls -la ./work</h2>
      <div class="section-divider"></div>
      <p class="section-description">Selected builds, experiments, and systems work.</p>
    </div>
    <div class="projects-grid"><!-- cards from Step 4 and existing project data -->
    </div>
  </div>
</section>
```

- [ ] **Step 6: Replace resume timeline copy with CV dates and terminal log metadata**

Use the existing experience and education section IDs, but update titles, dates, and details:

```html
<div class="timeline-item">
  <div class="timeline-marker" aria-hidden="true"></div>
  <p class="timeline-command">$ log --since 2025-07 --role backend</p>
  <h4 class="timeline-title">Backend Software Engineer</h4>
  <div class="timeline-meta"><a class="company" href="https://feverup.com" target="_blank" rel="noopener noreferrer">FEVER / Madrid</a><span class="period">July 2025 - Present</span></div>
  <p class="timeline-description">Reduced Redis cache calls by ~50%, enhanced CI/CD pipelines, collaborated with product managers and partners, refactored legacy code, and integrated Datadog monitoring.</p>
</div>
```

Repeat the same structure for KDPOF (`March 2025 - June 2025`), C.A.R. CSIC (`June 2024 - August 2024`), and private tutoring (`September 2022 - August 2023`). Add GPA 3.2/4 and three honors distinctions to the UAM education entry, and keep the existing download link labeled `cat resume.pdf`.

- [ ] **Step 7: Add accessible footer metadata**

Keep the current-year span and LinkedIn link, but use terminal copy and hide decorative icons from assistive technology:

```html
<p>EOF // <span id="current-year"></span> Hugo Barroso Munoz</p>
```

### Task 2: Replace the Visual System With CRT Terminal CSS

**Files:**
- Modify: `styles/main.css`

**Interfaces:**
- Consumes: Classes and section structure from Task 1.
- Produces: Responsive green/black CRT visual system and reduced-motion styles used by the existing JS animation classes.

- [ ] **Step 1: Replace blue tokens and system font defaults**

Start the stylesheet with the smallest usable token set:

```css
:root {
  --color-black: #050805;
  --color-surface: #0b120c;
  --color-surface-raised: #101a11;
  --color-green: #8dff9b;
  --color-green-bright: #c7ffd0;
  --color-green-dim: #4eae62;
  --color-green-dark: #173b20;
  --color-text: #d7f4db;
  --color-muted: #8caf91;
  --font-mono: "Courier New", Courier, monospace;
  --transition-fast: 180ms;
  --transition-medium: 420ms;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  overflow-x: hidden;
  color: var(--color-text);
  background: var(--color-black);
  font: 15px/1.65 var(--font-mono);
}
```

- [ ] **Step 2: Style navigation, buttons, prompts, and focus states**

Use rectangular borders, not pills. Keep controls large enough for touch:

```css
#navbar { position: fixed; inset: 0 0 auto; z-index: 1000; padding: .8rem 0; border-bottom: 1px solid transparent; transition: background var(--transition-fast), border-color var(--transition-fast); }
#navbar.scrolled { background: rgba(5, 8, 5, .94); border-color: var(--color-green-dark); backdrop-filter: blur(8px); }
.terminal-nav { display: flex; align-items: center; gap: 1rem; }
.logo, .nav-link, .social-icon { color: var(--color-green); }
.nav-links { display: none; gap: 1.25rem; margin-left: auto; }
.nav-link:hover, .nav-link.active, .social-icon:hover, .logo:hover { color: var(--color-green-bright); }
a:focus-visible, .btn:focus-visible { outline: 2px solid var(--color-green-bright); outline-offset: 4px; }
.btn { display: inline-flex; min-height: 44px; align-items: center; padding: .6rem .85rem; border: 1px solid var(--color-green-dim); color: var(--color-green); font-weight: 400; }
.btn-primary { color: var(--color-black); background: var(--color-green); }
.btn:hover { border-color: var(--color-green-bright); box-shadow: 0 0 18px rgba(141,255,155,.16); }
```

- [ ] **Step 3: Implement the mobile CRT hero and section frame**

Use scanline-like horizontal texture with CSS only; avoid heavy canvas effects:

```css
.landpage-section { position: relative; display: flex; min-height: 100svh; align-items: center; overflow: hidden; background: radial-gradient(circle at 50% 30%, rgba(78,174,98,.09), transparent 32rem), var(--color-black); }
.landpage-section::after { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .18; background: repeating-linear-gradient(0deg, transparent 0 3px, rgba(141,255,155,.06) 3px 4px); }
.terminal-window { position: relative; z-index: 1; padding: 1.15rem; border: 1px solid var(--color-green-dim); box-shadow: 0 0 0 5px rgba(23,59,32,.2), 0 0 34px rgba(78,174,98,.12); }
.terminal-prompt { margin: 0 0 1rem; color: var(--color-green-dim); }
.terminal-prompt span { color: var(--color-green); }
.landpage-title { margin: 0 0 1.2rem; color: var(--color-green-bright); font-size: clamp(2.7rem, 14vw, 5rem); line-height: .95; letter-spacing: -.08em; font-weight: 400; text-shadow: 0 0 14px rgba(141,255,155,.26); }
.landpage-title span { display: block; }
.terminal-cursor { display: inline-block; width: .55em; height: .9em; margin-left: .2em; background: var(--color-green); vertical-align: -.02em; animation: blink 1s steps(2, start) infinite; }
.landpage-subtitle { max-width: 42rem; margin: 0 0 1.6rem; color: var(--color-text); }
.cta-button { display: flex; flex-wrap: wrap; gap: .6rem; }
```

- [ ] **Step 4: Style sections, skills, projects, and timeline as terminal output**

Replace rounded cards with thin bordered blocks and use green image treatment:

```css
section { padding: 5rem 0; border-top: 1px solid var(--color-green-dark); }
.section-header { margin-bottom: 2.5rem; text-align: left; }
.section-kicker, .skill-label, .timeline-command { color: var(--color-green-dim); font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; }
.section-title { margin: .5rem 0; color: var(--color-green); font-size: clamp(1.6rem, 6vw, 2.5rem); font-weight: 400; }
.section-divider { width: 5rem; height: 1px; margin: 1rem 0; background: var(--color-green-dim); }
.about-content, .resume-content { display: grid; gap: 2.5rem; }
.skills-grid { display: grid; gap: .65rem; }
.skill-group, .project-card, .timeline-item { border: 1px solid var(--color-green-dark); background: var(--color-surface); }
.skill-group { padding: .8rem; }
.skill-group p { margin: .4rem 0 0; color: var(--color-text); }
.projects-grid { display: grid; gap: 1.25rem; }
.project-card { overflow: hidden; }
.project-image { height: 10rem; background: var(--color-surface-raised); }
.project-image img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) sepia(1) hue-rotate(75deg) saturate(2) brightness(.72); }
.project-details, .timeline-item { padding: 1rem; }
.project-title, .timeline-title { margin: 0 0 .5rem; color: var(--color-green-bright); font-size: 1rem; font-weight: 400; }
.project-description, .timeline-description { color: var(--color-muted); }
.tech-tag { display: inline-block; margin: .25rem .35rem .1rem 0; padding: .2rem .4rem; border: 1px solid var(--color-green-dark); color: var(--color-green-dim); font-size: .7rem; }
.timeline { position: relative; display: grid; gap: .8rem; }
.timeline::before { background: var(--color-green-dark); }
.timeline-marker { width: .7rem; height: .7rem; border-radius: 0; background: var(--color-green); box-shadow: 0 0 10px rgba(141,255,155,.32); }
.company, .institution { color: var(--color-green); }
```

- [ ] **Step 5: Add desktop rules and reduced-motion fallback**

Keep the mobile layout as the default and widen only at existing breakpoints:

```css
@media (min-width: 768px) {
  .nav-links { display: flex; }
  .about-content, .resume-content { grid-template-columns: 1fr 1fr; }
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .container { max-width: 1180px; }
  .projects-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: 1ms !important; animation-iteration-count: 1 !important; transition-duration: 1ms !important; }
}
```

### Task 3: Keep Vanilla JavaScript Small and Motion-Safe

**Files:**
- Modify: `js/main.js`
- Modify: `js/animations.js`

**Interfaces:**
- Consumes: Existing IDs and classes from Task 1.
- Produces: Current-year output, scroll navigation, active link state, and safe reveal animation behavior.

- [ ] **Step 1: Remove empty component placeholders and guard DOM access**

Keep `main.js` focused on the three behaviors the page uses:

```js
const year = document.getElementById('current-year');
if (year) year.textContent = new Date().getFullYear();

const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateScrollState() {
  navbar?.classList.toggle('scrolled', window.scrollY > 10);
  const position = window.scrollY + 100;
  sections.forEach(section => {
    const active = position >= section.offsetTop && position < section.offsetTop + section.offsetHeight;
    if (!active) return;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${section.id}`));
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', event => {
  const target = document.querySelector(anchor.getAttribute('href'));
  if (!target) return;
  event.preventDefault();
  window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
}));

window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('load', updateScrollState);
```

- [ ] **Step 2: Make animation setup skip work for reduced motion**

Use the existing class names and observer, but let CSS handle the accessibility fallback:

```js
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(element => element.classList.add('fade-in-up'));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('fade-in-up');
    observer.unobserve(entry.target);
  }), { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  elements.forEach(element => observer.observe(element));
}

function animateOnLoad() {
  document.querySelectorAll('.animate-on-load').forEach((element, index) => {
    window.setTimeout(() => element.classList.add('fade-in-up'), 100 * index);
  });
}
```

- [ ] **Step 3: Remove obsolete bounce/blue animation assumptions**

Keep the reveal keyframes, replace the old scroll-indicator bounce with a static terminal hint, and ensure elements are not permanently hidden when JavaScript is unavailable by only applying the hidden state through the existing animation class rules.

### Task 4: Browser Verification And Static-Site Smoke Check

**Files:**
- Verify: `index.html`
- Verify: `styles/main.css`
- Verify: `js/main.js`
- Verify: `js/animations.js`

**Interfaces:**
- Consumes: The complete implementation from Tasks 1-3.
- Produces: Observed evidence that the static portfolio works on mobile and desktop.

- [ ] **Step 1: Start a local static server**

Run from the repo root:

```bash
python3 -m http.server 4173
```

Expected: the server listens on `http://localhost:4173` and serves `index.html` without a build step.

- [ ] **Step 2: Verify mobile layout at 390px**

Open `http://localhost:4173` at 390px wide and confirm the hero, terminal nav, section labels, project cards, timeline entries, and footer fit without horizontal overflow. Confirm the hero name and actions remain readable and touch targets are usable.

- [ ] **Step 3: Verify desktop layout and interactions**

Open the same page at desktop width and click every internal nav link. Confirm the active link changes for `about`, `projects`, and `resume`; confirm LinkedIn, company, university, and CV links retain their destinations.

- [ ] **Step 4: Verify content, assets, and reduced motion**

Confirm the CV dates and new magnetotherapy project are visible, existing quantum/hobby content remains, all five existing project images load, the footer year renders, and the browser console has no errors. Enable reduced motion in DevTools and confirm blinking/reveal/bounce motion is removed without hiding content.

No git commit step is included because this workspace does not contain a `.git` directory.

## Plan Self-Review

- Spec coverage: CV updates and preserved page-only details are covered in Task 1; CRT colors, terminal structure, responsive behavior, and accessibility are covered in Task 2; motion and navigation are covered in Task 3; all verification requirements are covered in Task 4.
- Placeholder scan: no `TBD`, `TODO`, or unspecified implementation step is required.
- Type/signature consistency: the plan uses only existing DOM IDs/classes and plain JavaScript functions; no new cross-file type or API contract is introduced.
- Scope check: the work is one static-site visual/content refresh, not multiple independent subsystems.
