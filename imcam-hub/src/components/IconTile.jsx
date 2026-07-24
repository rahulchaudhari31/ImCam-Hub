import { motion } from 'framer-motion';

const colorMap = {
  amber: 'bg-amber/10 text-amber',
  blue: 'bg-blue/10 text-blue',
  indigo: 'bg-indigo/10 text-indigo',
  purple: 'bg-purple/10 text-purple',
  emerald: 'bg-emerald/10 text-emerald',
  cyan: 'bg-cyan/10 text-cyan',
  orange: 'bg-orange/10 text-orange',
  pink: 'bg-pink/10 text-pink',
  rose: 'bg-rose/10 text-rose',
};

export default function IconTile({
  icon: Icon,
  title,
  description,
  className = '',
  color = 'amber',
}) {
  return (
    <motion.div
      className={`text-center ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`w-14 h-14 ${colorMap[color]} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
        <Icon size={28} />
      </div>
      <h3 className="font-heading font-semibold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </motion.div>
  );
}
