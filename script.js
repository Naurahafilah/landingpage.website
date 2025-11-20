
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}


function handleSubscribe(event) {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    
    if (email) {
        alert('Thank you for subscribing! We will send updates to: ' + email);
        emailInput.value = '';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                navMenu.classList.remove('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.add-button');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dishCard = this.closest('.dish-card');
            const dishName = dishCard.querySelector('.dish-name').textContent;
            const dishPrice = dishCard.querySelector('.dish-price').textContent;
            
            alert(`Added to cart:\n${dishName}\nPrice: ${dishPrice}`);
            
            // Add visual feedback
            this.textContent = 'Added!';
            this.style.background = '#4CAF79';
            
            setTimeout(() => {
                this.textContent = 'Add Now';
                this.style.background = '#60D394';
            }, 2000);
        });
    });
});

// CTA Button Interaction
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Welcome to Foodman! Start ordering your favorite food now!');
            // You can redirect to a menu page or open a modal here
            // window.location.href = '#menu';
        });
    }
});

// Explore Story Button
document.addEventListener('DOMContentLoaded', function() {
    const exploreButton = document.querySelector('.explore-button');
    
    if (exploreButton) {
        exploreButton.addEventListener('click', function() {
            alert('Learn more about our healthy and tasty food story!');
            // You can redirect to an about page here
        });
    }
});


const testimonialNavArrows = document.querySelectorAll('.nav-arrow');
testimonialNavArrows.forEach(arrow => {
    arrow.addEventListener('click', function() {
        console.log('Navigate to next/previous testimonial');
        // Add testimonial carousel logic here if needed
    });
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.step-card, .dish-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});