import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const productLinks = [
  { name: 'Admin Dashboard', path: '/features/admin' },
  { name: 'Caseworker Portal', path: '/features/caseworker' },
  { name: 'Candidate Portal', path: '/features/candidate' },
  { name: 'Client Portal', path: '/features/client' },
  { name: 'Integrations', path: '/resources' },
];

const companyLinks = [
  { name: 'About Us', path: '/resources' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Resources', path: '/resources' },
  { name: 'Careers', path: '/resources' },
];

const socialLinks = [
  { name: 'Twitter', label: 'X', href: '#' },
  { name: 'LinkedIn', label: 'in', href: '#' },
  { name: 'GitHub', label: 'GH', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent" />

      <div className="section-padding">
        <div className="container-app">
          {/* Main grid: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
            {/* Column 1: Logo + tagline + social */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-flex items-center mb-4" aria-label="ImCam Hub home">
                <img
                  src="/assets/ImCamHub_logo%20JPG%20(1).jpg.jpeg"
                  alt="ImCam Hub"
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-white/50 text-sm tracking-wide leading-relaxed mb-5 max-w-[280px]">
                Structured case management. Powered by smart automation.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-blue/20 flex items-center justify-center transition-colors group"
                  >
                    <span className="text-white/50 group-hover:text-blue-light transition-colors text-xs font-bold">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Product */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                Product
              </h4>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/50 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                Company
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/50 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@incamhub.com"
                    className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                  >
                    <Mail size={20} className="shrink-0 mt-0.5 text-white/40 group-hover:text-blue transition-colors" />
                    <span>hello@incamhub.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+18005551234"
                    className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                  >
                    <Phone size={20} className="shrink-0 mt-0.5 text-white/40 group-hover:text-blue transition-colors" />
                    <span>1-800-555-1234</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-white/50">
                    <MapPin size={20} className="shrink-0 mt-0.5 text-white/40" />
                    <span>
                      123 Bay Street, Suite 400<br />
                      Toronto, ON M5J 2R2<br />
                      Canada
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/35 text-sm">
              &copy; {new Date().getFullYear()} ImCam Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link
                to="/resources"
                className="text-white/35 hover:text-white/70 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/resources"
                className="text-white/35 hover:text-white/70 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
