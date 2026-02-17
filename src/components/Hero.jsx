import { motion } from "framer-motion"

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-6 lg:px-20 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
          : "bg-gradient-to-br from-orange-50 via-white to-orange-100"
      }`}
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - TEXT */}
        <div className="space-y-6 text-center lg:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl lg:text-6xl font-bold leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Aileen
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-xl lg:text-2xl font-medium ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Data Analyst & Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`text-base lg:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I build data-driven solutions and interactive web experiences
            using Python, SQL, and modern frontend technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              className={`px-6 py-3 rounded-full border font-semibold transition ${
                darkMode
                  ? "border-gray-600 text-white hover:bg-gray-800"
                  : "border-gray-300 text-gray-800 hover:bg-gray-100"
              }`}
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE - VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 blur-3xl opacity-30"></div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero