document.getElementById("getDataBtn").addEventListener("click", () => {
  const coords = document.getElementById("citySelect").value;
  if (!coords) return;

  const [lat, lng] = coords.split(",");
  fetchData(lat, lng);
});

// fetchData fetches today's and tomorrow's sunrise/sunset data
async function fetchData(lat, lng) {
  const endpointToday = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=today`;
  const endpointTomorrow = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=tomorrow`;

  try {
    const todayRes = await fetch(endpointToday);
    const todayData = await todayRes.json();

    const tomorrowRes = await fetch(endpointTomorrow);
    const tomorrowData = await tomorrowRes.json();

    document.getElementById("welcome").style.display = "none";

    // Display location label
    document.getElementById("todayLocation").textContent = `Lat: ${lat}, Lng: ${lng}`;
    document.getElementById("tomorrowLocation").textContent = `Lat: ${lat}, Lng: ${lng}`;

    displayResults(todayData.results, "todayCards", lat, lng);
    displayResults(tomorrowData.results, "tomorrowCards", lat, lng);

  } catch (err) {
    console.error("Error fetching API data:", err);
    alert("Error fetching data. Please try again later.");
  }
}

// displayResults fills the cards with API data
function displayResults(data, containerId, lat, lng) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear previous

  const items = [
    { label: "Sunrise 🌅", value: data.sunrise },
    { label: "Sunset 🌇", value: data.sunset },
    { label: "Dawn 🌤️", value: data.dawn || "N/A" },
    { label: "Dusk 🌘", value: data.dusk || "N/A" },
    { label: "Solar Noon 🕛", value: data.solar_noon || "N/A" },
    { label: "Day Length 🕰️", value: data.day_length || "N/A" },
    { label: "Time Zone 🕑", value: data.timezone || "N/A" }
  ];

  // Create cards for each item
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<strong>${item.label}</strong><br>${item.value}`;
    container.appendChild(card);
  });

  // Add map card
  const mapCard = document.createElement("div");
  mapCard.className = "card";
  mapCard.innerHTML = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=10&size=200x150&key=YOUR_API_KEY" alt="Map" class="map-img">`;
  container.appendChild(mapCard);

  // Add lat/lng info card
  const infoCard = document.createElement("div");
  infoCard.className = "card black";
  infoCard.innerHTML = `<strong>Coordinates</strong><br>Lat: ${lat}<br>Lng: ${lng}<br>Time Zone: ${data.timezone || "N/A"}`;
  container.appendChild(infoCard);
}

// Geolocation button fetches user location
document.getElementById("geoBtn").addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      fetchData(lat, lng);
    },
    (error) => {
      console.error("Geolocation error:", error);
      alert("Unable to retrieve your location.");
    }
  );
});


  