import { motion } from 'framer-motion';

export default function IconTile({ icon: Icon, title, description, className = '' }) {
  return (
    <motion.div
      className={`text-center ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-14 h-14 bg-amber/10 rounded-xl flex items-center justify-center mx-auto mb-4">
        <Icon size={28} className="text-amber" />
      </div>
      <h3 className="font-heading font-semibold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </motion.div>
  );
}
