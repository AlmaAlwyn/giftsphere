"use client";

import Link from "next/link";

const offers = [
  {
    id: 1,
    title: "50% OFF",
    description: "On Birthday Gift Hampers",
    bgColor: "from-red-500 to-red-600",
    discount: "50% OFF",
  },
  {
    id: 2,
    title: "Buy 1 Get 1",
    description: "On Personalized Items",
    bgColor: "from-yellow-500 to-orange-500",
    discount: "Buy 1 Get 1",
  },
  {
    id: 3,
    title: "Bulk Order",
    description: "Special discounts on 50+ items",
    bgColor: "from-blue-600 to-blue-700",
    discount: "Bulk Discount",
  },
];

export default function SpecialOffers() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
          </svg>
          <h2 className="text-lg font-bold text-gray-900">Special Offers</h2>
        </div>
        <Link href="/offers" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All Offers
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {offers.map((offer) => (
          <Link
            key={offer.id}
            href={`/offers/${offer.id}`}
            className="group"
          >
            <div className={`bg-gradient-to-br ${offer.bgColor} rounded-lg p-6 text-white h-40 flex flex-col justify-between hover:shadow-lg transition-all transform hover:-translate-y-1`}>
              <div>
                <div className="text-3xl font-bold mb-2">{offer.discount}</div>
                <p className="text-white/90 text-sm">{offer.description}</p>
              </div>
              <div className="flex items-center text-sm font-medium">
                Shop Now
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              NEW
            </div>
            <p className="text-gray-800 font-medium">
              Festival Special: Extra 20% off on orders above ₹2000
            </p>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
            Claim Offer
          </button>
        </div>
      </div>
    </div>
  );
}
