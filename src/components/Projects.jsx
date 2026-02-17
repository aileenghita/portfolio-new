import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = ({ darkMode }) => {
  const baseBg = darkMode
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
    : "bg-gradient-to-br from-orange-50 via-white to-orange-100";

  const cardBg = darkMode
    ? "bg-white/5 border-white/10"
    : "bg-white/70 border-gray-200/60";

  const textPrimary = darkMode ? "text-white" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-300" : "text-gray-700";
  const textMuted = darkMode ? "text-gray-400" : "text-gray-600";

  const projects = [
    {
      title: "USD/IDR Forecasting (LSTM + GARCH)",
      desc: "Hybrid deep learning model to forecast exchange rates with volatility integration.",
      tools: ["Python", "LSTM", "GARCH", "Pandas"],
      result: "Improved RMSE compared to baseline LSTM model.",
      github: "#",
      demo: "#",
    },
    {
      title: "Customer Sales Analysis",
      desc: "Exploratory data analysis to identify revenue drivers and purchasing behavior.",
      tools: ["Python", "SQL", "Matplotlib"],
      result: "Identified top 20% customers contributing 65% revenue.",
      github: "#",
      demo: "#",
    },
    {
      title: "Interactive Sales Dashboard",
      desc: "Business dashboard to monitor KPIs and sales performance.",
      tools: ["Power BI", "Excel"],
      result: "Enabled weekly performance tracking for decision-making.",
      github: "#",
      demo: "#",
    },
    {
      title: "Frontend Messaging Platform",
      desc: "Broadcast messaging platform supporting up to 10k recipients per batch.",
      tools: ["Vue.js", "TypeScript"],
      result: "Improved performance and reduced UI loading time.",
      github: "#",
      demo: "#",
    },
    {
      title: "Mini ML Classification",
      desc: "Basic classification model for churn prediction.",
      tools: ["Python", "Scikit-learn"],
      result: "Achieved 87% accuracy on test data.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className={`py-20 lg:py-28 px-6 lg:px-20 ${baseBg}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className={`text-3xl lg:text-4xl font-bold ${textPrimary}`}>
            Featured{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto ${textSecondary}`}>
            Selected projects demonstrating analytics, forecasting, and frontend capabilities.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`rounded-2xl border ${cardBg} backdrop-blur-lg shadow-lg p-6 flex flex-col justify-between`}
            >
              <div>
                <h3 className={`text-lg font-semibold ${textPrimary}`}>
                  {project.title}
                </h3>

                <p className={`mt-3 text-sm ${textMuted}`}>
                  {project.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`px-3 py-1 rounded-full text-xs border ${
                        darkMode
                          ? "border-white/10 text-gray-200 bg-white/5"
                          : "border-gray-200 text-gray-700 bg-white/60"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className={`mt-4 text-sm ${textSecondary}`}>
                  <strong>Result:</strong> {project.result}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>

                <a
                  href={project.demo}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${
                    darkMode
                      ? "border-gray-600 text-white hover:bg-gray-800"
                      : "border-gray-300 text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;