"use client";
import { useEffect, useState } from "react";
import NavBar from "./navbar";

export default function NavBarWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <header className="w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl p-4 flex items-center justify-between">
          {/* Brand Skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse" />
            <div className="w-32 h-6 bg-gray-300 rounded animate-pulse" />
          </div>

          {/* Menu Skeleton */}
          <div className="hidden sm:flex gap-4 items-center">
            <div className="w-16 h-6 bg-gray-300 rounded animate-pulse" />
            <div className="w-16 h-6 bg-gray-300 rounded animate-pulse" />
            <div className="w-16 h-6 bg-gray-300 rounded animate-pulse" />
          </div>

          {/* Contact Button Skeleton */}
          <div className="hidden lg:flex">
            <div className="w-24 h-8 bg-gray-300 rounded-lg animate-pulse" />
          </div>
        </div>
      </header>
    );

  return <NavBar />;
}
