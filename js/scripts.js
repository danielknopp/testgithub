async function loadHTML(targetId, filePath) {
  try {
      const response = await fetch(filePath);
      if (response.ok) {
          const content = await response.text();
          document.getElementById(targetId).innerHTML = content;

          // If loading the navbar, attach navigation logic
          if (targetId === 'navbar') {
              setupNavigation();
          }
      } else {
          console.error(`Failed to load ${filePath}: ${response.status}`);
      }
  } catch (error) {
      console.error(`Error loading ${filePath}:`, error);
  }
}

// Function to initialize navigation
function setupNavigation() {
  // Define the sections to dynamically load
  const sections = {
      features: 'partials/features.html',
      app_services: 'partials/app_services.html'
  };

  // Add event listeners to navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();

          // Get the section to load
          const sectionKey = link.getAttribute('data-section');
          if (sectionKey && sections[sectionKey]) {
              // Dynamically load the content
              loadHTML('content', sections[sectionKey]);

              // Update active navigation link
              document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
              link.classList.add('active');
          }
      });
  });

  // Load the default section (features)
  loadHTML('content', sections.features);
}

// Initialize the page
function initializePage() {
  loadHTML('navbar', 'partials/navbar.html'); // Load Navbar
  loadHTML('header', 'partials/header.html'); // Load Header
  loadHTML('footer', 'partials/footer.html'); // Load Footer
}

// Call the initializer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);
