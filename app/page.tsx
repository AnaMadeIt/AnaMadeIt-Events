"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

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
  { id: "aboutme", label: "About Me" },
];

function Slideshow({ images, altPrefix }: { images: string[]; altPrefix: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] bg-[#f6ede9] shadow-[0_24px_60px_rgba(143,95,118,0.18)] md:h-[560px]">
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

      <div className="absolute inset-0 bg-gradient-to-t from-[#50333f]/15 via-transparent to-white/10" />

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/75 px-3 py-2 backdrop-blur">
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to ${altPrefix} image ${dotIndex + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              dotIndex === index ? "w-6 bg-[#b8748f]" : "w-2.5 bg-[#d7b8c5]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#b8748f]">{eyebrow}</p>
      <h2 className={`${serifFont.className} mb-4 text-4xl tracking-wide text-[#4a2f3b] md:text-5xl`}>
        {title}
      </h2>
      <p className="text-base leading-7 text-[#7a5d68] md:text-lg">{description}</p>
    </div>
  );
}

function ScrollMagic({ activeSection }: { activeSection: string }) {
  const sectionMap: Record<string, string> = {
    weddings: "👰",
    proposals: "💍",
    birthdays: "🎂",
    home: "✨",
    about: "🌸",
    contact: "💌",
    aboutme: "🌷",
  };

  const current = sectionMap[activeSection] ?? "✨";

  return (
    <div className="pointer-events-none fixed right-4 top-28 z-40 hidden md:block lg:right-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -18, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 bg-white/70 text-4xl shadow-2xl backdrop-blur-xl"
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {current}
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
    <div className="min-h-screen bg-[#fcf6f5] text-[#4a2f3b]">
      <ScrollMagic activeSection={activeSection} />

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        section[id] {
          scroll-margin-top: 170px;
        }
      `}</style>

      <header className="border-b border-[#ebd8e0] bg-[#fcf6f5]">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-sm text-[#8d5b72] lg:justify-end">
            <a
              href="https://www.instagram.com/anamadeitevents/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#dec2cd] bg-white/90 px-4 py-2 transition hover:border-[#b8748f] hover:text-[#b8748f]"
            >
              Instagram
            </a>
            <a
              href="tel:6167062828"
              className="rounded-full border border-[#dec2cd] bg-white/90 px-4 py-2 transition hover:border-[#b8748f] hover:text-[#b8748f]"
            >
              616-706-2828
            </a>
            <a
              href="mailto:anabelle1030@gmail.com"
              className="rounded-full border border-[#dec2cd] bg-white/90 px-4 py-2 transition hover:border-[#b8748f] hover:text-[#b8748f]"
            >
              anabelle1030@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-5">
            <div className="text-center">
              <img
                src="/proposal-gallery/logo.png"
                alt="AnaMadeIt Events Logo"
                className="mx-auto h-auto max-h-[180px] w-auto max-w-[340px] object-contain md:max-h-[210px] md:max-w-[430px] lg:max-h-[240px] lg:max-w-[520px]"
              />
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {sections.map((section) => {
                const active = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`rounded-full border px-4 py-2.5 text-xs tracking-[0.22em] uppercase transition-all md:px-5 md:text-sm ${
                      active
                        ? "border-[#b8748f] bg-[#b8748f] text-white shadow-lg"
                        : "border-[#dec2cd] bg-white/90 text-[#7a5d68] hover:border-[#b8748f] hover:bg-white"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <main className="overflow-x-hidden">
        <section id="home" className="relative px-6 pb-20 pt-10 lg:px-10 lg:pt-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(226,186,204,0.22),_transparent_48%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#b8748f]">AnaMadeIt Events</p>
              <h1 className={`${serifFont.className} text-5xl leading-tight text-[#4a2f3b] md:text-7xl`}>
                Luxury celebrations with a romantic, elevated feel.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#7a5d68] md:text-lg">
                From unforgettable proposals to beautifully curated weddings and birthdays,
                AnaMadeIt Events creates warm, intentional celebrations that feel timeless,
                personal, and effortlessly elegant.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("proposals")}
                  className="rounded-full bg-[#b8748f] px-7 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:translate-y-[-1px] hover:bg-[#a9627f]"
                >
                  View Proposals
                </button>
                <button
                  onClick={() => scrollToSection("weddings")}
                  className="rounded-full border border-[#cfa8b8] bg-white px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#7a5d68] transition hover:border-[#b8748f]"
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
        </section>

        <section id="about" className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#ebd8e0] bg-white/85 p-8 shadow-[0_24px_60px_rgba(143,95,118,0.12)] backdrop-blur md:p-14">
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
                  className="rounded-[1.75rem] border border-[#eddde3] bg-[#fff8fb] p-7 shadow-sm"
                >
                  <h3 className={`${serifFont.className} text-2xl text-[#4a2f3b]`}>{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#7a5d68] md:text-base">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="proposals" className="bg-[#fff8fb] px-6 py-20 lg:px-10">
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
                <h3 className={`${serifFont.className} text-3xl text-[#4a2f3b] md:text-4xl`}>
                  Thoughtfully styled proposal moments
                </h3>
                <p className="mt-5 text-base leading-8 text-[#7a5d68] md:text-lg">
                  Romantic setups, beautiful details, and photography-ready styling for unforgettable yes moments.
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

        <section id="weddings" className="px-6 py-20 lg:px-10">
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
                <h3 className={`${serifFont.className} text-3xl text-[#4a2f3b] md:text-4xl`}>
                  Romantic wedding imagery with an editorial feel
                </h3>
                <p className="mt-5 text-base leading-8 text-[#7a5d68] md:text-lg">
                  Elegant wedding moments presented with the same polished, luxury styling as the rest of the site.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="birthdays" className="bg-[#fff8fb] px-6 py-20 lg:px-10">
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
                <h3 className={`${serifFont.className} text-3xl text-[#4a2f3b] md:text-4xl`}>
                  Beautiful birthday celebrations with the same luxury feel
                </h3>
                <p className="mt-5 text-base leading-8 text-[#7a5d68] md:text-lg">
                  This section is ready for future birthday galleries while keeping the same design language throughout the site.
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
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-[#b8748f] to-[#8d5b72] px-8 py-12 text-white shadow-[0_24px_60px_rgba(143,95,118,0.24)] md:px-14 md:py-16">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-white/80">Contact</p>
              <h2 className={`${serifFont.className} mt-4 text-4xl md:text-5xl`}>
                Let’s create something unforgettable
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
                Reach out directly for proposal planning, wedding coordination, floral styling, and curated event design.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <a
                href="https://www.instagram.com/anamadeitevents/"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 transition hover:bg-white/15"
              >
                <p className="text-2xl">📷</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/75">Instagram</p>
                <p className="mt-2 text-lg">@anamadeitevents</p>
              </a>

              <a
                href="tel:6167062828"
                className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 transition hover:bg-white/15"
              >
                <p className="text-2xl">📞</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/75">Phone</p>
                <p className="mt-2 text-lg">616-706-2828</p>
              </a>

              <a
                href="mailto:anabelle1030@gmail.com"
                className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 transition hover:bg-white/15"
              >
                <p className="text-2xl">✉️</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/75">Email</p>
                <p className="mt-2 text-lg break-all">anabelle1030@gmail.com</p>
              </a>
            </div>
          </div>
        </section>

        <section id="aboutme" className="relative overflow-hidden bg-[#fff8fb] px-6 py-24 lg:px-10">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute left-[-40px] top-16 text-7xl md:text-8xl">🌸</div>
            <div className="absolute right-8 top-24 text-5xl md:text-6xl">🌿</div>
            <div className="absolute bottom-20 left-10 text-6xl md:text-7xl">🌷</div>
            <div className="absolute bottom-10 right-[-10px] text-7xl md:text-8xl">🌸</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] bg-white/80 shadow-2xl" />
              <div className="relative rotate-[-3deg] rounded-[2rem] bg-white p-5 shadow-[0_24px_60px_rgba(143,95,118,0.14)]">
                <div className="rounded-[1.5rem] bg-[#fdf1f5] p-3">
                  <img
                    src="/proposal-gallery/aboutme.jpg"
                    alt="Ana Breen"
                    className="h-auto w-full rounded-[1.25rem] object-cover shadow-lg"
                  />
                </div>
                <p className={`${scriptFont.className} mt-4 text-center text-3xl text-[#8d5b72] md:text-4xl`}>
                  Ana Breen
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ebd8e0] bg-white/85 p-8 text-center shadow-[0_24px_60px_rgba(143,95,118,0.12)] backdrop-blur md:p-12 lg:text-left">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#b8748f]">About Me</p>
              <h2 className={`${serifFont.className} mb-6 text-4xl text-[#4a2f3b] md:text-5xl`}>
                Creating beautiful memories that last a lifetime
              </h2>
              <p className="text-lg leading-8 text-[#7a5d68]">
                My name is Ana Breen, and I have been doing events for over 20 years. If there is one thing I know, it is that everybody wants to create special memories for the moments that matter most. My mission is to make sure that you can come to me with any idea from A to Z, and I will take it from there! Everybody deserves to have the event of their dreams, and to create memories that last a lifetime. Because today existed!
              </p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
