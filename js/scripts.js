document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to sections
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary')) {
      e.preventDefault();
      const targetId = e.target.getAttribute('data-target');
      if (targetId) {
        document.querySelector(`#${targetId}`).scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // Fade-in effect
  const features = document.querySelectorAll('.feature');
  const observerOptions = { threshold: 0.5 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  features.forEach((feature) => observer.observe(feature));

  // Dynamic year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});
