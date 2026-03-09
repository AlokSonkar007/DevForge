import { Button } from '../components/ui/Button';

export function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg p-6">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-panel p-8 text-center">
        <h1 className="text-2xl font-bold">Sign in to DevForge</h1>
        <p className="mt-2 text-sm text-white/70">Authenticate with GitHub OAuth to continue.</p>
        <Button className="mt-6 w-full">Continue with GitHub</Button>
      </div>
    </div>
  );
}
