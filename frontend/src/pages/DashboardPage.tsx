import { Card } from '../components/ui/Card';

export function DashboardPage() {
  const cards = ['Recent AI Activity', 'Connected Repositories', 'Quick AI Tools', 'Project Overview'];
  return <div className="grid gap-4 md:grid-cols-2">{cards.map((c) => <Card key={c}>{c}</Card>)}</div>;
}
