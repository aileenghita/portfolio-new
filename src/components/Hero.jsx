import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown, ArrowDown } from "lucide-react";
import profileImg from "../assets/aileen.jpeg";

const Hero = ({ darkMode }) => {
  const textPrimary = darkMode ? "text-white" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-300" : "text-gray-700";
  const textMuted = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <section
      id="home"
      className={`relative overflow-hidden min-h-screen flex items-center px-6 lg:px-20 ${darkMode
        ? "bg-gradient-to-br from-[#0b1220] via-black to-[#0b1220]"
        : "bg-gradient-to-br from-orange-50 via-white to-orange-100"
        }`}
    >
      {/* subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-orange-500/25 to-amber-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-28 w-96 h-96 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/10 blur-3xl"
      />

      <div className="max-w-6xl w-full mx-5 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className={`mt-6 text-4xl lg:text-6xl font-bold leading-tight ${textPrimary}`}
          >
            Hello, my name’s{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Aileen.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className={`mt-4 text-xl lg:text-2xl font-medium ${textSecondary}`}
          >
            Data Science & Business Analytics Graduate with an Engineering Background
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className={`mt-4 max-w-xl mx-auto lg:mx-0 text-base lg:text-lg ${textMuted}`}
          >
            I leverage SQL, Python, and statistical modeling to transform data into actionable insights and business impact.
            <br /><br />Open to Data Analyst & Data Science opportunities.
          </motion.p>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <a
              href="/CV Aileen.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>

            <a
              href="#projects"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border font-semibold transition ${darkMode
                ? "border-white/15 text-white hover:bg-white/5"
                : "border-gray-300 text-gray-800 hover:bg-gray-100"
                }`}
            >
              See my work <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] h-[360px] lg:w-[320px] lg:h-[420px]">
            {/* soft glow */}
            <div className="absolute inset-0 rounded-[160px] bg-gradient-to-br from-orange-500/20 to-amber-500/10 blur-2xl"></div>

            {/* gradient frame */}
            <div className="absolute inset-0 rounded-[160px] p-[2px] bg-gradient-to-r from-orange-500 to-amber-500 shadow-xl">
              <div className={`w-full h-full rounded-[158px] ${darkMode ? "bg-black/60" : "bg-white/70"
                } backdrop-blur-xl p-3`}>

                {/* oval image */}
                <div className="w-full h-full rounded-[155px] overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Aileen"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* floating 3D-ish accents (subtle) */}
                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-xl rotate-12"
                />
                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <ChevronDown
            className="w-10 h-10 text-orange-500 drop-shadow-[0_0_6px_rgba(249,115,22,0.6)] opacity-50"
          />
          <ChevronDown
            className="w-10 h-10 text-orange-500 drop-shadow-[0_0_6px_rgba(249,115,22,0.6)] opacity-75 -mt-6"
          />
          <ChevronDown
            className="w-10 h-10 text-orange-500 drop-shadow-[0_0_6px_rgba(249,115,22,0.6)] -mt-6"
          />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;