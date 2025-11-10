import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Bot, Cpu, Sparkles, Zap, Github, Mail } from 'lucide-react'

// Motion helpers
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
})

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-gray-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-2 font-semibold text-gray-100">
          <span className="h-9 w-9 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center text-white ring-1 ring-white/20 shadow-[0_0_30px_-10px] shadow-fuchsia-500/40">
            <Bot size={18} />
          </span>
          <span className="tracking-tight">RoboClub</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#robots" className="hover:text-white transition-colors">Robots</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#join" className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-colors border border-white/10">
            <Sparkles size={16} /> Join</a>
        </nav>
        <button className="md:hidden p-2 text-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <span className="sr-only">Menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-gray-950/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm text-gray-200">
            <a href="#robots" className="hover:text-white">Robots</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#events" className="hover:text-white">Events</a>
            <a href="#join" className="inline-flex w-fit items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
              <Sparkles size={16} /> Join</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-950 to-black">
      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-32 w-[42rem] h-[42rem] rounded-full bg-fuchsia-500/20 blur-[100px]" />
        <div className="absolute -bottom-40 -right-32 w-[42rem] h-[42rem] rounded-full bg-indigo-500/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="py-10">
          <motion.h1
            variants={fadeUp(0)}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Robotics, AI and Playful Engineering
          </motion.h1>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-4 text-lg text-gray-300 max-w-xl"
          >
            Build, program, and compete with interactive robots. Explore cutting‑edge technology with a community of makers.
          </motion.p>
          <motion.div variants={fadeUp(0.2)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#join" className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-5 py-3 rounded-full hover:brightness-110 transition-all shadow-[0_0_30px_-10px] shadow-fuchsia-500/50">
              <Sparkles size={18} /> Join the Club
            </a>
            <a href="#robots" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-gray-200 hover:bg-white/10 transition-colors">
              <Cpu size={18} /> See Robots
            </a>
          </motion.div>
          <motion.div variants={fadeUp(0.25)} className="mt-10 grid grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2"><Zap className="text-fuchsia-400" size={16}/> Weekly builds</div>
            <div className="flex items-center gap-2"><Cpu className="text-indigo-400" size={16}/> AI workshops</div>
            <div className="flex items-center gap-2"><Bot className="text-violet-300" size={16}/> Competition team</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="h-[520px] sm:h-[580px] lg:h-[640px] rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40 overflow-hidden relative"
        >
          <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </section>
  )
}

const robots = [
  {
    name: 'Astra-01',
    role: 'Vision-guided line follower',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Bolt-MX',
    role: 'Omniwheel arena bot',
    img: 'https://images.unsplash.com/photo-1581091215367-59ab6b66d24c?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Echo-Sense',
    role: 'Obstacle mapper with LIDAR',
    img: 'https://images.unsplash.com/photo-1581091215367-5f9f0b6b047f?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Nova-Arm',
    role: '6‑DOF robotic arm',
    img: 'https://images.unsplash.com/photo-1581093588401-16a4723f1f36?q=80&w=1887&auto=format&fit=crop',
  },
]

function RobotsGrid() {
  return (
    <section id="robots" className="relative py-24 bg-gradient-to-b from-black to-gray-950">
      {/* Section header with subtle slide-in */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between mb-10"
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Robots</h2>
          <p className="text-gray-400 mt-2">Hover to tilt, tap to flip for quick specs.</p>
        </div>
        <a href="#join" className="hidden sm:inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-colors border border-white/10">
          <Sparkles size={16} /> Join Builds
        </a>
      </motion.div>

      {/* Grid with different interaction: 3D tilt + neon glow on hover */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {robots.map((r, i) => (
            <TiltCard key={i} robot={r} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TiltCard({ robot, idx }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <motion.div
      className="group [perspective:1000px]"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      onClick={() => setFlipped(!flipped)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
    >
      <motion.div
        className="relative h-64 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-white/5"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
          <motion.img
            src={robot.img}
            alt={robot.name}
            className="h-full w-full object-cover will-change-transform"
            initial={{ scale: 1.05 }}
            whileHover={{ scale: 1.12 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-90"><Cpu className="text-fuchsia-300" size={14}/> RoboClub</div>
            <h3 className="text-lg font-semibold mt-1 drop-shadow">{robot.name}</h3>
            <p className="text-sm opacity-90">{robot.role}</p>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 blur-md" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gray-950 p-4 flex flex-col justify-between" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
          <div>
            <h4 className="text-lg font-semibold text-white">{robot.name}</h4>
            <p className="text-gray-400">Quick Specs</p>
            <ul className="mt-3 space-y-1 text-sm text-gray-300 list-disc list-inside">
              <li>AI Navigation</li>
              <li>Brushless motors</li>
              <li>Custom PCB</li>
            </ul>
          </div>
          <button className="self-start inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-3 py-2 rounded-full text-sm hover:brightness-110 shadow-[0_0_30px_-12px] shadow-fuchsia-500/60">
            <Zap size={16}/> Learn More
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

function About() {
  // Different interaction: cards scale slightly with a rubber band effect + scroll-in from right
  const features = [
    { icon: <Cpu className="text-fuchsia-300" size={20} />, title: 'Build & Learn', desc: 'From soldering to SLAM — learn end to end.' },
    { icon: <Zap className="text-indigo-300" size={20} />, title: 'Compete', desc: 'Join national and international contests.' },
    { icon: <Sparkles className="text-violet-300" size={20} />, title: 'Innovate', desc: 'Hackathons, research sprints, and demos.' },
    { icon: <Bot className="text-cyan-300" size={20} />, title: 'Community', desc: 'Meet makers, share ideas, build together.' },
  ]
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-gray-300">Hands-on sessions covering electronics, mechanics, and ML. We prototype ideas and take them to competitions.</p>
        </motion.div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              whileHover={{ scale: 1.03, rotate: [0, 0.4, 0] }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm hover:shadow-fuchsia-500/20 hover:shadow-xl"
            >
              <div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/10 grid place-items-center mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white">{f.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} RoboClub. All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm">
          <a href="#" className="inline-flex items-center gap-1 text-gray-300 hover:text-white"><Github size={16}/> GitHub</a>
          <a href="mailto:hello@roboclub.test" className="inline-flex items-center gap-1 text-gray-300 hover:text-white"><Mail size={16}/> Contact</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  // Page-level dark theme + subtle starfield overlay
  return (
    <div className="min-h-screen bg-black text-gray-100 relative">
      <Navbar />
      <Hero />
      <RobotsGrid />
      <About />
      {/* Different interaction: magnetic CTA with pulse on hover */}
      <section id="join" className="py-20 bg-gradient-to-b from-black to-gray-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-4 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to build interactive robots?</h3>
          <p className="text-gray-300 mt-2">Come by our next open lab night — beginners welcome!</p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-6 py-3 rounded-full hover:brightness-110 shadow-[0_0_40px_-16px] shadow-fuchsia-500/60"
          >
            <Sparkles size={18}/> I want in
          </motion.a>
        </motion.div>
      </section>
      <Footer />
    </div>
  )
}

export default App
