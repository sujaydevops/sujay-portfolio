// ==========================================
// SUJAY GUPTA — PORTFOLIO INTERACTIONS
// ==========================================


// Mobile navigation
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Scroll reveal
const revealElements = document.querySelectorAll(
    ".section-header, .project, .card, .stack-grid, .contact-description, .contact-links"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// Navigation appearance on scroll
const navigation = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navigation.style.opacity = "0.92";
    } else {
        navigation.style.opacity = "1";
    }

});


// Dynamic copyright year
const footerYear = document.querySelector("footer p:last-child");

if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()}`;
}


// Small title interaction
const originalTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Come back — Sujay Gupta";
});

window.addEventListener("focus", () => {
    document.title = originalTitle;
});
