import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FAQAccordion from './FAQAccordion';

const featureColors = [
  'bg-blue/10 text-blue',
  'bg-indigo/10 text-indigo',
  'bg-purple/10 text-purple',
  'bg-emerald/10 text-emerald',
  'bg-cyan/10 text-cyan',
  'bg-orange/10 text-orange',
  'bg-pink/10 text-pink',
];

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

function KenBurnsBanner({ overlayText, overlaySubline, bannerColor }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        style={{ scale }}
        className={`absolute inset-0 ${bannerColor}`}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </motion.div>
      <div className="relative container-app py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-4">
            {overlayText}
          </h1>
          <p className="text-lg text-white/70 max-w-xl">
            {overlaySubline}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function FeaturePageTemplate({
  title,
  roleName,
  bannerText,
  bannerSubline,
  bannerColor = 'bg-navy',
  introHeading,
  introText,
  introImageLabel = 'Screenshot',
  introReverse = false,
  features,
  faqs,
}) {
  const featureRows = [];
  for (let i = 0; i < features.length; i += 3) {
    featureRows.push(features.slice(i, i + 3));
  }

  return (
    <div>
      {/* 1. Ken-Burns Banner */}
      <KenBurnsBanner
        overlayText={bannerText}
        overlaySubline={bannerSubline}
        bannerColor={bannerColor}
      />

      {/* 2. Intro Section — 2-column */}
      <section className="section-padding bg-white">
        <div className="container-app">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              introReverse ? 'direction-rtl' : ''
            }`}
          >
            <AnimateOnScroll>
              <div style={{ direction: 'ltr' }}>
                <span className="inline-flex items-center px-4 py-1.5 bg-blue-pale text-blue text-xs font-semibold rounded-full mb-5">
                  {roleName}
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-5">
                  {introHeading}
                </h2>
                <div className="space-y-4">
                  {introText.map((paragraph, i) => (
                    <p key={i} className="text-text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div style={{ direction: 'ltr' }}>
                <div className="bg-sand rounded-2xl border border-sand-dark aspect-[4/3] flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-16 h-16 bg-blue-pale rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 border-2 border-blue/20 rounded-lg" />
                    </div>
                    <p className="text-sm font-medium text-text-muted">
                      {introImageLabel}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 3. Feature Flow — Grid */}
      <section className="section-padding bg-sand">
        <div className="container-app">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Purpose-built tools for the {roleName.toLowerCase()} role — every
              feature designed around your actual workflow.
            </p>
          </AnimateOnScroll>

          {featureRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${
                rowIndex > 0 ? 'mt-6' : ''
              }`}
            >
              {row.map((feature, i) => {
                const colorClass = featureColors[(rowIndex * 3 + i) % featureColors.length];
                return (
                  <AnimateOnScroll key={i} delay={i * 0.06}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-2xl border border-sand-dark p-6 h-full hover:shadow-[0_8px_30px_rgba(11,31,58,0.08)] transition-shadow"
                    >
                      <div className={`w-12 h-12 rounded-2xl ${colorClass} flex items-center justify-center mb-4`}>
                        <feature.icon size={24} />
                      </div>
                      <h3 className="text-base font-heading font-semibold text-navy mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAQ Accordion */}
      {faqs && faqs.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-app max-w-3xl">
            <AnimateOnScroll className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
                Frequently Asked <span className="gradient-text-purple">Questions</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-sand rounded-2xl p-6 md:p-8">
                <FAQAccordion items={faqs} />
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* 5. Bottom CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-indigo/20 to-purple/10 pointer-events-none" />
        <div className="container-app text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              See this <span className="text-cyan-light">in action</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Book a personalized walkthrough of the{' '}
              {title} and discover how it fits your workflow.
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
