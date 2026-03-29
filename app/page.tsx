"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail, Phone, ChevronDown } from "lucide-react";

const proposalImages = [
  "/proposal-gallery/proposal1.jpg",
  "/proposal-gallery/proposal2.jpg",
  "/proposal-gallery/proposal3.jpg",
];

const weddingImages = [
  "/proposal-gallery/IMG_9373.JPG",
  "/proposal-gallery/IMG_9372.JPG",
  "/proposal-gallery/IMG_9374.JPG",
];

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "proposals", label: "Proposals" },
  { id: "weddings", label: "Weddings" },
  { id: "contact", label: "Contact" },
];

function Slideshow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>
    </div>
  );
}

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  const observerOptions = useMemo(
    () => ({ root: null, rootMargin: "-40% 0px -40% 0px" }),
    []
  );

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((e) => e.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#f8f5f1] text-stone-900">

      {/* HEADER */}
      <header className="sticky top-0 bg-[#f8f5f1]/90 backdrop-blur border-b p-6 text-center">
        <h1 className="text-4xl md:text-5xl tracking-[0.2em] font-serif">
          ANA MADE IT EVENTS
        </h1>
        <p className="text-xs tracking-[0.4em] text-gray-500 mt-2">
          Elegant Event Planning
        </p>

        <div className="mt-4 flex justify-center gap-3 flex-wrap">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-4 py-2 border rounded-full text-sm tracking-widest ${
                activeSection === s.id
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="p-10 text-center">
        <h2 className="text-5xl font-serif">
          Refined, Romantic Events
        </h2>
        <p className="mt-4 text-gray-600">
          Proposals and weddings designed with elegance.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="p-10 text-center">
        <h2 className="text-3xl font-serif">About</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Ana Made It Events creates beautiful, intentional celebrations
          with a luxury feel and seamless experience.
        </p>
      </section>

      {/* PROPOSALS */}
      <section id="proposals" className="p-10">
        <h2 className="text-3xl font-serif text-center mb-6">
          Proposals
        </h2>
        <Slideshow images={proposalImages} />
      </section>

      {/* WEDDINGS */}
      <section id="weddings" className="p-10 bg-white">
        <h2 className="text-3xl font-serif text-center mb-6">
          Weddings
        </h2>
        <Slideshow images={weddingImages} />
      </section>

      {/* CONTACT */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-serif">Contact</h2>

        <div className="mt-6 flex flex-col gap-4 items-center">
          <a href="https://www.instagram.com/anamadeitevents/" target="_blank">
            <Instagram /> @anamadeitevents
          </a>

          <a href="tel:6167062828">
            <Phone /> 616-706-2828
          </a>

          <a href="mailto:anabelle1030@gmail.com">
            <Mail /> anabelle1030@gmail.com
          </a>
        </div>
      </section>

    </div>
  );
}