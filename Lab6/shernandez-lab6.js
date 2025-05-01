document.addEventListener("DOMContentLoaded", function () {
  const apiEndpoint = "https://sunrisesunset.io/api/";
  
  const locations = [
    { name: "Chicago, IL", lat: 41.8781, lng: -87.6298 },
    { name: "New York, NY", lat: 40.7128, lng: -74.0060 },
    { name: "Los Angeles, CA", lat: 34.0522, lng: -118.2437 },
    { name: "Miami, FL", lat: 25.7617, lng: -80.1918 },
    { name: "Seattle, WA", lat: 47.6062, lng: -122.3321 },
    { name: "Denver, CO", lat: 39.7392, lng: -104.9903 },
    { name: "Phoenix, AZ", lat: 33.4484, lng: -112.0740 },
    { name: "Boston, MA", lat: 42.3601, lng: -71.0589 },
    { name: "Dallas, TX", lat: 32.7767, lng: -96.7970 },
    { name: "Honolulu, HI", lat: 21.3069, lng: -157.8583 },
  ];

  const locationSelect = document.getElementById("locationSelect");
  const currentLocationBtn = document.getElementById("currentLocationBtn");
  const todayData = document.getElementById("todayData");
  const tomorrowData = document.getElementById("tomorrowData");

  // Populate dropdown
  locations.forEach(loc => {
    const option = document.createElement("option");
    option.value = JSON.stringify({ lat: loc.lat, lng: loc.lng });
    option.textContent = loc.name;
    locationSelect.appendChild(option);
  });

  function fetchData(lat, lng) {
    const url = `${apiEndpoint}?lat=${lat}&lng=${lng}`;

    todayData.innerHTML = `<p class="placeholder">Loading...</p>`;
    tomorrowData.innerHTML = `<p class="placeholder">Loading...</p>`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data.results) throw new Error("Invalid API response");
        updateDashboard(data.results);
      })
      .catch(error => {
        todayData.innerHTML = `<p class="placeholder">Error: ${error.message}</p>`;
        tomorrowData.innerHTML = "";
      });
  }

  function updateDashboard(results) {
    todayData.innerHTML = `
      <div>🌅 Sunrise: ${results.sunrise}</div>
      <div>🌇 Sunset: ${results.sunset}</div>
      <div>🌤️ Dawn: ${results.dawn}</div>
      <div>🌃 Dusk: ${results.dusk}</div>
      <div>🕒 Day Length: ${results.day_length}</div>
      <div>☀️ Solar Noon: ${results.solar_noon}</div>
      <div>🌍 Time Zone: ${results.timezone}</div>
    `;
    tomorrowData.innerHTML = `
      <div>🌅 Sunrise: ${results.sunrise_tomorrow}</div>
      <div>🌇 Sunset: ${results.sunset_tomorrow}</div>
      <div>🌤️ Dawn: ${results.dawn_tomorrow}</div>
      <div>🌃 Dusk: ${results.dusk_tomorrow}</div>
      <div>🕒 Day Length: ${results.day_length_tomorrow}</div>
      <div>☀️ Solar Noon: ${results.solar_noon_tomorrow}</div>
      <div>🌍 Time Zone: ${results.timezone}</div>
    `;
  }

  locationSelect.addEventListener("change", () => {
    const { lat, lng } = JSON.parse(locationSelect.value);
    fetchData(lat, lng);
  });

  currentLocationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => fetchData(pos.coords.latitude, pos.coords.longitude),
        err => alert("Geolocation error: " + err.message)
      );
    } else {
      alert("Geolocation not supported.");
    }
  });
});
