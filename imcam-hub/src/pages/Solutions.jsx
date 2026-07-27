import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';
import {
  ArrowRight,
  Database,
  Calendar,
  Globe,
  PieChart,
  Mic,
  Volume2,
  Rss,
  LayoutDashboard,
  FolderOpen,
  Clock,
  Users,
  ShieldAlert,
  Link2,
  Bot,
  BarChart3,
} from 'lucide-react';

function AnimateOnScroll({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const challenges = [
  {
    icon: FolderOpen,
    title: 'Manual Case Tracking',
    description:
      'Spreadsheets, shared drives, and sticky notes create a fragmented view of your caseload — making it impossible to see which matters are on track and which are at risk.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    color: 'bg-rose/10 text-rose',
  },
  {
    icon: Clock,
    title: 'Missed Deadlines',
    description:
      'Filing windows, interview dates, and renewal deadlines are tracked in emails and calendars with no automated safety net — one missed date can mean a rejected application.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop',
    color: 'bg-orange/10 text-orange',
  },
  {
    icon: Users,
    title: 'Fragmented Client Communication',
    description:
      'Requests, documents, and updates are scattered across email threads, phone calls, and messaging apps — caseworkers waste hours reconstructing conversation history.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
    color: 'bg-pink/10 text-pink',
  },
  {
    icon: ShieldAlert,
    title: 'Compliance Risk',
    description:
      'Regulatory requirements change frequently and vary by jurisdiction. Without automated checks, firms risk filing errors, data breaches, and audit failures.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    color: 'bg-red-500/10 text-red-500',
  },
];

const solutions = [
  {
    icon: Database,
    title: 'Document Vault',
    description:
      'Securely store, organise, and retrieve all case-related documents in one centralised repository with version control and access permissions.',
    color: 'bg-indigo/15 text-indigo-light',
  },
  {
    icon: Calendar,
    title: 'Deadline Tracker',
    description:
      'Automated calendar syncing with smart alerts for filing windows, interview dates, and renewal deadlines — never miss a critical date again.',
    color: 'bg-blue/15 text-blue-light',
  },
  {
    icon: Globe,
    title: 'Client Portal',
    description:
      'Give clients a self-service dashboard to upload documents, track case progress, and communicate with their caseworker — reducing back-and-forth.',
    color: 'bg-purple/15 text-purple-light',
  },
  {
    icon: PieChart,
    title: 'Reporting & Analytics',
    description:
      'Real-time dashboards and custom reports on caseload health, team performance, revenue metrics, and compliance scores across your firm.',
    color: 'bg-emerald/15 text-emerald-light',
  },
  {
    icon: Mic,
    title: 'Speech to Text',
    description:
      'Dictate case notes, meeting summaries, and client instructions directly into the platform — transcribed and tagged to the correct matter.',
    color: 'bg-cyan/15 text-cyan-light',
  },
  {
    icon: Volume2,
    title: 'Text to Speech',
    description:
      'Listen to case summaries, deadline lists, and document checklists on the go — accessibility-first for caseworkers who need to multitask.',
    color: 'bg-orange/15 text-orange-light',
  },
  {
    icon: Rss,
    title: 'Firm Feed',
    description:
      'A unified activity stream showing case updates, team actions, new filings, and compliance alerts — keeps everyone aligned without status meetings.',
    color: 'bg-pink/15 text-pink-light',
  },
  {
    icon: LayoutDashboard,
    title: 'User Dashboard',
    description:
      'Personalized dashboards for every role — showing relevant cases, upcoming deadlines, pending tasks, and performance metrics at a glance.',
    color: 'bg-indigo/15 text-indigo-light',
  },
];

const steps = [
  {
    number: '01',
    title: 'Connect',
    description:
      'Import your existing cases, client data, and templates. We handle migration so your team starts on day one with everything in place.',
    icon: Link2,
    color: 'bg-blue/10 text-blue',
  },
  {
    number: '02',
    title: 'Automate',
    description:
      'Configure AI agents, workflow rules, and compliance checks to match your firm\'s processes — then watch repetitive tasks disappear.',
    icon: Bot,
    color: 'bg-indigo/10 text-indigo',
  },
  {
    number: '03',
    title: 'Track',
    description:
      'Monitor every case, deadline, and team performance in real time. Dashboards and alerts keep your practice running smoothly.',
    icon: BarChart3,
    color: 'bg-emerald/10 text-emerald',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Solutions() {
  usePageMeta(
    'Solutions — ImCam Hub',
    'Comprehensive solutions for immigration practices: document management, deadline tracking, client portals, and intelligent case routing.'
  );

  return (
    <div>
      {/* =========================================
          1. HERO — Enhanced
          ========================================= */}
      <section className="relative section-padding overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=600&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-indigo/80" />
        {/* Decorative glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 container-app">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">The Problem</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-[1.1]">
              The Challenges Immigration{' '}
              <br className="hidden sm:block" />
              Practices <span className="gradient-text-cyan">Face</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
              Complex regulations. Tight deadlines. High client expectations.
              Lean teams. Fragmented tools. ImCam Hub was built to solve{' '}
              <span className="text-white font-medium">every one</span> of these challenges.
            </p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
            >
              {[
                { value: '73%', label: 'of firms use spreadsheets', color: 'text-rose' },
                { value: '40%', label: 'cases miss deadlines', color: 'text-orange' },
                { value: '6hrs', label: 'wasted daily on admin', color: 'text-amber' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-white/50 font-medium tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. CHALLENGES — Problem Cards
          ========================================= */}
      <section className="section-padding bg-white border-y border-sand-dark">
        <div className="container-app">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Sound Familiar?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              These are the daily realities immigration teams face without
              a unified system.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div className="bg-[#F8F5F3] rounded-2xl border border-[#E8E2DC] overflow-hidden h-full group">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-2xl ${challenge.color} flex items-center justify-center mb-4`}>
                      <challenge.icon size={24} />
                    </div>
                    <h3 className="text-base font-heading font-semibold text-[#4A3B3B] mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-[#7A6B6B] leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          3. OUR SOLUTIONS — 8 AI Tiles
          ========================================= */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-indigo/20 to-purple/10 pointer-events-none" />
        <div className="container-app relative z-10">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Our <span className="gradient-text-cyan">Solutions</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Eight powerful capabilities that eliminate manual work,
              reduce risk, and keep your caseload moving automatically.
            </p>
          </AnimateOnScroll>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 rounded-2xl p-6 cursor-default transition-colors group"
              >
                <div className={`w-12 h-12 rounded-2xl ${sol.color} flex items-center justify-center mb-4 transition-colors`}>
                  <sol.icon size={24} />
                </div>
                <h3 className="text-base font-heading font-semibold text-white mb-2">
                  {sol.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {sol.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          4. HOW IT WORKS — 3-Step Process
          ========================================= */}
      <section className="section-padding bg-white">
        <div className="container-app">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Three steps from signup to a fully operational immigration
              practice platform.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-[52px] left-[20%] right-[20%] h-[2px]">
              <div className="w-full h-full bg-sand-dark relative">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-gradient-to-r from-blue via-indigo to-emerald origin-left"
                />
              </div>
            </div>

            {steps.map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 0.15}>
                <div className="text-center relative">
                  {/* Step circle */}
                  <div className="w-[104px] h-[104px] rounded-full bg-sand border-4 border-white mx-auto mb-6 flex items-center justify-center relative z-10 shadow-[0_2px_12px_rgba(11,31,58,0.06)]">
                    <div className="text-center">
                      <step.icon size={28} className="text-navy mx-auto mb-1" />
                      <span className="text-[11px] font-bold text-text-muted tracking-widest">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Arrow between steps (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden flex justify-center -my-2 relative z-10">
                      <div className="w-[2px] h-8 bg-sand-dark">
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.2 }}
                          className="w-full h-full bg-gradient-to-b from-blue to-indigo origin-top"
                        />
                      </div>
                    </div>
                  )}

                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          5. CLOSING CTA
          ========================================= */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&h=800&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 container-app text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to see ImCam Hub <span className="text-cyan-light">in action</span>?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Join immigration practices that have transformed their workflow
              with ImCam Hub. Schedule a personalized demo today.
            </p>
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center gap-2 btn-gradient-primary px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
            >
              Book a Free Demo <ArrowRight size={18} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
