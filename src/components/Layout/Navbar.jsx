import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle";

const navLinks = [
  { name: "What I Do", href: "#what-i-do", number: "01" },
  { name: "Visual Design", href: "#design", number: "02" },
  { name: "Selected Work", href: "#work", number: "03" },
  { name: "Experience", href: "#experience", number: "04" },
  { name: "Approach", href: "#approach", number: "05" },
  { name: "Skills", href: "#tech", number: "06" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleTopClick = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    closeMobileMenu();
  };

  return (
    <>
      {/* =====================================================
          DESKTOP + MOBILE HEADER
      ====================================================== */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "border-b border-black/[0.07] bg-[#faf9f7]/90 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#111111]/90"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10 transition-all duration-500 ${
            isScrolled ? "py-3.5" : "py-5"
          }`}
        >
          {/* BRAND */}
          <a
            href="#"
            onClick={handleTopClick}
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="text-[1.15rem] font-semibold tracking-[-0.05em] text-charcoal dark:text-white">
              MSH<span className="text-accent">.</span>
            </span>

            <span className="hidden h-4 w-px bg-black/15 dark:bg-white/15 sm:block" />

            <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 sm:block">
              Media × Technology
            </span>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <div className="hidden items-center gap-7 md:flex lg:gap-9">
            <nav aria-label="Primary navigation">
              <div className="flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? "location" : undefined}
                      className="group relative py-2"
                    >
                      <span
                        className={`text-[11px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                          isActive
                            ? "text-charcoal dark:text-white"
                            : "text-gray-500 dark:text-gray-400 group-hover:text-charcoal dark:group-hover:text-white"
                        }`}
                      >
                        {link.name}
                      </span>

                      <span
                        className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-300 ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="h-6 w-px bg-black/10 dark:bg-white/10" />

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-charcoal bg-charcoal px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent dark:border-white dark:bg-white dark:text-charcoal dark:hover:border-white dark:hover:bg-gray-200"
              >
                Get in touch
                <ArrowUpRight
                  size={13}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================== */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-charcoal transition-all duration-300 hover:border-black/20 hover:bg-black/[0.03] dark:border-white/10 dark:text-white dark:hover:border-white/20 dark:hover:bg-white/[0.05]"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                  >
                    <X size={19} strokeWidth={1.7} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                  >
                    <Menu size={19} strokeWidth={1.7} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMobileMenu}
            className="fixed inset-0 z-[60] cursor-default bg-black/35 backdrop-blur-[2px] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE NAVIGATION DRAWER
      ====================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            id="mobile-navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-0 z-[65] flex h-dvh w-[min(88vw,420px)] flex-col border-l border-black/[0.08] bg-[#faf9f7] dark:border-white/[0.08] dark:bg-[#111111] md:hidden"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-black/[0.07] px-6 py-5 dark:border-white/[0.08]">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gray-400">
                  Navigation
                </p>
                <p className="mt-1 text-sm font-medium text-charcoal dark:text-white">
                  Media × Technology
                </p>
              </div>

              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-charcoal transition-colors hover:bg-black/[0.04] dark:border-white/10 dark:text-white dark:hover:bg-white/[0.05]"
              >
                <X size={18} strokeWidth={1.7} />
              </button>
            </div>

            {/* Drawer navigation */}
            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <div className="flex flex-col">
                {navLinks.map((link, index) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + index * 0.055,
                        duration: 0.35,
                      }}
                      className="group flex items-center justify-between border-b border-black/[0.07] py-5 dark:border-white/[0.08]"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-mono text-[10px] transition-colors ${
                            isActive
                              ? "text-accent"
                              : "text-gray-400 dark:text-gray-500"
                          }`}
                        >
                          {link.number}
                        </span>

                        <span
                          className={`text-xl font-medium tracking-[-0.03em] transition-colors ${
                            isActive
                              ? "text-charcoal dark:text-white"
                              : "text-gray-600 dark:text-gray-400 group-hover:text-charcoal dark:group-hover:text-white"
                          }`}
                        >
                          {link.name}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.5}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "translate-x-0 text-accent opacity-100"
                            : "translate-x-[-4px] text-gray-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </motion.a>
                  );
                })}
              </div>

              {/* Contact CTA */}
              <motion.a
                href="#contact"
                onClick={closeMobileMenu}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.4 }}
                className="group mt-8 flex items-center justify-between rounded-2xl bg-charcoal px-5 py-5 text-white transition-all duration-300 hover:bg-accent dark:bg-white dark:text-charcoal dark:hover:bg-gray-200"
              >
                <div>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] opacity-55">
                    Open to conversation
                  </span>
                  <span className="mt-1 block text-base font-medium">
                    Get in touch
                  </span>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 dark:border-black/10">
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </motion.a>
            </nav>

            {/* Drawer footer */}
            <div className="border-t border-black/[0.07] px-6 py-5 dark:border-white/[0.08]">
              <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400">
                Mehedi Hassan Shawon
              </p>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                Developer · Media · Visual Communication
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;