const products = [
  {
    id: 1,
    name: "YSL Black Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00169.webp",
    images: [
      "content/bags/DSC00169.webp",
      "content/bags/DSC00170.webp",
      "content/bags/DSC00171.webp",
    ],
    shortDescription: "Black YSL Bag, deep textured, perfect for daily and occasional use.",
    description: "Black Colored YSL Bag, Deep textured surface, Perfect for daily and occasional use. Spacious interior, premium hardware, and a timeless design make it suitable for both casual and formal outings.",
    inStock: 1
  },
  {
    id: 2,
    name: "Light Pastel Blue YSL bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00163.webp",
    images: [
      "content/bags/DSC00167.webp",
      "content/bags/DSC00168.webp",
      "content/bags/DSC00165.webp",
    ],
    shortDescription: "Pastel Blue YSL Bag, textured, stylish and versatile.",
    description: "Light Pastel Blue YSL Bag, Deep textured surface, Perfect for daily and occasional use. Features a soft pastel tone, durable material, and elegant finish for any occasion.",
    inStock: 1
  },
  {
    id: 3,
    name: "Marroon YSL Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00176.webp",
    images: [
      "content/bags/DSC00176.webp",
      "content/bags/DSC00177.webp",
      "content/bags/DSC00178.webp",
    ],
    shortDescription: "Maroon YSL Bag, textured, ideal for all events.",
    description: "Maroon Colored YSL Bag, Deep textured surface, Perfect for daily and occasional use. The rich maroon color adds a touch of luxury to your wardrobe.",
    inStock: 1
  },
  {
    id: 4,
    name: "C K Red Bag",
    price: "PKR 2000/-",
    image: "content/bags/DSC00180.webp",
    images: [
      "content/bags/DSC00179.webp",
      "content/bags/DSC00181.webp",
      "content/bags/DSC00182.webp",
    ],
    shortDescription: "CK Red Bag, vibrant and trendy for summer.",
    description: "Stay cool with this summer skirt. The CK Red Bag is crafted for those who love bold colors and practical design. Spacious, lightweight, and easy to carry.",
    inStock: 1
  },
  {
    id: 5,
    name: "C K Black Bag",
    price: "PKR 2000/-",
    image: "content/bags/DSC00172.webp",
    images: [
      "content/bags/DSC00172.webp",
      "content/bags/DSC00174.webp",
      "content/bags/DSC00175.webp",
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
    image: "content/bags/DSC00185.webp",
    images: [
      "content/bags/DSC00185.webp",
      "content/bags/DSC00186.webp",
      "content/bags/DSC00187.webp",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Formal Blazer, elegant and comfortable.",
    description: "Perfect for business or formal events. Designed for comfort and style, this blazer is a wardrobe essential for professionals.",
    inStock: 1
  },
  {
    id: 7,
    name: "Choholate Brown clutch",
    price: "PKR 2500/-",
    image: "content/bags/DSC00190.webp",
    images: [
      "content/bags/DSC00190.webp",
      "content/bags/DSC00191.webp",
    ],
    shortDescription: "Choholate Brown clutch, stylish and compact.",
    description: "Choholate Brown clutch, perfect for evening outings. This compact clutch is designed to hold your essentials while adding a touch of elegance to your outfit.",
    inStock: 1
  },
  {
    id: 8,
    name: "Pink clutch",
    price: "PKR 2500/-",
    image: "content/bags/DSC00192.webp",
    images: [
      "content/bags/DSC00192.webp",
      "content/bags/DSC00193.webp",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Pink clutch, elegant and stylish.",
    description: "Pink clutch, perfect for evening outings. This elegant clutch is designed to hold your essentials while adding a touch of sophistication to your outfit.",
    inStock: 1
  },
  {
    id: 9,
    name: "Grey Clutch",
    price: "PKR 2500/-",
    image: "content/bags/DSC00188.webp",
    images: [
      "content/bags/DSC00188.webp",
      "content/bags/DSC00189.webp",
    ],
    shortDescription: "Grey Clutch, sleek and modern.",
    description: "Grey Clutch, perfect for evening outings. This sleek and modern clutch is designed to hold your essentials while adding a touch of elegance to your outfit.",
    inStock: 1
  },
  {
    id: 10,
    name: "Red Clutch",
    price: "PKR 2500/-",
    image: "content/bags/DSC00196.webp",
    images: [
      "content/bags/DSC00196.webp",
      "content/bags/DSC00197.webp",
    ],
    shortDescription: "Red Clutch, bold and stylish.",
    description: "Red Clutch, perfect for evening outings. This bold and stylish clutch is designed to hold your essentials while adding a pop of color to your outfit.",
    inStock: 1
  },
  {
    id: 11,
    name: "Brown Clutch with stripes",
    price: "PKR 2500/-",
    image: "content/bags/DSC00194.webp",
    images: [
      "content/bags/DSC00194.webp",
      "content/bags/DSC00195.webp",
    ],
    shortDescription: "Brown Clutch with stripes, chic and trendy.",
    description: "Brown Clutch with stripes, perfect for evening outings. This chic and trendy clutch is designed to hold your essentials while adding a stylish touch to your outfit.",
    inStock: 1
  },
  {
    id: 12,
    name: "Red purse",
    price: "PKR 2500/-",
    image: "content/bags/DSC00198.webp",
    images: [
      "content/bags/DSC00198.webp",
      "content/bags/DSC00199.webp",
    ],
    shortDescription: "Red Purse, Sleek and Compact.",
    description: "Red Purse, perfect for daily use. This sleek and compact purse is designed to hold your essentials while adding a touch of elegance to your everyday look. Red textured exterior with a Soft Pink interior, this purse is both stylish and functional.",
    inStock: 1
  },
  {
    id: 13,
    name: "Greenish Black purse",
    price: "PKR 2500/-",
    image: "content/bags/DSC00200.webp",
    images: [
      "content/bags/DSC00200.webp",
      "content/bags/DSC00201.webp",
    ],
    shortDescription: "Greenish Black Purse, elegant and versatile.",
    description: "Greenish Black Purse, perfect for daily use. This elegant and versatile purse is designed to hold your essentials while adding a touch of sophistication to your outfit. The unique greenish-black color makes it a standout accessory.",
    inStock: 1
  },
  {
    id: 14,
    name: "Mustard purse",
    price: "PKR 2500/-",
    image: "content/bags/DSC00202.webp",
    images: [
      "content/bags/DSC00202.webp",
      "content/bags/DSC00203.webp",
    ],
    shortDescription: "Mustard Purse, stylish and functional.",
    description: "Mustard Purse, perfect for daily use. This stylish and functional purse is designed to hold your essentials while adding a pop of color to your outfit. The mustard hue is trendy and eye-catching.",
    inStock: 1
  },
  {
    id: 15,
    name: "Pink Textured purse",
    price: "PKR 2500/-",
    image: "content/bags/DSC00204.webp",
    images: [
      "content/bags/DSC00204.webp",
      "content/bags/DSC00205.webp",
    ],
    shortDescription: "Pink Textured Purse, chic and elegant.",
    description: "Pink Textured Purse, perfect for daily use. This chic and elegant purse is designed to hold your essentials while adding a touch of style to your outfit. The textured finish adds a unique flair.",
    inStock: 1
  },
  {
    id: 16,
    name: "Grey purse",
    price: "PKR 3200/-",
    image: "content/bags/DSC00206.webp",
    images: [
      "content/bags/DSC00206.webp",
      "content/bags/DSC00207.webp"
    ],
    shortDescription: "Grey Purse, spacious and elegant.",
    description: "Grey Purse, perfect for daily use. This spacious and elegant purse is designed to hold your essentials while adding a touch of sophistication to your outfit. The grey color is versatile and timeless.",
    inStock: 1
  },
  {
    id: 18,
    name: "Orange MK Purse",
    price: "PKR 2700/-",
    image: "content/bags/DSC00213.webp",
    images: [
      "content/bags/DSC00213.webp",
      "content/bags/DSC00214.webp",
      "content/bags/DSC00227.webp"
    ],
    shortDescription: "Orange Textured MK Purse, modern and stylish.",
    description: "Orange Textured MK Purse, perfect for daily use. This modern and stylish purse is designed to hold your essentials while adding a vibrant touch to your outfit. The textured finish enhances its appeal.",
    inStock: 1
  },
  {
    id: 19,
    name: "Red YSL Clutch",
    price: "PKR 2300/-",
    image: "content/bags/DSC00218.webp",
    images: [
      "content/bags/DSC00218.webp",
      "content/bags/DSC00219.webp",
      "content/bags/DSC00220.webp"
    ],
    shortDescription: "Red YSL Clutch, elegant and compact.",
    description: "Red YSL Clutch, perfect for evening outings. This elegant and compact clutch is designed to hold your essentials while adding a touch of luxury to your outfit. The red color is bold and eye-catching.",
    inStock: 1
  },
  {
    id: 20,
    name: "Black YSL Clutch",
    price: "PKR 2600/-",
    image: "content/bags/DSC00221.webp",
    images: [
      "content/bags/DSC00221.webp",
      "content/bags/DSC00222.webp",
      "content/bags/DSC00220.webp",
    ],
    shortDescription: "Black YSL Clutch, casual and spacious. ",
    description: "Black YSL Clutch, perfect for casual outings. This spacious clutch is designed to hold your essentials while adding a touch of elegance to your everyday look. The black color is versatile and timeless.",
    inStock: 1
  },
  {
    id: 21,
    name: "Light Pastel Blue YSL Clutch",
    price: "PKR 2400/-",
    image: "content/bags/DSC00233.webp",
    images: [
      "content/bags/DSC00233.webp",
      "content/bags/DSC00233.webp"
    ],
    shortDescription: "Light Pastel Blue YSL Clutch, luxurious and soft.",
    description: "Light Pastel Blue YSL Clutch, perfect for evening outings. This luxurious and soft clutch is designed to hold your essentials while adding a touch of elegance to your outfit. The pastel blue color is soothing and stylish.",
    inStock: 1
  },
  {
    id: 22,
    name: "White Grey LV",
    price: "PKR 2200/-",
    image: "content/bags/DSC00229.webp",
    images: [
      "content/bags/DSC00229.webp",
      "content/bags/DSC00230.webp",
      "content/bags/DSC00231.webp"
    ],
    shortDescription: "Checkered bag in white and grey, modern and lightweight.",
    description: "Checkered bag in white and grey, modern and lightweight. This bag is designed for everyday use, featuring a spacious interior and a stylish checkered pattern that adds a contemporary touch to your outfit.",
    inStock: 1
  },
  {
    id: 23,
    name: "Chocolate Brown LV",
    price: "PKR 2500/-",
    image: "content/bags/DSC00223.webp",
    images: [
      "content/bags/DSC00223.webp",
      "content/bags/DSC00224.webp",
      "content/bags/DSC00231.webp"
    ],
    shortDescription: "Chocolate brown clutch for everyday use",
    description: "Chocolate brown clutch, perfect for everyday use. This stylish clutch features a rich chocolate brown color, spacious interior, and a sleek design that complements any outfit. Ideal for carrying your essentials with elegance.",
    inStock: 1
  },
  {
    id: 24,
    name: "MK Pink Clutch",
    price: "PKR 3500/-",
    image: "content/bags/DSC00225.webp",
    images: [
      "content/bags/DSC00225.webp",
      "content/bags/DSC00226.webp",
      "content/bags/DSC00227.webp",
    ],
    shortDescription: "Pink MK Clutch with classic design.",
    description: "Pink MK Clutch, perfect for evening outings. This clutch features a classic design with a soft pink color, spacious interior, and a stylish finish that adds a touch of elegance to your outfit.",
    inStock: 1
  },

];