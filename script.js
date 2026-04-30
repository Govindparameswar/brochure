/* ===================================================
   Merry Land Ayurvedic Centre – Interactive Landing Page JS
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------------------------------------------
  // ----------------------------------------------------------------
  // 2. NAVBAR – scroll effect & hamburger
  // ----------------------------------------------------------------
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  function handleNavScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  }

  window.addEventListener("scroll", handleNavScroll, { passive: true });
  handleNavScroll();

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
    document.body.style.overflow = navLinks.classList.contains("open")
      ? "hidden"
      : "";
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  // ----------------------------------------------------------------
  // 3. SMOOTH SCROLL
  // ----------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ----------------------------------------------------------------
  // 4. FADE-IN / SCALE-IN OBSERVER
  // ----------------------------------------------------------------
  const animatedElements = document.querySelectorAll(
    ".fade-in, .fade-in-left, .fade-in-right, .scale-in",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  animatedElements.forEach((el) => observer.observe(el));

  // ----------------------------------------------------------------
  // 5. HERO FLOATING LEAVES
  // ----------------------------------------------------------------
  const particlesContainer = document.getElementById("hero-particles");

  function createLeaf() {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");
    leaf.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>`;

    // Random positioning
    leaf.style.left = Math.random() * 100 + "%";
    leaf.style.animationDuration = 12 + Math.random() * 18 + "s";
    leaf.style.animationDelay = Math.random() * 10 + "s";
    leaf.style.width = 14 + Math.random() * 16 + "px";
    leaf.style.height = leaf.style.width;

    particlesContainer.appendChild(leaf);

    // Remove after animation
    setTimeout(() => {
      if (leaf.parentNode) leaf.parentNode.removeChild(leaf);
    }, 30000);
  }

  // Create initial leaves
  for (let i = 0; i < 12; i++) {
    setTimeout(createLeaf, i * 800);
  }

  // Continuously create new leaves
  setInterval(createLeaf, 3000);

  // ----------------------------------------------------------------
  // 6. IMBALANCE CARDS – Removed Click Interaction
  // ----------------------------------------------------------------
  const imbalanceCards = document.querySelectorAll(".imbalance__card");

  // ----------------------------------------------------------------
  // 7. TREATMENT CARDS – Expand/Collapse
  // ----------------------------------------------------------------
  const treatmentCards = document.querySelectorAll(".treatment__card");

  treatmentCards.forEach((card) => {
    const toggle = card.querySelector(".treatment__toggle");

    const handleToggle = (e) => {
      // Ignore clicks inside the details section so users can select text
      if (e.target.closest(".treatment__details")) {
        return;
      }

      const isExpanded = card.classList.contains("expanded");

      // Close all cards
      treatmentCards.forEach((other) => {
        other.classList.remove("expanded");
        const otherToggle = other.querySelector(".treatment__toggle");
        if (otherToggle) {
          otherToggle.setAttribute("aria-expanded", "false");
        }
      });

      // If the clicked card was not expanded, open it
      if (!isExpanded) {
        card.classList.add("expanded");
        if (toggle) {
          toggle.setAttribute("aria-expanded", "true");
        }
      }
    };

    // Toggle on button click
    if (toggle) {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        handleToggle(e);
      });
    }

    // Toggle on card click
    card.addEventListener("click", (e) => {
      handleToggle(e);
    });
  });

  // ----------------------------------------------------------------
  // 8. TRANSFORMATION CARDS – Hover counter animation
  // ----------------------------------------------------------------
  const transformCards = document.querySelectorAll(".transform__card");

  const transformObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          transformObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  transformCards.forEach((card) => transformObserver.observe(card));

  // ----------------------------------------------------------------
  // 9. TIMELINE DOT ANIMATION
  // ----------------------------------------------------------------
  const timelineItems = document.querySelectorAll(".timeline__item");

  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 },
  );

  timelineItems.forEach((item) => timelineObserver.observe(item));

  // ----------------------------------------------------------------
  // 10. YEARS COUNTER ANIMATION
  // ----------------------------------------------------------------
  const yearsBadge = document.querySelector(".about__image-badge .number");

  if (yearsBadge) {
    const targetNumber = parseInt(yearsBadge.textContent);
    let hasAnimated = false;

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateCounter(yearsBadge, 0, targetNumber, 1500);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    counterObserver.observe(yearsBadge);
  }

  function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const suffix = element.textContent.replace(/[0-9]/g, "");

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.floor(start + (end - start) * eased);

      element.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ----------------------------------------------------------------
  // 11. PARALLAX EFFECT ON HERO
  // ----------------------------------------------------------------
  const heroBg = document.querySelector(".hero__bg img");

  function handleParallax() {
    if (window.scrollY < window.innerHeight) {
      const offset = window.scrollY * 0.35;
      heroBg.style.transform = `translateY(${offset}px) scale(1.1)`;
    }
  }

  window.addEventListener("scroll", handleParallax, { passive: true });

  // ----------------------------------------------------------------
  // 12. KEYBOARD ACCESSIBILITY
  // ----------------------------------------------------------------
  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      hamburger.click();
    }
  });
});
