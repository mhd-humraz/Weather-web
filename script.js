async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "c84d10a18e0667434bec778597da74c3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
  }
}
