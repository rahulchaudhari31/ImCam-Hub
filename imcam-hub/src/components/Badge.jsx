const variants = {
  default: 'bg-sand text-navy',
  accent: 'bg-amber/10 text-amber-dark',
  teal: 'bg-teal/10 text-teal-dark',
  navy: 'bg-navy/10 text-navy',
  blue: 'bg-blue-pale text-blue',
  indigo: 'bg-indigo-pale text-indigo',
  purple: 'bg-purple-pale text-purple',
  emerald: 'bg-emerald-pale text-emerald',
  cyan: 'bg-cyan-pale text-cyan',
  orange: 'bg-orange-pale text-orange',
  pink: 'bg-pink-pale text-pink',
  rose: 'bg-rose-pale text-rose',
};

export default function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
