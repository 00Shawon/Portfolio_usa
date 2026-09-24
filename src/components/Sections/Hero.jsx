import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import profileImg from "../../assets/profilePicture.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#faf9f7] pt-28 text-charcoal dark:bg-[#111111] dark:text-white sm:pt-32"
    >
      {/* Subtle editorial grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      {/* Vertical editorial guide */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-black/[0.045] dark:bg-white/[0.05] lg:block"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-[1400px] items-center px-5 pb-12 sm:px-8 lg:px-10 lg:pb-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* =====================================================
              LEFT — MESSAGE
          ====================================================== */}
          <div className="lg:col-span-7 xl:pr-12">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-accent sm:w-10" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-accent sm:text-[10px]">
                Communication × Digital Media
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl text-[3.15rem] font-semibold leading-[0.94] tracking-[-0.06em] text-charcoal dark:text-white sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.7rem]"
            >
              I build digital media that makes{" "}
              <span className="text-secondary">complex stories clear.</span>
            </motion.h1>

            {/* Short supporting line */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8"
            >
              Interactive storytelling, visual communication, and technology
              for social and public-interest issues.
            </motion.p>

            <motion.div
  initial={{ opacity: 0, y: 14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.34,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="mt-7 border-l border-accent/60 pl-4"
>
  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">
    Research Interests
  </p>

  <p className="mt-1.5 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400">
    Community communication, digital storytelling, and the representation
    of social, environmental, and humanitarian issues through digital media.
  </p>
</motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.38,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent dark:bg-white dark:text-charcoal dark:hover:bg-gray-200"
              >
                Explore Work
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="https://drive.google.com/file/d/1PuW-iAR3-wllT2Gxa246ruyChnpRfXtU/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-charcoal transition-all duration-300 hover:border-black/25 hover:bg-white dark:border-white/10 dark:text-white dark:hover:border-white/25 dark:hover:bg-white/[0.04]"
              >
                View CV
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* Compact identity metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-black/[0.08] pt-4 dark:border-white/[0.08]"
            >
              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-gray-400">
                Developer & Media Theorist
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />

              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-gray-400">
                Mass Communication & Journalism
              </span>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — PORTRAIT
          ====================================================== */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[470px] lg:ml-auto"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e2db] dark:bg-[#222222]">
                <img
                  src={profileImg}
                  alt="Mehedi Hassan Shawon"
                  className="h-full w-full object-cover"
                  width="940"
                  height="1175"
                  fetchPriority="high"
                  decoding="async"
                />

                {/* Very subtle image treatment */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Editorial corner marks */}
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-5 h-12 w-12 border-l border-t border-white/60"
                />

                <span
                  aria-hidden="true"
                  className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-white/60"
                />
              </div>

              {/* Image caption */}
              <div className="mt-4 flex items-end justify-between border-t border-black/[0.08] pt-4 dark:border-white/[0.08]">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal dark:text-white">
                    Mehedi Hassan Shawon
                  </p>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    Khulna University · Bangladesh
                  </p>
                </div>

                <span className="font-mono text-[9px] tracking-[0.12em] text-gray-400">
                  01
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            SCROLL CUE
        ====================================================== */}
        <motion.a
          href="#what-i-do"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute bottom-7 left-5 hidden items-center gap-3 text-gray-400 transition-colors hover:text-accent sm:left-8 lg:flex lg:left-10"
          aria-label="Explore the next section"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10">
            <ArrowDownRight size={14} strokeWidth={1.5} />
          </span>

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;