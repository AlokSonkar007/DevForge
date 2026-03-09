import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const repos = [
  { name: 'devforge-core', language: 'TypeScript', stars: 128 },
  { name: 'ai-sandbox', language: 'Python', stars: 97 }
];

export function GitHubIntegrationPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {repos.map((repo) => (
        <Card key={repo.name}>
          <h3 className="font-semibold">{repo.name}</h3>
          <p className="text-sm text-white/70">{repo.language} · ⭐ {repo.stars}</p>
          <Button className="mt-4">Analyze</Button>
        </Card>
      ))}
    </div>
  );
}
