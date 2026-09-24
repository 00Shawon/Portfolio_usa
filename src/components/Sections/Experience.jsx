import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

const Experience = () => {
  const professionalExperience = [
    {
      id: 1,
      role: "Communications Officer",
      company: "Stellerbyte Ltd — London, UK (Remote)",
      duration: "August 2025 – June 2026",
      type: "Professional Experience",
      icon: Briefcase,
     bullets: [
  "Designed visual communication materials for digital campaigns and audience-facing content, translating communication objectives into clear and engaging graphics.",

  "Supported communications work through content development, visual design, messaging, and audience-focused digital materials across remote projects.",

  "Developed digital storytelling content that combined visual communication, narrative structure, and accessible presentation to communicate complex ideas to diverse audiences.",
],
    },

    {
      id: 2,
      role: "Communications Officer",
      company: "Samrat-Bazar — Khulna, Bangladesh",
      duration: "January 2024 – June 2025",
      type: "Professional Experience",
      icon: Briefcase,
      bullets: [
        "Planned and executed a local communication and marketing campaign to increase customer engagement and strengthen product outreach.",
        "Developed promotional messaging tailored to local audiences and monitored campaign response to refine communication.",
        "Contributed to a 10% increase in sales during the campaign period through targeted promotional communication.",
      ],
    },

    {
      id: 3,
      role: "Freelance Communications & Digital Media Designer",
      company: "Fiverr — Remote",
      duration: "February 2024 – Present",
      type: "Independent Practice",
      icon: Briefcase,
      bullets: [
        "Designed and built 10+ audience-facing digital communication products, translating client requirements into accessible and visually structured content.",
        "Applied user-centered content design to organize complex information for public-facing and non-technical audiences.",
        "Combined visual communication and digital tools to develop websites, graphics, and interactive communication materials.",
      ],
    },
  ];

  const teachingExperience = [
    {
      id: 1,
      role: "IELTS Instructor & Tutor",
      company: "Lexicon + Independent Instruction",
      duration: "Teaching Experience",
      bullets: [
        "Provided IELTS instruction with emphasis on clear explanation, structured feedback, and practical communication skills.",
        "Adapted lessons and feedback to different learner needs, proficiency levels, and communication challenges.",
      ],
    },
    {
      id: 2,
      role: "Subject Teacher",
      company: "Secondary & Higher Secondary Learners",
      duration: "Teaching Experience",
      bullets: [
        "Taught History, Social Science, ICT, and English to Class 11–12 learners.",
        "Explained complex academic concepts in accessible ways while adapting teaching approaches to different levels of understanding.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-black/[0.07] bg-[#f3f1ed] dark:border-white/[0.08] dark:bg-[#151515]"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-6 border-b border-black/[0.08] pb-7 dark:border-white/[0.08] lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-secondary" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-secondary dark:text-gray-400">
                Experience
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.045em] text-charcoal dark:text-white sm:text-4xl">
              Work shaped by communication.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <p className="max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
              Professional communication, independent digital practice, and
              teaching experience built around clarity and audience needs.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            PROFESSIONAL EXPERIENCE
        ====================================================== */}

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Briefcase
                size={14}
                strokeWidth={1.5}
                className="text-accent"
              />

              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal dark:text-white">
                Professional Experience
              </h3>
            </div>

            <span className="font-mono text-[9px] tracking-[0.12em] text-gray-400">
              03 ROLES
            </span>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div
              aria-hidden="true"
              className="absolute left-[27%] top-1 hidden h-[calc(100%+1rem)] w-px bg-black/[0.09] md:block dark:bg-white/[0.09]"
            />

            <div className="space-y-10 md:space-y-12">
              {professionalExperience.map((exp, index) => {
                const Icon = exp.icon;

                return (
                  <motion.article
                    key={exp.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.06,
                    }}
                  >
                    <div className="grid gap-5 md:grid-cols-[27%_1fr] md:gap-10">
                      {/* Meta */}
                      <div className="relative md:pr-10 md:text-right">
                        <div className="absolute right-[-4px] top-1.5 hidden h-2 w-2 rounded-full border border-accent bg-[#f3f1ed] md:block dark:bg-[#151515]" />

                        <div className="mb-3 flex items-center gap-3 md:hidden">
                          <span className="h-2 w-2 rounded-full bg-accent" />

                          <span className="font-mono text-[9px] text-gray-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal dark:text-white">
                          {exp.duration}
                        </p>

                        <div className="mt-2 flex items-center gap-1.5 md:justify-end">
                          <Icon
                            size={11}
                            strokeWidth={1.5}
                            className="text-accent"
                          />

                          <span className="text-[8px] font-medium uppercase tracking-[0.13em] text-gray-400">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="group border-b border-black/[0.08] pb-10 dark:border-white/[0.08]">
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <h4 className="text-xl font-semibold tracking-[-0.035em] text-charcoal transition-colors duration-300 group-hover:text-accent dark:text-white">
                              {exp.role}
                            </h4>

                            <p className="mt-1.5 text-sm text-secondary dark:text-gray-400">
                              {exp.company}
                            </p>
                          </div>

                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.4}
                            className="mt-1 hidden text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent sm:block dark:text-gray-600"
                          />
                        </div>

                        <div className="mt-5 space-y-3">
                          {exp.bullets.map((bullet, bulletIndex) => (
                            <div
                              key={bulletIndex}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent" />

                              <p className="max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                                {bullet}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            TEACHING & INSTRUCTION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-black/[0.08] pt-12 dark:border-white/[0.08]"
        >
          <div className="mb-7 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap
                size={15}
                strokeWidth={1.5}
                className="text-accent"
              />

              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal dark:text-white">
                Teaching & Instruction
              </h3>
            </div>

            <span className="font-mono text-[9px] tracking-[0.12em] text-gray-400">
              COMMUNICATION PRACTICE
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {teachingExperience.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group border-t border-black/[0.08] pt-5 dark:border-white/[0.08]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold tracking-[-0.03em] text-charcoal transition-colors duration-300 group-hover:text-accent dark:text-white">
                      {exp.role}
                    </h4>

                    <p className="mt-1 text-sm text-secondary dark:text-gray-400">
                      {exp.company}
                    </p>
                  </div>

                  <BookOpen
                    size={15}
                    strokeWidth={1.4}
                    className="mt-1 text-gray-300 transition-colors duration-300 group-hover:text-accent dark:text-gray-600"
                  />
                </div>

                <div className="mt-5 space-y-3">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <div
                      key={bulletIndex}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent" />

                      <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            COMMON THREAD
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 border-t border-black/[0.08] pt-6 dark:border-white/[0.08]"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">
              Throughline
            </p>

            <p className="max-w-2xl text-[11px] leading-5 text-gray-400 sm:text-right">
              Across professional communication, digital practice, and
              teaching, my work centers on making information clearer,
              adapting communication to audiences, and choosing appropriate
              tools for the context.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;