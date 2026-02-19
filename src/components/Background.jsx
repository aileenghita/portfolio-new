import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const Background = ({ darkMode }) => {
  const baseBg = darkMode
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
    : "bg-gradient-to-br from-orange-50 via-white to-orange-100";

  const cardBg = darkMode
    ? "bg-white/5 border-white/10"
    : "bg-white/70 border-gray-200/60";

  const textPrimary = darkMode ? "text-white" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-300" : "text-gray-700";
  const textMuted = darkMode ? "text-gray-400" : "text-gray-600";

  const items = [
    {
      type: "work",
      title: "Software Engineer",
      org: "PT Kokatto Teknologi Global",
      location: "Jakarta, Indonesia",
      period: "Jan 2023 – Oct 2024",
      bullets: [
        "Built and maintained frontend apps for outbound messaging, supporting broadcasts up to 10,000 recipients per batch.",
        "Integrated multiple APIs (WhatsApp Business, Shopify, Email, Voice Call).",
        "Implemented reporting pages by embedding Metabase dashboards and assisting SQL query modifications for data validation.",
        "Collaborated with cross-functional teams, aligning technical feasibility with business needs and supporting release cycles (testing, hotfix, deployments).",
      ],
    },
    {
      type: "work",
      title: "Junior Android Developer",
      org: "PT Kokatto Teknologi Global",
      location: "Jakarta, Indonesia",
      period: "Apr 2022 – Jan 2023",
      bullets: [
        "Developed Android app with Kotlin + MVVM; reached 50,000+ downloads.",
        "Implemented user flows, transaction handling, and product features; integrated REST APIs.",
        "Supported fraud-handling features and added unit tests (JUnit, Robolectric) for stability.",
      ],
    },
    {
      type: "work",
      title: "Technical Team Internship",
      org: "PT Solusi Tiga Selaras",
      location: "Jakarta, Indonesia",
      period: "Feb 2021 – Feb 2022",
      bullets: [
        "Built product landing page using Laravel + Bootstrap.",
        "Created client-facing presentations for Genesys solution flows and use cases.",
        "Documented IVR (Automated Callback) input–output flows for a banking client using Excel.",
      ],
    },
  ];

  const education = [
    {
      title: "Master of Data Science & Business Analytics",
      org: "Asia Pacific University, Malaysia",
      period: "2025-2026",
      bullets: ["Focus: Business Intelligence", "GPA:-"],
    },
    {
      title: "Bachelor of Computer Science",
      org: "Bina Nusantara University, Indonesia",
      period: "2018-2022",
      bullets: ["Focus: Interactive Multimedia", "GPA: 3.42/4.00"],
    },
  ];

  const SectionHeader = ({ icon, label, title }) => (
    <div className="flex items-center gap-3 mt-12">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md">
        {icon}
      </div>
      <div>
        <p className={`text-sm ${textMuted}`}>{label}</p>
        <h3 className={`text-xl font-semibold ${textPrimary}`}>{title}</h3>
      </div>
    </div>
  );

  const TimelineItem = ({ item, index }) => {
    const isWork = item.type === "work";
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, delay: index * 0.04 }}
        className="relative pl-10"
      >
        {/* Dot */}
        <div className="absolute left-2 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow" />
        {/* Card */}
        <div
          className={`rounded-2xl border ${cardBg} backdrop-blur-lg shadow-lg p-6 transition
          hover:-translate-y-0.5 hover:shadow-xl`}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${
                    darkMode
                      ? "border-white/10 text-gray-200 bg-white/5"
                      : "border-gray-200 text-gray-700 bg-white/60"
                  }`}
                >
                  {isWork ? "Work" : "Education"}
                </span>
              </div>

              <h4 className={`mt-2 text-lg font-semibold ${textPrimary}`}>
                {item.title}
              </h4>

              <p className={`mt-1 ${textSecondary}`}>
                {item.org}
              </p>

              <div className={`mt-2 flex flex-wrap gap-3 text-sm ${textMuted}`}>
                {item.location && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {item.location}
                  </span>
                )}
                {item.period && (
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {item.period}
                  </span>
                )}
              </div>
            </div>

            {/* Right mini accent */}
            <div className="hidden sm:block">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/15 to-amber-500/15 blur-sm" />
            </div>
          </div>

          <ul className={`mt-4 space-y-2 text-sm ${textMuted}`}>
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="background" className={`py-20 lg:py-28 px-6 lg:px-20 ${baseBg}`}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className={`text-3xl lg:text-4xl font-bold ${textPrimary}`}>
            Experience &{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto ${textSecondary}`}>
            A quick overview of where I’ve worked and what I’ve studied — focused on impact and practical skills.
          </p>
        </motion.div>

        {/* Work Experience */}
        <SectionHeader
          icon={<Briefcase className="w-5 h-5" />}
          label="Career"
          title="Work Experience"
        />

        <div className="relative mt-6">
          {/* Timeline line */}
          <div
            className={`absolute left-3 top-0 bottom-0 w-px ${
              darkMode ? "bg-white/10" : "bg-gray-200"
            }`}
          />
          <div className="space-y-6">
            {items.map((it, idx) => (
              <TimelineItem key={`${it.title}-${idx}`} item={it} index={idx} />
            ))}
          </div>
        </div>

        {/* Education */}
        <SectionHeader
          icon={<GraduationCap className="w-5 h-5" />}
          label="Academic"
          title="Education"
        />

        <div className="relative mt-6">
          <div
            className={`absolute left-3 top-0 bottom-0 w-px ${
              darkMode ? "bg-white/10" : "bg-gray-200"
            }`}
          />
          <div className="space-y-6">
            {education.map((ed, idx) => (
              <TimelineItem
                key={`${ed.title}-${idx}`}
                item={{ ...ed, type: "edu", location: "" }}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;