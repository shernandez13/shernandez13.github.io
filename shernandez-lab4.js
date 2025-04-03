// Stephanie Hernandez
// ITMD 541-02 Graduate Student

(function() {
    function updateHero() {
        // 1. Change the main headline
        const mainHeadline = document.querySelector('#hero h1');
        if (mainHeadline) {
          mainHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
        }
    
    // 2. Change the subheadline with bold and italic emphasis
    const subHeadline = document.querySelector('#hero p');
    if (subHeadline) {
      subHeadline.innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive</em></strong> and <strong><em>excel</em></strong>.";
    }

    // 3. Change the background image of the hero section
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
      heroSection.style.backgroundSize = "cover";
      heroSection.style.backgroundPosition = "center";
    }

    // 4. Remove the "Get Started" button
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      if (link.textContent.trim() === "Get Started") {
        link.remove();
      }
    });
  }

  function updateNavBarColor() {
    //change navbar
    const nav = document.querySelector('nav'); // fixed to properly target the navbar
    const footer = document.querySelector('footer');
    if (nav && footer) {
      const footerBg = getComputedStyle(footer).backgroundColor;
      nav.style.backgroundColor = footerBg;
    }
  }

  function updateSectionHeadings() {
    // 6. Center-align section headings in Services, Solutions, and Contact sections
    const headings = document.querySelectorAll('section h2');
    headings.forEach(heading => {
      const text = heading.textContent.trim();
      if (["Services", "Solutions", "Contact"].includes(text)) {
        heading.style.textAlign = "center";
      }
    });
  }

  function updateServiceIcons() {
    // 7. Change the icon colors in the services section to light green (#47C714)
    const icons = document.querySelectorAll('.services .material-symbols-outlined');
    icons.forEach(icon => icon.style.color = '#47C714');
  }

  function updateDigitalMarketingIcon() {
    // 8. Change the Digital Marketing icon to the "ads_click" material icon
    const icons = document.querySelectorAll('.services .material-symbols-outlined');
    icons.forEach(icon => {
      if (icon.parentElement.textContent.toLowerCase().includes('digital marketing')) {
        icon.textContent = 'ads_click';
      }
    });
  }

  function updateSolutionsLayout() {
    // 9. Change layout in Specialized Marketing Solutions to 4 tiles across at wider screen sizes
    const container = document.querySelector('div[data-section="product_cards"]');
    if (container) {
      container.classList.remove('grid-cols-1', 'md:grid-cols-2');
      container.style.display = 'grid';
      container.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }
  }

  function updateMusiciansImage() {
    // 10. Update the Musicians tile image to a new image
    const images = document.querySelectorAll('div[data-section="product_cards"] img');
    images.forEach(img => {
      if (img.alt.trim().toLowerCase() === "musicians") {
        img.src = "https://picsum.photos/id/453/400/300";
      }
    });
  }


  // 11–12. Handle form submission and validation
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault(); // prevent broken submission

      const nameInput = document.querySelector("#name");
      const emailInput = document.querySelector("#email");

      const name = nameInput?.value.trim();
      const email = emailInput?.value.trim();

      if (name && email) { 
        alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
      } else {
        alert("Please provide a name and email.");
      }
    });
  }

})();