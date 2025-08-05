  const splashScreen = document.getElementById('splash-screen');
  const loadingProgress = document.querySelector('.loading-progress');

  // Simulate page loading
  setTimeout(() => {
      loadingProgress.style.width = '30%';
  }, 500);

  setTimeout(() => {
      loadingProgress.style.width = '70%';
  }, 1000);

  setTimeout(() => {
      loadingProgress.style.width = '100%';
  }, 1500);

  setTimeout(() => {
      splashScreen.classList.add('hidden');
  }, 2500);

  // Sidebar toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('sidebar');

  mobileMenuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      if (window.innerWidth < 768) {
          document.body.classList.toggle('sidebar-open');
      }
  });
  // Responsive adjustments
  window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
          sidebar.classList.remove('show');
          document.body.classList.remove('sidebar-open');
      }
  });

  // Video card hover effect
  const videoCards = document.querySelectorAll('.video-card');
  videoCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-5px)';
          card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
      });

      card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0)';
          card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
      });
  });



  // Content switching function
  function showContent(sectionId) {
      // Hide all content sections
      document.querySelectorAll('.content-section').forEach(section => {
          section.classList.remove('active');
      });

      // Show the requested section
      document.getElementById(sectionId).classList.add('active');

      // Update active state in sidebar
      document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
      });

      // Add active class to the clicked link
      const activeLink = document.querySelector(`.nav - link[onclick = "showContent('${sectionId}')"]`);
      if (activeLink) {
          activeLink.classList.add('active');
      }

      // Close sidebar on mobile after selection
      if (window.innerWidth < 768) {
          sidebar.classList.remove('show');
          document.body.classList.remove('sidebar-open');
      }
  }