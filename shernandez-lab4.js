// Stephanie Hernandez
// ITMD 541-02 Graduate Student

(function() {
    // 1. Change the main headline text in the hero section
    const mainHeadline = document.querySelector("header h1");
    if (mainHeadline) {
      mainHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
    }
    // 2. Change the line of text below the hero headline
    const subHeadline = document.querySelector("header p");
    if (subHeadline) {
      subHeadline.innerHTML = `Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive and excel.</em></strong>`;
    }
    // 3. Change the background image in the hero section
    const heroSection = document.querySelector("header");
    if (heroSection) {
      heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
      heroSection.style.backgroundSize = "cover";
      heroSection.style.backgroundPosition = "center";
    }
    // 4. Change the navbar background color to match the footer's background
    const footer = document.querySelector("footer");
    const nav = document.querySelector("nav");
    if (footer && nav) {
      const footerBgColor = getComputedStyle(footer).backgroundColor;
      nav.style.backgroundColor = footerBgColor;
    }
    // 5. Remove the "Get Started" CTA from the hero section
    const ctaButton = document.querySelector("header a.btn");
    if (ctaButton) {
      ctaButton.remove();
    }
    // 6. Center align the heading text in Services, Solutions, and Contact sections
    const sectionHeadings = document.querySelectorAll("section h2");
    sectionHeadings.forEach(heading => {
      heading.style.textAlign = "center";
    });
    // 7. Change icon color in the services section to #47C714
    const serviceIcons = document.querySelectorAll(".material-symbols-outlined");
    serviceIcons.forEach(icon => {
      icon.style.color = "#47C714";
    });  

    // 8. Change the Digital Marketing icon to "ads_click"
    const digitalMarketingIcon = document.querySelector(".services .material-symbols-outlined");
    if (digitalMarketingIcon) {
      digitalMarketingIcon.textContent = "ads_click";
    }

  // 9. Update tile layout to 4 columns across at ≥1024px
  const styleTag = document.createElement("style");
  styleTag.textContent = `
    @media screen and (min-width: 1024px) {
      .solutions .grid {
        grid-template-columns: repeat(4, 1fr) !important;
      }
    }
  `;
  document.head.appendChild(styleTag);

  // 10. Change the Musicians image in the Specialized Marketing Solutions section
  const musicianImg = Array.from(document.querySelectorAll(".solutions img"))
    .find(img => img.alt.toLowerCase().includes("musicians"));
  if (musicianImg) {
    musicianImg.src = "https://picsum.photos/id/453/400/300";
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