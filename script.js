// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== Typing Animation =====
const typingText = document.getElementById('typingText');
const roles = [
    'DevOps Engineer',
    'AI/ML Specialist',
    'MLOps Engineer',
    'Cybersecurity Expert'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, 2000); // Wait 2 seconds before deleting
            return;
        }
    }
    
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeRole, speed);
}

// Start typing animation
typeRole();

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.skill-category, .project-card, .timeline-item, .achievement-card, .contact-method'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== Skill Bar Animation =====
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width + '%';
            skillObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-progress').forEach(bar => {
    skillObserver.observe(bar);
});

// ===== Counter Animation =====
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// Smooth scrolling is now handled in the DOMContentLoaded section

// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-check"></i> <span>Message Sent!</span>';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    submitBtn.disabled = true;
    
    // Reset form
    contactForm.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
    }, 3000);
    
    // Log data (in production, send to your backend)
    console.log('Form submitted:', data);
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== Parallax Effect for Hero Background =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== Floating Cards Animation Enhancement =====
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
});

// ===== Project Card Hover Effect =====
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Carousel State Management =====
const carouselState = {
    projects: { currentIndex: 0, itemsPerView: 4 },
    certifications: { currentIndex: 0, itemsPerView: 4 },
    credentials: { currentIndex: 0, itemsPerView: 4 }
};

// Update items per view based on screen size
function updateItemsPerView() {
    const width = window.innerWidth;
    if (width <= 480) {
        carouselState.projects.itemsPerView = 1;
        carouselState.certifications.itemsPerView = 1;
        carouselState.credentials.itemsPerView = 1;
    } else if (width <= 768) {
        carouselState.projects.itemsPerView = 2;
        carouselState.certifications.itemsPerView = 2;
        carouselState.credentials.itemsPerView = 2;
    } else if (width <= 1024) {
        carouselState.projects.itemsPerView = 3;
        carouselState.certifications.itemsPerView = 3;
        carouselState.credentials.itemsPerView = 3;
    } else {
        carouselState.projects.itemsPerView = 4;
        carouselState.certifications.itemsPerView = 4;
        carouselState.credentials.itemsPerView = 4;
    }
}

window.addEventListener('resize', () => {
    updateItemsPerView();
    updateCarouselPosition('projects');
    updateCarouselPosition('certifications');
    updateCarouselPosition('credentials');
});

// ===== Carousel Navigation =====
function moveCarousel(type, direction) {
    const state = carouselState[type];
    const data = type === 'projects' ? projectsData : 
                 type === 'certifications' ? certificationsData : 
                 credentialsData;
    
    const maxIndex = Math.max(0, data.length - state.itemsPerView);
    
    if (direction === 'next') {
        state.currentIndex = Math.min(state.currentIndex + 1, maxIndex);
    } else {
        state.currentIndex = Math.max(state.currentIndex - 1, 0);
    }
    
    updateCarouselPosition(type);
    updateCarouselButtons(type, data.length);
    updateCarouselIndicators(type, data.length);
}

function updateCarouselPosition(type) {
    const carousel = document.getElementById(`${type}Carousel`);
    if (!carousel) return;
    
    const state = carouselState[type];
    const firstCard = carousel.querySelector('.project-card, .certification-card');
    if (!firstCard) return;
    
    const cardWidth = firstCard.offsetWidth;
    const gap = 24;
    const translateX = -(state.currentIndex * (cardWidth + gap));
    
    carousel.style.transform = `translateX(${translateX}px)`;
}

// Touch/swipe support for mobile
function initCarouselSwipe(type) {
    const carousel = document.getElementById(`${type}Carousel`);
    if (!carousel) return;
    
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let hasMoved = false;
    
    // Touch events for mobile
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        hasMoved = false;
    }, { passive: true });
    
    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diff = Math.abs(startX - currentX);
        if (diff > 10) {
            hasMoved = true;
        }
    }, { passive: true });
    
    carousel.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        // Only navigate if user actually swiped, not just tapped
        if (hasMoved) {
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                e.preventDefault();
                e.stopPropagation();
                if (diff > 0) {
                    moveCarousel(type, 'next');
                } else {
                    moveCarousel(type, 'prev');
                }
            }
        }
        hasMoved = false;
    });
}

function updateCarouselButtons(type, totalItems) {
    const state = carouselState[type];
    const maxIndex = Math.max(0, totalItems - state.itemsPerView);
    
    // Handle special case for credentials
    const prevBtnId = type === 'credentials' ? 'credsPrev' : `${type}Prev`;
    const nextBtnId = type === 'credentials' ? 'credsNext' : `${type}Next`;
    
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    
    if (prevBtn) {
        prevBtn.disabled = state.currentIndex === 0;
    }
    if (nextBtn) {
        nextBtn.disabled = state.currentIndex >= maxIndex;
    }
}

function updateCarouselIndicators(type, totalItems) {
    const indicators = document.getElementById(`${type}Indicators`);
    if (!indicators) return;
    
    const state = carouselState[type];
    const totalPages = Math.ceil(totalItems / state.itemsPerView);
    const currentPage = Math.floor(state.currentIndex / state.itemsPerView);
    
    indicators.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement('div');
        indicator.className = `carousel-indicator ${i === currentPage ? 'active' : ''}`;
        indicator.addEventListener('click', () => {
            state.currentIndex = i * state.itemsPerView;
            updateCarouselPosition(type);
            updateCarouselButtons(type, totalItems);
            updateCarouselIndicators(type, totalItems);
        });
        indicators.appendChild(indicator);
    }
}

// ===== Dynamic Project Rendering =====
function renderProjects() {
    const projectsCarousel = document.getElementById('projectsCarousel');
    if (!projectsCarousel || typeof projectsData === 'undefined') return;

    projectsCarousel.innerHTML = '';

    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.innerHTML = `
            <div class="project-image">
                <div class="project-overlay">
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
                <i class="fas ${project.icon} project-icon"></i>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    ${project.githubUrl ? `
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i class="fab fa-github"></i>
                            <span>View Code</span>
                        </a>
                    ` : ''}
                    ${project.demoUrl ? `
                        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i class="fas fa-external-link-alt"></i>
                            <span>Live Demo</span>
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        projectsCarousel.appendChild(projectCard);
    });

    // Initialize carousel
    updateItemsPerView();
    updateCarouselPosition('projects');
    updateCarouselButtons('projects', projectsData.length);
    updateCarouselIndicators('projects', projectsData.length);
    
    // Setup navigation buttons
    const prevBtn = document.getElementById('projectsPrev');
    const nextBtn = document.getElementById('projectsNext');
    if (prevBtn) prevBtn.addEventListener('click', () => moveCarousel('projects', 'prev'));
    if (nextBtn) nextBtn.addEventListener('click', () => moveCarousel('projects', 'next'));
    
    // Initialize swipe support
    setTimeout(() => {
        initCarouselSwipe('projects');
        updateCarouselPosition('projects');
    }, 100);
}

// ===== Dynamic Certification Rendering =====
function renderCertifications() {
    const certificationsCarousel = document.getElementById('certificationsCarousel');
    if (!certificationsCarousel || typeof certificationsData === 'undefined') return;

    certificationsCarousel.innerHTML = '';

    certificationsData.forEach((cert, index) => {
        const certCard = createCertificationCard(cert, index);
        certificationsCarousel.appendChild(certCard);
    });

    // Initialize carousel
    updateItemsPerView();
    updateCarouselPosition('certifications');
    updateCarouselButtons('certifications', certificationsData.length);
    updateCarouselIndicators('certifications', certificationsData.length);
    
    // Setup navigation buttons
    const prevBtn = document.getElementById('certsPrev');
    const nextBtn = document.getElementById('certsNext');
    if (prevBtn) prevBtn.addEventListener('click', () => moveCarousel('certifications', 'prev'));
    if (nextBtn) nextBtn.addEventListener('click', () => moveCarousel('certifications', 'next'));
    
    // Initialize swipe support
    setTimeout(() => {
        initCarouselSwipe('certifications');
        updateCarouselPosition('certifications');
    }, 100);
}

// ===== Dynamic Credentials Rendering =====
function renderCredentials() {
    const credentialsCarousel = document.getElementById('credentialsCarousel');
    if (!credentialsCarousel || typeof credentialsData === 'undefined') return;

    credentialsCarousel.innerHTML = '';

    credentialsData.forEach((cred, index) => {
        const credCard = createCertificationCard(cred, index, true);
        credentialsCarousel.appendChild(credCard);
    });

    // Initialize carousel
    updateItemsPerView();
    updateCarouselPosition('credentials');
    updateCarouselButtons('credentials', credentialsData.length);
    updateCarouselIndicators('credentials', credentialsData.length);
    
    // Setup navigation buttons - remove existing listeners first
    const prevBtn = document.getElementById('credsPrev');
    const nextBtn = document.getElementById('credsNext');
    
    // Remove existing event listeners by cloning and replacing
    if (prevBtn) {
        const newPrevBtn = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
        newPrevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            moveCarousel('credentials', 'prev');
        });
    }
    
    if (nextBtn) {
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        newNextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            moveCarousel('credentials', 'next');
        });
    }
    
    // Initialize swipe support
    setTimeout(() => {
        initCarouselSwipe('credentials');
        updateCarouselPosition('credentials');
        updateCarouselButtons('credentials', credentialsData.length);
    }, 100);
}

// ===== Create Certification Card (reusable for both certs and creds) =====
function createCertificationCard(item, index, isCredential = false) {
    const certCard = document.createElement('div');
    certCard.className = 'certification-card';
    certCard.setAttribute('data-cert-id', item.id);
    certCard.style.animationDelay = `${index * 0.1}s`;
    
    const issueDate = formatDate(item.issueDate);
    const expiryDate = item.expiryDate ? formatDate(item.expiryDate) : 'No expiry';
    const isExpired = item.expiryDate ? new Date(item.expiryDate) < new Date() : false;
    
    // Use badgeColor for credentials if available
    const iconStyle = isCredential && item.badgeColor ? 
        `style="background: ${item.badgeColor};"` : '';

    certCard.innerHTML = `
        <div class="certification-header">
            <div class="certification-icon" ${iconStyle}>
                <i class="${item.icon}"></i>
            </div>
            <div>
                <h3 class="certification-title">${item.name}</h3>
                <p class="certification-issuer">${item.issuer}</p>
            </div>
        </div>
        <div class="certification-meta">
            <div class="certification-meta-item">
                <i class="fas fa-calendar-alt"></i>
                <span>Issued: ${issueDate}</span>
            </div>
            ${item.expiryDate ? `
                <div class="certification-meta-item">
                    <i class="fas fa-calendar-check"></i>
                    <span>Expires: ${expiryDate}</span>
                </div>
            ` : ''}
            <div class="certification-meta-item">
                <i class="fas fa-id-card"></i>
                <span>ID: ${item.credentialId}</span>
            </div>
        </div>
        <div class="certification-actions">
            <button class="cert-btn cert-btn-primary" onclick="openCertModal(${item.id}, ${isCredential}); event.stopPropagation();">
                <i class="fas fa-eye"></i>
                <span>View Details</span>
            </button>
            ${item.verificationUrl ? `
                <a href="${item.verificationUrl}" target="_blank" rel="noopener noreferrer" class="cert-btn cert-btn-secondary" onclick="event.stopPropagation();">
                    <i class="fas fa-shield-check"></i>
                    <span>Verify</span>
                </a>
            ` : ''}
        </div>
    `;
    
    // Make entire card clickable
    certCard.addEventListener('click', (e) => {
        // Don't open modal if clicking on buttons or links
        if (e.target.closest('.cert-btn') || e.target.closest('a')) {
            return;
        }
        // Prevent event from bubbling to carousel swipe handler
        e.stopPropagation();
        openCertModal(item.id, isCredential);
    });
    
    // Ensure card content is clickable
    certCard.style.pointerEvents = 'auto';
    
    return certCard;
}

// ===== Date Formatting =====
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// ===== Certification Modal =====
// Make function globally accessible
window.openCertModal = function(certId, isCredential = false) {
    const data = isCredential ? credentialsData : certificationsData;
    const cert = data.find(c => c.id === certId);
    if (!cert) return;

    const modal = document.getElementById('certModal');
    const modalContent = document.getElementById('modalContent');
    
    const issueDate = formatDate(cert.issueDate);
    const expiryDate = cert.expiryDate ? formatDate(cert.expiryDate) : 'No expiry';
    const isExpired = cert.expiryDate ? new Date(cert.expiryDate) < new Date() : false;

    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon-large">
                <i class="${cert.icon}"></i>
            </div>
            <h2 class="modal-title">${cert.name}</h2>
            <p class="modal-issuer">${cert.issuer}</p>
        </div>
        <div class="modal-body">
            <p class="modal-description">${cert.description}</p>
            <div class="modal-details">
                <div class="modal-detail-item">
                    <div class="modal-detail-label">Issue Date</div>
                    <div class="modal-detail-value">${issueDate}</div>
                </div>
                <div class="modal-detail-item">
                    <div class="modal-detail-label">Expiry Date</div>
                    <div class="modal-detail-value ${isExpired ? 'text-danger' : ''}">${expiryDate}</div>
                </div>
                <div class="modal-detail-item">
                    <div class="modal-detail-label">Category</div>
                    <div class="modal-detail-value">${cert.category}</div>
                </div>
                <div class="modal-detail-item">
                    <div class="modal-detail-label">Status</div>
                    <div class="modal-detail-value">${isExpired ? 'Expired' : 'Valid'}</div>
                </div>
            </div>
            <div class="modal-credential">
                <div>
                    <div class="modal-detail-label" style="margin-bottom: 0.5rem;">Credential ID</div>
                    <div class="modal-credential-code" id="credentialCode">${cert.credentialId}</div>
                </div>
                <button class="modal-credential-copy" onclick="copyCredentialId('${cert.credentialId}')" title="Copy Credential ID">
                    <i class="fas fa-copy"></i>
                </button>
            </div>
        </div>
        <div class="modal-actions">
            ${cert.verificationUrl ? `
                <a href="${cert.verificationUrl}" target="_blank" rel="noopener noreferrer" class="modal-btn modal-btn-primary">
                    <i class="fas fa-shield-check"></i>
                    <span>Verify Credential</span>
                </a>
            ` : ''}
            <button class="modal-btn modal-btn-secondary" onclick="closeCertModal()">
                <i class="fas fa-times"></i>
                <span>Close</span>
            </button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

window.closeCertModal = function() {
    const modal = document.getElementById('certModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

window.copyCredentialId = function(id) {
    navigator.clipboard.writeText(id).then(() => {
        const btn = event.target.closest('.modal-credential-copy');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.style.background = 'var(--accent-primary)';
        btn.style.color = 'white';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('certModal');
    if (e.target === modal) {
        closeCertModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCertModal();
    }
});

// Close modal button
const modalClose = document.getElementById('modalClose');
if (modalClose) {
    modalClose.addEventListener('click', closeCertModal);
}

// ===== Page Loader =====
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 300);
    }
});

// ===== Smooth Scroll Enhancement =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Keyboard Navigation for Carousels =====
document.addEventListener('keydown', (e) => {
    // Only handle arrow keys when not typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    const activeSection = document.querySelector('section:target, section[id]:target');
    if (!activeSection) return;
    
    // Check if we're in certifications or credentials section
    if (activeSection.id === 'certifications' || activeSection.id === 'credentials') {
        const type = activeSection.id === 'certifications' ? 'certifications' : 'credentials';
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            moveCarousel(type, 'prev');
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            moveCarousel(type, 'next');
        }
    }
});

// ===== Initialize on Load =====
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero content
    const heroElements = document.querySelectorAll('.hero-greeting, .hero-name, .hero-title, .hero-description, .hero-buttons, .hero-social');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Set initial active nav link
    updateActiveNavLink();
    
    // Render projects, certifications, and credentials if data is available
    if (typeof projectsData !== 'undefined') {
        renderProjects();
    }
    if (typeof certificationsData !== 'undefined') {
        renderCertifications();
    }
    if (typeof credentialsData !== 'undefined') {
        renderCredentials();
    }
    
    // Add intersection observer for section animations
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
    
    console.log('Portfolio website loaded successfully!');
});

// ===== Performance Optimization: Lazy Load Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Add Active State to Nav Links =====
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent-primary);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

