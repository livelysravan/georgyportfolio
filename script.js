// Initialize particles.js with a jelly ball effect
particlesJS('particles-js', {
    particles: {
        number: {
            value: 104, // Increase by 30%
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#c0c0c0', '#a0a0a0', '#808080'] // Grey colors
        },
        shape: {
            type: 'circle', // Use circles for jelly balls
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.6,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 8, // Larger size
            anim: {
                enable: true,
                speed: 15,
                size_min: 5,
                sync: false
            }
        },
        line_linked: {
            enable: false // No lines between particles
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce', // Bounce effect
            bounce: true
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 250,
                size: 10,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Initialize Vanilla Tilt for card hover effects
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero section
document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#hero');
    parallax.style.transform = 'translateY(' + (scrolled * 0.5) + '
