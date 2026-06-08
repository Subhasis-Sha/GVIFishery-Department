/**
 * GVIFishery Technology - Bhubaneswar, Odisha
 * GitHub Repository: GVIFishery
 * File: script.js
 * Department of Fisheries and Fishermen's Welfare, Government of Odisha
 */

document.addEventListener('DOMContentLoaded', () => {

    const toggleBtn = document.getElementById('mobileMenuToggle');
    const headerRight = document.querySelector('.header-right');
    const navbar = document.querySelector('.navbar');

    if (toggleBtn && headerRight && navbar) {
        toggleBtn.addEventListener('click', () => {
            headerRight.classList.toggle('active');
            navbar.classList.toggle('active');

            const icon = toggleBtn.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);

    const style = document.createElement('style');
    style.textContent = `

        .back-to-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #ff6a00;
            color: #fff;
            border: none;
            outline: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            z-index: 9999;
        }
        .back-to-top-btn.visible {
            opacity: 1;
            visibility: visible;
        }
        .back-to-top-btn:hover {
            background-color: #0c1239;
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        }

        .scroll-hidden {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .scroll-visible {
            opacity: 1;
            transform: translateY(0);
        }

        .navbar.sticky-active {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            border-radius: 0 !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15) !important;
            z-index: 10000 !important;
            background: rgba(13, 149, 231, 0.95) !important;
            backdrop-filter: blur(8px) !important;
            animation: slideNavDown 0.3s ease-out !important;
            padding: 10px 20px !important;
        }
        @keyframes slideNavDown {
            from { transform: translateY(-100%); }
            to { transform: translateY(0); }
        }

        .search-filter-container {
            position: relative;
            max-width: 500px;
            margin: 20px auto 35px auto;
        }
        .search-input {
            width: 100%;
            padding: 14px 20px 14px 50px;
            border: 2px solid #e0e0e0;
            border-radius: 35px;
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .search-input:focus {
            border-color: #ff6a00;
            box-shadow: 0 4px 20px rgba(255, 106, 0, 0.18);
        }
        .search-icon {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: #888;
            font-size: 1.2rem;
        }
        .no-results-msg {
            text-align: center;
            padding: 30px;
            color: #777;
            font-size: 1.1rem;
            font-style: italic;
            background: #fdfdfd;
            border: 1px dashed #ccc;
            border-radius: 10px;
            margin-top: 20px;
        }

        .lightbox-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 100000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.35s ease, visibility 0.35s ease;
            user-select: none;
        }
        .lightbox-modal.active {
            opacity: 1;
            visibility: visible;
        }
        .lightbox-content-wrapper {
            position: relative;
            max-width: 85%;
            max-height: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .lightbox-image {
            max-width: 100%;
            max-height: 100vh;
            border-radius: 5px;
            box-shadow: 0 5px 30px rgba(0,0,0,0.6);
            transform: scale(0.95);
            transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .lightbox-modal.active .lightbox-image {
            transform: scale(1);
        }
        .lightbox-caption {
            color: #fff;
            margin-top: 20px;
            font-size: 1.25rem;
            font-weight: bold;
            text-align: center;
            letter-spacing: 0.8px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        .lightbox-close {
            position: absolute;
            top: 30px;
            right: 30px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 2.8rem;
            cursor: pointer;
            transition: color 0.2s ease, transform 0.2s ease;
            background: none;
            border: none;
            outline: none;
        }
        .lightbox-close:hover {
            color: #ff6a00;
            transform: scale(1.1);
        }
        .lightbox-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(255, 255, 255, 0.7);
            font-size: 3.5rem;
            cursor: pointer;
            background: none;
            border: none;
            outline: none;
            transition: color 0.2s ease, transform 0.2s ease;
            padding: 15px;
        }
        .lightbox-nav:hover {
            color: #ff6a00;
            transform: translateY(-50%) scale(1.1);
        }
        .lightbox-prev {
            left: 20px;
        }
        .lightbox-next {
            right: 20px;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', () => {

        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        if (window.scrollY > 150) {
            navbar.classList.add('sticky-active');
        } else {
            navbar.classList.remove('sticky-active');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const stats = document.querySelectorAll('.stat-box h2');
    if (stats.length > 0) {
        const animateCount = (el) => {
            const target = parseInt(el.textContent.replace(/,/g, ''), 10);
            if (isNaN(target)) return;

            let start = 0;
            const duration = 2000;
            let startTime = null;

            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const currentValue = Math.floor(progress * target);

                el.textContent = currentValue.toLocaleString();

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    el.textContent = target.toLocaleString();
                }
            };
            window.requestAnimationFrame(step);
        };

        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => {
            statsObserver.observe(stat);
        });
    }

    const elementsToAnimate = document.querySelectorAll('.about-section, .services-section, .org-section, .stats-section, .service-card, .stat-box, .vision_mission_container, .breadcrumb-area, .content-card');
    if (elementsToAnimate.length > 0) {
        const animObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                    animObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elementsToAnimate.forEach(el => {
            el.classList.add('scroll-hidden');
            animObserver.observe(el);
        });
    }

    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.navbar ul > li');

    navItems.forEach(li => {
        li.classList.remove('nav-item-active');
        if (li.classList.contains('nav-item-home-active')) {
            li.classList.remove('nav-item-home-active');
            li.classList.add('nav-item-home');
        }

        const links = li.querySelectorAll('a');
        let isMatch = false;

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                const linkBase = href.split('/').pop();
                const pathBase = currentPath.split('/').pop() || 'index.html';
                
                const isExactMatch = pathBase === linkBase;
                const isHomeFallback = (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/') || currentPath.endsWith('/index.html')) && linkBase === 'index.html';

                if (isExactMatch || isHomeFallback) {
                    isMatch = true;

                    if (li.classList.contains('dropdown')) {
                        link.style.color = 'yellow';
                        link.style.fontWeight = 'bold';
                    }
                }
            }
        });

        if (isMatch) {
            if (li.classList.contains('nav-item-home')) {
                li.classList.remove('nav-item-home');
                li.classList.add('nav-item-home-active');
            } else {
                li.classList.add('nav-item-active');
            }
        }
    });

    const newsTicker = document.querySelector('.news-ticker');
    const ticketContentWrapper = document.querySelector('.ticket-content-wrapper');
    if (newsTicker && ticketContentWrapper) {
        const newsItems = ticketContentWrapper.querySelectorAll('.news-item');
        if (newsItems.length > 0) {
            const tickerTrack = document.createElement('div');
            tickerTrack.className = 'ticker-track';

            const duplicateAndAppend = () => {
                newsItems.forEach(item => {
                    const clone = item.cloneNode(true);
                    clone.style.display = 'inline-block';
                    clone.style.padding = '0 40px';
                    clone.style.margin = '0';
                    tickerTrack.appendChild(clone);
                });
            };

            duplicateAndAppend();
            duplicateAndAppend();

            ticketContentWrapper.innerHTML = '';
            ticketContentWrapper.appendChild(tickerTrack);

            const tickerStyle = document.createElement('style');
            tickerStyle.textContent = `
                .news-ticker {
                    display: flex !important;
                    align-items: center;
                    background-color: #0c1239;
                    color: #fff;
                    padding: 0 !important;
                    height: 52px;
                    overflow: hidden;
                    position: relative;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                .ticket-bar {
                    background-color: #ff6a00;
                    height: 100%;
                    display: flex !important;
                    align-items: center;
                    z-index: 10;
                    padding: 0 25px;
                    width: auto !important;
                    white-space: nowrap;
                    box-shadow: 5px 0 15px rgba(0,0,0,0.4);
                }
                .ticket-label-left {
                    color: #fff !important;
                    font-size: 0.95rem !important;
                    font-weight: 800 !important;
                    margin: 0;
                    padding: 0 !important;
                    letter-spacing: 1.2px;
                }
                .ticket-label-right {
                    display: none !important;
                }
                .ticket-content-wrapper {
                    flex-grow: 1;
                    overflow: hidden;
                    white-space: nowrap;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    padding: 0 !important;
                }
                .ticker-track {
                    display: inline-block;
                    white-space: nowrap;
                    animation: marquee-scroll 32s linear infinite;
                }
                .ticker-track:hover {
                    animation-play-state: paused;
                }
                .ticker-track .news-item {
                    display: inline-block !important;
                    padding-left: 0 !important;
                    margin-bottom: 0 !important;
                    color: #fff;
                }
                .ticker-track .news-item a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.25s;
                }
                .ticker-track .news-item a:hover {
                    color: #ff6a00;
                }
                .ticker-track .news-item i {
                    color: #ff6a00;
                    margin-right: 12px;
                }
                @keyframes marquee-scroll {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-50%, 0, 0); }
                }
            `;
            document.head.appendChild(tickerStyle);
        }
    }

    const infoPageContainer = document.querySelector('.info-page-container');
    const infoCards = document.querySelectorAll('.info-card');

    if (infoPageContainer && infoCards.length > 1) {
        const titleElement = infoPageContainer.querySelector('.text-center h3.section-title');

        if (titleElement) {

            const searchWrapper = document.createElement('div');
            searchWrapper.className = 'search-filter-container';
            searchWrapper.innerHTML = `
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" class="search-input" placeholder="Search listing by title or description...">
            `;

            titleElement.parentNode.insertBefore(searchWrapper, titleElement.nextSibling);

            const searchInput = searchWrapper.querySelector('.search-input');

            const noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results-msg';
            noResultsMsg.style.display = 'none';
            noResultsMsg.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> No matching items found. Please try a different query.';
            infoPageContainer.appendChild(noResultsMsg);

            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                let visibleCount = 0;

                infoCards.forEach(card => {
                    const text = card.textContent.toLowerCase();
                    if (text.includes(query)) {
                        card.style.display = 'block';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (visibleCount === 0) {
                    noResultsMsg.style.display = 'block';
                } else {
                    noResultsMsg.style.display = 'none';
                }
            });
        }
    }

    const isGalleryPage = window.location.pathname.includes('photo_gallery');
    const galleryContainer = document.querySelector('.info-card');
    const galleryItems = galleryContainer ? galleryContainer.querySelectorAll('.flex-holder img') : [];

    if (isGalleryPage && galleryItems.length > 0) {

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-modal';
        lightbox.innerHTML = `
            <button class="lightbox-close">&times;</button>
            <button class="lightbox-nav lightbox-prev"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="lightbox-content-wrapper">
                <img class="lightbox-image" src="" alt="Gallery Image">
            </div>
            <div class="lightbox-caption"></div>
            <button class="lightbox-nav lightbox-next"><i class="fa-solid fa-chevron-right"></i></button>
        `;
        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        let currentIndex = 0;

        const openLightbox = (index) => {
            currentIndex = index;
            const img = galleryItems[currentIndex];
            const captionText = img.parentNode.querySelector('h5.title')?.textContent || img.alt || "Gallery Image";

            lightboxImg.src = img.src;
            lightboxCaption.textContent = captionText;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        const showNext = () => {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            openLightbox(currentIndex);
        };

        const showPrev = () => {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            openLightbox(currentIndex);
        };

        galleryItems.forEach((img, index) => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => openLightbox(index));
        });

        closeBtn.addEventListener('click', closeLightbox);
        nextBtn.addEventListener('click', showNext);
        prevBtn.addEventListener('click', showPrev);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        });
    }

    // Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Create Status Modal dynamically
        const statusModal = document.createElement('div');
        statusModal.className = 'contact-status-modal';
        statusModal.id = 'statusModal';
        statusModal.innerHTML = `
            <div class="status-modal-content">
                <button class="status-modal-close" id="statusModalClose">&times;</button>
                <div class="status-icon" id="statusIcon"></div>
                <h3 id="statusTitle"></h3>
                <p id="statusMessage"></p>
                <button class="btn-primary" id="statusModalBtn">Close</button>
            </div>
        `;
        document.body.appendChild(statusModal);

        const statusIcon = statusModal.querySelector('#statusIcon');
        const statusTitle = statusModal.querySelector('#statusTitle');
        const statusMessage = statusModal.querySelector('#statusMessage');
        const closeBtn = statusModal.querySelector('#statusModalClose');
        const actionBtn = statusModal.querySelector('#statusModalBtn');

        const showStatus = (isSuccess, title, message) => {
            statusIcon.className = `status-icon ${isSuccess ? 'success' : 'error'}`;
            statusIcon.innerHTML = isSuccess ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-solid fa-circle-xmark"></i>';
            statusTitle.textContent = title;
            statusMessage.textContent = message;
            statusModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const hideStatus = () => {
            statusModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', hideStatus);
        actionBtn.addEventListener('click', hideStatus);
        statusModal.addEventListener('click', (e) => {
            if (e.target === statusModal) {
                hideStatus();
            }
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnHTML = submitBtn.innerHTML;

            const fname = document.getElementById('fname').value;
            const lname = document.getElementById('lname').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Set loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';

            fetch("https://formsubmit.co/ajax/subhasissha991@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: `${fname} ${lname}`.trim(),
                    email: email,
                    message: message
                })
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // Restore button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;

                // Reset form
                contactForm.reset();

                // Show success modal
                showStatus(
                    true, 
                    'Message Sent!', 
                    'Thank you for contacting us! Your message has been sent successfully. We will get back to you shortly.'
                );
            })
            .catch(error => {
                // Restore button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;

                // Show error modal
                showStatus(
                    false, 
                    'Submission Failed', 
                    'Oops! Something went wrong while sending your message. Please try again or email us directly at subhasissha991@gmail.com.'
                );
            });
        });
    }
});

