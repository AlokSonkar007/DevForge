import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-xl border border-white/10 bg-panel/80 p-5 backdrop-blur transition hover:border-neonBlue/60 hover:shadow-glow"
    >
      {children}
    </motion.div>
  );
}
