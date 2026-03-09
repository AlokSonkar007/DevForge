import { Button } from '../components/ui/Button';

export function AIWorkspacePage() {
  return (
    <div className="grid gap-4 xl:grid-cols-[220px_1fr_320px]">
      <aside className="rounded-xl border border-white/10 bg-panel p-4">Tool Selection</aside>
      <section className="space-y-4">
        <div className="h-80 rounded-xl border border-white/10 bg-panel p-4 code-font">Monaco Editor Area</div>
        <div className="flex gap-3">
          <input className="flex-1 rounded-md border border-white/10 bg-black/20 px-3 py-2" placeholder="Write prompt for AI..." />
          <Button>Run AI</Button>
        </div>
      </section>
      <aside className="rounded-xl border border-white/10 bg-panel p-4">AI Response Panel</aside>
    </div>
  );
}
