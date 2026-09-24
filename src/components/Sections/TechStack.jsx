import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiHtml5,
  SiVite,
  SiGit,
  SiVercel,
} from "react-icons/si";

import {
  FiCode,
  FiPenTool,
  FiCamera,
  FiMap,
  FiVideo,
  FiBarChart2,
  FiBookOpen,
  FiLayout,
  FiMessageCircle,
  FiSearch,
  FiArrowUpRight,
  FiLayers,
} from "react-icons/fi";

const TechStack = () => {
  const communicationSkills = [
    {
      name: "Digital Storytelling",
      icon: <FiBookOpen />,
      group: "Story",
    },
    {
      name: "Content Creation",
      icon: <FiPenTool />,
      group: "Editorial",
    },
    {
      name: "Visual Communication",
      icon: <FiLayout />,
      group: "Visual",
    },
    {
      name: "Journalism",
      icon: <FiMessageCircle />,
      group: "Editorial",
    },
    {
      name: "Research",
      icon: <FiSearch />,
      group: "Research",
    },
    {
      name: "Photography",
      icon: <FiCamera />,
      group: "Visual",
    },
    {
      name: "Data Visualization",
      icon: <FiBarChart2 />,
      group: "Data",
    },
    {
      name: "Mapping",
      icon: <FiMap />,
      group: "Spatial",
    },
    {
      name: "Video / Multimedia",
      icon: <FiVideo />,
      group: "Media",
    },
    {
      name: "Editorial Communication",
      icon: <FiPenTool />,
      group: "Editorial",
    },
  ];

  const technicalTools = [
    {
      name: "React",
      icon: <SiReact />,
      category: "Frontend",
      color: "text-[#61DAFB]",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      category: "Language",
      color: "text-[#F7DF1E]",
    },
    {
      name: "HTML / CSS",
      icon: <SiHtml5 />,
      category: "Web",
      color: "text-[#E34F26]",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      category: "UI",
      color: "text-[#06B6D4]",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      category: "Tooling",
      color: "text-[#646CFF]",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      category: "Backend",
      color: "text-[#FFCA28]",
    },
    {
      name: "Git / GitHub",
      icon: <SiGit />,
      category: "Version Control",
      color: "text-[#F05032]",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      category: "Deployment",
      color: "text-black dark:text-white",
    },
    {
      name: "Canva",
      icon: <FiLayout />,
      category: "Design",
      color: "text-[#00C4CC]",
    },
    {
      name: "CapCut",
      icon: <FiVideo />,
      category: "Multimedia",
      color: "text-black dark:text-white",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Research",
      text: "Questions, context, audiences",
    },
    {
      number: "02",
      title: "Story",
      text: "Narrative, content, meaning",
    },
    {
      number: "03",
      title: "Design",
      text: "Visual structure, hierarchy",
    },
    {
      number: "04",
      title: "Build",
      text: "Interactive digital experience",
    },
  ];

  return (
    <section
      id="tech"
      className="relative overflow-hidden border-b border-black/[0.07] bg-[#f3f1ed] dark:border-white/[0.08] dark:bg-[#151515]"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-black/[0.08] pb-7 dark:border-white/[0.08] lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-secondary" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-secondary dark:text-gray-400">
                Toolkit
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.045em] text-charcoal dark:text-white sm:text-4xl">
              Skills for thinking, making, and communicating.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <p className="max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
              A combination of communication methods and digital tools I use to
              research, structure, visualize, and build stories.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            COMMUNICATION PRACTICE
        ====================================================== */}

        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FiMessageCircle
                size={14}
                strokeWidth={1.5}
                className="text-accent"
              />

              <h3 className="text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal dark:text-white">
                Communication Practice
              </h3>
            </div>

            <span className="font-mono text-[9px] tracking-[0.12em] text-gray-400">
              10 AREAS
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {communicationSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className="group relative overflow-hidden border border-black/[0.08] bg-[#faf9f7] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] dark:border-white/[0.08] dark:bg-[#111111] dark:hover:bg-[#171717]"
              >
                {/* Accent line */}
                <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <span className="font-mono text-[8px] tracking-[0.12em] text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg text-gray-300 transition-colors duration-300 group-hover:text-accent dark:text-gray-600">
                    {skill.icon}
                  </span>
                </div>

                <div className="mt-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-gray-400">
                    {skill.group}
                  </p>

                  <p className="mt-1.5 text-sm font-medium tracking-[-0.02em] text-charcoal dark:text-gray-200">
                    {skill.name}
                  </p>
                </div>

                {/* Hover arrow */}
                <FiArrowUpRight
                  size={13}
                  className="absolute bottom-4 right-4 text-gray-300 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            TECHNICAL TOOLS
        ====================================================== */}

        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FiCode
                size={14}
                strokeWidth={1.5}
                className="text-secondary"
              />

              <h3 className="text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal dark:text-white">
                Digital & Technical Tools
              </h3>
            </div>

            <span className="font-mono text-[9px] tracking-[0.12em] text-gray-400">
              10 TOOLS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {technicalTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="group flex min-h-[112px] flex-col justify-between border border-black/[0.08] bg-[#faf9f7] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/15 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] dark:border-white/[0.08] dark:bg-[#111111] dark:hover:border-white/15 dark:hover:bg-[#171717]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[8px] tracking-[0.1em] text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FiArrowUpRight
                    size={12}
                    className="text-gray-300 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary group-hover:opacity-100"
                  />
                </div>

                <div>
                  <div
                    className={`text-2xl transition-transform duration-300 group-hover:-translate-y-0.5 ${tool.color}`}
                  >
                    {tool.icon}
                  </div>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal dark:text-gray-200">
                    {tool.name}
                  </p>

                  <p className="mt-0.5 text-[8px] uppercase tracking-[0.12em] text-gray-400">
                    {tool.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            THINKING → MAKING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 border-y border-black/[0.08] py-7 dark:border-white/[0.08]"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <FiLayers
                  size={14}
                  strokeWidth={1.5}
                  className="text-accent"
                />

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">
                  How the skills connect
                </p>
              </div>

              <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
                My technical skills support a communication process rather than
                existing separately from it.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-0">
                {workflow.map((item, index) => (
                  <div key={item.number} className="relative">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[8px] text-gray-400">
                        {item.number}
                      </span>

                      {index < workflow.length - 1 && (
                        <span className="hidden h-px flex-1 bg-black/10 sm:block dark:bg-white/10" />
                      )}
                    </div>

                    <h4 className="mt-4 text-sm font-medium tracking-[-0.02em] text-charcoal dark:text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 max-w-[130px] text-[10px] leading-4 text-gray-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL POSITIONING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            Communication · Research · Design · Technology
          </p>

          <a
            href="#approach"
            className="group inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500 transition-colors hover:text-accent"
          >
            Why I work this way

            <FiArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;