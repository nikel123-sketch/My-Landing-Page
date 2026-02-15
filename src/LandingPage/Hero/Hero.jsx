import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-violet-600/30 rounded-full blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-600/30 rounded-full blur-[120px]" />

      {/* Main Container */}
      <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Premium Badge */}
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-violet-300">
            ✨ Modern React Landing Page
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Build Future With{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Modern Design
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-white/60 max-w-lg text-lg leading-relaxed">
            Create ultra-professional, fast, and beautiful landing pages using
            modern technologies like React, Tailwind CSS and Framer Motion.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* Primary Button */}
            <button className="relative px-7 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 font-medium hover:scale-105 transition duration-300 shadow-lg shadow-violet-500/30">
              <span className="relative z-10">Get Started</span>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 blur opacity-40 hover:opacity-70 transition"></div>
            </button>

            {/* Secondary Button */}
            <button className="px-7 py-3 rounded-xl border border-white/20 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Premium Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition"></div>

          {/* Card */}
          <div className="relative bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Lightning Fast Performance
            </h2>

            <p className="text-white/60 leading-relaxed">
              Optimized modern architecture ensures blazing fast speed, smooth
              animation, and premium user experience.
            </p>

            {/* Decorative line */}
            <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
