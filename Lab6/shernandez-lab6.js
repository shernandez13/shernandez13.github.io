document.getElementById("getDataBtn").addEventListener("click", () => {
    const coords = document.getElementById("citySelect").value;
    if (!coords) return;
  
    const [lat, lng] = coords.split(",");
    fetchData(lat, lng); // you’ll define this function later
});

//Helps set up fetchData() 
async function fetchData(lat, lng) {
    const endpoint = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=today`;
  
    try {
      // Fetch today's data
      const todayRes = await fetch(endpoint);
      const todayData = await todayRes.json();
  
      // Fetch tomorrow's data
      const tomorrowRes = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=tomorrow`);
      const tomorrowData = await tomorrowRes.json();
  
      // Display both days
      displayResults(todayData.results, "todayCards");
      displayResults(tomorrowData.results, "tomorrowCards");
  
    } catch (err) {
      console.error("API error:", err);
      alert("Something went wrong while fetching data.");
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
  

  