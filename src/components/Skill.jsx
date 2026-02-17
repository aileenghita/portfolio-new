import { motion } from "framer-motion";
import { Braces, Database, BarChart3, Wrench } from "lucide-react";

const Skills = ({ darkMode }) => {
  const baseBg = darkMode
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
    : "bg-gradient-to-br from-orange-50 via-white to-orange-100";

  const cardBg = darkMode
    ? "bg-white/5 border-white/10"
    : "bg-white/70 border-gray-200/60";

  const textPrimary = darkMode ? "text-white" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-300" : "text-gray-700";
  const textMuted = darkMode ? "text-gray-400" : "text-gray-600";

  const groups = [
    {
      icon: <Database className="w-5 h-5 text-white" />,
      title: "Data",
      items: ["Python", "SQL", "Excel", "EDA", "Data Cleaning", "Forecasting"],
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      title: "Visualization",
      items: ["Power BI", "Tableau (basic)", "Matplotlib", "Reporting"],
    },
    {
      icon: <Braces className="w-5 h-5 text-white" />,
      title: "Frontend",
      items: ["Vue.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    },
    {
      icon: <Wrench className="w-5 h-5 text-white" />,
      title: "Tools",
      items: ["Git", "Postman", "VS Code", "Jira", "Figma (basic)"],
    },
  ];

  return (
    <section id="skills" className={`py-20 lg:py-28 px-6 lg:px-20 ${baseBg}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className={`text-3xl lg:text-4xl font-bold ${textPrimary}`}>
            Skills &{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Tools
            </span>
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto ${textSecondary}`}>
            A mix of analytics and frontend skills — focused on turning data into
            clear insights and building usable interfaces.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className={`rounded-2xl border ${cardBg} backdrop-blur-lg shadow-lg p-6`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-md">
                  {g.icon}
                </div>
                <h3 className={`font-semibold ${textPrimary}`}>{g.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className={`px-3 py-1 rounded-full text-sm border ${
                      darkMode
                        ? "border-white/10 text-gray-200 bg-white/5"
                        : "border-gray-200 text-gray-700 bg-white/60"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className={`mt-4 text-sm ${textMuted}`}>
                {g.title === "Data" &&
                  "Focus on analysis, data prep, and insight generation."}
                {g.title === "Visualization" &&
                  "Communicate insights clearly with dashboards & reports."}
                {g.title === "Frontend" &&
                  "Build clean UI and smooth interactions."}
                {g.title === "Tools" &&
                  "Workflow tools to ship work efficiently."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;