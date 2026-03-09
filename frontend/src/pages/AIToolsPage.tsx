import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const tools = [
  'AI Code Assistant',
  'AI Debug Assistant',
  'AI Project Architect',
  'AI Documentation Generator',
  'AI Test Case Generator'
];

export function AIToolsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {tools.map((tool) => (
        <Card key={tool}>
          <h3 className="font-semibold">{tool}</h3>
          <p className="my-2 text-sm text-white/70">Launch AI workspace for {tool.toLowerCase()}.</p>
          <Link to="/workspace"><Button className="w-full">Launch</Button></Link>
        </Card>
      ))}
    </div>
  );
}
