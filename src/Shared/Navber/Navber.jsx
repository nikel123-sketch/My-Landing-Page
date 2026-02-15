import React, { useState } from "react";
import { NavLink } from "react-router";


const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl md:text-2xl font-bold text-violet-400"
          >
            YourBrand
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white/80">
            <NavLink to="/" className="hover:text-violet-400 transition">
              Home
            </NavLink>

            <NavLink to="/about" className="hover:text-violet-400 transition">
              About
            </NavLink>

            <NavLink to="/contact" className="hover:text-violet-400 transition">
              Contact
            </NavLink>

            <button className="bg-violet-500 hover:bg-violet-600 px-5 py-2 rounded-xl transition">
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4 text-white/80">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>

            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>

            <button className="bg-violet-500 px-5 py-2 rounded-xl">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navber;
