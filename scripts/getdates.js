const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear} | Michael Flores`;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;