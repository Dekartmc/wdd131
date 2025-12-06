const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");
    
    if (productSelect) {
        products.forEach(product => {
            let option = document.createElement("option");
            option.textContent = product.name;
            option.value = product.id;
            productSelect.appendChild(option);
        });
    }

    const reviewDisplay = document.querySelector(".review-count");
    
    if (reviewDisplay) {
        let numReviews = Number(window.localStorage.getItem("reviewCount-ls")) || 0;
        
        numReviews++;

        localStorage.setItem("reviewCount-ls", numReviews);

        reviewDisplay.textContent = numReviews;
    }

    const yearSpan = document.getElementById("currentYear");
    const lastModifiedSpan = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});