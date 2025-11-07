import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Birthday Gifts",
        slug: "birthday-gifts",
        description: "Perfect gifts for birthday celebrations",
      },
    }),
    prisma.category.create({
      data: {
        name: "Wedding Gifts",
        slug: "wedding-gifts",
        description: "Elegant return gifts for weddings",
      },
    }),
    prisma.category.create({
      data: {
        name: "Corporate Gifts",
        slug: "corporate-gifts",
        description: "Professional gifts for corporate events",
      },
    }),
    prisma.category.create({
      data: {
        name: "Personalized Gifts",
        slug: "personalized-gifts",
        description: "Customized gifts with personal touch",
      },
    }),
  ]);

  console.log("Created categories:", categories.length);

  // Create sample products
  const products = [
    {
      name: "Corporate Gift Set",
      slug: "corporate-gift-set",
      description: "Premium corporate gift set with notebook, pen, and mug",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      images: [],
      categoryId: categories[2].id,
      occasion: ["Corporate", "Anniversary"],
      priceRange: "₹1000 - ₹2000",
      stockCount: 50,
      featured: true,
      rating: 4.5,
      reviewCount: 24,
    },
    {
      name: "Wedding Hamper",
      slug: "wedding-hamper",
      description: "Beautiful wedding return gift hamper with sweets and chocolates",
      price: 899,
      originalPrice: 1299,
      discount: 31,
      images: [],
      categoryId: categories[1].id,
      occasion: ["Wedding"],
      priceRange: "₹500 - ₹1000",
      stockCount: 100,
      featured: true,
      rating: 4.8,
      reviewCount: 18,
    },
    {
      name: "Birthday Gift Box",
      slug: "birthday-gift-box",
      description: "Colorful birthday gift box with toys and candies",
      price: 599,
      originalPrice: 799,
      discount: 25,
      images: [],
      categoryId: categories[0].id,
      occasion: ["Birthday"],
      priceRange: "₹500 - ₹1000",
      stockCount: 75,
      featured: true,
      rating: 4.2,
      reviewCount: 31,
    },
    {
      name: "Personalized Frame",
      slug: "personalized-frame",
      description: "Custom photo frame with your message",
      price: 799,
      originalPrice: 1099,
      discount: 27,
      images: [],
      categoryId: categories[3].id,
      occasion: ["Wedding", "Anniversary", "Birthday"],
      priceRange: "₹500 - ₹1000",
      stockCount: 40,
      featured: true,
      rating: 4.7,
      reviewCount: 12,
    },
    {
      name: "Scented Candle Set",
      slug: "scented-candle-set",
      description: "Set of 3 aromatic scented candles",
      price: 449,
      originalPrice: 699,
      discount: 36,
      images: [],
      categoryId: categories[1].id,
      occasion: ["Wedding", "Housewarming"],
      priceRange: "Under ₹500",
      stockCount: 60,
      featured: false,
      rating: 4.3,
      reviewCount: 27,
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log("Created products:", products.length);

  // Create sample video
  await prisma.video.create({
    data: {
      title: "The Art of Gift Giving",
      description: "Learn how to choose perfect return gifts",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      featured: true,
    },
  });

  console.log("Created featured video");

  // Create sample offers
  const offers = [
    {
      title: "50% OFF",
      description: "On Birthday Gift Hampers",
      discount: "50% OFF",
      active: true,
    },
    {
      title: "Buy 1 Get 1",
      description: "On Personalized Items",
      discount: "Buy 1 Get 1",
      active: true,
    },
    {
      title: "Bulk Order Discount",
      description: "Special discounts on 50+ items",
      discount: "Bulk Discount",
      active: true,
    },
  ];

  for (const offer of offers) {
    await prisma.offer.create({ data: offer });
  }

  console.log("Created offers:", offers.length);
  console.log("Database seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
