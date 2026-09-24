import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Edit3,
  Globe,
  Monitor,
} from "lucide-react";

const WhatIDo = () => {
  const capabilities = [
    {
      number: "01",
      title: "Digital Storytelling",
      icon: BookOpen,
      text: "I turn complex social, humanitarian, environmental, and community issues into accessible digital narratives.",
    },
    {
      number: "02",
      title: "Visual Communication",
      icon: Monitor,
      text: "I use photography, mapping, visualization, graphics, and multimedia to make information easier to see and understand.",
    },
    {
      number: "03",
      title: "Content & Editorial",
      icon: Edit3,
      text: "I research, write, edit, and structure content with attention to audience, context, clarity, and purpose.",
    },
    {
      number: "04",
      title: "Interactive Media",
      icon: Globe,
      text: "I build web-based experiences that combine communication, information, interaction, and technology.",
    },
  ];

  return (
    <section
      id="what-i-do"
      className="relative overflow-hidden border-b border-black/[0.07] bg-[#f3f1ed] dark:border-white/[0.08] dark:bg-[#151515]"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* =====================================================
              LEFT — SECTION INTRO
          ====================================================== */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-accent">
                  Practice
                </span>
              </div>

              <h2 className="mt-7 max-w-sm text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-charcoal dark:text-white sm:text-5xl">
                Communication is the starting point.
              </h2>

              <p className="mt-7 max-w-sm text-[15px] leading-7 text-gray-600 dark:text-gray-400">
                I combine communication thinking with digital tools to create
                work that is clear, visual, interactive, and grounded in
                context.
              </p>

              {/* Small conceptual note */}
              <div className="mt-12 border-t border-black/[0.09] pt-5 dark:border-white/[0.09]">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Working across
                </p>

                <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500 dark:text-gray-500">
                  Media · Technology · Visual Culture · Public Communication
                </p>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — CAPABILITIES
          ====================================================== */}
          <div className="lg:col-span-8">
            <div className="border-t border-black/[0.1] dark:border-white/[0.1]">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <motion.div
                    key={capability.number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative grid gap-5 border-b border-black/[0.1] py-7 dark:border-white/[0.1] sm:grid-cols-[55px_1fr_auto] sm:items-start sm:gap-6 sm:py-8"
                  >
                    {/* Number */}
                    <span className="pt-1 font-mono text-[10px] tracking-[0.1em] text-gray-400">
                      {capability.number}
                    </span>

                    {/* Main content */}
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-medium tracking-[-0.03em] text-charcoal transition-colors duration-300 group-hover:text-accent dark:text-white dark:group-hover:text-accent sm:text-2xl">
                          {capability.title}
                        </h3>

                        <span className="hidden h-px w-8 bg-accent opacity-0 transition-all duration-300 group-hover:w-12 group-hover:opacity-100 sm:block" />
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:text-[15px] sm:leading-7">
                        {capability.text}
                      </p>
                    </div>

                    {/* Icon / interaction */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.1] text-gray-400 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white dark:border-white/[0.12]">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent dark:text-gray-600"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 border-t border-black/[0.08] pt-6 dark:border-white/[0.08]"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-500">
              My approach treats technology as a medium for communication—not
              an end in itself.
            </p>

            <a
              href="#work"
              className="group inline-flex w-fit items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-accent dark:text-white"
            >
              See the work
              <ArrowUpRight
                size={13}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;