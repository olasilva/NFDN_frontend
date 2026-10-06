import { Link, Navigate, useParams } from 'react-router-dom'
import Stub from '../components/Stub'
import { serviceTabs, services, type ServiceTab } from '../data/services'

/** One template for all 8 categories x 3 tabs (24 Figma frames share the same layout). */
export default function ServicePage({ tab }: { tab: ServiceTab }) {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/services" replace />
  const suffix = tab === 'overview' ? 'Overview' : tab === 'materials' ? 'Materials' : 'Projects'
  return (
    <>
      <nav className="fixed left-1/2 top-0 z-10 flex w-full max-w-[440px] -translate-x-1/2 gap-2 border-b border-line bg-bg/95 px-6 pb-3 pt-14 backdrop-blur">
        {serviceTabs.map((t) => (
          <Link key={t} to={t === 'overview' ? `/services/${slug}` : `/services/${slug}/${t}`}
            className={`rounded-full px-3 py-1 text-xs capitalize ${t === tab ? 'bg-brand text-brand-ink' : 'bg-surface text-muted'}`}>{t}</Link>
        ))}
      </nav>
      <Stub title={`${service.name} · ${tab}`} node={`${slug}${suffix}`} />
    </>
  )
}
