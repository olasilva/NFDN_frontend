import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Home', icon: 'bx-home-alt-2', end: true },
  { to: '/services', label: 'Services', icon: 'bx-grid-alt' },
  { to: '/tracking', label: 'Track', icon: 'bx-map-alt' },
  { to: '/messages', label: 'Messages', icon: 'bx-message-rounded-dots' },
  { to: '/account', label: 'Account', icon: 'bx-user' },
]

export default function BottomBar() {
  return (
    <nav aria-label="Main navigation" className="fixed bottom-0 left-0 z-20 flex h-20 w-full justify-around border-t border-line bg-bg/95 backdrop-blur-xl md:bottom-auto md:top-0 md:h-16 md:justify-center md:gap-10 md:border-b md:border-t-0">
      <div className="mx-auto flex h-full w-full max-w-[1280px] items-center px-3 sm:px-6 md:px-10">
        <NavLink to="/" aria-label="NDFN home" className="hidden items-center gap-2.5 md:flex">
          <span className="grid size-9 place-items-center rounded-[8px] bg-brand font-display text-lg font-bold text-brand-ink">N</span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">NDFN</span>
        </NavLink>
        <div className="flex h-full w-full justify-around md:ml-auto md:w-auto md:gap-8">
          {tabs.map((t) => (
            <NavLink key={t.to} to={t.to} end={t.end}
              className={({ isActive }) =>
                `flex min-w-14 flex-col items-center justify-center gap-[3px] pb-2 text-[10.5px] transition-colors md:flex-row md:gap-2 md:pb-0 md:text-sm ${isActive ? 'font-semibold text-brand' : 'text-dim hover:text-ink'}`}>
              {({ isActive }) => (<>
                <i aria-hidden="true" className={`bx ${t.icon} text-[21px] leading-none md:text-lg`} />
                {t.label}
                {isActive && <span className="size-1 rounded-full bg-brand md:hidden" />}
              </>)}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
