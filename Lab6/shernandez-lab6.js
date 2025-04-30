document.getElementById("getDataBtn").addEventListener("click", () => {
    const coords = document.getElementById("citySelect").value;
    if (!coords) return;
  
    const [lat, lng] = coords.split(",");
    fetchData(lat, lng); // you’ll define this function later
});

//Helps set up fetchData() 
async function fetchData(lat, lng) {
    const endpointToday = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=today`;
    const endpointTomorrow = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=tomorrow`;
  
    try {
      const todayRes = await fetch(endpointToday);
      const todayData = await todayRes.json();
  
      const tomorrowRes = await fetch(endpointTomorrow);
      const tomorrowData = await tomorrowRes.json();
  
      displayResults(todayData.results, "todayCards");
      displayResults(tomorrowData.results, "tomorrowCards");
  
    } catch (err) {
      console.error("Error fetching API data:", err);
      alert("Error fetching data. Please try again later.");
    }
}
  
//To display resulys
function displayResults(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // clear previous results
  
    const items = [
      { label: "Sunrise", value: data.sunrise },
      { label: "Dawn", value: data.dawn },
      { label: "Dusk", value: data.dusk },
      { label: "Solar Noon", value: data.solar_noon },
      { label: "Day Length", value: data.day_length },
      { label: "Sunset", value: data.sunset },
      { label: "Time Zone", value: data.timezone }
    ];
  
    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<strong>${item.label}</strong><br>${item.value}`;
      container.appendChild(card);
    });
}

//Geolocation Button Setup
document.getElementById("geoBtn").addEventListener("click", () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        fetchData(lat, lng); // reuse the same function as city lookup
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Unable to retrieve your location.");
      }
    );
});
  

  