import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, LayoutDashboard, Users, UserCheck, Building2 } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import Card from '../components/Card';

const roles = [
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard',
    path: '/features/admin',
    description: 'Complete oversight of all immigration operations with powerful analytics and reporting.',
    color: 'bg-indigo/10 text-indigo',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    gradient: 'from-indigo-pale/40 to-transparent',
  },
  {
    icon: Users,
    title: 'Caseworker Portal',
    path: '/features/caseworker',
    description: 'Streamlined case management with AI-assisted workflows and automated document handling.',
    color: 'bg-emerald/10 text-emerald',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop',
    gradient: 'from-emerald-pale/40 to-transparent',
  },
  {
    icon: UserCheck,
    title: 'Candidate Portal',
    path: '/features/candidate',
    description: 'Self-service portal for candidates to track their immigration journey in real-time.',
    color: 'bg-blue/10 text-blue',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
    gradient: 'from-blue-pale/40 to-transparent',
  },
  {
    icon: Building2,
    title: 'Client Portal',
    path: '/features/client',
    description: 'High-level dashboards and reporting for organizational clients managing multiple cases.',
    color: 'bg-purple/10 text-purple',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    gradient: 'from-purple-pale/40 to-transparent',
  },
];

export default function FeaturesIndex() {
  usePageMeta(
    'Features — ImCam Hub',
    'Explore the complete ImCam Hub feature set: admin dashboards, caseworker portals, candidate portals, and client portals — all powered by AI.'
  );

  return (
    <div>
      <section className="section-padding bg-gradient-to-b from-offwhite to-sand">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold text-navy leading-[1.1] mb-6">
                Features Built for{' '}
                <span className="gradient-text">Every Stakeholder</span>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-4 max-w-lg">
                Discover how ImCam Hub tailors the immigration management
                experience for each role in your organization.
              </p>
              <p className="text-sm text-text-muted leading-relaxed max-w-lg">
                From firm owners who need full visibility to candidates who
                want real-time updates — every portal is purpose-built to
                match how each user actually works.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-3xl overflow-hidden border-2 border-sand-dark shadow-[0_8px_30px_rgba(11,31,58,0.1)]"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
                alt="Team collaborating around a table with laptops"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app">
          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={role.path}>
                  <Card variant="premium" className="h-full group cursor-pointer overflow-hidden !p-0">
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img
                        src={role.image}
                        alt={role.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${role.gradient} opacity-60`} />
                    </div>
                    <div className="p-6">
                      <div className={`w-14 h-14 ${role.color} rounded-2xl flex items-center justify-center mb-4`}>
                        <role.icon size={28} />
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-navy mb-3 group-hover:text-blue transition-colors">
                        {role.title}
                      </h3>
                      <p className="text-text-secondary mb-4">{role.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue group-hover:gap-3 transition-all">
                        Explore <ArrowRight size={16} />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=800&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 container-app text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            See All Features <span className="text-cyan-light">in Action</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to explore how each portal can transform your workflow.
          </p>
          <Link
            to="/book-demo"
            className="inline-flex items-center justify-center gap-3 btn-gradient-primary px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Book a Demo
            <ArrowRight size={16} className="mt-px" />
          </Link>
        </div>
      </section>
    </div>
  );
}
