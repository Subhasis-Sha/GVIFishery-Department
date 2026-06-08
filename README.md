# GVIFishery Portal

A responsive front-end website template designed for the Department of Fisheries and Fishermen's Welfare, Government of Odisha (mock/redesign). This repository contains the complete static assets (HTML, CSS, and Vanilla JS) for the portal.

---

## Technical Stack
* **Markup:** HTML5 (semantic layout)
* **Styling:** CSS3 (custom layouts, grids, and responsive media queries)
* **Interactivity:** Vanilla JavaScript (ES6+, asynchronous APIs)
* **Icons:** FontAwesome v6.5.0
* **Typography:** Poppins, Sofia, Outfit (via Google Fonts)

---

## Key Features

1. **Responsive Header & Sticky Nav**
   * Mobile navigation toggle with an animated burger/close menu icon.
   * On-scroll sticky transition using JS `IntersectionObserver` principles for a smooth desktop header state.

2. **Animated Statistics Section**
   * Uses the browser's `IntersectionObserver` to trigger count-up numbers dynamically as the visitor scrolls the numbers into view.

3. **News Ticker Marquee**
   * A continuous looping banner at the top of the index page for announcements and corrigenda.

4. **Dynamic Item Search & Filter**
   * Fast, client-side JS filtering allowing users to search templates and listings instantly without page reloads.

5. **Media Lightbox Gallery**
   * Custom modal lightbox utility on the Photo Gallery page supporting keyboard accessibility (Esc key to close, Left/Right arrow key navigation).

6. **AJAX Contact Form Integration**
   * Pure front-end form submission using FormSubmit.co's REST API.
   * Intercepts reload, disables submit, displays active loader spinners, and triggers a premium glassmorphic feedback modal based on request success/failure.

---

## Directory Layout
```
├── index.html                   # Homepage landing file
├── js/
│   └── script.js                # Core JS logic and interactive components
├── static/                      # Custom CSS modules
│   ├── style.css                # Global page structure & components
│   ├── contactus.css            # Form layout and modal styles
│   └── ...                      # Additional feature styles
├── templates/                   # Child pages
│   ├── contactus.html           # Feedback & inquiry form
│   ├── bussiness.html           # Starting a business resource guide
│   ├── vision_mission.html      # Goals and missions
│   └── ...                      # Activities and staff directories
└── img/                         # Logo, icons, and page images
```

---

## Local Development

Because the contact form leverages the Fetch API for asynchronous submissions, running the site over the `file://` protocol may cause CORS restrictions or API blocks. It is best to host the project on a local server.

### Start a Local Server
Run any of the following commands in the project root:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server -p 8000
```

Access the local site at `http://localhost:8000`.

---

## Setting Up Form Submissions

The contact page form submits entries to `subhasissha991@gmail.com` without needing a backend server database.

1. Locate the submission function at the end of `js/script.js`.
2. On your very first test submission, **FormSubmit.co** will email you a validation link.
3. Click the activation link in that email to authorize the domain/local host port.
4. Subsequent submissions will immediately route contact details directly to your inbox and display the custom success modal inside the portal page.
