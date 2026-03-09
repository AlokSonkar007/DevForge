import { Button } from '../components/ui/Button';

export function SettingsPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="rounded-xl border border-white/10 bg-panel p-4">Profile Settings</section>
      <section className="rounded-xl border border-white/10 bg-panel p-4">GitHub Connection Settings</section>
      <section className="rounded-xl border border-white/10 bg-panel p-4">AI Model Preference</section>
      <section className="rounded-xl border border-white/10 bg-panel p-4">
        Appearance Settings
        <div className="mt-3 flex gap-2">
          <Button>Dark Mode</Button>
          <Button variant="secondary">Light Mode</Button>
        </div>
      </section>
    </div>
  );
}
