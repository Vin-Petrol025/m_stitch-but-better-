const products = [
  {
    id: 1,
    name: "YSL Black Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00169.JPG",
    images: [
      "content/bags/DSC00169.JPG",
      "content/bags/DSC00170.JPG",
      "content/bags/DSC00171.JPG",
    ],
    shortDescription: "Black YSL Bag, deep textured, perfect for daily and occasional use.",
    description: "Black Colored YSL Bag, Deep textured surface, Perfect for daily and occasional use. Spacious interior, premium hardware, and a timeless design make it suitable for both casual and formal outings.",
    inStock: 1
  },
  {
    id: 2,
    name: "Light Pastel Blue YSL bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00163.JPG",
    images: [
      "content/bags/DSC00167.JPG",
      "content/bags/DSC00168.JPG",
      "content/bags/DSC00165.JPG",
    ],
    shortDescription: "Pastel Blue YSL Bag, textured, stylish and versatile.",
    description: "Light Pastel Blue YSL Bag, Deep textured surface, Perfect for daily and occasional use. Features a soft pastel tone, durable material, and elegant finish for any occasion.",
    inStock: 1
  },
  {
    id: 3,
    name: "Marroon YSL Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00176.JPG",
    images: [
      "content/bags/DSC00176.JPG",
      "content/bags/DSC00177.JPG",
      "content/bags/DSC00178.JPG",
    ],
    shortDescription: "Maroon YSL Bag, textured, ideal for all events.",
    description: "Maroon Colored YSL Bag, Deep textured surface, Perfect for daily and occasional use. The rich maroon color adds a touch of luxury to your wardrobe.",
    inStock: 1
  },
  {
    id: 4,
    name: "C K Red Bag",
    price: "PKR 2000/-",
    image: "content/bags/DSC00180.JPG",
    images: [
      "content/bags/DSC00179.JPG",
      "content/bags/DSC00181.JPG",
      "content/bags/DSC00182.JPG",
    ],
    shortDescription: "CK Red Bag, vibrant and trendy for summer.",
    description: "Stay cool with this summer skirt. The CK Red Bag is crafted for those who love bold colors and practical design. Spacious, lightweight, and easy to carry.",
    inStock: 1
  },
  {
    id: 5,
    name: "C K Black Bag",
    price: "PKR 2000/-",
    image: "content/bags/DSC00172.JPG",
    images: [
      "content/bags/DSC00172.JPG",
      "content/bags/DSC00174.JPG",
      "content/bags/DSC00175.JPG",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, classic fit for business or events.",
    description: "Perfect for business or formal events. This blazer features a tailored fit, premium fabric, and a sophisticated look for any formal occasion.",
    inStock: 1
  },
  {
    id: 6,
    name: "C K Mustard Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00185.JPG",
    images: [
      "content/bags/DSC00185.JPG",
      "content/bags/DSC00186.JPG",
      "content/bags/DSC00187.JPG",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, elegant and comfortable.",
    description: "Perfect for business or formal events. Designed for comfort and style, this blazer is a wardrobe essential for professionals.",
    inStock: 1
  },
  {
    id: 7,
    name: "C K Mustard Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00185.JPG",
    images: [
      "content/bags/DSC00185.JPG",
      "content/bags/DSC00186.JPG",
      "content/bags/DSC00187.JPG",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, elegant and comfortable.",
    description: "Perfect for business or formal events. Designed for comfort and style, this blazer is a wardrobe essential for professionals.",
    inStock: 1
  },
  {
    id: 8,
    name: "C K Mustard Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00185.JPG",
    images: [
      "content/bags/DSC00185.JPG",
      "content/bags/DSC00186.JPG",
      "content/bags/DSC00187.JPG",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, elegant and comfortable.",
    description: "Perfect for business or formal events. Designed for comfort and style, this blazer is a wardrobe essential for professionals.",
    inStock: 1
  },
  {
    id: 9,
    name: "C K Mustard Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00185.JPG",
    images: [
      "content/bags/DSC00185.JPG",
      "content/bags/DSC00186.JPG",
      "content/bags/DSC00187.JPG",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, elegant and comfortable.",
    description: "Perfect for business or formal events. Designed for comfort and style, this blazer is a wardrobe essential for professionals.",
    inStock: 1
  },
  {
    id: 10,
    name: "C K Mustard Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00185.JPG",
    images: [
      "content/bags/DSC00185.JPG",
      "content/bags/DSC00186.JPG",
      "content/bags/DSC00187.JPG",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, elegant and comfortable.",
    description: "Perfect for business or formal events. Designed for comfort and style, this blazer is a wardrobe essential for professionals.",
    inStock: 1
  },
  {
    id: 11,
    name: "C K Mustard Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00185.JPG",
    images: [
      "content/bags/DSC00185.JPG",
      "content/bags/DSC00186.JPG",
      "content/bags/DSC00187.JPG",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, elegant and comfortable.",
    description: "Perfect for business or formal events. Designed for comfort and style, this blazer is a wardrobe essential for professionals.",
    inStock: 1
  },
  {
    id: 12,
    name: "C K Mustard Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00185.JPG",
    images: [
      "content/bags/DSC00185.JPG",
      "content/bags/DSC00186.JPG",
      "content/bags/DSC00187.JPG",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, elegant and comfortable.",
    description: "Perfect for business or formal events. Designed for comfort and style, this blazer is a wardrobe essential for professionals.",
    inStock: 1
  },
  {
    id: 13,
    name: "C K Mustard Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00185.JPG",
    images: [
      "content/bags/DSC00185.JPG",
      "content/bags/DSC00186.JPG",
      "content/bags/DSC00187.JPG",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, elegant and comfortable.",
    description: "Perfect for business or formal events. Designed for comfort and style, this blazer is a wardrobe essential for professionals.",
    inStock: 1
  },
  {
    id: 14,
    name: "C K Mustard Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00185.JPG",
    images: [
      "content/bags/DSC00185.JPG",
      "content/bags/DSC00186.JPG",
      "content/bags/DSC00187.JPG",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, elegant and comfortable.",
    description: "Perfect for business or formal events. Designed for comfort and style, this blazer is a wardrobe essential for professionals.",
    inStock: 1
  },
  {
    id: 15,
    name: "C K Mustard Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00185.JPG",
    images: [
      "content/bags/DSC00185.JPG",
      "content/bags/DSC00186.JPG",
      "content/bags/DSC00187.JPG",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, elegant and comfortable.",
    description: "Perfect for business or formal events. Designed for comfort and style, this blazer is a wardrobe essential for professionals.",
    inStock: 1
  }
];