// Stephanie Hernandez
// ITMD 541-02 Graduate Student

(function() {
    // Change the main headline text in the hero section
    const mainHeadline = document.querySelector("header h1");
    if (mainHeadline) {
      mainHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
    }
  
    // Change the line of text below the hero headline
    const subHeadline = document.querySelector("header p");
    if (subHeadline) {
      subHeadline.innerHTML = `Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive and excel.</em></strong>`;
    }
  
    // Change the background image in the hero section
    const heroSection = document.querySelector("header");
    if (heroSection) {
      heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
      heroSection.style.backgroundSize = "cover";
      heroSection.style.backgroundPosition = "center";
    }
  })();