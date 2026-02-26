import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const HireMe = ({ darkMode }) => {
  const baseBg = darkMode
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
    : "bg-gradient-to-br from-orange-50 via-white to-orange-100";

  const cardBg = darkMode
    ? "bg-white/5 border-white/10"
    : "bg-white/70 border-gray-200/60";

  const textPrimary = darkMode ? "text-white" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-300" : "text-gray-700";
  const textMuted = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <section id="contact" className={`py-24 px-6 lg:px-20 ${baseBg}`}>
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl border ${cardBg} backdrop-blur-lg shadow-lg p-10 text-center`}
        >
          <h2 className={`text-3xl lg:text-4xl font-bold ${textPrimary}`}>
            Let's Connect & {" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <p className={`mt-4 ${textSecondary}`}>
            I'm currently open to data-focused opportunities and collaborations.
            If you're looking for someone who can turn data into meaningful insights,
            I'd love to hear from you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/aileenghita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:aileenghita@gmail.com"
              className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full border font-semibold transition ${darkMode
                ? "border-gray-600 text-white hover:bg-gray-800"
                : "border-gray-300 text-gray-800 hover:bg-gray-100"
                }`}
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
            </a>

            {/* Github */}
            <a
              href="https://github.com/aileenghita/data-analysis-portfolio"
              target="_blank"
              className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full border font-semibold transition ${darkMode
                ? "border-gray-600 text-white hover:bg-gray-800"
                : "border-gray-300 text-gray-800 hover:bg-gray-100"
                }`}
            >
              <Github className="w-5 h-5" />
              View Github
            </a>
          </div>

          <p className={`mt-8 text-sm ${textMuted}`}>
            Based in Jakarta, Indonesia
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;