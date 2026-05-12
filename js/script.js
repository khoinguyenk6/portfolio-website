const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".site-header nav a");
const sections = document.querySelectorAll("section");
const cards = document.querySelectorAll(
    ".about-me, .about-skill, .project-card, .contact-section .container"
);

// Header đổi hiệu ứng khi scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// Active menu theo section
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Hiện card khi cuộn tới
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.2
    }
);

cards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});

// Hiệu ứng gõ chữ
const text = "Frontend Developer";
const typingText = document.querySelector(".hero-content > p:first-child");

let index = 0;

function typing() {
    if (!typingText) return;

    typingText.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(typing, 90);
    }
}

typing();