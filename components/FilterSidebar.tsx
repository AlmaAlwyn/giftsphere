"use client";

import { useState } from "react";

const priceRanges = [
  { label: "Under ₹500", value: "0-500" },
  { label: "₹500 - ₹1000", value: "500-1000" },
  { label: "₹1000 - ₹2000", value: "1000-2000" },
  { label: "Above ₹2000", value: "2000-" },
];

const occasions = [
  "Birthday",
  "Wedding",
  "Anniversary",
  "Baby Shower",
  "Housewarming",
];

const categories = [
  "Hampers",
  "Chocolates",
  "Plants & Flowers",
  "Home Decor",
  "Personalized",
];

interface FilterSidebarProps {
  onFilterChange?: (filters: any) => void;
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleClearAll = () => {
    setSelectedPriceRange("");
    setSelectedOccasions([]);
    setSelectedCategories([]);
    onFilterChange?.({});
  };

  const toggleOccasion = (occasion: string) => {
    setSelectedOccasions(prev =>
      prev.includes(occasion)
        ? prev.filter(o => o !== occasion)
        : [...prev, occasion]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="w-64 bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        <button
          onClick={handleClearAll}
          className="text-sm text-primary-600 hover:text-primary-700"
        >
          Clear All
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="price"
                value={range.value}
                checked={selectedPriceRange === range.value}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-4 h-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Occasion */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Occasion</h3>
        <div className="space-y-2">
          {occasions.map((occasion) => (
            <label key={occasion} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedOccasions.includes(occasion)}
                onChange={() => toggleOccasion(occasion)}
                className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
              />
              <span className="ml-2 text-gray-700">{occasion}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
              />
              <span className="ml-2 text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
