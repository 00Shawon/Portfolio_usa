import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMonitor,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Contact = () => {
  const links = [
    {
      label: "Email",
      value: "mehedishawon121@gmail.com",
      href: "mailto:mehedishawon121@gmail.com",
      icon: FiMail,
    },
    {
      label: "LinkedIn",
      value: "Professional profile",
      href: "https://www.linkedin.com/in/mehedi-hassan-shawon/",
      icon: FiLinkedin,
    },
    {
      label: "Portfolio",
      value: "Professional Developer Portfolio",
      href: "https://fullstack-developer-portfolio-6d69.vercel.app/#projects",
      icon: FiMonitor,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-black/[0.07] bg-[#faf9f7] dark:border-white/[0.08] dark:bg-[#111111]"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-accent" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-accent">
                Contact
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-charcoal dark:text-white sm:text-4xl lg:text-5xl">
              Let's continue the conversation.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-[15px]">
              Open to conversations around communication, digital media,
              research, and collaborative work.
            </p>
          </motion.div>

          {/* Small closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-4 lg:justify-self-end"
          >
            <p className="max-w-xs text-[11px] leading-5 text-gray-400 lg:text-right">
              Communication · Digital Media · Storytelling · Research
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            CONTACT LINKS
        ====================================================== */}

        <div className="mt-14 border-y border-black/[0.08] dark:border-white/[0.08]">
          {links.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group grid grid-cols-[32px_90px_1fr_20px] items-center gap-3 border-b border-black/[0.07] py-5 last:border-b-0 dark:border-white/[0.07] sm:grid-cols-[36px_120px_1fr_24px]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-gray-400 transition-colors duration-300 group-hover:border-accent group-hover:text-accent dark:border-white/10">
                  <Icon size={14} strokeWidth={1.5} />
                </div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-gray-400">
                  {link.label}
                </span>

                <span className="min-w-0 truncate text-sm font-medium text-charcoal transition-colors duration-300 group-hover:text-accent dark:text-gray-200">
                  {link.value}
                </span>

                <FiArrowUpRight
                  size={14}
                  className="text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </motion.a>
            );
          })}
        </div>

        {/* =====================================================
            FOOTER NOTE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400">
            Mehedi Hassan Shawon
          </p>

          <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400">
            Developer & Media Theorist
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;