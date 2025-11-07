"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import {
  FiHome,
  FiPackage,
  FiUsers,
  FiShoppingBag,
  FiGrid,
  FiVideo,
  FiTag,
  FiBarChart2,
} from "react-icons/fi";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (session?.user?.role !== "ADMIN") {
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (session?.user?.role !== "ADMIN") {
    return null;
  }

  const menuItems = [
    { icon: FiBarChart2, label: "Dashboard", href: "/admin" },
    { icon: FiPackage, label: "Products", href: "/admin/products" },
    { icon: FiGrid, label: "Categories", href: "/admin/categories" },
    { icon: FiShoppingBag, label: "Orders", href: "/admin/orders" },
    { icon: FiUsers, label: "Users", href: "/admin/users" },
    { icon: FiVideo, label: "Videos", href: "/admin/videos" },
    { icon: FiTag, label: "Offers", href: "/admin/offers" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-primary-600 p-2 rounded-lg">
                  <FiHome className="text-white text-xl" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  GiftHub Admin
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-700">
                Welcome, {session?.user?.name || "Admin"}
              </span>
              <Link
                href="/"
                className="text-primary-600 hover:text-primary-700"
              >
                View Site
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-[calc(100vh-57px)]">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                  >
                    <item.icon className="text-xl" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
