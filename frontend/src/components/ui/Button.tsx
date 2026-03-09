import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'rounded-lg px-4 py-2 text-sm font-semibold transition';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-neonBlue to-cyberPurple shadow-glow hover:brightness-110'
      : 'border border-neonCyan/60 text-neonCyan hover:bg-neonCyan/10';

  return <motion.button whileHover={{ y: -2 }} className={`${base} ${styles} ${className}`} {...props} />;
}
