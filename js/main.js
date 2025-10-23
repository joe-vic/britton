// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        const nav = document.getElementById('mainNav');
        if (!nav) {
            return;
        }

        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
}

// Dropdown navigation handling
const dropdownLinks = document.querySelectorAll('.nav-item.has-dropdown > .nav-link');
const closeDropdowns = (exception) => {
    dropdownLinks.forEach(link => {
        const item = link.parentElement;
        if (!exception || item !== exception) {
            item.classList.remove('open');
            link.setAttribute('aria-expanded', 'false');
        }
    });
};

dropdownLinks.forEach(link => {
    link.setAttribute('aria-expanded', link.getAttribute('aria-expanded') || 'false');

    link.addEventListener('click', function(event) {
        const parentItem = this.parentElement;
        const isMobile = window.innerWidth <= 992;
        const isOpen = parentItem.classList.contains('open');

        if (isMobile && !isOpen) {
            event.preventDefault();
            closeDropdowns(parentItem);
            parentItem.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
        } else if (isMobile && isOpen) {
            parentItem.classList.remove('open');
            this.setAttribute('aria-expanded', 'false');
        } else {
            closeDropdowns(parentItem);
            this.setAttribute('aria-expanded', 'true');
        }
    });

    link.addEventListener('mouseenter', function() {
        if (window.innerWidth > 992) {
            closeDropdowns(this.parentElement);
            this.setAttribute('aria-expanded', 'true');
        }
    });

    link.addEventListener('focus', function() {
        if (window.innerWidth > 992) {
            closeDropdowns(this.parentElement);
            this.setAttribute('aria-expanded', 'true');
        }
    });

    link.addEventListener('blur', function() {
        if (window.innerWidth > 992) {
            this.setAttribute('aria-expanded', 'false');
        }
    });

    link.parentElement.addEventListener('mouseleave', function() {
        if (window.innerWidth > 992) {
            closeDropdowns();
        }
    });
});

document.addEventListener('click', function(event) {
    if (window.innerWidth <= 992) {
        const dropdownItem = event.target.closest('.nav-item.has-dropdown');
        if (!dropdownItem) {
            closeDropdowns();
        }
    }
});

// Slider functionality (only initialize on pages with a hero slider)
const slides = document.getElementById('slides');
const sliderDots = document.querySelectorAll('.slider-dot');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

if (slides && prevBtn && nextBtn && sliderDots.length) {
    let currentSlide = 0;
    const slideCount = sliderDots.length;
    let slideInterval;

    function goToSlide(index) {
        if (!slides) {
            return;
        }
        currentSlide = (index + slideCount) % slideCount;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        sliderDots.forEach(dot => dot.classList.remove('active'));
        sliderDots[currentSlide].classList.add('active');
        
        const slideContents = document.querySelectorAll('.slide-content');
        slideContents.forEach(content => {
            content.style.animation = 'none';
            setTimeout(() => {
                content.style.animation = 'slideUpFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards';
            }, 10);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(currentSlide);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    sliderDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            stopSlideShow();
            goToSlide(index);
            startSlideShow();
        });
    });

    function startSlideShow() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 6000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    startSlideShow();

    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', stopSlideShow);
        heroSlider.addEventListener('mouseleave', startSlideShow);
    }
}

// Scroll animations for value cards
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.value-card').forEach(card => {
    observer.observe(card);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('mainNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (window.innerWidth <= 992 && 
        !nav.contains(event.target) && 
        !mobileMenuBtn.contains(event.target)) {
        nav.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const nav = document.getElementById('mainNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (window.innerWidth > 992) {
        nav.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    }
});
