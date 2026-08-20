# CRT Terminal Portfolio

## Goal

Refresh the existing Hugo Barroso Munoz portfolio into a green-and-black
phosphor CRT terminal portfolio while keeping the current dependency-free
static HTML/CSS/vanilla JavaScript stack and GitHub Pages deployment.

The CV at `assets/docs/cv.pdf` is the source for current professional dates and
content. Information that exists only on the page remains unless it is clearly
obsolete or contradictory.

## Content Rules

Update the professional content from the CV:

- Professional summary: software engineer focused on distributed systems,
  high-performance services, and cloud architectures.
- FEVER: Backend Software Engineer, July 2025 - Present, Madrid. Retain the
  quantified Redis improvement, CI/CD work, product collaboration, refactoring,
  and add Datadog monitoring.
- KDPOF: Cybersecurity Intern, March 2025 - June 2025, Madrid. Include Wazuh
  XDR optimization, TLS 1.3 mutual authentication with OpenSSL, and the
  biometric data platform.
- C.A.R. (CSIC): VR Programmer and Developer Intern, June 2024 - August 2024,
  Madrid. Include rebuilding over 90% of the virtual environment and reaching
  intermediate Unity proficiency.
- Private tutoring: ESO high-school student tutor, September 2022 - August
  2023, Madrid. Include tutoring 10+ students and measurable grade improvement.
- Education: Bachelor of Computer Engineering at Universidad Autonoma de
  Madrid, completed July 2025. Include GPA 3.2/4 and three honors distinctions.
- Skills: preserve the existing skills and add CV categories for backend and
  systems, databases, DevOps, messaging, patterns and architectures, security,
  and monitoring.
- Projects: add the 2025 personal magnetotherapy device. Keep the existing
  quantum programming project and hobby details even though they do not appear
  in the CV. Keep useful existing descriptions for the chess, gym, RISC-V, and
  C HTTP server projects.
- Languages: add English C1, Russian A1, and Spanish native.

Correct visible typos such as `Intership` and use consistent date formatting.
Keep the current CV download, LinkedIn link, project images, and external
company/institution links.

## Visual Direction

The site should feel like a personal terminal session rather than a generic
dark portfolio:

- Use black and near-black surfaces with phosphor green text, dim green
  borders, and a small pale-green highlight tone.
- Use a monospace stack available from the platform; do not add a font package.
- Replace rounded blue cards and gradients with thin terminal borders,
  dashed separators, command prompts, log labels, and rectangular controls.
- Add a fixed terminal status bar with the identity `hugo@portfolio:~`, an
  online indicator, and command-like navigation.
- Present the hero as terminal output with a `whoami` prompt, the name split
  across lines on mobile, a blinking cursor, and a software-engineering
  summary.
- Style section labels as terminal comments such as `// about`, `// projects`,
  `// experience`, and `// education`.
- Use command labels for actions, including `./work`, `cat resume.pdf`, and
  `linkedin`.
- Retain project images but apply a restrained grayscale/green treatment so
  they belong to the new visual system.
- Use terminal log entries for experience and education rather than the
  existing rounded timeline treatment.

## Structure

Keep the existing section anchors so current links continue to work:

- `#landpage`: terminal hero and primary actions.
- `#about`: summary, grouped skills, and languages.
- `#projects`: project command output with image, description, and tech tags.
- `#resume`: experience, education, and CV download.
- Footer: copyright and LinkedIn.

Use the current `index.html`, `styles/main.css`, `js/main.js`, and
`js/animations.js` files. No new runtime dependency, build tool, framework, or
component system is needed.

## Responsive And Accessible Behavior

- Design mobile-first at 390px and widen the terminal panels at desktop sizes.
- Keep a single readable column on mobile; use two-column groupings only where
  the available width supports them.
- Preserve smooth anchor navigation and active navigation state.
- Keep keyboard-visible focus styles on every link and button-like control.
- Add descriptive `alt` text to project images.
- Preserve sufficient contrast between bright phosphor text, dim metadata, and
  black surfaces.
- Respect `prefers-reduced-motion` by disabling cursor blinking, reveal motion,
  and bouncing indicators when requested.
- Preserve native link behavior for external links and the PDF download.

## Verification

Verify in a browser at both 390px mobile and desktop width:

- Hero, nav, section anchors, and active link state work.
- All project images load with useful alt text.
- LinkedIn, company, university, and CV links work.
- Current year renders in the footer.
- Load and scroll animations do not leave content hidden.
- Reduced-motion mode removes nonessential motion.
- No console errors are introduced.
- The site remains deployable as static GitHub Pages content.
