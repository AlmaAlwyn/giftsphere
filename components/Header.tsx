"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FiShoppingCart, FiUser, FiSearch, FiMenu } from "react-icons/fi";
import { useState } from "react";

const categories = [
  {
    name: "Birthday Gifts",
    subcategories: ["Kids", "Adults", "Teens", "Personalized"]
  },
  {
    name: "Wedding Gifts",
    subcategories: ["Return Gifts", "Hampers", "Chocolates", "Personalized"]
  },
  {
    name: "Corporate Gifts",
    subcategories: ["Desk Items", "Tech Gadgets", "Gift Hampers", "Customized"]
  },
  {
    name: "Festival Gifts",
    subcategories: ["Diwali", "Christmas", "New Year", "Holi"]
  },
  {
    name: "Personalized",
    subcategories: ["Photo Frames", "Mugs", "Cushions", "Keychains"]
  },
];

export default function Header() {
  const { data: session } = useSession();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-2 px-4 text-center text-sm">
        🎁 Free Shipping on Orders Above ₹999 | Use Code: FREESHIP
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary-600 p-2 rounded-lg">
              <FiShoppingCart className="text-white text-2xl" />
            </div>
            <span className="text-2xl font-bold text-gray-900">GiftHub</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for gifts, occasions, themes..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            <button className="text-gray-700 hover:text-primary-600 flex items-center gap-1">
              <FiUser className="text-xl" />
              <span className="text-sm">Support</span>
            </button>

            {session ? (
              <div className="flex items-center gap-4">
                <Link href="/cart" className="relative text-gray-700 hover:text-primary-600">
                  <FiShoppingCart className="text-2xl" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                  <span className="text-sm ml-1">Cart</span>
                </Link>
                <div className="flex items-center gap-2">
                  <Link href="/profile" className="text-gray-700 hover:text-primary-600 flex items-center gap-1">
                    <FiUser className="text-xl" />
                    <span className="text-sm">{session.user?.name || "Account"}</span>
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="text-sm text-gray-600 hover:text-primary-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/login" className="text-gray-700 hover:text-primary-600 flex items-center gap-1">
                  <FiUser className="text-xl" />
                  <span className="text-sm">Login</span>
                </Link>
                <Link href="/cart" className="relative text-gray-700 hover:text-primary-600">
                  <FiShoppingCart className="text-2xl" />
                  <span className="text-sm ml-1">Cart</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8 py-3">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button className="text-gray-700 hover:text-primary-600 font-medium flex items-center gap-1">
                    {category.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {hoveredCategory === category.name && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 w-48">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}/${sub.toLowerCase()}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/sale" className="text-red-600 font-medium hover:text-red-700">
                Sale
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
