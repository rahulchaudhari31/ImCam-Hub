import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import demoVideo from '../assets/video/ImCamHub_promo-01.mp4';
import {
  fetchFaqItems,
  fetchContactInfo,
  fetchHomeSections,
  resolveCmsAsset,
} from '../services/cmsService';
import {
  ArrowRight,
  Brain,
  Check,
  ChevronDown,
  Shield,
  ShieldCheck,
  Workflow,
  BarChart3,
  Users,
  UserCheck,
  Building2,
  FileCheck,
  Globe,
  Mail,
  FileSearch,
  MessageSquare,
  Phone,
  X,
} from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import usePageMeta from '../hooks/usePageMeta';

function AnimatedSection({ children, className = '', delay = 0, distance = 30, duration = 0.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const problemSolutions = [
  {
    problem: 'Hours lost every week to scattered emails, disconnected spreadsheets, and cases tracked across too many places',
    solution: 'Manage all your cases here — Skilled Worker, Sponsor Licence, ILR, British Citizenship and more',
  },
  {
    problem: 'Deadlines get missed',
    solution: 'Deadlines and key dates tracked automatically, with alerts before anything is at risk',
  },
  {
    problem: 'Clients chase you for updates',
    solution: 'Clients and sponsoring businesses check their own progress through dedicated portals',
  },
  {
    problem: "Managers lose visibility into who's handling what",
    solution: "Managers get full visibility over every caseworker's workload, without having to ask",
  },
  {
    problem: 'Documents sent back and forth with no single version of the truth',
    solution: 'Every document, case, and conversation lives in one place',
  },
  {
    problem: 'Important details slip through the cracks between inboxes',
    solution: 'Nothing gets lost between emails and spreadsheets again',
  },
  {
    problem: 'Caseworkers spend more time hunting for information than progressing cases',
    solution: "Caseworkers know exactly what's due and when, so time goes into the case, not the admin",
  },
  {
    problem: "Managers only notice something's fallen behind once it's too late to fix quietly",
    solution: 'Issues get flagged early, before they become a client-facing problem',
  },
];

const trustedFeatures = [
  {
    icon: Shield,
    title: 'Role-Based Access',
    description: 'Every user sees only the cases and data relevant to their role.',
    color: 'bg-amber/25 text-amber-dark',
    cardGradient: 'bg-amber-pale',
    cardBorder: 'border-amber/60',
    titleColor: 'text-amber-dark',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Visibility',
    description: "Live dashboards track every case, deadline, and caseworker's progress instantly.",
    color: 'bg-emerald/25 text-emerald',
    cardGradient: 'bg-emerald-pale',
    cardBorder: 'border-emerald/60',
    titleColor: 'text-emerald',
  },
  {
    icon: Users,
    title: 'Four Connected Portals',
    description: 'Admin, caseworker, client, and business, all sharing one live case.',
    color: 'bg-cyan/25 text-cyan',
    cardGradient: 'bg-cyan-pale',
    cardBorder: 'border-cyan/60',
    titleColor: 'text-cyan',
  },
  {
    icon: Brain,
    title: 'AI-Powered Case Intelligence',
    description: 'Auto-checks documents, flags compliance risks, and predicts delays early.',
    color: 'bg-purple/25 text-purple',
    cardGradient: 'bg-purple-pale',
    cardBorder: 'border-purple/60',
    titleColor: 'text-purple',
  },
  {
    icon: ShieldCheck,
    title: 'Audit & Compliance for Your Regulator',
    description: 'Every case keeps a complete, exportable trail — records, logs, and checks ready for your regulator (OISC) at any time, without last-minute file hunts.',
    color: 'bg-indigo/25 text-indigo',
    cardGradient: 'bg-indigo-pale',
    cardBorder: 'border-indigo/60',
    titleColor: 'text-indigo',
  },
];

const aiAgents = [
  {
    icon: Workflow,
    title: 'Case & Workflow Management',
    description:
      'Track every case through enquiry, application, compliance, and completion with pre-built workflows for each UK visa type.',
    badges: ['FULL LIFECYCLE', 'PRE-BUILT WORKFLOWS'],
    color: 'bg-blue/25 text-blue',
    cardGradient: 'bg-blue-pale',
    badgeBg: 'bg-blue text-white',
  },
  {
    icon: FileCheck,
    title: 'Document Vault',
    description:
      'Store, organise, and retrieve every case document securely in one place, with checklists showing what\'s received and outstanding.',
    badges: ['SECURE STORAGE', 'CHECKLIST TRACKING'],
    color: 'bg-indigo/25 text-indigo',
    cardGradient: 'bg-indigo-pale',
    badgeBg: 'bg-indigo text-white',
  },
  {
    icon: Users,
    title: 'Caseworker & Task Assignment',
    description:
      'Assign cases and tasks to caseworkers, then monitor workload and progress from a single manager dashboard.',
    badges: ['TASK ASSIGNMENT', 'WORKLOAD VISIBILITY'],
    color: 'bg-purple/25 text-purple',
    cardGradient: 'bg-purple-pale',
    badgeBg: 'bg-purple text-white',
  },
  {
    icon: Shield,
    title: 'Compliance & Licence Tracking',
    description:
      'Manage licence requests, CoS allocation, and compliance reviews with automatic alerts before deadlines are at risk.',
    badges: ['LICENCE TRACKING', 'AUTO ALERTS'],
    color: 'bg-emerald/25 text-emerald',
    cardGradient: 'bg-emerald-pale',
    badgeBg: 'bg-emerald text-white',
  },
  {
    icon: UserCheck,
    title: 'Client Self-Service Portal',
    description:
      'Let individual clients track their application progress, upload documents, and message your team without needing to call or email.',
    badges: ['CLIENT PORTAL', 'SELF-SERVICE'],
    color: 'bg-cyan/25 text-cyan',
    cardGradient: 'bg-cyan-pale',
    badgeBg: 'bg-cyan text-white',
  },
  {
    icon: Building2,
    title: 'Business/Sponsor Portal',
    description:
      'Give sponsoring businesses live visibility into licence status, sponsored workers, compliance obligations, and upcoming renewal deadlines.',
    badges: ['SPONSOR PORTAL', 'LIVE COMPLIANCE'],
    color: 'bg-orange/25 text-orange',
    cardGradient: 'bg-orange-pale',
    badgeBg: 'bg-orange text-white',
  },
];

const coreModules = [
  {
    icon: Building2,
    title: 'Admin Dashboard',
    description: 'Complete oversight of every case, caseworker, and compliance obligation across your consultancy.',
    path: '/features/admin',
    color: 'bg-indigo/25',
    iconColor: 'text-indigo',
    hoverColor: 'group-hover:text-indigo',
    cardGradient: 'bg-indigo-pale',
  },
  {
    icon: Users,
    title: 'Caseworker Portal',
    description: 'Every assigned case, task, and deadline in one place — from Skilled Worker to ILR and Citizenship work.',
    path: '/features/caseworker',
    color: 'bg-emerald/25',
    iconColor: 'text-emerald',
    hoverColor: 'group-hover:text-emerald',
    cardGradient: 'bg-emerald-pale',
  },
  {
    icon: UserCheck,
    title: 'Client Portal',
    description: 'Self-service tracking, document upload, and direct messaging for individual clients.',
    path: '/features/client-portal',
    color: 'bg-blue/25',
    iconColor: 'text-blue',
    hoverColor: 'group-hover:text-blue',
    cardGradient: 'bg-blue-pale',
  },
  {
    icon: MessageSquare,
    title: 'Business/Sponsor Portal',
    description: 'Live visibility into sponsor licence status, sponsored workers, and CoS allocation.',
    path: '/features/client',
    color: 'bg-purple/25',
    iconColor: 'text-purple',
    hoverColor: 'group-hover:text-purple',
    cardGradient: 'bg-purple-pale',
  },
];

const whyFeatures = [
  {
    icon: ShieldCheck,
    title: 'Built for UK Immigration, Not Adapted to It',
    description:
      "Built specifically for UK Skilled Worker visa, Sponsor Licence, ILR, and British Citizenship workflows — not a generic legal CRM stretched to fit immigration work. Every stage, checklist, and compliance step is pre-configured around how UK immigration consultancies actually work, so there's no lengthy setup or workarounds to make it fit.",
    color: 'bg-emerald/10 text-emerald',
  },
  {
    icon: Users,
    title: 'Full Oversight, Without Micromanaging',
    description:
      "Gives managers full oversight without micromanaging — a clear view of every caseworker's workload, every case's progress, and every upcoming deadline, all from one dashboard.",
    color: 'bg-cyan/10 text-cyan',
  },
  {
    icon: Globe,
    title: 'Live Portals for Clients & Sponsors',
    description:
      'Gives clients and sponsoring businesses their own live view of progress through dedicated portals, cutting down status-check emails and giving them the transparency they expect from modern case management software.',
    color: 'bg-purple/10 text-purple',
  },
  {
    icon: FileCheck,
    title: 'Built for the Realities of UK Compliance',
    description:
      "Built for the realities of UK immigration compliance — sponsor licence renewals, CoS allocation, right-to-work checks, and audit-ready record-keeping are all part of the platform, not an afterthought. Whether you're a solo immigration adviser or a growing consultancy managing multiple caseworkers, ImCam Hub scales with you, without the complexity of a generic practice management tool built for a different kind of law.",
    color: 'bg-amber/10 text-amber',
  },
];

const sectionMapFrom = (sections) =>
  (sections || []).reduce((map, section) => {
    if (section?.section_key && section.is_active !== false) {
      map[section.section_key] = section;
    }
    return map;
  }, {});

const contentArray = (section, fallback) =>
  Array.isArray(section?.content) && section.content.length > 0
    ? section.content
    : fallback;

const withIconFallbacks = (items, fallbacks) =>
  items.map((item, index) => ({
    ...fallbacks[index % fallbacks.length],
    ...item,
    icon: fallbacks[index % fallbacks.length].icon,
    color: item.color || fallbacks[index % fallbacks.length].color,
  }));

const faqs = [
  {
    question: 'What types of immigration cases does ImCam Hub support?',
    answer:
      'ImCam Hub is built specifically for UK immigration work — Skilled Worker visas, Sponsor Licence applications and renewals, ILR, and British Citizenship. Each case type comes with pre-built workflows, document checklists, and compliance rules aligned to UKVI requirements.',
  },
  {
    question: 'How does the document verification work?',
    answer:
      'Our AI reviews uploaded documents in real time — checking for missing pages, expired dates, and incomplete fields — and flags issues before a caseworker even opens the file. This reduces rejection rates and keeps UK visa applications moving.',
  },
  {
    question: 'Can clients and sponsoring businesses track their own case progress?',
    answer:
      'Yes. Individual clients track their application through the Client Portal, while sponsoring businesses see licence status, sponsored workers, and CoS allocation in the Business Portal — both updated in real time, with direct messaging to their caseworker.',
  },
  {
    question: 'Is ImCam Hub compliant with data privacy regulations?',
    answer:
      'ImCam Hub is built with compliance at its core. We are fully GDPR compliant, with all data encrypted at rest and in transit, full audit logging, and role-based access controls — supporting the record-keeping standards expected for sponsor licence compliance and UKVI audits.',
  },
  {
    question: 'What integrations does ImCam Hub offer?',
    answer:
      'ImCam Hub connects with popular accounting tools (Xero, QuickBooks), email and calendar platforms, and communication tools like Microsoft Teams and Slack. Our API also allows custom integrations with your existing systems.',
  },
  {
    question: 'How long does implementation typically take?',
    answer:
      'Most consultancies are fully onboarded within 2-4 weeks. This includes data migration from your existing systems, workflow configuration, team training, and a parallel-run period. Dedicated onboarding managers ensure a smooth transition with minimal disruption.',
  },
];

function VideoShowcase({ section }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

return (
    <div className="relative min-h-[60vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-end sm:items-center overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        src={demoVideo}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-navy/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy/60 to-transparent" />

      {/* Buttons — bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute inset-x-0 bottom-6 px-6 sm:inset-x-auto sm:right-12 sm:bottom-12 sm:px-0 lg:bottom-16 lg:right-16 z-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <Link
          to={section?.button_link || '/book-demo'}
          className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-[0_2px_8px_rgba(242,153,74,0.35)] hover:shadow-[0_4px_16px_rgba(242,153,74,0.4)] hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
        >
          {section?.button_text || 'Book a Free Demo'} <ArrowRight size={16} sm:size={18} />
        </Link>
        <Link
          to={section?.secondaryButtonLink || '/features'}
          className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98] w-full sm:w-auto"
        >
          {section?.secondaryButtonText || 'Explore Features'}
        </Link>
      </motion.div>

    </div>
  );
}

export default function Home() {
  usePageMeta(
    'UK Immigration Case Management Platform — ImCam Hub',
    'ImCam Hub is the case management platform for UK immigration consultancies. Manage Skilled Worker visas, Sponsor Licences, ILR, and British Citizenship cases in one place.',
    'home'
  );

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [cmsFaqs, setCmsFaqs] = useState(null);
  const [cmsContact, setCmsContact] = useState(null);
  const [cmsSections, setCmsSections] = useState({});
  const [whyActiveIndex, setWhyActiveIndex] = useState(0);

  useEffect(() => {
    const loadCms = async () => {
      const [sections, faqs, contact] = await Promise.all([
        fetchHomeSections(),
        fetchFaqItems('global'),
        fetchContactInfo(),
      ]);
      if (sections && sections.length > 0) {
        setCmsSections(sectionMapFrom(sections));
      }
      if (faqs && faqs.length > 0) {
        setCmsFaqs(faqs.map((f) => ({ question: f.question, answer: f.answer })));
      }
      if (contact) {
        setCmsContact(contact);
      }
    };
    loadCms();
  }, []);

  const displayFaqs = cmsFaqs || faqs;
  const contactEmail = cmsContact?.email || 'support@imcamhub.com';
  const contactPhone = cmsContact?.phone || '+44 20 7946 0958';
  const heroSection = cmsSections.hero;
  const videoSection = cmsSections.video_showcase;
  const trustedSection = cmsSections.trusted_features;
  const aiSection = cmsSections.ai_agents;
  const modulesSection = cmsSections.core_modules;
  const whySection = cmsSections.why_incimhub || cmsSections.why_imcam_hub;
  const ctaSection = cmsSections.cta;
  const displayTrustedFeatures = withIconFallbacks(
    contentArray(trustedSection, trustedFeatures),
    trustedFeatures
  );
  const displayAiAgents = withIconFallbacks(contentArray(aiSection, aiAgents), aiAgents);
  const displayCoreModules = withIconFallbacks(contentArray(modulesSection, coreModules), coreModules);
  const displayWhyFeatures = withIconFallbacks(contentArray(whySection, whyFeatures), whyFeatures);

  return (
    <div>
      {/* =========================================
          VIDEO SHOWCASE — Full Background
          ========================================= */}
      <VideoShowcase section={videoSection} />

{/* =========================================
          HERO SECTION — Light Background + Image
          ========================================= */}
      <section className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-gradient-to-b from-offwhite to-sand">
        <div className="container-app py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-heading font-bold text-navy leading-[1.1] mb-5">
                {heroSection?.title || (
                  <>
                    The Complete Case Management Platform for{' '}
                    <span className="gradient-text">UK Immigration Consultancies</span>
                  </>
                )}
              </h1>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-lg">
                Manage <span className="text-accent-blue font-medium">Skilled Worker visas</span>,{' '}
                <span className="text-accent-blue font-medium">Sponsor Licences</span>, ILR, and British Citizenship
                cases — from first enquiry to final approval, in one connected platform.
              </p>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="rounded-3xl overflow-hidden border-2 border-sand-dark shadow-[0_8px_30px_rgba(11,31,58,0.12)] hidden lg:block"
            >
              <img
                src={resolveCmsAsset(heroSection?.image_url) || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'}
                alt="Immigration case management dashboard on a laptop screen"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          PROBLEM VS SOLUTION
          ========================================= */}
      <section className="section-padding bg-sand pt-4 md:pt-10">
        <div className="container-app">
          <AnimatedSection className="text-center mb-12" distance={12} duration={0.9}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              The Problem <span className="gradient-text">v/s</span> The Solution
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Here&apos;s what changes when your consultancy runs on ImCam Hub.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-sand-dark bg-white hover:shadow-[0_8px_30px_rgba(11,31,58,0.08)] transition-shadow overflow-hidden divide-y divide-sand-dark">
              {problemSolutions.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.06} distance={12} duration={0.9}>
                  <div className="flex flex-col lg:flex-row items-stretch">
                    <div className="flex items-start gap-3 p-4 sm:p-5 flex-1">
                      <div className="w-8 h-8 rounded-lg bg-rose/10 flex items-center justify-center shrink-0">
                        <X size={16} className="text-rose" />
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed pt-1.5">
                        {item.problem}
                      </p>
                    </div>
                    <div className="flex items-center justify-center px-2 py-1 lg:py-0">
                      <span className="text-[10px] font-bold text-navy uppercase tracking-widest bg-sand px-2 py-0.5 rounded-full border border-sand-dark">v/s</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 sm:p-5 flex-1 bg-emerald/[0.03]">
                      <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                        <Check size={16} className="text-emerald" />
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed pt-1.5">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* =========================================
          TRUSTED FEATURE STRIP
          ========================================= */}
      <section className="py-12 sm:py-16 bg-white border-y border-sand-dark">
        <div className="container-app">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {displayTrustedFeatures.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className={`flex flex-col h-full items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl ${feature.cardGradient || 'bg-white'} ${feature.cardBorder || 'border-white/70'} border shadow-md hover:shadow-[0_10px_35px_rgba(11,31,58,0.14)] transition-all duration-300`}>
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${feature.color} flex items-center justify-center shrink-0 ring-1 ring-black/5`}>
                    <feature.icon size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={`text-sm font-semibold ${feature.titleColor || 'text-navy'} leading-tight mb-1 line-clamp-2`}>
                      {feature.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed line-clamp-4">
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
          INTELLIGENT SYSTEM — 6-Tile Grid
          ========================================= */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-soft via-white to-indigo-pale/30 pointer-events-none" />
        <div className="container-app relative z-10">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 bg-blue-pale text-blue text-xs font-semibold rounded-full mb-4">
              Smart Automation
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Smarter Case Management, <span className="gradient-text">Built with AI</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Manage cases, compliance, and every portal your team and clients
              need — with AI flagging risks and delays before they become
              problems.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayAiAgents.map((agent, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className={`${agent.cardGradient || 'bg-white'} rounded-2xl border border-white p-6 h-full hover:shadow-[0_10px_35px_rgba(11,31,58,0.14)] transition-all duration-300`}>
                  <div className={`w-12 h-12 rounded-2xl ${agent.color} flex items-center justify-center mb-4`}>
                    <agent.icon size={24} />
                  </div>
                  <h3 className="text-base font-heading font-semibold text-navy mb-2">
                    {agent.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {agent.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(agent.badges || (agent.badge ? [agent.badge] : [])).map((badge) => (
                      <span
                        key={badge}
                        className={`inline-flex items-center px-2.5 py-1 ${agent.badgeBg || 'bg-sand text-navy'} text-[11px] font-bold tracking-wide rounded-md`}
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
            <span className="inline-flex items-center px-4 py-1.5 bg-indigo-pale text-indigo text-xs font-semibold rounded-full mb-4">
              Core Modules
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              One AI-Powered Platform to Run your{' '}
              <span className="gradient-text-indigo">Immigration Practice</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From case intake to compliance tracking, ImCam Hub brings
              together everything UK immigration consultancies use every day —
              case management, document handling, caseworker assignment, and
              AI-powered checks — so nothing has to live in a separate
              spreadsheet or inbox again.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayCoreModules.map((mod, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <Link to={mod.path || mod.link || '/features'} className="block group h-full">
                  <div className={`${mod.cardGradient || 'bg-white'} rounded-2xl border border-white p-6 h-full flex flex-col hover:shadow-[0_10px_35px_rgba(11,31,58,0.14)] transition-all duration-300`}>
                    <div
                      className={`w-12 h-12 ${mod.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <mod.icon size={24} className={mod.iconColor} />
                    </div>
                    <h3 className={`text-base font-heading font-semibold text-navy mb-2 ${mod.hoverColor} transition-colors`}>
                      {mod.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                      {mod.description}
                    </p>
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${mod.iconColor} group-hover:gap-2.5 transition-all`}>
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
          WHY IMCAM HUB
          ========================================= */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-pale/20 via-transparent to-cyan-pale/20 pointer-events-none" />
        <div className="container-app relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1.5 bg-emerald-pale text-emerald text-xs font-semibold rounded-full mb-4">
              Why ImCam Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
              Built Around Your <span className="gradient-text-emerald">Practice</span>
            </h2>
          </AnimatedSection>

          {/* Interactive feature accordion */}
          <div className="space-y-4">
            {displayWhyFeatures.map((feature, i) => {
              const isActive = whyActiveIndex === i;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div
                    className={`rounded-2xl border border-sand-dark bg-white transition-all duration-200 ${
                      isActive
                        ? `border-l-4 ${['border-emerald', 'border-cyan', 'border-purple', 'border-amber'][i]} shadow-[0_8px_30px_rgba(11,31,58,0.08)]`
                        : 'hover:bg-sand/50'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setWhyActiveIndex(isActive ? -1 : i)}
                      aria-expanded={isActive}
                      className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
                    >
                      <div
                        className={`w-11 h-11 rounded-xl ${feature.color} flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isActive ? 'scale-105' : ''
                        }`}
                      >
                        <feature.icon size={22} />
                      </div>
                      <h3 className="flex-1 text-base sm:text-lg font-heading font-semibold text-navy">
                        {feature.title}
                      </h3>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0"
                      >
                        <ChevronDown size={20} className={isActive ? 'text-navy' : 'text-text-muted'} />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 md:px-6 md:pb-6 text-sm sm:text-base text-text-secondary leading-relaxed">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          FAQ SECTION — Two-Column with Contact Card
          ========================================= */}
      <section className="section-padding bg-sand">
        <div className="container-app">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1.5 bg-purple-pale text-purple text-xs font-semibold rounded-full mb-4">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy">
              Questions from <span className="gradient-text-purple">UK Consultancies</span>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-10 items-start">
            {/* Left: FAQ accordion */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl border border-sand-dark p-5 md:p-8">
                <FAQAccordion items={displayFaqs} />
              </div>
            </AnimatedSection>

            {/* Right: Contact card */}
            <AnimatedSection delay={0.15}>
              <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 md:p-8 text-white lg:sticky lg:top-28 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <h3 className="font-heading font-semibold text-lg mb-2 relative z-10">
                  Still have questions?
                </h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed relative z-10">
                  Our team is happy to walk you through how ImCam Hub fits
                  your practice.
                </p>
                <div className="space-y-4 mb-8 relative z-10">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Mail size={20} className="text-white/40" />
                    {contactEmail}
                  </a>
                  <a
                    href={`tel:${contactPhone.replace(/[^+0-9]/g, '')}`}
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Phone size={20} className="text-white/40" />
                    {contactPhone}
                  </a>
                  {/* Address hidden temporarily */}
                  {/* <div className="flex items-start gap-3 text-sm text-white/70">
                    <MapPin size={20} className="text-white/40 shrink-0 mt-0.5" />
                    <span style={{ whiteSpace: 'pre-line' }}>{contactAddress}</span>
                  </div> */}
                </div>
                <Link
                  to="/book-demo"
                  className="btn-gradient-primary flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full text-sm font-semibold transition-all active:scale-[0.98] relative z-10"
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
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 container-app text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {ctaSection?.title || (
                <>
                  Ready to see ImCam Hub <span className="text-cyan-light">in action</span>?
                </>
              )}
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              {ctaSection?.description ||
                'Join UK immigration consultancies that have transformed their workflow with ImCam Hub. Schedule a personalized demo today.'}
            </p>
            <Link
              to={ctaSection?.button_link || '/book-demo'}
              className="inline-flex items-center justify-center gap-2 btn-gradient-primary px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
            >
              {ctaSection?.button_text || 'Book a Free Demo'} <ArrowRight size={16} sm:size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
