import { Bell } from 'lucide-react';

export function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 p-4">
      <input className="w-64 rounded-md border border-white/10 bg-panel px-3 py-2 text-sm" placeholder="Search tools, repos, history..." />
      <div className="flex items-center gap-4">
        <Bell size={18} />
        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-neonBlue to-cyberPurple" />
      </div>
    </header>
  );
}
