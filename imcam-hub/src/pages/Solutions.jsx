import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';
import {
  ArrowRight,
  MessageSquareText,
  FileSignature,
  Mail,
  FileText,
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
  CheckCircle2,
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
  },
  {
    icon: Clock,
    title: 'Missed Deadlines',
    description:
      'Filing windows, interview dates, and renewal deadlines are tracked in emails and calendars with no automated safety net — one missed date can mean a rejected application.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop',
  },
  {
    icon: Users,
    title: 'Fragmented Client Communication',
    description:
      'Requests, documents, and updates are scattered across email threads, phone calls, and messaging apps — caseworkers waste hours reconstructing conversation history.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
  },
  {
    icon: ShieldAlert,
    title: 'Compliance Risk',
    description:
      'Regulatory requirements change frequently and vary by jurisdiction. Without automated checks, firms risk filing errors, data breaches, and audit failures.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
  },
];

const solutions = [
  {
    icon: MessageSquareText,
    title: 'AI Chat',
    description:
      'Context-aware chatbot that answers candidate questions, drafts preliminary responses, and routes complex queries to the right caseworker.',
  },
  {
    icon: FileSignature,
    title: 'AI Contracts',
    description:
      'Generate retainer agreements, engagement letters, and service contracts from templates — auto-populated with client data and case specifics.',
  },
  {
    icon: Mail,
    title: 'AI Emails',
    description:
      'Draft and refine client-facing emails using case context. Tone-calibrated, brand-consistent, and ready for one-click send or minor edits.',
  },
  {
    icon: FileText,
    title: 'AI Templates',
    description:
      'A library of intelligent templates for cover letters, submission packages, and government correspondence that adapt to each case\'s details.',
  },
  {
    icon: Mic,
    title: 'Speech to Text',
    description:
      'Dictate case notes, meeting summaries, and client instructions directly into the platform — transcribed and tagged to the correct matter.',
  },
  {
    icon: Volume2,
    title: 'Text to Speech',
    description:
      'Listen to case summaries, deadline lists, and document checklists on the go — accessibility-first for caseworkers who need to multitask.',
  },
  {
    icon: Rss,
    title: 'Firm Feed',
    description:
      'A unified activity stream showing case updates, team actions, new filings, and compliance alerts — keeps everyone aligned without status meetings.',
  },
  {
    icon: LayoutDashboard,
    title: 'User Dashboard',
    description:
      'Personalized dashboards for every role — showing relevant cases, upcoming deadlines, pending tasks, and performance metrics at a glance.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Connect',
    description:
      'Import your existing cases, client data, and templates. We handle migration so your team starts on day one with everything in place.',
    icon: Link2,
  },
  {
    number: '02',
    title: 'Automate',
    description:
      'Configure AI agents, workflow rules, and compliance checks to match your firm\'s processes — then watch repetitive tasks disappear.',
    icon: Bot,
  },
  {
    number: '03',
    title: 'Track',
    description:
      'Monitor every case, deadline, and team performance in real time. Dashboards and alerts keep your practice running smoothly.',
    icon: BarChart3,
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
    'AI-powered solutions for immigration practices: automated document drafting, compliance monitoring, deadline tracking, and intelligent case routing.'
  );

  return (
    <div>
      {/* =========================================
          1. HERO
          ========================================= */}
      <section className="relative section-padding overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=600&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 container-app">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              The Challenges Immigration
              <br className="hidden sm:block" /> Practices Face
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Immigration practices juggle complex regulations, tight
              deadlines, and high client expectations — all with lean teams
              and fragmented tools. ImCam Hub was built to solve every one
              of these challenges.
            </p>
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
                    <div className="w-12 h-12 rounded-xl bg-[#E8D5D0] flex items-center justify-center mb-4">
                      <challenge.icon size={24} className="text-[#9B4D4D]" />
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
      <section className="section-padding bg-navy">
        <div className="container-app">
          <AnimateOnScroll className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 bg-amber/15 text-amber text-xs font-semibold rounded-full mb-5">
              Powered by AI
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Our Solutions
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Eight intelligent capabilities that eliminate manual work,
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
                className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-amber/30 rounded-2xl p-6 cursor-default transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber/10 group-hover:bg-amber/20 flex items-center justify-center mb-4 transition-colors">
                  <sol.icon size={24} className="text-amber" />
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
              How It Works
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
                  className="absolute inset-0 bg-amber origin-left"
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
                          className="w-full h-full bg-amber origin-top"
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
              Ready to see ImCam Hub in action?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Join immigration practices that have transformed their workflow
              with ImCam Hub. Schedule a personalized demo today.
            </p>
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-[0_2px_8px_rgba(242,153,74,0.35)] hover:shadow-[0_4px_16px_rgba(242,153,74,0.4)] hover:scale-[1.03] active:scale-[0.98]"
            >
              Book a Free Demo <ArrowRight size={18} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
