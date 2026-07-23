const variants = {
  default: 'bg-sand text-navy',
  accent: 'bg-amber/10 text-amber-dark',
  teal: 'bg-teal/10 text-teal-dark',
  navy: 'bg-navy/10 text-navy',
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
