import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Shield,
  Workflow,
  BarChart3,
  Users,
  UserCheck,
  Building2,
  FileCheck,
  Mail,
  FileSearch,
  Receipt,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Globe,
  Lock,
} from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import usePageMeta from '../hooks/usePageMeta';

function AnimatedSection({ children, className = '', delay = 0 }) {
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

const trustedFeatures = [
  {
    icon: Shield,
    title: 'Role-Based Access',
    description: 'Granular permissions ensure every user sees only what they need.',
  },
  {
    icon: Workflow,
    title: 'Automated Case Flows',
    description: 'Intake, review, and approval pipelines run without manual handoffs.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Visibility',
    description: 'Live dashboards track every case, deadline, and team performance.',
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: 'End-to-end encryption, SOC 2 compliance, and audit-ready logging.',
  },
];

const aiAgents = [
  {
    icon: Users,
    title: 'Client Intake Agent',
    description:
      'Collects and pre-validates client information from intake forms, passports, and supporting documents — automatically structuring data for caseworker review.',
    badges: ['AUTO ONBOARD', 'AML COMPLIANT'],
  },
  {
    icon: FileCheck,
    title: 'Document Verification Agent',
    description:
      'Scans uploaded documents for expiry dates, naming conventions, and format compliance. Flags anomalies before they reach the caseworker\'s desk.',
    badges: ['REAL-TIME CHECK', 'OCR POWERED'],
  },
  {
    icon: Mail,
    title: 'Email Reply Agent',
    description:
      'Drafts context-aware responses to client and government correspondence using case history, templates, and tone calibration — ready for one-click send.',
    badges: ['AI DRAFTED', 'BRAND TONE'],
  },
  {
    icon: FileSearch,
    title: 'Clause & Document Analysis',
    description:
      'Parses immigration forms, policy documents, and contracts to extract key clauses, deadlines, and obligations — highlighting risk areas automatically.',
    badges: ['NLP ENGINE', 'RISK ALERT'],
  },
  {
    icon: Receipt,
    title: 'Invoice & Communication Agent',
    description:
      'Generates billing entries from logged time, attaches them to client records, and delivers polished invoices with full case-level cost breakdowns.',
    badges: ['AUTO BILL', 'CLIENT READY'],
  },
  {
    icon: Shield,
    title: 'Compliance Monitor Agent',
    description:
      'Continuously scans case files against current IRCC, USCIS, and local regulatory requirements — flagging expiring documents, missing filings, and policy changes before they become issues.',
    badges: ['24/7 MONITOR', 'POLICY SYNC'],
  },
];

const coreModules = [
  {
    icon: Building2,
    title: 'Admin Dashboard',
    description: 'Firm-wide dashboard, user management, billing oversight, compliance reporting, and audit trails.',
    path: '/features/admin',
    color: 'bg-amber/10',
    iconColor: 'text-amber',
  },
  {
    icon: Users,
    title: 'Caseworker Portal',
    description: 'Matter management, document checklists, deadline tracking, AI-assisted drafting, and workload balancing.',
    path: '/features/caseworker',
    color: 'bg-teal/10',
    iconColor: 'text-teal',
  },
  {
    icon: UserCheck,
    title: 'Candidate Portal',
    description: 'Secure portal, real-time status tracking, document upload, e-signatures, and direct messaging.',
    path: '/features/candidate',
    color: 'bg-navy/10',
    iconColor: 'text-navy',
  },
  {
    icon: MessageSquare,
    title: 'Client Portal',
    description: 'Multi-candidate dashboard, compliance tracking, bulk uploads, invoicing, and reporting exports.',
    path: '/features/client',
    color: 'bg-amber/10',
    iconColor: 'text-amber',
  },
];

const whyFeatures = [
  {
    icon: MessageSquare,
    title: 'Unified Client Communication',
    description:
      'Every message, document request, and status update lives in one thread per case. No more scattered email chains or lost context — clients and caseworkers stay aligned from day one.',
  },
  {
    icon: Clock,
    title: 'Access on the Go',
    description:
      'Review cases, approve documents, and respond to clients from any device. ImCam Hub is built mobile-first so your team never misses a critical deadline, whether at the office or in court.',
  },
  {
    icon: Globe,
    title: 'Enhanced Scheduling',
    description:
      'Calendar integration syncs interviews, filing deadlines, and hearing dates across your entire caseload. Automated reminders keep every milestone on track without manual follow-ups.',
  },
];

const faqs = [
  {
    question: 'What types of immigration cases does ImCam Hub support?',
    answer:
      'ImCam Hub supports the full spectrum of immigration case types including work permits, permanent residency applications, family sponsorships, refugee claims, and corporate immigration programs. The platform is jurisdiction-aware and adapts its checklists and compliance rules based on the country and program type.',
  },
  {
    question: 'How does the AI document verification work?',
    answer:
      'Our Document Verification Agent uses OCR and NLP to scan uploaded files in real time. It checks for expired documents, missing signatures, incorrect formats, and incomplete fields — flagging issues before a caseworker even opens the file. This reduces rejection rates and accelerates processing.',
  },
  {
    question: 'Can candidates and clients track their own case progress?',
    answer:
      'Yes. Both the Candidate Portal and Client Portal provide self-service dashboards where users can view real-time case status, upload requested documents, and communicate directly with their caseworker — all within a secure, branded environment.',
  },
  {
    question: 'Is ImCam Hub compliant with data privacy regulations?',
    answer:
      'ImCam Hub is built with compliance at its core. We are SOC 2 Type II certified, GDPR compliant, and follow PIPEDA standards for Canadian data. All data is encrypted at rest and in transit, with full audit logging and role-based access controls.',
  },
  {
    question: 'What integrations does ImCam Hub offer?',
    answer:
      'ImCam Hub integrates with major HRIS platforms (BambooHR, Workday, Rippling), accounting software (QuickBooks, Xero), government e-filing portals, and popular communication tools like Slack and Microsoft Teams. Our API also allows custom integrations.',
  },
  {
    question: 'How long does implementation typically take?',
    answer:
      'Most firms are fully onboarded within 2-4 weeks. This includes data migration from your existing systems, workflow configuration, team training, and a parallel-run period. Dedicated onboarding managers ensure a smooth transition with minimal disruption.',
  },
];

function VideoShowcase() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    v.play().catch(() => setIsPlaying(false));
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);

  const highlights = [
    { icon: FileCheck, stat: '10,000+', label: 'Cases Managed' },
    { icon: Clock, stat: '60%', label: 'Faster Processing' },
    { icon: Users, stat: '98%', label: 'Client Satisfaction' },
    { icon: Shield, stat: '100%', label: 'Compliance Rate' },
  ];

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        src="/assets/background-video.mp4"
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-navy/20 to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 container-app py-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-amber text-xs font-semibold rounded-full mb-6 border border-white/10"
          >
            <Play size={10} fill="currentColor" /> Platform Demo
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight"
          >
            See ImCam Hub{' '}
            <span className="text-amber">in Action</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed"
          >
            Watch how our AI-powered platform streamlines immigration case
            management — from client intake and document review through
            compliance checks and final resolution.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <item.icon size={20} className="text-amber mb-2" />
                <div className="text-2xl font-bold text-white">{item.stat}</div>
                <div className="text-xs text-white/60">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-[0_2px_8px_rgba(242,153,74,0.35)] hover:shadow-[0_4px_16px_rgba(242,153,74,0.4)] hover:scale-[1.03] active:scale-[0.98]"
            >
              Book a Free Demo <ArrowRight size={18} />
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
            >
              Explore Features
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Play/pause button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-8 right-8 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
      >
        {isPlaying ? (
          <div className="flex gap-1.5">
            <div className="w-1.5 h-4 bg-white rounded-full" />
            <div className="w-1.5 h-4 bg-white rounded-full" />
          </div>
        ) : (
          <Play size={20} className="text-white ml-0.5" fill="white" />
        )}
      </button>
    </div>
  );
}

export default function Home() {
  usePageMeta(
    'Immigration Case Management Platform',
    'ImCam Hub is the AI-powered case management system for immigration practices. Manage intake, documents, compliance, and invoicing in one platform.'
  );

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div>
      {/* =========================================
          VIDEO SHOWCASE — Full Background
          ========================================= */}
      <VideoShowcase />

      {/* =========================================
          HERO SECTION — Light Background + Image
          ========================================= */}
      <section className="min-h-[85vh] flex items-center bg-gradient-to-b from-offwhite to-sand">
        <div className="container-app py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold text-navy leading-[1.1] mb-6">
                One Platform.
                <br />
                Every Case,{' '}
                <span className="text-amber">Handled.</span>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
                ImCam Hub is the AI-powered case management system built for
                immigration practices. From client intake through final
                resolution — intake, document review, compliance checks, and
                invoicing — managed in one unified system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-demo"
                  className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-[0_2px_8px_rgba(242,153,74,0.35)] hover:shadow-[0_4px_16px_rgba(242,153,74,0.4)] hover:scale-[1.03] active:scale-[0.98]"
                >
                  Book a Free Demo <ArrowRight size={18} />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
                >
                  <Play size={16} /> Explore Features
                </Link>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="rounded-3xl overflow-hidden border-2 border-sand-dark shadow-[0_8px_30px_rgba(11,31,58,0.12)]"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Immigration case management dashboard on a laptop screen"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          TRUSTED FEATURE STRIP
          ========================================= */}
      <section className="py-16 bg-white border-y border-sand-dark">
        <div className="container-app">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustedFeatures.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-sand/50 hover:bg-sand transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-navy/[0.06] flex items-center justify-center shrink-0">
                    <feature.icon size={22} className="text-navy" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          AI SYSTEM — 5-Tile Grid
          ========================================= */}
      <section className="section-padding">
        <div className="container-app">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 bg-amber/10 text-amber-dark text-xs font-semibold rounded-full mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              One AI System. Every Case Handled.
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Five intelligent agents work behind the scenes to automate
              repetitive tasks, enforce compliance, and keep your caseload
              moving — so your team can focus on what matters.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiAgents.map((agent, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-sand-dark p-6 h-full hover:shadow-[0_8px_30px_rgba(11,31,58,0.08)] transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-navy/[0.06] flex items-center justify-center mb-4">
                    <agent.icon size={24} className="text-navy" />
                  </div>
                  <h3 className="text-base font-heading font-semibold text-navy mb-2">
                    {agent.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {agent.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {agent.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center px-2.5 py-1 bg-sand text-text-muted text-[11px] font-bold tracking-wide rounded-md"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CORE MODULES STRIP
          ========================================= */}
      <section className="section-padding bg-sand">
        <div className="container-app">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1.5 bg-navy/[0.06] text-navy text-xs font-semibold rounded-full mb-4">
              Core Modules
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
              A Portal for Every Role
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreModules.map((mod, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <Link to={mod.path} className="block group h-full">
                  <div className="bg-white rounded-2xl border border-sand-dark p-6 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(11,31,58,0.08)] transition-all">
                    <div
                      className={`w-12 h-12 ${mod.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <mod.icon size={24} className={mod.iconColor} />
                    </div>
                    <h3 className="text-base font-heading font-semibold text-navy mb-2 group-hover:text-amber transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                      {mod.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          WHY IMCAM HUB — With Image
          ========================================= */}
      <section className="section-padding bg-white">
        <div className="container-app">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 bg-teal/10 text-teal-dark text-xs font-semibold rounded-full mb-4">
              Why ImCam Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Built Around Your Practice
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Every detail of ImCam Hub is designed around the real workflows
              of immigration professionals — not generic project management
              logic.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                {whyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber/10 rounded-2xl flex items-center justify-center shrink-0">
                      <feature.icon size={24} className="text-amber" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-navy mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(11,31,58,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Immigration team collaborating around a table"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* =========================================
          FAQ SECTION — Two-Column with Contact Card
          ========================================= */}
      <section className="section-padding bg-sand">
        <div className="container-app">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1.5 bg-navy/[0.06] text-navy text-xs font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
              Questions from Firms Worldwide
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
            {/* Left: FAQ accordion */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl border border-sand-dark p-6 md:p-8">
                <FAQAccordion items={faqs} />
              </div>
            </AnimatedSection>

            {/* Right: Contact card */}
            <AnimatedSection delay={0.15}>
              <div className="bg-navy rounded-2xl p-8 text-white sticky top-28">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Still have questions?
                </h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  Our team is happy to walk you through how ImCam Hub fits
                  your practice.
                </p>
                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:hello@incamhub.com"
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Mail size={20} className="text-white/40" />
                    hello@incamhub.com
                  </a>
                  <a
                    href="tel:+18005551234"
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Phone size={20} className="text-white/40" />
                    1-800-555-1234
                  </a>
                  <div className="flex items-start gap-3 text-sm text-white/70">
                    <MapPin size={20} className="text-white/40 shrink-0 mt-0.5" />
                    <span>
                      123 Bay Street, Suite 400
                      <br />
                      Toronto, ON M5J 2R2
                    </span>
                  </div>
                </div>
                <Link
                  to="/book-demo"
                  className="flex items-center justify-center gap-2 w-full bg-amber hover:bg-amber-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  Book a Free Demo <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* =========================================
          CLOSING CTA BANNER
          ========================================= */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 container-app text-center">
          <AnimatedSection>
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
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
