import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Blazing Fast",
      desc: "Optimized performance ensures ultra-fast load time and smooth experience.",
      icon: "⚡",
    },
    {
      title: "Fully Responsive",
      desc: "Perfectly responsive across mobile, tablet and desktop devices.",
      icon: "📱",
    },
    {
      title: "Modern Design",
      desc: "Clean, premium and modern UI for professional SaaS products.",
      icon: "🎨",
    },
    {
      title: "Secure System",
      desc: "Built with modern security practices for maximum protection.",
      icon: "🔒",
    },
    {
      title: "Easy Customization",
      desc: "Flexible and easy to customize for any type of project.",
      icon: "⚙️",
    },
    {
      title: "Premium Quality",
      desc: "High-quality professional design for startups and businesses.",
      icon: "🚀",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-violet-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>

          <p className="text-white/60 max-w-xl mx-auto">
            Everything you need to build modern, fast and professional landing
            pages.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              {/* Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-xl mb-4 shadow-lg">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-400 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
