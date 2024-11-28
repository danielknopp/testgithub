document.addEventListener('DOMContentLoaded', () => {
  const loadHTML = async (id, path) => {
      try {
          const response = await fetch(path);
          const content = await response.text();
          document.getElementById(id).innerHTML = content;
      } catch (error) {
          console.error(`Error loading ${path}:`, error);
      }
  };

  // Load partials
  loadHTML('navbar', 'partials/navbar.html');
  loadHTML('header', 'partials/header.html');
  loadHTML('features', 'partials/features.html');
  loadHTML('app_services', 'partials/app_services.html');
  loadHTML('footer', 'partials/footer.html');

  // Handle navigation clicks
  document.body.addEventListener('click', (e) => {
      if (e.target.matches('.nav-link')) {
          e.preventDefault();

          // Hide all sections
          document.querySelectorAll('div[id]').forEach(section => {
              section.style.display = 'none';
          });

          // Show the clicked section
          const sectionId = e.target.getAttribute('data-section');
          if (sectionId) {
              document.getElementById(sectionId).style.display = 'block';
          }

          // Update active link
          document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
          e.target.classList.add('active');
      }
  });
});
