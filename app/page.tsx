"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail, Phone, ChevronDown, Sparkles } from "lucide-react";

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const proposalImages = [
  "/proposal-gallery/IMG_8695.JPG",
  "/proposal-gallery/IMG_8696.JPG",
  "/proposal-gallery/IMG_8697.JPG",
  "/proposal-gallery/IMG_8698.JPG",
  "/proposal-gallery/IMG_8699.JPG",
  "/proposal-gallery/IMG_8700.JPG",
  "/proposal-gallery/IMG_8701.JPG",
  "/proposal-gallery/IMG_8702.JPG",
];

const weddingImages = [
  "/proposal-gallery/IMG_9372.JPG",
  "/proposal-gallery/IMG_9373.JPG",
  "/proposal-gallery/IMG_9374.JPG",
];

const birthdayImages = [
  "/proposal-gallery/IMG_8698.JPG",
  "/proposal-gallery/IMG_8699.JPG",
  "/proposal-gallery/IMG_8700.JPG",
];

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "proposals", label: "Proposals" },
  { id: "weddings", label: "Weddings" },
  { id: "birthdays", label: "Birthdays" },
  { id: "contact", label: "Contact" },
];

function Slideshow({
  images,
  altPrefix,
}: {
  images: string[];
  altPrefix: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] bg-stone-100 shadow-2xl md:h-[560px]">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${altPrefix} ${index + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.985 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/70 px-3 py-2 backdrop-blur">
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to ${altPrefix} image ${dotIndex + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              dotIndex === index ? "w-6 bg-stone-900" : "bg-stone-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-stone-500">
        {eyebrow}
      </p>
      <h2 className={`${serifFont.className} mb-4 text-4xl tracking-wide text-stone-900 md:text-5xl`}>
        {title}
      </h2>
      <p className="text-base leading-7 text-stone-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function ScrollMagic({ activeSection }: { activeSection: string }) {
  const sectionMap: Record<string, { icon: string; label: string }> = {
    weddings: { icon: "👰", label: "Bridal magic" },
    proposals: { icon: "💍", label: "Proposal magic" },
    birthdays: { icon: "🎂", label: "Birthday magic" },
    home: { icon: "✨", label: "Celebration magic" },
    about: { icon: "✨", label: "Celebration magic" },
    contact: { icon: "💌", label: "Contact magic" },
  };

  const current = sectionMap[activeSection] ?? sectionMap.home;

  return (
    <div className="pointer-events-none fixed right-4 top-24 z-40 hidden md:block lg:right-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 30, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, y: -20, scale: 0.8, rotate: 8 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex h-28 w-28 items-center justify-center rounded-full border border-white/50 bg-white/60 text-5xl shadow-2xl backdrop-blur-xl"
          aria-label={current.label}
        >
          <motion.span
            animate={{ y: [0, -6, 0], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            {current.icon}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function AnaMadeItEventsPage() {
  const [activeSection, setActiveSection] = useState("home");

  const observerOptions = useMemo(
    () => ({ root: null, rootMargin: "-35% 0px -45% 0px", threshold: 0 }),
    []
  );

  useEffect(() => {
    const ids = sections.map((section) => section.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible?.target?.id) {
        setActiveSection(visible.target.id);
      }
    }, observerOptions);

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [observerOptions]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5f1] text-stone-900">
      <ScrollMagic activeSection={activeSection} />

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .floral-title {
          text-shadow: 0 2px 14px rgba(80, 67, 52, 0.08);
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f8f5f1]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 px-6 py-6 lg:px-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 text-stone-400">
              <Sparkles className="h-4 w-4" />
              <span className="text-[10px] uppercase tracking-[0.4em]">Luxury celebrations</span>
              <Sparkles className="h-4 w-4" />
            </div>
            <h1
              className={`${scriptFont.className} floral-title mt-3 text-center text-6xl leading-none text-stone-900 md:text-8xl lg:text-[7rem]`}
            >
              🌸 AnaMadeIt 🌸
            </h1>
            <p className={`${serifFont.className} mt-3 text-lg tracking-[0.35em] text-stone-500 md:text-xl`}>
              EVENTS
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {sections.map((section) => {
              const active = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`rounded-full border px-5 py-2.5 text-sm tracking-[0.18em] uppercase transition-all ${
                    active
                      ? "border-stone-900 bg-stone-900 text-white shadow-lg"
                      : "border-stone-300 bg-white/80 text-stone-700 hover:border-stone-500 hover:bg-white"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-10 lg:pt-24"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,113,108,0.10),_transparent_42%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center lg:text-left">
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-stone-500">
                AnaMadeIt Events
              </p>
              <h2 className={`${serifFont.className} text-5xl leading-tight text-stone-900 md:text-7xl`}>
                Refined celebrations with a romantic, elevated feel.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
                From unforgettable proposals to beautifully curated weddings and birthdays,
                AnaMadeIt Events creates warm, intentional celebrations that feel timeless,
                personal, and effortlessly elegant.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("proposals")}
                  className="rounded-full bg-stone-900 px-7 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:translate-y-[-1px]"
                >
                  View Proposals
                </button>
                <button
                  onClick={() => scrollToSection("weddings")}
                  className="rounded-full border border-stone-400 px-7 py-3 text-sm uppercase tracking-[0.22em] text-stone-800 transition hover:border-stone-800"
                >
                  View Weddings
                </button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative"
            >
              <Slideshow images={weddingImages} altPrefix="Wedding feature" />
            </motion.div>
          </div>

          <div className="mt-14 flex justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-stone-500 transition hover:text-stone-900"
            >
              Scroll
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </section>

        <section id="about" className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-xl backdrop-blur md:p-14">
            <SectionHeader
              eyebrow="About"
              title="A polished, personal planning experience"
              description="AnaMadeIt Events blends thoughtful coordination, beautiful styling, and romantic details to create celebrations that feel elevated from the very first impression to the final photo."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Elegant Design",
                  text: "Clean, luxurious visuals and curated details that feel high-end without losing warmth.",
                },
                {
                  title: "Seamless Flow",
                  text: "From inquiry to event day, every step is designed to feel organized, calm, and effortless.",
                },
                {
                  title: "Meaningful Moments",
                  text: "Every proposal, wedding, and birthday is tailored so the final experience feels deeply personal.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-[1.75rem] border border-stone-200 bg-[#faf8f4] p-7 shadow-sm"
                >
                  <h3 className={`${serifFont.className} text-2xl text-stone-900`}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600 md:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="proposals" className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Signature Services"
              title="Proposals"
              description="An immersive proposal gallery with smooth scrolling flow and a fading slideshow presentation style."
            />
            <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <h3 className={`${serifFont.className} text-3xl text-stone-900 md:text-4xl`}>
                  Thoughtfully styled proposal moments
                </h3>
                <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
                  These images are loading directly from the
                  <span className="font-semibold"> public/proposal-gallery </span>
                  folder.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <Slideshow images={proposalImages} altPrefix="Proposal" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="weddings" className="bg-white/60 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Featured Gallery"
              title="Weddings"
              description="This section matches the clickable tab navigation, smooth scroll layout, and fading slideshow effect from the Proposals area."
            />
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <Slideshow images={weddingImages} altPrefix="Wedding" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <h3 className={`${serifFont.className} text-3xl text-stone-900 md:text-4xl`}>
                  Romantic wedding imagery with an editorial feel
                </h3>
                <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
                  This wedding slideshow uses your three wedding images from the same gallery folder.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="birthdays" className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Celebrations"
              title="Birthdays"
              description="A birthday section has been added so your site can grow into more event types with the same polished, animated flow."
            />
            <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <h3 className={`${serifFont.className} text-3xl text-stone-900 md:text-4xl`}>
                  Beautiful birthday celebrations, styled with the same luxury feel
                </h3>
                <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
                  Right now this section uses sample gallery images so the design is complete.
                  You can replace them later with actual birthday photos by updating the birthdayImages array.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <Slideshow images={birthdayImages} altPrefix="Birthday" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-stone-900 px-8 py-12 text-white shadow-2xl md:px-14 md:py-16">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-stone-300">
                Contact
              </p>
              <h2 className={`${serifFont.className} mt-4 text-4xl md:text-5xl`}>
                Let’s create something unforgettable
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-stone-300 md:text-lg">
                Reach out directly for proposal planning, wedding coordination,
                floral styling, and curated event design.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <a
                href="https://www.instagram.com/anamadeitevents/"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-stone-300">
                  Instagram
                </p>
                <p className="mt-2 text-lg">@anamadeitevents</p>
              </a>

              <a
                href="tel:6167062828"
                className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-stone-300">
                  Phone
                </p>
                <p className="mt-2 text-lg">616-706-2828</p>
              </a>

              <a
                href="mailto:anabelle1030@gmail.com"
                className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-stone-300">
                  Email
                </p>
                <p className="mt-2 text-lg break-all">
                  anabelle1030@gmail.com
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
