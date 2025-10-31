/**
 * Britton Distributions Inc. - Templating System
 * Loads header and footer templates, manages navigation state
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================
    // CONFIGURATION
    // ========================================
    
    const CONFIG = {
        headerPath: 'templates/header.html',
        footerPath: 'templates/footer.html',
        headerContainer: 'header-container',
        footerContainer: 'footer-container'
    };

    // Map pages to their navigation groups
    const PAGE_GROUPS = {
        // About Us dropdown pages
        'about.html': 'about',
        'services.html': 'about',
        'healthcare-partners.html': 'about',
        'quality-compliance.html': 'about',
        
        // Direct navigation items
        'products.html': 'products',
        'news-updates.html': 'news-updates',
        'resources.html': 'resources',
        'careers.html': 'careers',
        'contact.html': 'contact',
        
        // Resources sub-pages (if any)
        'faq.html': 'resources',
        'distribution-network.html': 'resources',
        'sitemap.html': 'resources'
    };

    
    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    
    /**
     * Get current page filename
     */
    const getCurrentPage = () => {
        const path = window.location.pathname;
        return path.split('/').pop() || 'index.html';
    };

    /**
     * Load HTML template into container
     */
    const loadTemplate = async (templatePath, containerId) => {
        try {
            const response = await fetch(templatePath);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const html = await response.text();
            const container = document.getElementById(containerId);
            
            if (!container) {
                throw new Error(`Container #${containerId} not found`);
            }
            
            container.innerHTML = html;
            return true;
            
        } catch (error) {
            console.error(`Failed to load ${templatePath}:`, error);
            return false;
        }
    };

    
    // ========================================
    // NAVIGATION FUNCTIONS
    // ========================================
    
    /**
     * Highlight active navigation items based on current page
     */
    const setActiveNavigation = () => {
        const currentPage = getCurrentPage();
        
        // Don't highlight anything on homepage
        if (currentPage === 'index.html') return;
        
        const navGroup = PAGE_GROUPS[currentPage];
        
        // Highlight exact page links
        document.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
            const linkPage = link.getAttribute('href');
            
            if (linkPage === currentPage) {
                link.classList.add('active');
                
                // If it's a dropdown link, also highlight parent
                const parentNav = link.closest('.has-dropdown');
                if (parentNav) {
                    parentNav.querySelector('.nav-link').classList.add('active');
                }
            }
        });
        
        // Highlight navigation group
        if (navGroup) {
            const groupItem = document.querySelector(`[data-nav-group="${navGroup}"]`);
            if (groupItem) {
                const groupLink = groupItem.querySelector('.nav-link');
                if (groupLink) {
                    groupLink.classList.add('active');
                }
            }
        }
    };

    /**
     * Initialize mobile menu toggle
     */
    const initMobileMenu = () => {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        if (!menuBtn || !mainNav) return;
        
        // Toggle menu on button click
        menuBtn.addEventListener('click', () => {
            const isActive = mainNav.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            
            // Switch icon between hamburger and X
            if (isActive) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 992 && 
                mainNav.classList.contains('active') &&
                !mainNav.contains(e.target) && 
                !menuBtn.contains(e.target)) {
                
                mainNav.classList.remove('active');
                menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
    };

    /**
     * Initialize dropdown navigation
     */
    const initDropdowns = () => {
        const dropdownItems = document.querySelectorAll('.has-dropdown');
        
        dropdownItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            
            if (!link) return;
            
            link.setAttribute('aria-expanded', 'false');
            
            // Mobile: Click to toggle
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    
                    const isOpen = item.classList.contains('open');
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.has-dropdown').forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('open');
                            otherItem.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
                        }
                    });
                    
                    // Toggle current dropdown
                    item.classList.toggle('open');
                    link.setAttribute('aria-expanded', !isOpen);
                }
            });
            
            // Desktop: Hover to show
            if (window.innerWidth > 992) {
                item.addEventListener('mouseenter', () => {
                    item.classList.add('open');
                    link.setAttribute('aria-expanded', 'true');
                });
                
                item.addEventListener('mouseleave', () => {
                    item.classList.remove('open');
                    link.setAttribute('aria-expanded', 'false');
                });
            }
            
            // Keyboard navigation support
            item.addEventListener('focusin', () => {
                if (window.innerWidth > 992) {
                    item.classList.add('open');
                    link.setAttribute('aria-expanded', 'true');
                }
            });
            
            item.addEventListener('focusout', (e) => {
                if (window.innerWidth > 992 && !item.contains(e.relatedTarget)) {
                    item.classList.remove('open');
                    link.setAttribute('aria-expanded', 'false');
                }
            });
        });
    };

    
    // ========================================
    // PAGE-SPECIFIC SCRIPTS
    // ========================================
    
    /**
     * Load scripts specific to certain pages
     */
    const loadPageScripts = () => {
        const currentPage = getCurrentPage();
        
        // Homepage slider
        if (currentPage === 'index.html') {
            const sliderScript = document.createElement('script');
            sliderScript.src = 'js/main.js';
            sliderScript.defer = true;
            document.body.appendChild(sliderScript);
        }
        
        // Add other page-specific scripts here as needed
    };

    
    // ========================================
    // INITIALIZATION
    // ========================================
    
    /**
     * Initialize the entire templating system
     */
    const init = async () => {
        try {
            // Step 1: Load header
            const headerLoaded = await loadTemplate(CONFIG.headerPath, CONFIG.headerContainer);
            
            if (headerLoaded) {
                // Step 2: Initialize header functionality
                initMobileMenu();
                initDropdowns();
                setActiveNavigation();
            }
            
            // Step 3: Load footer
            await loadTemplate(CONFIG.footerPath, CONFIG.footerContainer);
            
            // Step 4: Load page-specific scripts
            loadPageScripts();
            
        } catch (error) {
            console.error('Templating system initialization failed:', error);
        }
    };
    
    // Start the system
    init();
});