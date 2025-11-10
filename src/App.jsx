import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Bot, Cpu, Sparkles, Zap, Github, Mail, Calendar, Users, Star, ChevronDown, ArrowUpRight, ArrowUp } from 'lucide-react'

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

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <motion.div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent" style={{ pointerEvents: 'none' }}>
      <motion.div style={{ width }} className="h-full bg-gradient-to-r from-fuchsia-500 to-indigo-500" />
    </motion.div>
  )
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
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#robots" className="hover:text-white transition-colors">Robots</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#join" className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-colors border border-white/10">
            <Sparkles size={16} /> Join</a>
        </nav>
        <button className="md:hidden p-2 text-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <span className="sr-only">Menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-gray-950/90 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-3 text-sm text-gray-200">
            {[
              ['Robots', '#robots'],
              ['About', '#about'],
              ['Events', '#events'],
              ['Projects', '#projects'],
              ['Team', '#team'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a key={label} href={href} className="hover:text-white">{label}</a>
            ))}
            <a href="#join" className="col-span-2 inline-flex w-full items-center justify-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
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
  { name: 'Astra-01', role: 'Vision-guided line follower', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Bolt-MX', role: 'Omniwheel arena bot', img: 'https://images.unsplash.com/photo-1581091215367-59ab6b66d24c?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Echo-Sense', role: 'Obstacle mapper with LIDAR', img: 'https://images.unsplash.com/photo-1581091215367-5f9f0b6b047f?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Nova-Arm', role: '6‑DOF robotic arm', img: 'https://images.unsplash.com/photo-1581093588401-16a4723f1f36?q=80&w=1887&auto=format&fit=crop' },
]

function RobotsGrid() {
  return (
    <section id="robots" className="relative py-24 bg-gradient-to-b from-black to-gray-950">
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

function Events() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  const items = [
    { date: 'Apr 12', title: 'Intro to Robotics', desc: 'Hands-on basics: sensors, motors, controllers.' },
    { date: 'May 03', title: 'AI Vision Lab', desc: 'Computer vision pipelines for line following.' },
    { date: 'Jun 18', title: 'Battle Bot Night', desc: 'Arena practice + safety briefing.' },
    { date: 'Jul 07', title: 'Hackathon', desc: '24h rapid prototyping sprint.' },
  ]

  return (
    <section id="events" className="relative py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <Calendar className="text-fuchsia-400" size={20} />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Upcoming Events</h2>
        </div>
        <div ref={ref} className="relative grid lg:grid-cols-[1fr_2px_1fr] gap-6">
          <motion.div style={{ y }} className="space-y-6">
            {items.filter((_, i) => i % 2 === 0).map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl p-5 bg-white/5 border border-white/10">
                <div className="text-xs text-fuchsia-300">{e.date}</div>
                <div className="text-white font-semibold">{e.title}</div>
                <div className="text-gray-300 text-sm">{e.desc}</div>
              </motion.div>
            ))}
          </motion.div>
          <div className="hidden lg:block w-px bg-gradient-to-b from-fuchsia-500/40 via-white/10 to-indigo-500/40" />
          <motion.div style={{ y }} className="space-y-6">
            {items.filter((_, i) => i % 2 === 1).map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl p-5 bg-white/5 border border-white/10">
                <div className="text-xs text-indigo-300">{e.date}</div>
                <div className="text-white font-semibold">{e.title}</div>
                <div className="text-gray-300 text-sm">{e.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    { title: 'Maze Solver', img: 'https://images.unsplash.com/photo-1543946602-a0fce8117694?q=80&w=1887&auto=format&fit=crop' },
    { title: 'Quadruped Gait', img: 'https://images.unsplash.com/photo-1606229365485-93a3b8c5f5c5?q=80&w=1887&auto=format&fit=crop' },
    { title: 'Drone Swarm', img: 'https://images.unsplash.com/photo-1527973833563-94f0d51a2f61?q=80&w=1887&auto=format&fit=crop' },
    { title: 'Robotic Arm', img: 'https://images.unsplash.com/photo-1581091870622-7e0cdfbb6790?q=80&w=1887&auto=format&fit=crop' },
    { title: 'Self-Balancing Bot', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1887&auto=format&fit=crop' },
  ]

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Star className="text-indigo-400" size={20} />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
        </div>
        <p className="text-gray-300 mb-6">Swipe/scroll horizontally to explore. Each card lifts on hover.</p>
        <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="grid auto-cols-[80%] sm:auto-cols-[40%] md:auto-cols-[30%] grid-flow-col gap-6 snap-x snap-mandatory">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="snap-start rounded-2xl overflow-hidden border border-white/10 bg-white/5 min-h-[320px] relative"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              >
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm opacity-90">{p.title}</div>
                  <button className="mt-2 inline-flex items-center gap-2 text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/20">
                    View <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const people = [
    { name: 'Rhea', role: 'Lead Engineer', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Sabhis', role: 'AI Research', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Arjun', role: 'Mechanical', img: 'https://images.unsplash.com/photo-1527980965255-3cfa2a3b1ad4?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Maya', role: 'Electronics', img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=1887&auto=format&fit=crop' },
  ]
  return (
    <section id="team" className="relative py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <Users className="text-cyan-300" size={20} />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Team</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((p, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ rotate: [0, -1.5, 1.2, 0], scale: 1.02 }}
            >
              <img src={p.img} alt={p.name} className="h-64 w-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-gray-200">{p.role}</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="px-3 py-1.5 text-xs rounded-full bg-white/10 border border-white/10 hover:bg-white/20">Portfolio</a>
                <a href="#" className="px-3 py-1.5 text-xs rounded-full bg-white/10 border border-white/10 hover:bg-white/20">Contact</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(null)
  const q = [
    { q: 'Do I need experience?', a: 'No. Beginners are welcome — we help you get started fast.' },
    { q: 'What do I bring?', a: 'Just your curiosity. Laptops provided for sessions when needed.' },
    { q: 'How often do you meet?', a: 'Weekly workshops and monthly project sprints.' },
  ]
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">FAQ</h2>
        <div className="divide-y divide-white/10">
          {q.map((item, i) => (
            <div key={i} className="py-4">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between text-left text-white">
                <span className="font-medium">{item.q}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }}>
                  <ChevronDown />
                </motion.span>
              </button>
              <motion.div initial={false} animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }} className="overflow-hidden text-gray-300">
                <div className="pt-2 text-sm">{item.a}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SponsorsMarquee() {
  const logos = ['NVIDIA', 'ROBOTIS', 'Arduino', 'TensorFlow', 'OpenCV', 'Raspberry Pi']
  return (
    <section className="py-16 bg-black/80 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm text-gray-400 mb-6">Supported by</p>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-10 text-white/80 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10">{l}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact us</h2>
          <p className="text-gray-300 mt-2">Have questions or want to collaborate? Send us a message.</p>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="text-white font-semibold">Lab Hours</div>
            <div className="text-gray-300 text-sm">Fri 5–8 PM, Sun 2–6 PM</div>
            <div className="mt-3 text-gray-300 text-sm">Address: Robotics Lab, Tech Block, Campus</div>
          </div>
        </div>
        <form className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <FloatingInput label="Name" type="text" />
            <FloatingInput label="Email" type="email" />
          </div>
          <div className="mt-4">
            <FloatingInput label="Subject" type="text" />
          </div>
          <div className="mt-4">
            <FloatingTextarea label="Message" />
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-5 py-3 rounded-xl hover:brightness-110">
            Send <ArrowUpRight size={18} />
          </motion.button>
        </form>
      </div>
    </section>
  )
}

function FloatingInput({ label, type }) {
  const [v, setV] = useState('')
  return (
    <label className="relative block">
      <input value={v} onChange={e => setV(e.target.value)} type={type} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder={label} />
      <span className={`pointer-events-none absolute left-4 top-2 text-xs transition-all ${v ? 'text-white' : 'text-gray-400'}`}>{label}</span>
    </label>
  )
}

function FloatingTextarea({ label }) {
  const [v, setV] = useState('')
  return (
    <label className="relative block">
      <textarea value={v} onChange={e => setV(e.target.value)} rows={5} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder={label} />
      <span className={`pointer-events-none absolute left-4 top-2 text-xs transition-all ${v ? 'text-white' : 'text-gray-400'}`}>{label}</span>
    </label>
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

function BackToTop() {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)
  useEffect(() => {
    return scrollY.on('change', (v) => setShow(v > 600))
  }, [scrollY])
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/10 border border-white/10 text-white backdrop-blur hover:bg-white/20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <ArrowUp />
    </motion.button>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 relative">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <RobotsGrid />
      <About />
      <Events />
      <Projects />
      <Team />
      <FAQ />
      <SponsorsMarquee />
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
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-6 py-3 rounded-full hover:brightness-110 shadow-[0_0_40px_-16px] shadow-fuchsia-500/60"
          >
            <Sparkles size={18}/> I want in
          </motion.a>
        </motion.div>
      </section>
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
