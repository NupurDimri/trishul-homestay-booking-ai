"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600 shadow-md px-4 md:px-8 py-4">

      <div className="flex items-center justify-between">

        <Link href="/" className="text-xl md:text-2xl font-bold text-white">
          Trishul Eco Homestays
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link
            href="/login"
            className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800"
          >
            Login
          </Link>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 md:hidden text-white">
          <Link href="/">Home</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
        </div>
      )}

    </nav>
  );
}