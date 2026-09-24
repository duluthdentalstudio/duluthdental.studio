document.addEventListener("DOMContentLoaded", function () {
  // Scroll-triggered fade-in animations
  const observerOptions = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

  // Contact form handler (static site — replace with Formspree/Netlify Forms for real submissions)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for reaching out to Duluth Dental Studio. We will contact you shortly!");
      form.reset();
    });
  }
});
