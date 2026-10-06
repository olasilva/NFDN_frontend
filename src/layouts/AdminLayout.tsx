import { NavLink, Outlet } from 'react-router-dom'

const links = ['dashboard', 'customers', 'leads', 'quotations', 'projects', 'payment', 'inventory', 'workers', 'reports', 'settings']

/** Admin dashboard: 1440px desktop frames with a sidebar. */
export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-bg">
      <aside className="w-56 shrink-0 border-r border-line p-4">
        <div className="mb-6 font-display text-xl font-bold text-brand">NDFN</div>
        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <NavLink key={l} to={`/admin/${l}`}
              className={({ isActive }) => `rounded-lg px-3 py-2 text-sm capitalize ${isActive ? 'bg-brand/12 text-brand' : 'text-muted hover:bg-surface'}`}>
              {l}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1"><Outlet /></main>
    </div>
  )
}
