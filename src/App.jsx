import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Bot, Cpu, Sparkles, Zap, Github, Mail } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="h-9 w-9 rounded-full bg-gradient-to-br from-black to-gray-800 grid place-items-center text-white">
            <Bot size={18} />
          </span>
          RoboClub
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#robots" className="hover:text-gray-900">Robots</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#events" className="hover:text-gray-900">Events</a>
          <a href="#join" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-black transition-colors">
            <Sparkles size={16} /> Join</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <span className="sr-only">Menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#robots" className="hover:text-gray-900">Robots</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#events" className="hover:text-gray-900">Events</a>
            <a href="#join" className="inline-flex w-fit items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-black transition-colors">
              <Sparkles size={16} /> Join</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-gray-200 to-white blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-gray-100 to-white blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center relative z-10">
        <div className="py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Robotics, AI and Playful Engineering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 max-w-xl"
          >
            Welcome to our Robotic Club. Build, program, and compete with interactive robots. Explore cutting‑edge technology with a community of makers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#join" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full hover:bg-black transition-colors">
              <Sparkles size={18} /> Join the Club
            </a>
            <a href="#robots" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition-colors">
              <Cpu size={18} /> See Robots
            </a>
          </motion.div>
          <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2"><Zap className="text-gray-900" size={16}/> Weekly builds</div>
            <div className="flex items-center gap-2"><Cpu className="text-gray-900" size={16}/> AI workshops</div>
            <div className="flex items-center gap-2"><Bot className="text-gray-900" size={16}/> Competition team</div>
          </div>
        </div>

        <div className="h-[500px] sm:h-[560px] lg:h-[640px] rounded-2xl border border-black/5 bg-white shadow-xl overflow-hidden relative">
          <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
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
    <section id="robots" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Robots</h2>
            <p className="text-gray-600 mt-2">Hover to tilt, tap to flip for quick specs.</p>
          </div>
          <a href="#join" className="hidden sm:inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-black transition-colors">
            <Sparkles size={16} /> Join Builds
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {robots.map((r, i) => (
            <TiltCard key={i} robot={r} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TiltCard({ robot }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <motion.div
      className="group perspective"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative h-64 rounded-xl overflow-hidden border border-black/5 shadow-sm bg-white"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
          <motion.img
            src={robot.img}
            alt={robot.name}
            className="h-full w-full object-cover"
            initial={{ scale: 1.05 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-80"><Cpu size={14}/> RoboClub</div>
            <h3 className="text-lg font-semibold mt-1">{robot.name}</h3>
            <p className="text-sm opacity-90">{robot.role}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-white p-4 flex flex-col justify-between" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{robot.name}</h4>
            <p className="text-gray-600">Quick Specs</p>
            <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc list-inside">
              <li>AI Navigation</li>
              <li>Brushless motors</li>
              <li>Custom PCB</li>
            </ul>
          </div>
          <button className="self-start inline-flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-full text-sm hover:bg-black">
            <Zap size={16}/> Learn More
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">Hands-on sessions covering electronics, mechanics, and ML. We prototype ideas and take them to competitions.</p>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {[{
            icon: <Cpu className="text-gray-900" size={20} />, title: 'Build & Learn', desc: 'From soldering to SLAM — learn end to end.'
          },{
            icon: <Zap className="text-gray-900" size={20} />, title: 'Compete', desc: 'Join national and international contests.'
          },{
            icon: <Sparkles className="text-gray-900" size={20} />, title: 'Innovate', desc: 'Hackathons, research sprints, and demos.'
          },{
            icon: <Bot className="text-gray-900" size={20} />, title: 'Community', desc: 'Meet makers, share ideas, build together.'
          }].map((f, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-gray-100 grid place-items-center mb-3">{f.icon}</div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} RoboClub. All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm">
          <a href="#" className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900"><Github size={16}/> GitHub</a>
          <a href="mailto:hello@roboclub.test" className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900"><Mail size={16}/> Contact</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <RobotsGrid />
      <About />
      <section id="join" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">Ready to build interactive robots?</h3>
          <p className="text-gray-600 mt-2">Come by our next open lab night — beginners welcome!</p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-black"><Sparkles size={18}/> I want in</a>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
