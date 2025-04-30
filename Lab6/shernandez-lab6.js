document.getElementById("getDataBtn").addEventListener("click", () => {
    const coords = document.getElementById("citySelect").value;
    if (!coords) return;
  
    const [lat, lng] = coords.split(",");
    fetchData(lat, lng); // you’ll define this function later
});
  