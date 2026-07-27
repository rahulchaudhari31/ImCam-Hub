import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  Users,
  UserCheck,
  Building2,
} from 'lucide-react';


const featureItems = [
  {
    name: 'Admin Dashboard',
    path: '/features/admin',
    icon: LayoutDashboard,
    description: 'Firm-wide command center',
    iconBg: 'bg-indigo/10',
    iconHover: 'group-hover:bg-indigo/20',
    textColor: 'text-indigo',
  },
  {
    name: 'Caseworker Portal',
    path: '/features/caseworker',
    icon: Users,
    description: 'Matter management & smart drafting',
    iconBg: 'bg-blue/10',
    iconHover: 'group-hover:bg-blue/20',
    textColor: 'text-blue',
  },
  {
    name: 'Candidate Portal',
    path: '/features/candidate',
    icon: UserCheck,
    description: 'Applicant self-service',
    iconBg: 'bg-emerald/10',
    iconHover: 'group-hover:bg-emerald/20',
    textColor: 'text-emerald',
  },
  {
    name: 'Client Portal',
    path: '/features/client',
    icon: Building2,
    description: 'Employer oversight & reporting',
    iconBg: 'bg-purple/10',
    iconHover: 'group-hover:bg-purple/20',
    textColor: 'text-purple',
  },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features', hasDropdown: true },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Resources', path: '/resources' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordionOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const closeDropdown = useCallback(() => setDropdownOpen(false), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md shadow-[0_1px_3px_rgba(11,31,58,0.08),0_4px_12px_rgba(11,31,58,0.04)] border-b border-transparent'
            : 'bg-white/95 backdrop-blur-sm border-b border-sand-dark'
        }`}
      >
        <div className="container-app">
          <div className="flex items-center justify-between h-[80px] sm:h-[88px]">
            {/* Left: Logo */}
            <Link
              to="/"
              className="flex items-center shrink-0"
              aria-label="ImCam Hub home"
            >
              <img
                src="/assets/ImCamHub_logo%20JPG%20(1).jpg.jpeg"
                alt="ImCam Hub"
                className="h-16 sm:h-[72px] w-auto object-contain"
              />
            </Link>

            {/* Center: Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1 ml-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-full text-[15px] font-medium transition-all duration-200 ${
                        location.pathname.startsWith(link.path)
                          ? 'text-blue bg-blue-pale'
                          : 'text-text-secondary hover:text-navy hover:bg-sand/60'
                      }`}
                    >
                      {link.name}
                    </Link>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className="absolute top-full left-0 pt-3 z-50"
                          onMouseEnter={() => setDropdownOpen(true)}
                          onMouseLeave={closeDropdown}
                        >
                          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(11,31,58,0.12)] border border-sand-dark p-2 min-w-[280px]">
                            {featureItems.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-sand/70 transition-colors group"
                                >
                                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconHover} flex items-center justify-center shrink-0 transition-colors`}>
                                    <Icon
                                      size={20}
                                      className={`${item.textColor} transition-colors`}
                                    />
                                  </div>
                                  <div>
                                    <div className={`text-sm font-semibold text-navy group-hover:${item.textColor} transition-colors`}>
                                      {item.name}
                                    </div>
                                    <div className="text-xs text-text-muted mt-0.5">
                                      {item.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                            <div className="mt-1 pt-1 border-t border-sand-dark">
                              <Link
                                to="/features"
                                className="block px-4 py-2.5 text-sm font-medium text-text-muted hover:text-navy rounded-xl hover:bg-sand/60 transition-colors text-center"
                              >
                                View all features
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-full text-[15px] font-medium transition-all duration-200 ${
                      location.pathname === link.path
                        ? 'text-blue bg-blue-pale'
                        : 'text-text-secondary hover:text-navy hover:bg-sand/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/book-demo"
                className="hidden lg:inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-[0_2px_8px_rgba(242,153,74,0.35)] hover:shadow-[0_4px_16px_rgba(242,153,74,0.4)] hover:scale-[1.03] active:scale-[0.98]"
              >
                Book a Free Demo
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl hover:bg-sand transition-colors text-navy"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-[80px] sm:h-[88px]" />

      {/* Mobile: Slide-in drawer overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-navy/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[min(85vw,360px)] bg-white z-50 lg:hidden shadow-[-8px_0_30px_rgba(11,31,58,0.15)]"
            >
              <div className="flex flex-col h-full">
                {/* Drawer header */}
                <div className="flex items-center justify-between px-5 h-[80px] border-b border-sand-dark shrink-0">
                  <Link
                    to="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center"
                  >
                    <img
                      src="/assets/ImCamHub_logo%20JPG%20(1).jpg.jpeg"
                      alt="ImCam Hub"
                      className="h-12 w-auto object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-xl hover:bg-sand transition-colors text-navy"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Drawer links */}
                <div className="flex-1 overflow-y-auto px-4 py-4">
                  <div className="space-y-1">
                    {navLinks.map((link) =>
                      link.hasDropdown ? (
                        <div key={link.name}>
                          <div className="flex items-center">
                            <Link
                              to={link.path}
                              onClick={() => setMobileOpen(false)}
                              className={`flex-1 px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                                location.pathname.startsWith(link.path)
                                  ? 'text-blue bg-blue-pale'
                                  : 'text-text-secondary hover:text-navy hover:bg-sand/60'
                              }`}
                            >
                              {link.name}
                            </Link>
                            <button
                              onClick={() =>
                                setMobileAccordionOpen(!mobileAccordionOpen)
                              }
                              className="p-2 rounded-xl hover:bg-sand transition-colors text-text-muted"
                              aria-label={
                                mobileAccordionOpen
                                  ? 'Collapse features'
                                  : 'Expand features'
                              }
                            >
                              <ChevronDown
                                size={18}
                                className={`transition-transform duration-200 ${
                                  mobileAccordionOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                          </div>

                          <AnimatePresence>
                            {mobileAccordionOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pb-2 pt-1 space-y-1">
                                  {featureItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                      <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-sand/70 transition-colors group"
                                      >
                                        <Icon
                                          size={18}
                                          className={`text-text-muted group-hover:${item.textColor} transition-colors shrink-0`}
                                        />
                                        <span className="text-sm text-text-secondary group-hover:text-navy transition-colors">
                                          {item.name}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setMobileOpen(false)}
                          className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                            location.pathname === link.path
                              ? 'text-blue bg-blue-pale'
                              : 'text-text-secondary hover:text-navy hover:bg-sand/60'
                          }`}
                        >
                          {link.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                {/* Drawer footer */}
                <div className="px-5 py-5 border-t border-sand-dark shrink-0">
                  <Link
                    to="/book-demo"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-amber hover:bg-amber-dark text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                  >
                    Book a Free Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
