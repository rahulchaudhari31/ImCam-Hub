import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';
import {
  ArrowRight,
  Search,
  Clock,
  Mail,
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

const categories = [
  { key: 'all', label: 'All' },
  { key: 'guides', label: 'Guides' },
  { key: 'case-studies', label: 'Case Studies' },
  { key: 'product', label: 'Product Updates' },
  { key: 'compliance', label: 'Compliance' },
];

const categoryColors = {
  guides: { bg: 'bg-emerald/10', text: 'text-emerald' },
  'case-studies': { bg: 'bg-amber/10', text: 'text-amber' },
  product: { bg: 'bg-indigo/10', text: 'text-indigo' },
  compliance: { bg: 'bg-pink/10', text: 'text-pink' },
};

const resources = [
  {
    title: 'How Automation Is Resolving LMIA Processing Bottlenecks in 2026',
    excerpt:
      'Labour Market Impact Assessment timelines have stretched to record highs. Here\'s how forward-thinking firms are using smart automation to cut turnaround by 40%.',
    category: 'guides',
    readTime: '7 min read',
    date: 'Jul 15, 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
  },
  {
    title: 'From Spreadsheets to System: How a 12-Person Firm Went Fully Digital',
    excerpt:
      'A mid-sized immigration practice in Vancouver replaced 6 years of manual tracking with ImCam Hub — and halved their onboarding time for new caseworkers.',
    category: 'case-studies',
    readTime: '5 min read',
    date: 'Jul 8, 2026',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=500&fit=crop',
  },
  {
    title: 'What the 2026 IRCC Updates Mean for Express Entry Applicants',
    excerpt:
      'Recent changes to CRS scoring, category-based draws, and proof-of-funds requirements are reshaping the Express Entry landscape. A concise breakdown.',
    category: 'compliance',
    readTime: '6 min read',
    date: 'Jul 1, 2026',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop',
  },
  {
    title: 'Introducing Smart Contract Drafting: Generate Retainers in Seconds',
    excerpt:
      'Our latest product release adds smart contract generation — pull client data into pre-approved templates and produce polished retainer agreements instantly.',
    category: 'product',
    readTime: '3 min read',
    date: 'Jun 24, 2026',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
  },
  {
    title: 'Building a Bulletproof Document Checklist for Work Permit Applications',
    excerpt:
      'Missing or incorrect documents are the #1 cause of work permit delays. This guide walks through building jurisdiction-specific checklists that catch errors before filing.',
    category: 'guides',
    readTime: '8 min read',
    date: 'Jun 17, 2026',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=500&fit=crop',
  },
  {
    title: 'Scaling Compliance Across 3 Offices: A Multi-Site Enterprise Case Study',
    excerpt:
      'A global technology company with offices in Toronto, Austin, and London centralized their immigration program with ImCam Hub — here\'s how they achieved consistent compliance.',
    category: 'case-studies',
    readTime: '6 min read',
    date: 'Jun 10, 2026',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=500&fit=crop',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Resources() {
  usePageMeta(
    'Resources — ImCam Hub',
    'Immigration practice guides, case management tips, compliance updates, and product tutorials from the ImCam Hub team.'
  );

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered = resources.filter((r) => {
    const matchesCategory =
      activeFilter === 'all' || r.category === activeFilter;
    const matchesSearch =
      searchQuery === '' ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div>
      {/* =========================================
          HERO + FILTER BAR
          ========================================= */}
      <section className="section-padding bg-gradient-to-b from-offwhite to-sand">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <span className="inline-flex items-center px-4 py-1.5 bg-blue-pale text-blue text-xs font-semibold rounded-full mb-5">
              Resources
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-navy mb-5 leading-tight">
              Resources & <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Guides, case studies, and product updates to help your
              immigration practice work smarter.
            </p>
          </motion.div>

          {/* Search + filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-3xl mx-auto"
          >
            {/* Search */}
            <div className="relative mb-5">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources..."
                className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-sand-dark text-sm text-navy placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue/40 focus:border-blue transition-colors"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === cat.key
                      ? 'bg-blue text-white shadow-md'
                      : 'bg-white text-text-secondary border border-sand-dark hover:border-blue/30 hover:text-navy'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          RESOURCE CARDS GRID
          ========================================= */}
      <section className="section-padding bg-white border-t border-sand-dark">
        <div className="container-app">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">
                No resources match your search.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-blue font-semibold text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <motion.div
              key={activeFilter + searchQuery}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filtered.map((resource) => {
                const colors = categoryColors[resource.category];
                return (
                  <motion.article
                    key={resource.title}
                    variants={staggerItem}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl border border-sand-dark overflow-hidden hover:shadow-[0_8px_30px_rgba(11,31,58,0.08)] transition-shadow group"
                  >
                    {/* Image */}
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Category pill */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide ${colors.bg} ${colors.text}`}
                        >
                          {categories.find((c) => c.key === resource.category)
                            ?.label || resource.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                        <span>{resource.date}</span>
                        <span className="w-1 h-1 rounded-full bg-text-muted/40" />
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {resource.readTime}
                        </span>
                      </div>
                      <h3 className="text-base font-heading font-semibold text-navy mb-2 leading-snug group-hover:text-blue transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                        {resource.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue group-hover:gap-2.5 transition-all">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* =========================================
          EMAIL CAPTURE STRIP
          ========================================= */}
      <section className="py-14 bg-sand border-y border-sand-dark">
        <div className="container-app">
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl border border-sand-dark p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                  Stay in the <span className="gradient-text">loop</span>
                </h3>
                <p className="text-sm text-text-secondary">
                  Get new guides, compliance updates, and product announcements
                  delivered to your inbox — no spam, unsubscribe anytime.
                </p>
              </div>
              <div className="w-full md:w-auto">
                {subscribed ? (
                  <div className="flex items-center gap-2 text-emerald font-semibold text-sm">
                    <CheckCircle2 size={18} />
                    You&apos;re subscribed!
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex gap-2 w-full md:w-auto"
                  >
                    <div className="relative flex-1 md:w-64">
                      <Mail
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
                      />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full pl-10 pr-4 py-3 bg-sand rounded-xl border border-sand-dark text-sm text-navy placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue/40 focus:border-blue transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="shrink-0 btn-gradient-primary px-6 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
          ========================================= */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=800&fit=crop"
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
              Explore how ImCam Hub can transform your immigration practice
              with a personalized demo.
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
