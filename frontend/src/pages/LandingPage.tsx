import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const features = [
  'AI Code Assistant',
  'AI Debug Assistant',
  'AI Project Architect',
  'AI Documentation Generator',
  'AI Test Case Generator',
  'GitHub Repository Analysis'
];

export function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-bg">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:50px_50px] opacity-20" />
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold">
          DevForge — Build Software Faster with AI
        </motion.h1>
        <p className="mt-4 max-w-3xl text-white/70">A futuristic developer workspace to plan, analyze, debug, document, and ship with GitHub + AI in one place.</p>
        <div className="mt-8 flex gap-4">
          <Link to="/auth"><Button>Get Started</Button></Link>
          <Link to="/dashboard"><Button variant="secondary">View Demo</Button></Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature}>
            <h3 className="font-semibold">{feature}</h3>
            <p className="mt-2 text-sm text-white/70">Professional AI-enhanced workflows for engineering teams.</p>
          </Card>
        ))}
      </section>
    </div>
  );
}
