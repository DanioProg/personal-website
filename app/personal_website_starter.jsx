"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.16, once: false }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function PersonalWebsiteStarter() {
  const [openProject, setOpenProject] = useState(null);
  const [showCVPreview, setShowCVPreview] = useState(false);
  const palette = {
    black: "#000000",
    deepRed: "#CF0F47",
    brightPink: "#FF0B55",
    softRose: "#FFDEDE",
  };
  const strengths = [
  {
    title: "Curiosity",
    text: "Interested in business, technology, investing, and the process of learning how strong ideas become real outcomes.",
  },
  {
    title: "Strategy",
    text: "Drawn to the systems behind decision-making, long-term thinking, and thoughtful execution.",
  },
  {
    title: "Building",
    text: "Enjoy working on projects with others, exploring ideas, and turning early concepts into something tangible.",
  },
];

  const projects = [
  {
    name: "SeedZoom",
    shortDescription: "A team project exploring better early-stage venture decisions under uncertainty.",
    fullDescription:
      "SeedZoom was a project I started with my team to explore how venture investors could make better early-stage decisions under uncertainty. The idea was a Bayesian decision-support platform that would structure deal information, model probabilities around investment outcomes, and help identify which questions mattered most during diligence. We did not complete the project, but it gave me valuable experience in collaborative problem-solving, product thinking, and turning an ambitious concept into something more concrete.",
    tag: "Team Project",
    logo: "/SeedZoom_logo.png",
  },
];

  const focus = [
  "Technology",
  "Management",
  "Innovation",
  "Startups",
];

  return (
    <div
      className="min-h-screen selection:text-black"
      style={{ backgroundColor: palette.black, color: palette.softRose, scrollBehavior: "smooth" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex items-center justify-between border-b pb-5" style={{ borderColor: palette.deepRed }}>
          <div>
            <p className="text-sm uppercase tracking-[0.25em]" style={{ color: palette.softRose, opacity: 0.72 }}>Personal Website</p>
            <h1 className="text-xl font-semibold">Davide Danioni</h1>
          </div>
          <nav className="hidden gap-6 text-sm md:flex" style={{ color: palette.softRose, opacity: 0.86 }}>
            <a href="#about" className="transition hover:opacity-100" style={{ opacity: 0.85 }}>About</a>
            <a href="#focus" className="transition hover:opacity-100" style={{ opacity: 0.85 }}>Focus</a>
            <a href="#projects" className="transition hover:opacity-100" style={{ opacity: 0.85 }}>Projects</a>
            <a href="#contact" className="transition hover:opacity-100" style={{ opacity: 0.85 }}>Contact</a>
            <a href="#cv" className="transition hover:opacity-100" style={{ opacity: 0.85 }}>CV</a>
          </nav>
        </header>

        <main>
          <section className="grid gap-10 py-20 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <Reveal>
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.25em]" style={{ color: palette.softRose, opacity: 0.72 }}>Student • Builder • Curious thinker</p>
                <h2 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
                  Think.
                  <br />
                  Plan.
                  <br />
                  Execute.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: palette.softRose, opacity: 0.86 }}>
                  This site is a place to share my projects, interests, and the things I am learning along the way. I’m especially drawn to technology, business, investing, and thoughtful long-term growth.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.a
                    href="#projects"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl px-5 py-3 text-sm font-medium"
                    style={{ backgroundColor: palette.brightPink, color: palette.softRose }}
                  >
                    View Projects
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border px-5 py-3 text-sm font-medium"
                    style={{ borderColor: palette.deepRed, color: palette.softRose }}
                  >
                    Get In Touch
                  </motion.a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-3xl border p-6 shadow-2xl" style={{ borderColor: palette.deepRed, backgroundColor: 'rgba(255, 11, 85, 0.08)' }}>
                <p className="text-sm uppercase tracking-[0.25em]" style={{ color: palette.softRose, opacity: 0.65 }}>Current Direction</p>
                <div className="mt-4 space-y-4 text-sm" style={{ color: palette.softRose, opacity: 0.86 }}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="rounded-2xl border p-4" style={{ borderColor: 'rgba(255, 222, 222, 0.14)', backgroundColor: 'rgba(0, 0, 0, 0.35)' }}>
                    <p style={{ color: palette.softRose, opacity: 0.62 }}>Primary focus</p>
                    <p className="mt-1 font-medium" style={{ color: palette.softRose }}>Technology, business, investing, and learning</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="rounded-2xl border p-4" style={{ borderColor: 'rgba(255, 222, 222, 0.14)', backgroundColor: 'rgba(0, 0, 0, 0.35)' }}>
                    <p style={{ color: palette.softRose, opacity: 0.62 }}>What this site will become</p>
                    <p className="mt-1 font-medium" style={{ color: palette.softRose }}>A simple place to share work, ideas, and progress over time</p>
                  </motion.div>
                </div>
              </div>
            </Reveal>
          </section>

          <Reveal>
            <section id="about" className="grid gap-8 border-t py-16 md:grid-cols-2" style={{ borderColor: palette.deepRed }}>
              <div>
                <p className="text-sm uppercase tracking-[0.25em]" style={{ color: palette.softRose, opacity: 0.72 }}>About</p>
                <h3 className="mt-3 text-3xl font-semibold">A simple place to share what I’m working on and what I care about.</h3>
              </div>
              <div>
                <p className="leading-8" style={{ color: palette.softRose, opacity: 0.86 }}>
                  I’m interested in how ideas turn into real projects. That includes learning quickly, thinking carefully, and improving over time through work that is both challenging and meaningful. This website is meant to be a clear and honest reflection of that process.
                </p>
              </div>
            </section>
          </Reveal>

          <section id="focus" className="border-t py-16" style={{ borderColor: palette.deepRed }}>
            <Reveal>
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em]" style={{ color: palette.softRose, opacity: 0.72 }}>Focus Areas</p>
                  <h3 className="mt-3 text-3xl font-semibold">What I’m interested in</h3>
                </div>
                <p className="max-w-2xl" style={{ color: palette.softRose, opacity: 0.72 }}>
                  These are the fields I’m most drawn to and the ones I want to keep exploring through future projects and experiences.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.22 }} className="mt-10 rounded-3xl border p-6" style={{ borderColor: palette.deepRed, backgroundColor: 'rgba(207, 15, 71, 0.10)' }}>
                <p className="text-sm uppercase tracking-[0.25em]" style={{ color: palette.softRose, opacity: 0.65 }}>Core Themes</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {focus.map((item) => (
                    <motion.span key={item} whileHover={{ y: -2 }} className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: palette.brightPink, color: palette.softRose }}>
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {strengths.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.22 }} className="rounded-3xl border p-6" style={{ borderColor: palette.deepRed, backgroundColor: 'rgba(207, 15, 71, 0.10)' }}>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="mt-3 leading-7" style={{ color: palette.softRose, opacity: 0.86 }}>{item.text}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="projects" className="border-t py-16" style={{ borderColor: palette.deepRed }}>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.25em]" style={{ color: palette.softRose, opacity: 0.72 }}>Selected Work</p>
              <h3 className="mt-3 text-3xl font-semibold">Projects</h3>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-1">
              {projects.map((project, index) => {
                const isOpen = openProject === project.name;

                return (
                  <Reveal key={project.name} delay={index * 0.08}>
                    <motion.article layout className="rounded-3xl border p-6" style={{ borderColor: palette.deepRed, backgroundColor: 'rgba(207, 15, 71, 0.10)' }} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-3xl">
                          <span className="rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]" style={{ borderColor: palette.brightPink, color: palette.softRose }}>
                            {project.tag}
                          </span>
                          <h4 className="mt-5 text-xl font-semibold">{project.name}</h4>
                          <p className="mt-3 leading-7" style={{ color: palette.softRose, opacity: 0.86 }}>
                            {project.shortDescription}
                          </p>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="grid gap-6 md:grid-cols-[1.45fr_0.55fr] md:items-start">
                                  <p
                                    className="leading-7"
                                    style={{ color: palette.softRose, opacity: 0.82 }}
                                  >
                                    {project.fullDescription}
                                  </p>
                                  <motion.div
                                    initial={{ opacity: 0, x: 34, scale: 0.96 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 20, scale: 0.98 }}
                                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                                    className="flex justify-end pt-2"
                                  >
                                    <img
                                      src={project.logo}
                                      alt={`${project.name} logo`}
                                      className="h-auto w-full max-w-[180px] object-contain"
                                    />
                                  </motion.div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <motion.button
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setOpenProject(isOpen ? null : project.name)}
                          className="rounded-2xl border px-4 py-2 text-sm font-medium transition"
                          style={{ borderColor: palette.brightPink, color: palette.softRose }}
                        >
                          {isOpen ? "Close" : "Open project"}
                        </motion.button>
                      </div>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <Reveal>
            <section id="cv" className="border-t py-16" style={{ borderColor: palette.deepRed }}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.22 }} className="rounded-[2rem] border px-8 py-10" style={{ borderColor: palette.deepRed, backgroundColor: 'rgba(207, 15, 71, 0.10)' }}>
                <p className="text-sm uppercase tracking-[0.25em]" style={{ color: palette.softRose, opacity: 0.72 }}>Curriculum Vitae</p>
                <h3 className="mt-3 text-3xl font-semibold">Curriculum Vitae</h3>
                <p className="mt-4 max-w-2xl leading-8" style={{ color: palette.softRose, opacity: 0.82 }}>
                  A downloadable version of my curriculum vitae, including education and experience.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/CV_2026.pdf"
                    download="CV_2026.pdf"
                    className="rounded-2xl px-5 py-3 text-sm font-medium inline-block"
                    style={{ backgroundColor: palette.brightPink, color: palette.softRose }}
                  >
                    Download CV
                  </a>
                  <motion.button
                    type="button"
                    onClick={() => setShowCVPreview((prev) => !prev)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    className="rounded-2xl border px-5 py-3 text-sm font-medium"
                    style={{ borderColor: palette.brightPink, color: palette.softRose }}
                  >
                    {showCVPreview ? "Hide Preview" : "Preview CV"}
                  </motion.button>
                </div>

                <AnimatePresence initial={false}>
                  {showCVPreview && (
                    <motion.div
                      initial={{ opacity: 0, y: 24, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 18, scale: 0.985 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-8 overflow-hidden rounded-[1.5rem] border"
                      style={{ borderColor: palette.brightPink, backgroundColor: 'rgba(0, 0, 0, 0.28)' }}
                    >
                      <div className="flex items-center justify-between border-b px-5 py-4" style={{ borderColor: 'rgba(255, 222, 222, 0.16)' }}>
                        <p className="text-sm uppercase tracking-[0.2em]" style={{ color: palette.softRose, opacity: 0.75 }}>
                          CV Preview
                        </p>
                        <a
                          href="/CV_2026.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium"
                          style={{ color: palette.softRose, opacity: 0.88 }}
                        >
                          Open in new tab
                        </a>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                        className="h-[720px] w-full"
                      >
                        <iframe
                          src="/CV_2026.pdf"
                          title="CV Preview"
                          className="h-full w-full"
                          style={{ backgroundColor: '#ffffff' }}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </section>
          </Reveal>

          <Reveal>
            <section id="contact" className="border-t py-16" style={{ borderColor: palette.deepRed }}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.22 }} className="rounded-[2rem] border px-8 py-10" style={{ borderColor: palette.brightPink, backgroundColor: palette.softRose, color: palette.black }}>
                <p className="text-sm uppercase tracking-[0.25em]" style={{ color: palette.deepRed }}>Contact</p>
                <h3 className="mt-3 text-3xl font-semibold">Let’s build something meaningful.</h3>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.a href="mailto:davide.danioni@studbocconi.it" whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }} className="rounded-2xl px-5 py-3 text-sm font-medium" style={{ backgroundColor: palette.black, color: palette.softRose }}>
                    davide.danioni@studbocconi.it
                  </motion.a>
                  <motion.a href="https://www.linkedin.com/in/davide-danioni-144054259" target="_blank" rel="noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }} className="rounded-2xl border px-5 py-3 text-sm font-medium" style={{ borderColor: palette.deepRed, color: palette.black }}>
                    LinkedIn
                  </motion.a>
                </div>
              </motion.div>
            </section>
          </Reveal>
        </main>
      </div>
    </div>
  );
}
