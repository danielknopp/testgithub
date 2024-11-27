document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for buttons
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary')) {
      const target = document.querySelector(e.target.getAttribute('data-target'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // Add fade-in effect (optional)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });

  document.querySelectorAll('.feature-card').forEach((card) => observer.observe(card));
});
