import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'p-6',
  variant = 'default',
  ...props
}) {
  const variants = {
    default: 'bg-white border-sand-dark',
    premium: 'bg-white border-slate-200/80 card-premium',
    'blue-glow': 'bg-white border-blue-lighter/30 hover:border-blue-lighter/60 hover:shadow-[0_0_40px_rgba(37,99,235,0.08)]',
    'indigo-glow': 'bg-white border-indigo-light/30 hover:border-indigo-light/60 hover:shadow-[0_0_40px_rgba(79,70,229,0.08)]',
    'purple-glow': 'bg-white border-purple-light/30 hover:border-purple-light/60 hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]',
    'emerald-glow': 'bg-white border-emerald-light/30 hover:border-emerald-light/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]',
    'cyan-glow': 'bg-white border-cyan-light/30 hover:border-cyan-light/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]',
    'orange-glow': 'bg-white border-orange-light/30 hover:border-orange-light/60 hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]',
    'pink-glow': 'bg-white border-pink-light/30 hover:border-pink-light/60 hover:shadow-[0_0_40px_rgba(236,72,153,0.08)]',
  };

  return (
    <motion.div
      className={`${variants[variant]} rounded-2xl border shadow-md hover:shadow-lg transition-all duration-300 ${padding} ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
