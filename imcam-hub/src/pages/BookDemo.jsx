import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  Shield,
  Clock,
  Play,
  FileText,
  Building2,
  Users,
  MessageSquare,
  Phone,
  Mail,
  Quote,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

function AnimateOnScroll({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const fieldBase =
  'w-full px-4 py-3 rounded-xl border bg-white text-sm text-navy placeholder:text-text-muted/50 focus:outline-none transition-colors';
const fieldIdle = 'border-sand-dark focus:ring-2 focus:ring-blue/30 focus:border-blue';
const fieldError = 'border-red-400 focus:ring-2 focus:ring-red-200';

function FormField({ label, name, required, error, children }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy mb-1.5">
        {label}
        {required && <span className="text-amber ml-0.5">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            className="text-red-500 text-xs mt-1.5 font-medium"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BookDemo() {
  usePageMeta(
    'Book a Free Demo',
    'Schedule a personalized walkthrough of ImCam Hub. See how our platform transforms immigration case management for your practice.'
  );

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    company: '',
    fullName: '',
    email: '',
    phone: '',
    firmSize: '',
    message: '',
  });

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const e = {};
    if (!form.company.trim()) e.company = 'Company name is required.';
    if (!form.fullName.trim()) e.fullName = 'Full name is required.';
    if (!form.email.trim()) {
      e.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.firmSize) e.firmSize = 'Please select a firm size.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div>
      {/* =========================================
          HERO
          ========================================= */}
      <section className="section-padding bg-gradient-to-b from-offwhite to-sand pb-8 md:pb-12">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center px-4 py-1.5 bg-indigo-pale text-indigo text-xs font-semibold rounded-full mb-5">
              Book a Demo
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-navy mb-5 leading-tight">
              See ImCam Hub in Action
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Get a personalized walkthrough of the platform. No commitment,
              no hard sell — just a clear look at how ImCam Hub fits your
              practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2-COLUMN: FORM + SUPPORTING CONTENT
          ========================================= */}
      <section className="section-padding pt-0 md:pt-4">
        <div className="container-app">
          <AnimatePresence mode="wait">
            {submitted ? (
              /* ---------- SUCCESS STATE ---------- */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-3xl border border-sand-dark shadow-lg p-10 md:p-14 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: 0.15,
                    }}
                    className="w-20 h-20 bg-emerald-pale rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 size={40} className="text-emerald" />
                  </motion.div>
                  <h2 className="text-3xl font-heading font-bold text-navy mb-3">
                    Demo Request Received
                  </h2>
                  <p className="text-text-secondary max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <span className="font-semibold text-navy">{form.fullName || 'there'}</span>!
                    Our team will confirm your slot within 24 hours and send
                    a calendar invite to <span className="font-semibold text-navy">{form.email}</span>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      to="/"
                      className="inline-flex items-center justify-center gap-2 btn-gradient-primary px-7 py-3 rounded-full text-sm font-semibold transition-all active:scale-[0.98]"
                    >
                      Return Home
                    </Link>
                    <Link
                      to="/features"
                      className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white px-7 py-3 rounded-full text-sm font-semibold transition-all active:scale-[0.98]"
                    >
                      Explore Features
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ---------- FORM + RIGHT COLUMN ---------- */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start"
              >
                {/* LEFT: Form */}
                <div className="bg-white rounded-3xl border border-sand-dark shadow-lg p-7 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue via-indigo to-purple" />
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <FormField
                      label="Firm / Company Name"
                      name="company"
                      required
                      error={errors.company}
                    >
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={update('company')}
                        placeholder="Acme Immigration Law"
                        className={`${fieldBase} ${errors.company ? fieldError : fieldIdle}`}
                      />
                    </FormField>

                    <FormField
                      label="Full Name"
                      name="fullName"
                      required
                      error={errors.fullName}
                    >
                      <input
                        id="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={update('fullName')}
                        placeholder="Jane Doe"
                        className={`${fieldBase} ${errors.fullName ? fieldError : fieldIdle}`}
                      />
                    </FormField>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        label="Work Email"
                        name="email"
                        required
                        error={errors.email}
                      >
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={update('email')}
                          placeholder="jane@company.com"
                          className={`${fieldBase} ${errors.email ? fieldError : fieldIdle}`}
                        />
                      </FormField>

                      <FormField label="Phone Number" name="phone" required={false}>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={update('phone')}
                          placeholder="+1 (555) 000-0000"
                          className={`${fieldBase} ${fieldIdle}`}
                        />
                      </FormField>
                    </div>

                    <FormField
                      label="Firm Size"
                      name="firmSize"
                      required
                      error={errors.firmSize}
                    >
                      <select
                        id="firmSize"
                        value={form.firmSize}
                        onChange={update('firmSize')}
                        className={`${fieldBase} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23718096%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center] pr-10 ${errors.firmSize ? fieldError : fieldIdle}`}
                      >
                        <option value="">Select firm size</option>
                        <option value="1-10">1 – 10 employees</option>
                        <option value="11-50">11 – 50 employees</option>
                        <option value="51-200">51 – 200 employees</option>
                        <option value="201-1000">201 – 1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                    </FormField>

                    <FormField label="Message / Notes" name="message" required={false}>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Tell us about your immigration management needs, current tools, or specific questions..."
                        className={`${fieldBase} resize-none ${fieldIdle}`}
                      />
                    </FormField>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 btn-gradient-primary px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Send size={16} /> Book My Free Demo
                    </button>
                  </form>
                </div>

                {/* RIGHT: Supporting content */}
                <div className="space-y-7">
                  {/* Hero image */}
                  <AnimateOnScroll>
                    <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(11,31,58,0.1)]">
                      <img
                        src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=400&fit=crop"
                        alt="Modern immigration office workspace"
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </AnimateOnScroll>

                  {/* Trust paragraph */}
                  <AnimateOnScroll>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                        What to expect
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        Over 200 immigration practices trust ImCam Hub to manage
                        their cases, deadlines, and client relationships. This
                        demo is a no-pressure walkthrough tailored to your
                        firm&apos;s specific workflows and questions.
                      </p>
                    </div>
                  </AnimateOnScroll>

                  {/* 3-step what happens next */}
                  <AnimateOnScroll delay={0.08}>
                    <div className="bg-sand/60 rounded-2xl p-6 space-y-4">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wide">
                        What happens next
                      </h4>
                      {[
                        {
                          icon: Clock,
                          text: 'We confirm your preferred slot within 24 hours',
                          color: 'bg-blue/10 text-blue',
                        },
                        {
                          icon: Play,
                          text: '30-minute live walkthrough with a product specialist',
                          color: 'bg-indigo/10 text-indigo',
                        },
                        {
                          icon: FileText,
                          text: 'Custom quote based on your firm size and needs',
                          color: 'bg-emerald/10 text-emerald',
                        },
                        {
                          icon: Shield,
                          text: 'No commitment — decide at your own pace',
                          color: 'bg-purple/10 text-purple',
                        },
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-lg ${step.color} flex items-center justify-center shrink-0`}>
                            <step.icon size={16} />
                          </div>
                          <p className="text-sm text-text-secondary pt-1">
                            {step.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AnimateOnScroll>

                  {/* Testimonial */}
                  <AnimateOnScroll delay={0.16}>
                    <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl" />
                      <Quote
                        size={28}
                        className="text-indigo-light/30 absolute top-4 left-5"
                      />
                      <p className="text-white/80 text-sm leading-relaxed italic mb-4 pl-4 relative z-10">
                        &ldquo;We went from 3 different tools and endless email
                        chains to one system in under a month. Our caseworkers
                        saved 10+ hours a week within the first quarter.&rdquo;
                      </p>
                      <div className="flex items-center gap-3 pl-4 relative z-10">
                        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                          <Users size={16} className="text-white/60" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Sarah Mitchell
                          </p>
                          <p className="text-xs text-white/50">
                            Managing Partner, Mitchell & Associates
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>

                  {/* Contact fallback */}
                  <AnimateOnScroll delay={0.24}>
                    <div className="flex items-center gap-4 text-xs text-text-muted">
                      <div className="flex items-center gap-1.5">
                        <Phone size={14} />
                        <span>1-800-555-1234</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Mail size={14} />
                        <span>hello@incamhub.com</span>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
