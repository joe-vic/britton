// Smooth scrolling for anchor links
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

// Progress tracking
function initProgressTracking() {
    const lessonId = document.body.dataset.lessonId;
    if (!lessonId) return;

    const progress = getProgress();
    if (progress[lessonId]) {
        markAsCompleted(lessonId);
    }
}

function getProgress() {
    const data = {};
    const sections = document.querySelectorAll('.lesson-section');
    sections.forEach((section, index) => {
        data[`section-${index}`] = {
            scrolled: false
        };
    });
    return data;
}

function markAsCompleted(lessonId) {
    // Visual indicator that lesson is completed
    const header = document.querySelector('.lesson-header');
    if (header && !header.querySelector('.completed-badge')) {
        const badge = document.createElement('span');
        badge.className = 'completed-badge';
        badge.textContent = '✓ Completed';
        badge.style.cssText = 'background: #22c55e; color: white; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.9rem; margin-left: 1rem;';
        header.querySelector('h1').appendChild(badge);
    }
}

// Track scroll progress
let ticking = false;
function updateScrollProgress() {
    const sections = document.querySelectorAll('.lesson-section');
    const windowHeight = window.innerHeight;
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < windowHeight * 0.75 && rect.bottom > 0;
        
        if (isInView && !section.classList.contains('viewed')) {
            section.classList.add('viewed');
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateScrollProgress();
            ticking = false;
        });
        ticking = true;
    }
});

// Copy code functionality
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.style.cssText = 'position: absolute; top: 10px; right: 10px; padding: 0.5rem 1rem; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer;';
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent);
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        });
    });
}

// Interactive quiz functionality
function initQuiz() {
    const quizContainers = document.querySelectorAll('.quiz-container');
    
    quizContainers.forEach(container => {
        const questions = container.querySelectorAll('.quiz-question');
        
        questions.forEach(question => {
            const options = question.querySelectorAll('.quiz-option');
            
            options.forEach(option => {
                option.addEventListener('click', function() {
                    // Remove previous selections
                    options.forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));
                    
                    // Mark current selection
                    this.classList.add('selected');
                    
                    // Show feedback
                    if (this.dataset.correct === 'true') {
                        this.classList.add('correct');
                        showFeedback(question, 'Correct! Well done.', 'success');
                    } else {
                        this.classList.add('incorrect');
                        showFeedback(question, 'Not quite. Try again!', 'error');
                    }
                });
            });
        });
    });
}

function showFeedback(question, message, type) {
    let feedback = question.querySelector('.quiz-feedback');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'quiz-feedback';
        question.appendChild(feedback);
    }
    
    feedback.textContent = message;
    feedback.style.cssText = `
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 6px;
        font-weight: 500;
        background-color: ${type === 'success' ? '#dcfce7' : '#fee2e2'};
        color: ${type === 'success' ? '#166534' : '#991b1b'};
    `;
}

// Print certificate functionality
function printCertificate() {
    window.print();
}

// Navigation highlight
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initProgressTracking();
    updateScrollProgress();
    addCopyButtons();
    initQuiz();
    highlightCurrentPage();
    
    // Add animation to course cards
    const cards = document.querySelectorAll('.course-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Lesson completion tracking
function markLessonComplete(lessonId) {
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completedLessons.includes(lessonId)) {
        completedLessons.push(lessonId);
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    }
}

function isLessonComplete(lessonId) {
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    return completedLessons.includes(lessonId);
}