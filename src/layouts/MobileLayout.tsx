import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import { services } from '../data/services'

const drawerLinks = [
  { to: '/', label: 'Home', icon: 'bx-home-alt-2', end: true },
  { to: '/services', label: 'All services', icon: 'bx-grid-alt', end: true },
  { to: '/tracking', label: 'Project tracking', icon: 'bx-map-alt' },
  { to: '/messages', label: 'Messages', icon: 'bx-message-rounded-dots' },
  { to: '/my-projects', label: 'My projects', icon: 'bx-briefcase' },
  { to: '/notifications', label: 'Notifications', icon: 'bx-bell' },
  { to: '/account', label: 'Account', icon: 'bx-user' },
]

/** Responsive customer shell. */
export default function MobileLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <div className="min-h-screen w-full bg-bg pb-24 pt-14 lg:pb-8 lg:pt-16">
      <header className="fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-bg/95 px-5 backdrop-blur-xl lg:hidden">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-ink">
          <span className="grid size-8 place-items-center rounded-[7px] bg-brand text-sm text-brand-ink">N</span>
          NDFN
        </Link>
        <button type="button" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)} className="grid size-10 place-items-center rounded-[8px] border border-line text-ink hover:bg-surface">
          <i aria-hidden="true" className="bx bx-menu-alt-right text-2xl" />
        </button>
      </header>
      <BottomBar onMenuClick={() => setMenuOpen(true)} />
      <Outlet />
      {menuOpen && <div className="fixed inset-0 z-50" role="presentation">
        <button type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} className="absolute inset-0 size-full bg-black/65" />
        <aside role="dialog" aria-modal="true" aria-label="Navigation menu" className="absolute inset-y-0 left-0 flex w-[min(84vw,340px)] flex-col border-r border-line bg-bg shadow-2xl">
          <div className="flex h-16 items-center justify-between border-b border-line px-5">
            <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-ink" onClick={() => setMenuOpen(false)}>
              <span className="grid size-9 place-items-center rounded-[8px] bg-brand text-lg text-brand-ink">N</span>NDFN
            </Link>
            <button type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} className="grid size-9 place-items-center rounded-[8px] text-muted hover:bg-surface hover:text-ink">
              <i aria-hidden="true" className="bx bx-x text-2xl" />
            </button>
          </div>
          <nav aria-label="Sidebar navigation" className="no-scrollbar flex-1 overflow-y-auto px-3 py-4">
            <p className="px-3 pb-2 text-[10px] font-semibold uppercase text-dim">Menu</p>
            {drawerLinks.map((item) => <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `flex items-center gap-3 rounded-[8px] px-3 py-3 text-sm ${isActive ? 'bg-brand/10 font-semibold text-brand' : 'text-muted hover:bg-surface hover:text-ink'}`}>
              <i aria-hidden="true" className={`bx ${item.icon} text-xl`} />{item.label}
            </NavLink>)}
            <p className="px-3 pb-2 pt-6 text-[10px] font-semibold uppercase text-dim">Services</p>
            {services.map((service) => <NavLink key={service.slug} to={`/services/${service.slug}`} className={({ isActive }) => `flex items-center gap-3 rounded-[8px] px-3 py-3 text-sm ${isActive ? 'bg-brand/10 font-semibold text-brand' : 'text-muted hover:bg-surface hover:text-ink'}`}>
              <i aria-hidden="true" className="bx bx-wrench text-xl" />{service.name}
            </NavLink>)}
          </nav>
          <div className="border-t border-line p-4">
            <Link to="/quote" onClick={() => setMenuOpen(false)} className="flex h-11 items-center justify-center gap-2 rounded-[8px] bg-brand text-sm font-semibold text-brand-ink">
              <i aria-hidden="true" className="bx bx-message-square-edit text-lg" />Request a quote
            </Link>
          </div>
        </aside>
      </div>}
    </div>
  )
}
