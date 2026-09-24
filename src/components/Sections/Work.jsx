import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Layers3,
  Map,
  Users,
} from "lucide-react";
import { useState } from "react";

import rohingyaImg from "./../../assets/Rohinga.jpeg";
import sundarbansHero from "./../../assets/sundarbans-hero.png";

const FeaturedWork = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const featured = [
    {
      id: 1,
      title: "Sundarbans Climate Displacement Platform",
      subtitle:
        "Geospatial storytelling on climate displacement, environmental security, and community communication.",
      label: "ENVIRONMENTAL COMMUNICATION",
      category: "Digital Platform",

      researchLens:
        "Climate communication · Community storytelling · Environmental security",

      communicationProblem:
        "How can digital communication make climate displacement visible while remaining accessible to communities working within severe infrastructural constraints?",

      description:
        "An interactive geospatial storytelling platform combining sea-level rise visualization with Bangla-medium field interviews from the coastal unions of Gabura and Padmapukur.",

      approach:
        "Combined community-focused storytelling, interactive mapping, and low-bandwidth web design. Field testimonies were structured alongside spatial and environmental information to connect lived experience with broader climate processes.",

      contribution:
        "Demonstrates how interactive communication can connect environmental data with community experience while accounting for unequal access to digital infrastructure.",

      image: sundarbansHero,

      tech: ["React", "Leaflet.js", "Geospatial Mapping", "Data Visualization"],

      liveLink: "https://sundorban.vercel.app/",
      githubLink: "https://github.com/00Shawon/Sundorban",
    },

    {
      id: 2,
      title: "Witnessing Rohingya",
      subtitle:
        "Bilingual digital storytelling and participatory approaches to humanitarian documentation.",
      label: "HUMANITARIAN COMMUNICATION",
      category: "Interactive Archive",

      researchLens:
        "Humanitarian communication · Participatory documentation · Digital storytelling",

      communicationProblem:
        "How can humanitarian documentation represent displaced people as active producers of knowledge rather than only as subjects of crisis narratives?",

      description:
        "A bilingual digital storytelling platform combining geospatial mapping of camp settlements, a structured displacement timeline, and community-oriented testimony.",

      approach:
        "Structured crisis documentation through interactive mapping, bilingual storytelling, and principles drawn from participatory approaches such as Photovoice. The platform was designed to make complex displacement histories more accessible while centering the perspectives represented within them.",

      contribution:
        "Explores how digital storytelling and participatory communication principles can reshape the way displacement, dignity, and community experience are represented for public audiences.",

      image: rohingyaImg,

      tech: [
        "React.js",
        "Data Visualization",
        "Interactive Mapping",
        "Bilingual Content",
      ],

      liveLink: "https://rohingya-platform.vercel.app/",
      githubLink: "#",
    },
  ];

  const toggleProject = (id) => {
    setExpandedProject((current) => (current === id ? null : id));
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden border-b border-black/[0.07] bg-[#faf9f7] dark:border-white/[0.08] dark:bg-[#111111]"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-6 border-b border-black/[0.08] pb-7 dark:border-white/[0.08] lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-accent" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-accent">
                Selected Work
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.045em] text-charcoal dark:text-white sm:text-4xl">
              Communication, research & storytelling.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <p className="max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
              Selected projects exploring how digital media can communicate
              complex social, environmental, and humanitarian issues.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <div className="space-y-28 lg:space-y-36">
          {featured.map((project, index) => {
            const isExpanded = expandedProject === project.id;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* =================================================
                    MAIN PROJECT
                ================================================== */}

                <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
                  {/* IMAGE */}
                  <div
                    className={`lg:col-span-7 ${
                      index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative">
                      <div className="absolute -top-6 left-0 font-mono text-[9px] tracking-[0.15em] text-gray-400">
                        PROJECT / {String(project.id).padStart(2, "0")}
                      </div>

                      <div className="group relative aspect-[16/10] overflow-hidden bg-[#e7e2db] dark:bg-[#232323]">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block h-full w-full"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.025]"
                          />

                          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.22]" />

                          {/* Category */}
                          <div className="absolute left-4 top-4">
                            <span className="border border-white/25 bg-black/20 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                              {project.category}
                            </span>
                          </div>

                          {/* View indicator */}
                          <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white text-charcoal opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <ExternalLink size={14} strokeWidth={1.5} />
                          </div>

                          {/* Bottom hover */}
                          <div className="absolute inset-x-0 bottom-0 p-5">
                            <div className="translate-y-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                              <p className="text-[9px] uppercase tracking-[0.18em] text-white/65">
                                {project.label}
                              </p>

                              <p className="mt-1 text-sm font-medium text-white">
                                Open interactive project
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>

                      {/* Image caption */}
                      <div className="mt-3 flex items-center justify-between border-t border-black/[0.08] pt-3 dark:border-white/[0.08]">
                        <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-gray-400">
                          {project.category}
                        </p>

                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400 transition-colors hover:text-accent"
                        >
                          Live Project
                          <ArrowUpRight
                            size={12}
                            strokeWidth={1.5}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`lg:col-span-5 ${
                      index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Label */}
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {project.label}
                    </p>

                    {/* Title */}
                    <h3 className="mt-3 text-2xl font-semibold leading-[1.08] tracking-[-0.04em] text-charcoal dark:text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      {project.subtitle}
                    </p>

                    {/* Short description */}
                    <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    {/* =================================================
                        ACTION ROW
                    ================================================== */}

                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => toggleProject(project.id)}
                        aria-expanded={isExpanded}
                        className="group inline-flex items-center gap-2 border-b border-black/20 pb-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-charcoal transition-colors hover:border-accent hover:text-accent dark:border-white/20 dark:text-white"
                      >
                        {isExpanded
                          ? "Hide project details"
                          : "More about project"}

                        {isExpanded ? (
                          <ArrowUp
                            size={13}
                            strokeWidth={1.5}
                            className="transition-transform duration-300"
                          />
                        ) : (
                          <ArrowDown
                            size={13}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover:translate-y-0.5"
                          />
                        )}
                      </button>

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent dark:bg-white dark:text-charcoal dark:hover:bg-gray-200"
                      >
                        Explore Project
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    EXPANDED RESEARCH / CASE STUDY DETAILS
                ================================================== */}

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        marginTop: 48,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-y border-black/[0.08] dark:border-white/[0.08]">
                        <div className="grid gap-8 py-8 lg:grid-cols-12 lg:gap-12">
                          {/* Research lens */}
                          <div className="lg:col-span-4">
                            <div className="flex items-start gap-3">
                              <BookOpen
                                size={15}
                                strokeWidth={1.5}
                                className="mt-0.5 shrink-0 text-accent"
                              />

                              <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">
                                  Research lens
                                </p>

                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                  {project.researchLens}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Communication question */}
                          <div className="lg:col-span-4">
                            <div className="flex items-start gap-3">
                              <Map
                                size={15}
                                strokeWidth={1.5}
                                className="mt-0.5 shrink-0 text-accent"
                              />

                              <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">
                                  Communication question
                                </p>

                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                  {project.communicationProblem}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Approach */}
                          <div className="lg:col-span-4">
                            <div className="flex items-start gap-3">
                              <Layers3
                                size={15}
                                strokeWidth={1.5}
                                className="mt-0.5 shrink-0 text-accent"
                              />

                              <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">
                                  Approach
                                </p>

                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                  {project.approach}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Contribution */}
                          <div className="lg:col-span-8">
                            <div className="border-l border-accent/50 pl-4">
                              <div className="flex items-start gap-3">
                                <Users
                                  size={15}
                                  strokeWidth={1.5}
                                  className="mt-0.5 shrink-0 text-accent"
                                />

                                <div>
                                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">
                                    Project contribution
                                  </p>

                                  <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    {project.contribution}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="lg:col-span-4">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                              Built with
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {project.tech.map((tool) => (
                                <span
                                  key={tool}
                                  className="border border-black/[0.08] px-2.5 py-1 text-[9px] font-medium text-gray-500 dark:border-white/[0.1] dark:text-gray-400"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* ======================================================
            FOOTER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-black/[0.08] pt-6 dark:border-white/[0.08]"
        >
          <p className="max-w-2xl text-[11px] leading-5 text-gray-400">
            These projects demonstrate how communication questions can guide the
            use of digital storytelling, mapping, visualization, and web
            technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
