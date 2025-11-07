"use client";

import { useEffect, useState } from "react";
import {
  FiPackage,
  FiUsers,
  FiShoppingBag,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    // In production, fetch real stats from API
    setStats({
      totalProducts: 156,
      totalUsers: 1243,
      totalOrders: 89,
      totalRevenue: 125430,
    });
  }, []);

  const statCards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: FiPackage,
      color: "blue",
      change: "+12%",
    },
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: FiUsers,
      color: "green",
      change: "+8%",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: FiShoppingBag,
      color: "purple",
      change: "+23%",
    },
    {
      title: "Revenue",
      value: `₹${stats.totalRevenue.toLocaleString()}`,
      icon: FiDollarSign,
      color: "yellow",
      change: "+15%",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome to your admin dashboard. Here's an overview of your store.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <FiTrendingUp className="text-green-600 text-sm" />
                  <span className="text-green-600 text-sm font-medium">
                    {stat.change}
                  </span>
                  <span className="text-gray-500 text-sm">vs last month</span>
                </div>
              </div>
              <div
                className={`p-3 rounded-full bg-${stat.color}-100`}
              >
                <stat.icon className={`text-2xl text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Recent Orders
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">Order #{1000 + i}</p>
                  <p className="text-sm text-gray-600">Customer Name</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">₹{(Math.random() * 2000 + 500).toFixed(0)}</p>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    Completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Top Products
          </h2>
          <div className="space-y-4">
            {["Wedding Hamper", "Birthday Gift Box", "Corporate Gift Set", "Personalized Frame", "Scented Candle Set"].map((product, i) => (
              <div key={product} className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded"></div>
                  <div>
                    <p className="font-medium text-gray-900">{product}</p>
                    <p className="text-sm text-gray-600">{Math.floor(Math.random() * 50 + 10)} sales</p>
                  </div>
                </div>
                <p className="font-medium text-gray-900">
                  ₹{(Math.random() * 1500 + 500).toFixed(0)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
