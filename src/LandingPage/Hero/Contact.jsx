import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-[-100px] bottom-0 w-[300px] h-[300px] bg-violet-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute right-[-100px] top-0 w-[300px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-violet-300">
            📩 Contact Us
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/60 mb-8 leading-relaxed">
            Ready to create your professional website? Contact us today and
            let's build a modern, fast and beautiful experience together.
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-xl">
              📧 email@email.com
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-xl">
              📱 +880 123456789
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-xl">
              📍 Bangladesh
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition"></div>

          {/* Form Card */}
          <div className="relative bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-violet-400 focus:bg-white/10 transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-indigo-400 focus:bg-white/10 transition"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-400 focus:bg-white/10 transition"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full relative px-6 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 font-medium hover:scale-105 transition duration-300 shadow-lg shadow-violet-500/30"
            >
              Send Message
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 blur opacity-40 hover:opacity-70 transition"></div>
            </button>

            {/* Decorative line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-30"></div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
