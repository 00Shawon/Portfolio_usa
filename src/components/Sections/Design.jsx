import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ArrowUpRight,
  Palette,
  Users,
  Target,
  Calendar,
  Package,
  Type,
} from "lucide-react";

// ============================================================
// ASSETS
// ============================================================

import ecoFrontlinesImg from "../../assets/Design/8x5.jpg";
import lalSabujCampaignImg from "../../assets/Design/CTG-02.jpg";
import luminedgeAdmissionImg from "../../assets/Design/luminedge-admission-event.jpg";
import lalSabujYouthImg from "../../assets/Design/lal-sabuj-youth-empowerment.jpg";
import splashNShineBrandingImg from "../../assets/Design/splash-n-shine-brand-identity.jpg";
import splashNShineAdImg from "../../assets/Design/splash-n-shine-social-ad.png";

// ============================================================
// DATA
// ============================================================

const designs = [
  {
    id: 1,
    title: "Environmental Journalism Workshop",
    category: "Event Branding",
    image: ecoFrontlinesImg,
    clientName: "ecofrontlines & DW",
    projectDuration: "August 2023",
    designBrief:
      "Create a compelling visual identity for a 4-day environmental journalism workshop co-hosted by ecofrontlines and Deutsche Welle (DW) in collaboration with Khulna University. The design needed to communicate environmental urgency while maintaining institutional credibility.",
    targetAudience:
      "Journalism students, environmental activists, media professionals, and academic faculty interested in climate change reporting and sustainable storytelling.",
    colorPalette: {
      primary: ["#4ECDC4", "#2A9D8F"],
      secondary: ["#264653", "#E76F51"],
      accent: ["#F4A261"],
    },
    typography: {
      primary: "Montserrat Bold",
      secondary: "Open Sans",
      accent: "Roboto",
    },
    deliverables: [
      "A2 Event Poster",
      "Social Media Graphics (1080x1080)",
      "Facebook Event Cover",
      "Digital Invitation Template",
      "Brand Guidelines Document",
    ],
    tools: ["Canva"],
  },

  {
    id: 2,
    title: "Asachi Choturongo - Youth Climate Campaign",
    category: "Social Impact Design",
    image: lalSabujCampaignImg,
    clientName: "Lal Sabuj Society",
    projectDuration: "September 2023",
    designBrief:
      "Design a bold, youthful campaign visual to mobilize young people around climate action in Bangladesh. The message 'Come to Your City' needed to feel urgent, accessible, and empowering to inspire grassroots participation.",
    targetAudience:
      "Youth activists aged 16-30, university students, environmental NGO volunteers, and community organizers focused on climate justice and urban sustainability.",
    colorPalette: {
      primary: ["#52B788", "#40916C"],
      secondary: ["#FFFFFF"],
      accent: ["#E63946", "#FFD60A"],
    },
    typography: {
      primary: "Noto Sans Bengali Bold",
      secondary: "Hind Siliguri Medium",
      accent: "Mukta Malar",
    },
    deliverables: [
      "Instagram Post (1080x1080)",
      "Facebook Post Graphics",
      "Campaign Hashtag Design",
      "Print Flyer (A5)",
      "WhatsApp Status Template",
    ],
    tools: ["Canva"],
  },

  {
    id: 3,
    title: "Multi-Destination Admission Day",
    category: "Educational Marketing",
    image: luminedgeAdmissionImg,
    clientName: "Luminedge",
    projectDuration: "May 2024",
    designBrief:
      "Create a high-impact event poster promoting a multi-destination admission fair in Khulna, highlighting scholarship opportunities and post-study work benefits across 6 countries. Design needed to feel premium and internationally credible while being locally accessible.",
    targetAudience:
      "High school graduates, undergraduate students, parents planning international education, and career counselors seeking study abroad opportunities in UK, USA, Australia, Canada, Finland, and Ireland.",
    colorPalette: {
      primary: ["#1A1A2E", "#16213E"],
      secondary: ["#FFD93D", "#FFFFFF"],
      accent: ["#6C63FF"],
    },
    typography: {
      primary: "Montserrat ExtraBold",
      secondary: "Poppins",
      accent: "Roboto Condensed",
    },
    deliverables: [
      "Event Poster (24x36 inches)",
      "Social Media Campaign Set",
      "Email Banner (600x200px)",
      "Digital Standee Design",
      "Instagram Story Template",
    ],
    tools: ["Canva"],
  },

  {
    id: 4,
    title: "Climate Volunteer Recruitment Campaign",
    category: "Social Media Design",
    image: lalSabujYouthImg,
    clientName: "Lal Sabuj Society",
    projectDuration: "October 2023",
    designBrief:
      "Design an inclusive, inspiring recruitment graphic to attract diverse young volunteers for climate action initiatives. The visual needed to represent community, diversity, and collective action while maintaining brand consistency with Lal Sabuj Society's environmental mission.",
    targetAudience:
      "University students, young professionals aged 18-28, environmental science majors, and socially conscious youth interested in volunteering for climate and sustainability projects.",
    colorPalette: {
      primary: ["#52B788", "#2D6A4F"],
      secondary: ["#FFFFFF", "#F8F9FA"],
      accent: ["#E63946"],
    },
    typography: {
      primary: "Noto Sans Bengali Bold",
      secondary: "Hind Siliguri",
      accent: "Mukta",
    },
    deliverables: [
      "Facebook Post (1200x1200)",
      "Instagram Carousel (3 slides)",
      "Twitter Header Image",
      "LinkedIn Post Graphic",
      "Print Poster (A3)",
    ],
    tools: ["Canva"],
  },

  {
    id: 5,
    title: "Splash'n Shine - Complete Brand Identity",
    category: "Brand Design",
    image: splashNShineBrandingImg,
    clientName: "Splash'n Shine Carwash",
    projectDuration: "March-May 2024",
    designBrief:
      "Develop a comprehensive brand identity system for a premium carwash service, including logo design, color system, business collateral, social media templates, and environmental graphics. The brand needed to communicate cleanliness, trust, and modern service quality.",
    targetAudience:
      "Car owners aged 25-50, urban professionals, families with vehicles, luxury car owners, and fleet management companies seeking reliable, eco-friendly car care services.",
    colorPalette: {
      primary: ["#1B5E5E", "#2A7E7E"],
      secondary: ["#A8E063", "#56AB2F"],
      accent: ["#FFFFFF", "#F0F0F0"],
    },
    typography: {
      primary: "Bebas Neue",
      secondary: "Lato",
      accent: "Montserrat",
    },
    deliverables: [
      "Logo Design (Primary + Secondary)",
      "Business Card Design",
      "Social Media Template Set (10 designs)",
      "Outdoor Signage Mockup",
      "Brand Guidelines (20-page PDF)",
      "3D Gas Station Visualization",
      "Facebook Ad Campaign Set",
    ],
    tools: ["Canva"],
  },

  {
    id: 6,
    title: "Before/After Carwash Social Ad",
    category: "Digital Advertising",
    image: splashNShineAdImg,
    clientName: "Splash'n Shine Carwash",
    projectDuration: "June 2024",
    designBrief:
      "Create a high-conversion social media ad showcasing dramatic before/after transformation with water splash effects. The ad needed to communicate service quality instantly and drive immediate action through clear messaging and visual impact.",
    targetAudience:
      "Facebook and Instagram users aged 25-45 with vehicles, particularly targeting car enthusiasts, busy professionals, and quality-conscious customers within a 10km radius of the service location.",
    colorPalette: {
      primary: ["#1B5E5E", "#2A7E7E"],
      secondary: ["#A8E063", "#56AB2F"],
      accent: ["#FFFFFF"],
    },
    typography: {
      primary: "Impact",
      secondary: "Lato Bold",
      accent: "Montserrat",
    },
    deliverables: [
      "Facebook Ad (1200x628)",
      "Instagram Story Ad (1080x1920)",
      "Carousel Ad Set (3 variations)",
      "A/B Test Versions (5 copies)",
      "Animated GIF Version",
    ],
    tools: ["Canva"],
  },
];

// ============================================================
// SMALL UI HELPERS
// ============================================================

const SectionLabel = ({ children }) => (
  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">
    {children}
  </span>
);

const DetailHeading = ({ icon: Icon, children }) => (
  <div className="mb-3 flex items-center gap-2">
    <Icon
      size={14}
      strokeWidth={1.6}
      className="text-accent"
      aria-hidden="true"
    />
    <h3 className="text-[10px] font-semibold uppercase tracking-[0.17em] text-charcoal dark:text-white">
      {children}
    </h3>
  </div>
);

// ============================================================
// COMPONENT
// ============================================================

const Design = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  // ----------------------------------------------------------
  // Modal behavior
  // ----------------------------------------------------------

  useEffect(() => {
    if (!selectedDesign) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedDesign(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedDesign((current) => {
          if (!current) return current;

          const currentIndex = designs.findIndex(
            (design) => design.id === current.id
          );

          return designs[(currentIndex + 1) % designs.length];
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedDesign((current) => {
          if (!current) return current;

          const currentIndex = designs.findIndex(
            (design) => design.id === current.id
          );

          return designs[
            (currentIndex - 1 + designs.length) % designs.length
          ];
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDesign]);

  // ----------------------------------------------------------
  // Navigation
  // ----------------------------------------------------------

  const openModal = (design) => {
    setSelectedDesign(design);
  };

  const closeModal = () => {
    setSelectedDesign(null);
  };

  const nextDesign = (event) => {
    event.stopPropagation();

    setSelectedDesign((current) => {
      if (!current) return current;

      const currentIndex = designs.findIndex(
        (design) => design.id === current.id
      );

      return designs[(currentIndex + 1) % designs.length];
    });
  };

  const prevDesign = (event) => {
    event.stopPropagation();

    setSelectedDesign((current) => {
      if (!current) return current;

      const currentIndex = designs.findIndex(
        (design) => design.id === current.id
      );

      return designs[
        (currentIndex - 1 + designs.length) % designs.length
      ];
    });
  };

  return (
    <>
      {/* ======================================================
          DESIGN SECTION
      ======================================================= */}

      <section
        id="design"
        className="relative overflow-hidden border-b border-black/[0.07] bg-[#f4f2ee] dark:border-white/[0.08] dark:bg-[#151515]"
      >
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          {/* --------------------------------------------------
              HEADER
          --------------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col gap-5 border-b border-black/[0.08] pb-6 dark:border-white/[0.08] sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="h-px w-7 bg-accent" />
                <SectionLabel>Creative Practice</SectionLabel>
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-charcoal dark:text-white sm:text-4xl">
                Visual Design
              </h2>
            </div>

            <div className="flex items-center justify-between gap-8 sm:justify-end">
              <p className="max-w-[360px] text-sm leading-6 text-gray-500 dark:text-gray-400">
                Selected work across campaigns, editorial communication,
                educational communication, and brand identity.
              </p>

              <span className="hidden font-mono text-[9px] tracking-[0.12em] text-gray-400 sm:block">
                06 PROJECTS
              </span>
            </div>
          </motion.div>

          {/* --------------------------------------------------
              PROJECT GRID
          --------------------------------------------------- */}

          <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {designs.map((design, index) => (
              <motion.article
                key={design.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className="group"
              >
                <button
                  type="button"
                  onClick={() => openModal(design)}
                  className="block w-full cursor-pointer text-left"
                  aria-label={`View details for ${design.title}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#e6e1da] dark:bg-[#242424]">
                    <img
                      src={design.image}
                      alt={design.title}
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.035]"
                    />

                    {/* Soft hover veil */}
                    <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/[0.38]" />

                    {/* Top-left project index */}
                    <div className="absolute left-4 top-4 z-10 font-mono text-[9px] tracking-[0.12em] text-white/0 transition-opacity duration-300 group-hover:text-white/80">
                      {String(design.id).padStart(2, "0")}
                    </div>

                    {/* Top-right view button */}
                    <div className="absolute right-4 top-4 z-10 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white text-charcoal opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ZoomIn size={15} strokeWidth={1.5} />
                    </div>

                    {/* Bottom hover content */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                      <div className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          {design.category}
                        </p>

                        <h3 className="mt-1 text-lg font-medium leading-tight tracking-[-0.025em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:text-xl">
                          {design.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Project information — always visible */}
                  <div className="mt-3 flex items-start justify-between gap-4 border-t border-black/[0.08] pt-3 dark:border-white/[0.08]">
                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-accent">
                        {design.category}
                      </p>

                      <h3 className="mt-1 text-[15px] font-medium leading-5 tracking-[-0.02em] text-charcoal dark:text-white">
                        {design.title}
                      </h3>

                      <p className="mt-1 text-[11px] text-gray-400">
                        {design.clientName}
                      </p>
                    </div>

                    <span className="shrink-0 pt-0.5 font-mono text-[9px] tracking-[0.1em] text-gray-400">
                      {String(design.id).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>

          {/* --------------------------------------------------
              FOOT NOTE
          --------------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14 flex items-center justify-between border-t border-black/[0.08] pt-5 dark:border-white/[0.08]"
          >
            <p className="max-w-lg text-[11px] leading-5 text-gray-400">
              A selection of applied visual communication work developed for
              environmental, educational, social-impact, and commercial
              contexts.
            </p>

            <a
              href="#work"
              className="group hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500 transition-colors hover:text-accent sm:inline-flex"
            >
              More work
              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          DETAIL MODAL
      ======================================================= */}

      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedDesign.title} project details`}
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.985, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.985, y: 12 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex h-dvh w-full max-w-[1450px] overflow-hidden bg-[#faf9f7] dark:bg-[#161616] sm:h-[94vh] sm:border sm:border-white/[0.08]"
            >
              {/* ==================================================
                  IMAGE AREA
              =================================================== */}

              <div className="relative hidden bg-[#0a0a0a] lg:flex lg:w-[56%] lg:items-center lg:justify-center">
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.title}
                  className="max-h-full max-w-full object-contain p-10 xl:p-14"
                />

                {/* Image counter */}
                <div className="absolute bottom-5 left-6 font-mono text-[9px] tracking-[0.14em] text-white/40">
                  {String(selectedDesign.id).padStart(2, "0")} /{" "}
                  {String(designs.length).padStart(2, "0")}
                </div>

                {/* Previous */}
                <button
                  type="button"
                  onClick={prevDesign}
                  aria-label="Previous project"
                  className="absolute left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
                >
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextDesign}
                  aria-label="Next project"
                  className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
                >
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* ==================================================
                  MOBILE IMAGE
              =================================================== */}

              <div className="relative h-[39vh] shrink-0 bg-[#0a0a0a] lg:hidden">
                <div className="flex h-full items-center justify-center">
                  <img
                    src={selectedDesign.image}
                    alt={selectedDesign.title}
                    className="max-h-full max-w-full object-contain p-5"
                  />
                </div>

                <button
                  type="button"
                  onClick={prevDesign}
                  aria-label="Previous project"
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white backdrop-blur-md"
                >
                  <ChevronLeft size={17} strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  onClick={nextDesign}
                  aria-label="Next project"
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white backdrop-blur-md"
                >
                  <ChevronRight size={17} strokeWidth={1.5} />
                </button>

                <div className="absolute bottom-3 left-4 font-mono text-[8px] tracking-[0.14em] text-white/45">
                  {String(selectedDesign.id).padStart(2, "0")} /{" "}
                  {String(designs.length).padStart(2, "0")}
                </div>
              </div>

              {/* ==================================================
                  RIGHT DETAILS
              =================================================== */}

              <div className="flex min-h-0 flex-1 flex-col">
                {/* Header */}
                <div className="flex shrink-0 items-start justify-between border-b border-black/[0.08] bg-[#faf9f7]/95 px-5 py-5 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#161616]/95 sm:px-7 sm:py-6">
                  <div className="min-w-0 pr-5">
                    <SectionLabel>{selectedDesign.category}</SectionLabel>

                    <h2 className="mt-2 max-w-2xl text-xl font-semibold leading-tight tracking-[-0.035em] text-charcoal dark:text-white sm:text-2xl">
                      {selectedDesign.title}
                    </h2>

                    <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-500">
                      {selectedDesign.clientName}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close project details"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-gray-500 transition-all duration-300 hover:border-black/20 hover:bg-black/[0.04] hover:text-charcoal dark:border-white/10 dark:text-gray-400 dark:hover:border-white/20 dark:hover:bg-white/[0.05] dark:hover:text-white"
                  >
                    <X size={17} strokeWidth={1.6} />
                  </button>
                </div>

                {/* Details scroll */}
                <div className="min-h-0 flex-1 overflow-y-auto">
                  <div className="space-y-8 p-5 sm:p-7">
                    {/* Design Brief */}
                    <div>
                      <DetailHeading icon={Target}>
                        Design Brief
                      </DetailHeading>

                      <p className="max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {selectedDesign.designBrief}
                      </p>
                    </div>

                    {/* Target Audience */}
                    <div className="border-l border-accent/50 pl-4">
                      <DetailHeading icon={Users}>
                        Target Audience
                      </DetailHeading>

                      <p className="max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {selectedDesign.targetAudience}
                      </p>
                    </div>

                    {/* Palette */}
                    <div>
                      <DetailHeading icon={Palette}>
                        Color Palette
                      </DetailHeading>

                      <div className="space-y-5">
                        {[
                          ["Primary", selectedDesign.colorPalette.primary],
                          [
                            "Secondary",
                            selectedDesign.colorPalette.secondary,
                          ],
                          ["Accent", selectedDesign.colorPalette.accent],
                        ]
                          .filter(([, colors]) => colors?.length)
                          .map(([label, colors]) => (
                            <div key={label}>
                              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                                {label}
                              </p>

                              <div className="flex flex-wrap gap-4">
                                {colors.map((color) => (
                                  <div
                                    key={color}
                                    className="flex items-center gap-2"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="h-8 w-8 border border-black/10 dark:border-white/10"
                                      style={{
                                        backgroundColor: color,
                                      }}
                                    />

                                    <span className="font-mono text-[9px] text-gray-500 dark:text-gray-500">
                                      {color}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Typography */}
                    <div>
                      <DetailHeading icon={Type}>
                        Typography
                      </DetailHeading>

                      <div className="divide-y divide-black/[0.07] border-y border-black/[0.07] dark:divide-white/[0.07] dark:border-white/[0.07]">
                        {[
                          ["Primary", selectedDesign.typography.primary],
                          ["Secondary", selectedDesign.typography.secondary],
                          ["Accent", selectedDesign.typography.accent],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="flex items-center justify-between gap-5 py-3"
                          >
                            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                              {label}
                            </span>

                            <span className="text-right text-xs font-medium text-charcoal dark:text-gray-200">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <DetailHeading icon={Package}>
                        Deliverables
                      </DetailHeading>

                      <div className="grid gap-x-7 gap-y-2 sm:grid-cols-2">
                        {selectedDesign.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-sm leading-6 text-gray-600 dark:text-gray-400"
                          >
                            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />

                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools + timeline */}
                    <div className="grid grid-cols-2 gap-5 border-t border-black/[0.08] pt-5 dark:border-white/[0.08]">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-gray-400">
                          Tools Used
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2">
                          {selectedDesign.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-xs font-medium text-charcoal dark:text-gray-200"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-gray-400">
                          Timeline
                        </p>

                        <div className="mt-2 flex items-center gap-2 text-xs font-medium text-charcoal dark:text-gray-200">
                          <Calendar
                            size={13}
                            strokeWidth={1.5}
                            className="text-accent"
                          />

                          {selectedDesign.projectDuration}
                        </div>
                      </div>
                    </div>

                    {/* Closing note */}
                    <div className="border-t border-black/[0.08] pt-5 dark:border-white/[0.08]">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 shrink-0 rounded-full border border-accent/40" />

                        <p className="text-[11px] leading-5 text-gray-400">
                          This project demonstrates applied visual
                          communication, audience awareness, and information
                          hierarchy across a specific communication context.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile navigation footer */}
                <div className="flex shrink-0 items-center justify-between border-t border-black/[0.08] bg-[#faf9f7]/95 px-5 py-4 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#161616]/95 lg:hidden">
                  <button
                    type="button"
                    onClick={prevDesign}
                    className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-gray-500 transition-colors hover:text-accent"
                  >
                    <ChevronLeft size={14} />
                    Previous
                  </button>

                  <span className="font-mono text-[9px] tracking-[0.14em] text-gray-400">
                    {String(selectedDesign.id).padStart(2, "0")} /{" "}
                    {String(designs.length).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={nextDesign}
                    className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-gray-500 transition-colors hover:text-accent"
                  >
                    Next
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Design;