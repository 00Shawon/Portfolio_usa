import { motion } from "framer-motion";
import {
  FiUsers,
  FiCpu,
  FiMessageCircle,
  FiRepeat,
  FiArrowUpRight,
} from "react-icons/fi";

const Philosophy = () => {
  const principles = [
    {
      number: "01",
      icon: FiUsers,
      title: "People shape the medium",
      text: "I begin with audiences, communities, and lived contexts—not with a technology looking for a problem to solve.",
    },
    {
      number: "02",
      icon: FiMessageCircle,
      title: "Context shapes meaning",
      text: "Language, culture, place, access, and representation influence how information is encountered and understood.",
    },
    {
      number: "03",
      icon: FiCpu,
      title: "Media shape experience",
      text: "A map, timeline, interface, or visualization does more than carry information; its structure influences what becomes visible and how a story is encountered.",
    },
    {
      number: "04",
      icon: FiRepeat,
      title: "Design, then question",
      text: "I build, observe, and revise—using the making process itself to think about communication, representation, and access.",
    },
  ];

  return (
    <section
      id="approach"
      className="relative overflow-hidden border-b border-black/[0.07] bg-[#faf9f7] dark:border-white/[0.08] dark:bg-[#111111]"
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
          className="grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-accent" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-accent">
                Approach
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-charcoal dark:text-white sm:text-4xl">
              The tools we use to communicate also shape what can be understood.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <p className="max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
              My thinking is informed by media theory, communication research,
              and practical experience building digital stories.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            MCLUHAN CONCEPT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 grid gap-8 border-y border-black/[0.08] py-9 dark:border-white/[0.08] lg:grid-cols-12 lg:gap-12"
        >
          {/* Theory */}
          <div className="lg:col-span-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">
              Media theory
            </p>

            <div className="mt-5">
              <p className="font-serif text-2xl italic tracking-[-0.02em] text-charcoal dark:text-white sm:text-3xl">
                “The medium is the message.”
              </p>

              <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-gray-400">
                Marshall McLuhan · Understanding Media
              </p>
            </div>
          </div>

          {/* Interpretation */}
          <div className="lg:col-span-8">
            <p className="max-w-4xl text-xl font-medium leading-8 tracking-[-0.025em] text-charcoal dark:text-white sm:text-2xl sm:leading-9">
              I think of digital media not simply as containers for stories,
              but as{" "}
              <span className="text-secondary">
                environments that influence what people can see, access,
                navigate, and understand.
              </span>
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500 dark:text-gray-400">
              That perspective influences how I approach interactive maps,
              visualizations, bilingual interfaces, and digital storytelling:
              the communication problem comes first, but the form of the medium
              is part of the problem too.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            PRINCIPLES
        ====================================================== */}

        <div className="mt-12 grid gap-px border border-black/[0.08] bg-black/[0.08] dark:border-white/[0.08] dark:bg-white/[0.08] md:grid-cols-2">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className="group relative bg-[#faf9f7] p-6 transition-colors duration-300 hover:bg-white dark:bg-[#111111] dark:hover:bg-[#171717] sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] tracking-[0.15em] text-gray-400">
                    {principle.number}
                  </span>

                  <Icon
                    size={16}
                    strokeWidth={1.4}
                    className="text-gray-300 transition-colors duration-300 group-hover:text-accent dark:text-gray-600"
                  />
                </div>

                <h3 className="mt-9 text-lg font-semibold tracking-[-0.03em] text-charcoal transition-colors duration-300 group-hover:text-accent dark:text-white">
                  {principle.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {principle.text}
                </p>

                <span className="absolute bottom-7 left-7 h-px w-0 bg-accent transition-all duration-500 group-hover:w-8" />
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            RESEARCH ORIENTATION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 border-t border-black/[0.08] pt-7 dark:border-white/[0.08]"
        >
          <div className="grid gap-7 sm:grid-cols-[190px_1fr] sm:gap-10">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">
                Research interests
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.13em] text-gray-400">
                Where theory meets practice
              </p>
            </div>

            <div>
              <p className="max-w-4xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                My interests center on{" "}
                <span className="font-medium text-charcoal dark:text-gray-200">
                  community communication, digital storytelling, media
                  representation, participatory approaches, and the social
                  effects of digital media
                </span>
                . I am particularly interested in how communication
                technologies shape visibility, audience interpretation, and
                participation—and how the design of a medium can influence the
                stories that become easier or harder to tell.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "Community Communication",
                  "Digital Storytelling",
                  "Media Representation",
                  "Participatory Media",
                  "Digital Media Effects",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="text-[9px] font-medium uppercase tracking-[0.14em] text-gray-400"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CONNECTION TO WORK
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex items-center justify-between border-t border-black/[0.08] pt-5 dark:border-white/[0.08]"
        >
          <p className="max-w-2xl text-[11px] leading-5 text-gray-400">
            I use digital tools to communicate stories—but I also ask how those
            tools change the story, the audience, and the experience of
            communication itself.
          </p>

          <a
            href="#work"
            className="group hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500 transition-colors hover:text-accent sm:inline-flex"
          >
            See the work

            <FiArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;