import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Home', icon: 'bx-home-alt-2', end: true },
  { to: '/services', label: 'Services', icon: 'bx-grid-alt' },
  { to: '/tracking', label: 'Track', icon: 'bx-map-alt' },
  { to: '/messages', label: 'Messages', icon: 'bx-message-rounded-dots' },
  { to: '/account', label: 'Account', icon: 'bx-user' },
]

export default function BottomBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <nav aria-label="Main navigation" className="fixed bottom-0 left-0 z-20 flex h-20 w-full justify-around border-t border-line bg-bg/95 backdrop-blur-xl lg:bottom-auto lg:top-0 lg:h-16 lg:justify-center lg:gap-10 lg:border-b lg:border-t-0">
      <div className="mx-auto flex h-full w-full max-w-[1280px] items-center px-3 sm:px-6 lg:px-10">
        <NavLink to="/" aria-label="NDFN home" className="hidden items-center gap-2.5 lg:flex">
          <span className="grid size-9 place-items-center rounded-[8px] bg-brand font-display text-lg font-bold text-brand-ink">N</span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">NDFN</span>
        </NavLink>
        <button type="button" aria-label="Open navigation menu" onClick={onMenuClick} className="mr-6 hidden size-9 place-items-center rounded-[8px] border border-line text-ink hover:bg-surface lg:grid">
          <i aria-hidden="true" className="bx bx-menu-alt-left text-xl" />
        </button>
        <div className="flex h-full w-full justify-around lg:ml-auto lg:w-auto lg:gap-8">
          {tabs.map((t) => (
            <NavLink key={t.to} to={t.to} end={t.end}
              className={({ isActive }) =>
                `flex min-w-14 flex-col items-center justify-center gap-[3px] pb-2 text-[10.5px] transition-colors lg:flex-row lg:gap-2 lg:pb-0 lg:text-sm ${isActive ? 'font-semibold text-brand' : 'text-dim hover:text-ink'}`}>
              {({ isActive }) => (<>
                <i aria-hidden="true" className={`bx ${t.icon} text-[21px] leading-none lg:text-lg`} />
                {t.label}
                {isActive && <span className="size-1 rounded-full bg-brand lg:hidden" />}
              </>)}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
