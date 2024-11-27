document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('.btn-primary').forEach((button) => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        if (targetId) {
          document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Fade-in effect
    const features = document.querySelectorAll('.feature');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.5 }
    );
  
    features.forEach((feature) => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateY(20px)';
      observer.observe(feature);
    });
  });
  