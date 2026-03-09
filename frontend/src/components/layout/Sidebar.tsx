import { Code2, FolderGit2, History, LayoutDashboard, Settings, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const nav = [
  ['Dashboard', '/dashboard', LayoutDashboard],
  ['AI Tools', '/ai-tools', Wrench],
  ['Projects', '/projects', Code2],
  ['GitHub', '/github', FolderGit2],
  ['History', '/history', History],
  ['Settings', '/settings', Settings]
] as const;

export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-white/10 bg-black/30 p-4 lg:block">
      <div className="mb-6 text-xl font-bold">DevForge</div>
      <nav className="space-y-2">
        {nav.map(([label, href, Icon]) => (
          <Link key={label} to={href} className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white/5">
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
