const productList = document.getElementById("product-list");
products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <a href="product.html?id=${product.id}">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <p>${product.price}</p>
    </a>
  `;
  productList.appendChild(card);
});