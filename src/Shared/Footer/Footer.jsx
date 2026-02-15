import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-violet-400">YourBrand</h2>

            <p className="text-white/60 mt-3">
              Professional modern landing page using React and Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>

            <div className="flex flex-col gap-2 text-white/60">
              <NavLink to="/" className="hover:text-violet-400">
                Home
              </NavLink>

              <NavLink to="/about" className="hover:text-violet-400">
                About
              </NavLink>

              <NavLink to="/contact" className="hover:text-violet-400">
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>

            <p className="text-white/60">email@email.com</p>

            <p className="text-white/60">+880 123456789</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/50">
          © 2026 YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
