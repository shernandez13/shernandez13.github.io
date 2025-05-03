document.addEventListener("DOMContentLoaded", function () {
  const apiEndpoint = "https://api.sunrisesunset.io/json";
  const locationSelect = document.getElementById("locationSelect");
  const currentLocationBtn = document.getElementById("currentLocationBtn");
  const todayData = document.getElementById("todayData");
  const tomorrowData = document.getElementById("tomorrowData");

  function showLoading() {
    todayData.innerHTML = '<p class="placeholder">Loading...</p>';
    tomorrowData.innerHTML = '<p class="placeholder">Loading...</p>';
  }

  function displayResults(data, element) {
    element.innerHTML = `
      <div>🌅 Sunrise: ${data.sunrise}</div>
      <div>🌇 Sunset: ${data.sunset}</div>
      <div>🌤️ Dawn: ${data.dawn}</div>
      <div>🌃 Dusk: ${data.dusk}</div>
      <div>🕒 Day Length: ${data.day_length}</div>
      <div>☀️ Solar Noon: ${data.solar_noon}</div>
      <div>🌍 Time Zone: ${data.timezone}</div>
    `;
  }

  async function fetchData(lat, lng, date) {
    const res = await fetch(`${apiEndpoint}?lat=${lat}&lng=${lng}&date=${date}`);
    const data = await res.json();
    if (!res.ok || data.status !== 'OK') throw new Error('API Error');
    return data.results;
  }

  async function loadData(lat, lng) {
    showLoading();
    try {
      const todayResults = await fetchData(lat, lng, 'today');
      const tomorrowResults = await fetchData(lat, lng, 'tomorrow');
      displayResults(todayResults, todayData);
      displayResults(tomorrowResults, tomorrowData);
    } catch (err) {
      todayData.innerHTML = `<p class="placeholder">Error loading data</p>`;
      tomorrowData.innerHTML = `<p class="placeholder">Error loading data</p>`;
      console.error(err);
    }
  }

  locationSelect.addEventListener("change", () => {
    const selected = locationSelect.value;
    if (!selected) return;
    const { lat, lng } = JSON.parse(selected);
    loadData(lat, lng);
  });

  currentLocationBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => loadData(pos.coords.latitude, pos.coords.longitude),
      err => alert("Geolocation error: " + err.message)
    );
  });
});
