// Stephanie Hernandez
// ITMD 541-02 Graduate Student

(function() {
  // 1. Change the main headline text in the hero section
  document.querySelector('#hero h1').textContent = "Uplift Your Brand with Stellar Marketing";

  // 2. Change the line of text below the hero headline
  const subHeadline = document.querySelector("#hero p");
  if (subHeadline) {
    subHeadline.innerHTML = `Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive and excel.</em></strong>`;
  }

  // 3. Change the background image in the hero section
  const heroSection = document.querySelector("#hero");
  if (heroSection) {
    heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    heroSection.style.backgroundSize = "cover";
    heroSection.style.backgroundPosition = "center";
  }

  // 4. Change the navbar background color to match the footer's background
  const nav = document.querySelector("nav");
  const footer = document.querySelector("footer");
  if (nav && footer) {
    const footerBg = getComputedStyle(footer).backgroundColor;
    nav.style.backgroundColor = footerBg;
  }

  // 5. Remove the "Get Started" CTA from the hero section
  const ctaButton = document.querySelector("#hero a.btn");
  if (ctaButton) {
    ctaButton.remove();
  }

  // 6. Center align the heading text in Services, Solutions, and Contact sections
  const headings = document.querySelectorAll("section h2");
  headings.forEach(h2 => h2.style.textAlign = "center");

  // 7. Change icon color in the services section to #47C714
  const serviceIcons = document.querySelectorAll(".services .material-symbols-outlined");
  serviceIcons.forEach(icon => icon.style.color = "#47C714");

  // 8. Change the Digital Marketing icon to "ads_click"
  const digitalMarketingIcon = document.querySelector(".services .material-symbols-outlined");
  if (serviceIcons.length > 0) {
    serviceIcons[0].textContent = "ads_click"
  }

  // 9. Update tile layout to 4 columns across at ≥1024px
  const customStyle = document.createElement("style");
  customStyle.textContent = `
    @media screen and (min-width: 1024px) {
      .solutions .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 1rem;
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