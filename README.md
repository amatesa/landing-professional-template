# Northbridge Coaching – Executive Coaching Landing Page

Modern, premium one-page landing template for executive coaching and professional services.  
Built with semantic HTML, modern CSS and a tiny bit of vanilla JS (no frameworks).

This template is designed for **clarity-first coaching websites**: clear positioning, strong hero, social proof via client logos, and a focused final call-to-action.

---

## ✨ Highlights

- **Hero with integrated photography**  
  Dark, gradient-based background that blends naturally into a hero photo (desktop + mobile variants).

- **“Trusted by” logo strip**  
  Horizontal row of client logos with subtle shadow and horizontal scroll on small screens.

- **Clear service positioning**  
  Three service cards for different coaching / consulting tracks.

- **Simple, realistic process section**  
  Three-step “How it works” layout aligned with executive calendars (Discover · Plan · Execute).

- **Strong final CTA**  
  Card-style call-to-action with primary email button and secondary links (e.g. LinkedIn).

- **Responsive & framework-free**  
  Custom CSS grid + flexbox, optimized for desktop, tablet and mobile.

- **Easy theming**  
  Colors, radiuses and typography controlled through CSS custom properties (`:root` tokens).

---

## 🧱 Page Structure

Sections included:

1. **Sticky header & navigation**
   - Brand mark + wordmark (“Northbridge Coaching”)
   - Navigation links: `Services`, `Process`, `Contact`
   - Mobile burger menu with animated icon

2. **Hero section**
   - Eyebrow: “Executive coaching for real decisions”
   - Main headline: “Clarity for leaders who make hard calls.”
   - Short supporting paragraph and meta line (1:1 coaching · Remote-first · Confidential)
   - Primary CTA: “Book a conversation”
   - Secondary CTA: “See how it works”

3. **Trusted by**
   - Label: “Trusted by leaders from”
   - Row of company logos (Aurora, Nexus Global, Stratos, Cosmos, Zenith – placeholder brands)

4. **Services**
   - Section title: “Services designed for high-stakes work”
   - Explanatory paragraph
   - 3 service cards:
     - Strategic Clarity Sessions
     - Performance & Focus Coaching
     - Systems & Stakeholder Alignment

5. **Process**
   - Section title: “A simple process built around your calendar”
   - 3 steps list:
     - Discover
     - Plan
     - Execute

6. **Final CTA**
   - Heading: “Let’s see if we’re a good fit”
   - Supporting copy
   - Primary CTA: “Email Northbridge”
   - Secondary links (e.g. “Connect on LinkedIn”, “Visit website”)
   - Optional “Back to portfolio” link for template/demo use

7. **Footer**
   - Minimal footer text (year + name / credit)

---

## 🛠 Tech Stack

- **HTML5** – semantic structure, single `index.html`
- **CSS3** – custom layout, gradients, hover states  
  - Uses CSS variables (`--accent`, `--bg-body`, etc.) for easy theming
  - Flexbox + CSS Grid for layout
- **Vanilla JavaScript** (`script.js`)
  - Mobile nav toggle (burger ↔ close)
  - Adds/removes `.is-open` classes

No build tools, no framework, no dependencies required.

---

## 📁 File Structure

```bash
.
├── index.html
├── styles.css
├── script.js
└── assets
    ├── hero-desktop.webp
    ├── hero-mobile.webp
    ├── logo-mark.svg
    └── client
        ├── client-aurora.png
        ├── client-nexus-global.png
        ├── client-stratos.png
        ├── client-cosmos.png
        └── client-zenith.png
