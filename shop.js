const productList = document.getElementById("product-list");
products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  if (product.inStock === 0) {
    card.innerHTML = `
      <div class="img-wrapper out-of-stock">
        <img src="${product.image}" alt="${product.name}" />
        <span class="sold-out-overlay">SOLD OUT</span>
      </div>
      <h3>${product.name}</h3>
      <p class="product-description">${product.shortDescription}</p>
      <p>${product.price}</p>
    `;
  } else {
    card.innerHTML = `
      <a href="product.html?id=${product.id}">
        <div class="img-wrapper">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <h3>${product.name}</h3>
        <p class="product-description">${product.shortDescription}</p>
        <p>${product.price}</p>
      </a>
    `;
  }

  productList.appendChild(card);
});