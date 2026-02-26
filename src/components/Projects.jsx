import { motion } from "framer-motion";
import { Github, BarChart3 } from "lucide-react";

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
      title: "Sales & Profitability Diagnostic Dashboard",
      desc: "Analyzed unusual profit declines despite increasing sales through quarter-level, regional, and product analysis.",
      tools: ["Tableau"],
      result: "Identified margin compression driven by aggressive discounting and low-margin sub-categories, leading to actionable data-driven recommendations.",
      github: "https://drive.google.com/file/d/1GdoD60XIxpUdNS3TjAYunRo_mdl6jUFe/view?usp=sharing",
      dashboard: "https://public.tableau.com/app/profile/aileen.ghita.gianna/viz/Superstore_17718369305430/Sales?publish=yes",
    },
    {
      title: "E-Bookstore Database & Business Insight Analysis",
      desc: "Designed a relational database for an online bookstore and built analytical SQL queries to uncover revenue, customer behavior, inventory risk, and fulfillment backlog.",
      tools: ["SQL", "Relational Database Design"],
      result: "Investigated overstock patterns, inactive customers, and non-delivered transactions, leading to actionable recommendations on inventory turnover and customer retention.",
      github: "https://github.com/aileenghita/data-analysis-portfolio/tree/main/ebookstore-sql",
    },
    {
      title: "USD/IDR Exchange Rate Forecasting & Trading Strategy",
      desc: "Implemented and compared standalone LSTM and hybrid GARCH-LSTM models for USD/IDR exchange rate forecasting, translating predictive outputs into rule-based trading strategies.",
      tools: ["Python", "TensorFlow/Keras", "arch", "pandas", "NumPy", "pandas"],
      result: "Identified the best-performing model based on RMSE, MAE, and R², and validated predictive utility through backtesting using Sharpe ratio, drawdown, and annualized return metrics.",
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
            Selected {" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto ${textSecondary}`}>
            A selection of projects showcasing data analytics, machine learning, and business insights.
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
                      className={`px-3 py-1 rounded-full text-xs border ${darkMode
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
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium"
                    target="_blank"
                  >
                    <Github className="w-4 h-4" />
                    Github
                  </a>
                )}

                {project.dashboard && (
                  <a
                    href={project.dashboard}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${darkMode
                      ? "border-gray-600 text-white hover:bg-gray-800"
                      : "border-gray-300 text-gray-800 hover:bg-gray-100"
                      }`}
                    target="_blank"
                  >
                    <BarChart3 className="w-4 h-4" />
                    Dashboard
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;