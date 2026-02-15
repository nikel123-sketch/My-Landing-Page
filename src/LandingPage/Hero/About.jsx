import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-[-100px] top-[50px] w-[300px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute right-[-100px] bottom-[50px] w-[300px] h-[300px] bg-violet-600/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-indigo-300">
            🚀 About Our Platform
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We Build{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Future Ready
            </span>{" "}
            Web Experiences
          </h2>

          {/* Description */}
          <p className="text-white/60 mb-6 leading-relaxed text-lg">
            Our mission is to help startups, developers and businesses build
            modern, fast and visually stunning websites using cutting-edge
            technologies like React, Tailwind CSS and modern UI systems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-3xl font-bold text-violet-400">100+</h3>
              <p className="text-white/60 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-indigo-400">50+</h3>
              <p className="text-white/60 text-sm">Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">5★</h3>
              <p className="text-white/60 text-sm">Rating</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE PREMIUM CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition"></div>

          {/* Card */}
          <div className="relative bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Why Choose Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <p className="text-white/60">
                  Modern and premium design system
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                <p className="text-white/60">High performance optimized code</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <p className="text-white/60">Fully responsive all devices</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <p className="text-white/60">Professional SaaS level quality</p>
              </div>
            </div>

            {/* Decorative Line */}
            <div className="mt-8 h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
