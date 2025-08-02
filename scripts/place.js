const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear} | Michael Flores`;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

const temperature = 10; // °C
const windSpeed = 5;    // km/h

function calculateWindChill(temp, speed) {
  return (speed > 4.8 && temp <= 10)
    ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1)
    : "N/A";
}

window.addEventListener("DOMContentLoaded", () => {
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("chill").textContent = `${windChill} °C`;
});
