import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const About = ({ darkMode }) => {
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
    <section id="about" className={`py-20 lg:py-28 px-6 lg:px-20 ${baseBg}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className={`mt-6 text-3xl lg:text-4xl font-bold ${textPrimary}`}>
            About{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className={`mt-4 max-w-3xl mx-auto ${textSecondary}`}>
            I'm Aileen — a data-driven problem solver with a technical background
            in frontend development and a master’s degree in Data Science &
            Business Analytics.
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className={`mt-10 rounded-2xl border ${cardBg} backdrop-blur-lg shadow-lg p-6 lg:p-8`}
        >
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left highlight */}
            <div className="lg:col-span-2">
              <p className={`text-sm ${textMuted}`}>Currently focusing on</p>
              <p className={`mt-2 text-xl font-semibold ${textPrimary}`}>
                Data analytics that drives real decisions.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "SQL", "Excel", "Data Viz", "React/Vue"].map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 rounded-full text-sm border ${darkMode
                      ? "border-white/10 text-gray-200 bg-white/5"
                      : "border-gray-200 text-gray-700 bg-white/60"
                      }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-3 space-y-4">
              <p className={`leading-relaxed ${textMuted}`}>
                With a background in <span className="font-semibold text-orange-500">software engineering </span>
                and a Master’s degree in
                <span className="font-semibold text-orange-500"> Data Science & Business Analytics</span>,
                I bring a strong analytical foundation combined with real-world technical experience.
              </p>

              <p className={`leading-relaxed ${textMuted}`}>
                My academic training has equipped me with hands-on experience in
                <span className="font-semibold text-orange-500"> SQL, Python, data visualization, and statistical modeling</span>,
                while my engineering background has shaped my ability to work with production systems and cross-functional teams.
              </p>

              <p className={`leading-relaxed ${textMuted}`}>
                I aim to contribute in data-focused roles where analytical thinking, technical skills, and business understanding create measurable impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;