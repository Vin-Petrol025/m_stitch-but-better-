
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const images = document.images;
  let loadedCount = 0;
  const totalImages = images.length;

  if (totalImages === 0) {
    hideLoader();
  }

  function imageLoaded() {
    loadedCount++;
    if (loadedCount === totalImages) {
      hideLoader();
    }
  }

  function hideLoader() {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }

  for (let i = 0; i < totalImages; i++) {
    if (images[i].complete) {
      imageLoaded();
    } else {
      images[i].addEventListener("load", imageLoaded);
      images[i].addEventListener("error", imageLoaded);
    }
  }
});




const productList = document.getElementById("product-list");
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = product.inStock === 0
    ? `
      <div class="img-wrapper out-of-stock">
        <img src="${product.image}" alt="${product.name}" loading="lazy" width="300" height="300" loading="lazy" />
        <span class="sold-out-overlay">SOLD OUT</span>
      </div>
      <h3>${product.name}</h3>
      <p class="product-description">${product.shortDescription}</p>
      <p>${product.price}</p>
    `
    : `
      <a href="product.html?id=${product.id}">
        <div class="img-wrapper">
          <img loading="lazy" src="${product.image}" alt="${product.name}" width="300" height="300" loading="lazy" />
        </div>
        <h3>${product.name}</h3>
        <p class="product-description">${product.shortDescription}</p>
        <p>${product.price}</p>
      </a>
    `;
  productList.appendChild(card);
});