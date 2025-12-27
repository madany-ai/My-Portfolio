/**
 * Mohamed Madany Portfolio - JavaScript
 * Vanilla JS implementation for smooth interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all modules
  initThemeToggle();
  initNavigation();
  initScrollAnimations();
  initSmoothScroll();
  initContactForm();
});

/**
 * Theme Toggle (Dark/Light Mode)
 */
function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Check for saved theme or use system preference (default to dark)
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme || (prefersDark ? "dark" : "dark"); // Default dark

  document.documentElement.setAttribute("data-theme", initialTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Add transition class for smooth theme change
    document.body.style.transition =
      "background-color 0.3s ease, color 0.3s ease";
  });
}

/**
 * Navigation (Mobile Menu & Scroll Effects)
 */
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = navLinks.querySelectorAll("a");

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.style.overflow = navLinks.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close mobile menu on link click
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Navbar scroll effect
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class when scrolled
    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });

  // Active nav link based on scroll position
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(
        `.nav-links a[href="#${sectionId}"]`
      );

      if (
        navLink &&
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        navItems.forEach((item) => item.classList.remove("active"));
        navLink.classList.add("active");
      }
    });
  });
}

/**
 * Scroll Animations (Intersection Observer)
 */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Optional: unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach((element) => {
    observer.observe(element);
  });

  // Staggered animation for grid items
  const staggerContainers = document.querySelectorAll(
    ".skills-grid, .projects-grid, .services-grid"
  );

  staggerContainers.forEach((container) => {
    const items = container.querySelectorAll(".fade-in");
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (href === "#") return;

      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

/**
 * Contact Form Handling
 */
function initContactForm() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Simple validation
    const requiredFields = ["name", "email", "subject", "message"];
    let isValid = true;

    requiredFields.forEach((field) => {
      const input = form.querySelector(`[name="${field}"]`);
      if (!data[field] || data[field].trim() === "") {
        isValid = false;
        input.style.borderColor = "#FF0628";
      } else {
        input.style.borderColor = "";
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = form.querySelector('[name="email"]');

    if (!emailRegex.test(data.email)) {
      isValid = false;
      emailInput.style.borderColor = "#FF0628";
    }

    if (isValid) {
      // Show success message
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "تم الإرسال بنجاح! ✓";
      submitBtn.style.background = "#27c93f";
      submitBtn.disabled = true;

      // Reset form
      setTimeout(() => {
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.style.background = "";
        submitBtn.disabled = false;
      }, 3000);

      // In production, you would send the data to a server here
      console.log("Form submitted:", data);
    }
  });

  // Clear error styling on input
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.style.borderColor = "";
    });
  });
}

/**
 * Typing Animation for Hero (Optional Enhancement)
 */
function initTypingAnimation() {
  const codeContent = document.querySelector(".code-content code");
  if (!codeContent) return;

  const originalHTML = codeContent.innerHTML;
  codeContent.innerHTML = "";

  let i = 0;
  const speed = 30;

  function typeWriter() {
    if (i < originalHTML.length) {
      codeContent.innerHTML = originalHTML.substring(0, i + 1);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // Start typing when element is in view
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(typeWriter, 500);
      observer.disconnect();
    }
  });

  observer.observe(codeContent);
}

/**
 * Parallax Effect for Hero Glow
 */
window.addEventListener("mousemove", (e) => {
  const heroGlow = document.querySelector(".hero-glow");
  if (!heroGlow) return;

  const x = (e.clientX / window.innerWidth) * 30 - 15;
  const y = (e.clientY / window.innerHeight) * 30 - 15;

  heroGlow.style.transform = `translate(${x}px, ${y}px)`;
});

/**
 * Preloader (Optional)
 */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Trigger initial animations
  setTimeout(() => {
    document.querySelectorAll(".hero .fade-in").forEach((el) => {
      el.classList.add("visible");
    });
  }, 100);
});
