import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import FeaturedVideo from "@/components/FeaturedVideo";
import SpecialOffers from "@/components/SpecialOffers";
import ProductCard from "@/components/ProductCard";

// Sample featured products - in production, fetch from API
const featuredProducts = [
  {
    id: "1",
    name: "Corporate Gift Set",
    price: 1299,
    originalPrice: 1999,
    images: [],
    rating: 4.5,
    reviewCount: 24,
    discount: 35,
  },
  {
    id: "2",
    name: "Wedding Hamper",
    price: 899,
    originalPrice: 1299,
    images: [],
    rating: 4.8,
    reviewCount: 18,
  },
  {
    id: "3",
    name: "Birthday Gift Box",
    price: 599,
    originalPrice: 799,
    images: [],
    rating: 4.2,
    reviewCount: 31,
  },
  {
    id: "4",
    name: "Personalized Frame",
    price: 799,
    originalPrice: 1099,
    images: [],
    rating: 4.7,
    reviewCount: 12,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <aside className="flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Video and Offers Section */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              <FeaturedVideo />
              <SpecialOffers />
            </div>

            {/* Featured Products */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* Scented Candle Set - Additional Product Section */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Trending Gifts</h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={`trending-${product.id}`}
                    product={{
                      ...product,
                      id: `trending-${product.id}`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p className="text-gray-400 text-sm">
                GiftHub - Your one-stop destination for perfect return gifts for every occasion.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Birthday Gifts</a></li>
                <li><a href="#" className="hover:text-white">Wedding Gifts</a></li>
                <li><a href="#" className="hover:text-white">Corporate Gifts</a></li>
                <li><a href="#" className="hover:text-white">Personalized</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Email: support@gifthub.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2025 GiftHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
