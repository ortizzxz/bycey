"use client";
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      {/* Big 404 text with hazard stripes */}
      <div className="text-9xl font-extrabold text-yellow-500 relative mb-6">
        404
        <span className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#facc15,#facc15 10px,#000 10px,#000 20px)] opacity-30 rounded-lg"></span>
      </div>

      {/* Message */}
      <h1 className="text-3xl font-bold mb-2 text-gray-800">
        Oops! Page under construction
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Looks like the page you’re trying to reach is still being built. Don’t worry – we’re on it!
      </p>

      {/* Back Home Button */}
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded shadow transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
