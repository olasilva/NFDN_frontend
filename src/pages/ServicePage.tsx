import { Link, Navigate, useParams } from 'react-router-dom'
import { activeProjectImage, contracts, serviceImages } from '../data/contracts'
import { serviceTabs, services, type ServiceTab } from '../data/services'

const serviceDetails: Record<string, { description: string; materials: [string, string][]; specs: [string, string][] }> = {
  windows: {
    description: 'Custom-fabricated aluminum windows and doors, built to your building’s exact measurements. Choose from clear, tinted or frosted glass, with powder-coated frame finishes in any RAL colour. Every installation includes a 5-year warranty on frames and a 2-year warranty on hardware.',
    materials: [['6063 Aluminum alloy', 'Standard — most popular, lightweight & durable'], ['6061 Aluminum alloy', 'Heavy-duty — for larger spans'], ['Clear float glass', '4mm & 6mm, standard glazing'], ['Tinted glass', 'Solar control, green/grey/bronze'], ['Frosted glass', 'Privacy panels & shower cubicles'], ['Powder coating', 'Any RAL colour, baked finish']],
    specs: [['Lead time', '5–10 working days'], ['Warranty', '5 years on frames'], ['Site visit', 'Free for Abuja'], ['Min. order', '2 units']],
  },
}

const defaultMaterials: [string, string][] = [
  ['Premium grade', 'Durable, project-ready materials'],
  ['Standard finish', 'Reliable quality for everyday use'],
  ['Custom options', 'Finishes and sizes to suit your space'],
  ['Professional fitting', 'Installed and checked by experienced craftsmen'],
]

const projectImages = [...new Set([...Object.values(serviceImages), ...contracts.map((contract) => contract.image), activeProjectImage])]

export default function ServicePage({ tab }: { tab: ServiceTab }) {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/services" replace />
  const details = serviceDetails[service.slug] ?? {
    description: `Made-to-measure ${service.name.toLowerCase()} for homes and commercial projects. Our team helps you choose the right design, materials and finish, then handles fabrication and installation from start to finish.`,
    materials: defaultMaterials,
    specs: [['Lead time', '5–10 working days'], ['Warranty', 'Up to 5 years'], ['Site visit', 'Available on request'], ['Min. order', '1 project']],
  }
  const heroImage = serviceImages[service.slug] ?? contracts.find((contract) => contract.category.toLowerCase().includes(service.name.split(' ')[0].toLowerCase()))?.image ?? activeProjectImage

  return (
    <main className="mx-auto min-h-[calc(100vh-64px)] w-full max-w-[1280px] pb-36 md:px-8 lg:px-10 lg:pb-12">
      <section className="relative h-[220px] overflow-hidden bg-surface-2 sm:h-[280px] md:h-[360px] md:rounded-b-[10px]">
        <img src={heroImage} alt={`${service.name} project`} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/85" />
        <Link to="/services" aria-label="Back to services" className="absolute left-5 top-5 grid size-10 place-items-center rounded-[9px] bg-black/55 text-white backdrop-blur-sm hover:bg-black/75 md:left-7 md:top-7">
          <i aria-hidden="true" className="bx bx-left-arrow-alt text-2xl" />
        </Link>
        <div className="absolute inset-x-5 bottom-5 md:inset-x-8 md:bottom-8">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3 py-1 text-[11px] font-semibold text-brand backdrop-blur-sm"><i aria-hidden="true" className="bx bx-circle text-[8px]" />{service.name}</span>
          <h1 className="font-display text-[22px] font-semibold leading-tight text-white sm:text-3xl">{service.blurb}</h1>
          <p className="mt-1.5 text-xs text-white/75 sm:text-sm">Abuja’s leading custom {service.name.toLowerCase()} fabricators</p>
        </div>
      </section>

      <nav aria-label="Service details" className="grid grid-cols-3 gap-2 border-b border-line px-3 py-4 sm:flex sm:px-5 md:px-0">
        {serviceTabs.map((serviceTab) => {
          const tabLabel = serviceTab === 'projects' ? 'Past projects' : serviceTab[0].toUpperCase() + serviceTab.slice(1)
          const to = serviceTab === 'overview' ? `/services/${slug}` : `/services/${slug}/${serviceTab}`
          return <Link key={serviceTab} to={to} aria-current={tab === serviceTab ? 'page' : undefined} className={`flex items-center justify-center whitespace-nowrap rounded-full border px-2 py-2 text-[10px] transition-colors sm:px-4 sm:text-xs ${tab === serviceTab ? 'border-brand bg-brand/10 font-semibold text-brand' : 'border-line text-muted hover:border-muted hover:text-ink'}`}>{tabLabel}</Link>
        })}
      </nav>

      <section className="px-5 pt-5 md:px-0">
        {tab === 'overview' && <>
          <p className="max-w-3xl text-[13px] leading-[1.7] text-muted">{details.description}</p>
          <dl className="mt-5 max-w-2xl divide-y divide-line rounded-[10px] border border-line bg-surface px-4">
            {details.specs.map(([label, value]) => <div key={label} className="flex items-center justify-between gap-4 py-3 text-xs"><dt className="text-muted">{label}</dt><dd className="text-right font-semibold text-ink">{value}</dd></div>)}
          </dl>
        </>}

        {tab === 'materials' && <ul className="max-w-2xl divide-y divide-line">
          {details.materials.map(([name, description]) => <li key={name} className="flex gap-3 py-3 first:pt-0"><i aria-hidden="true" className="bx bxs-circle mt-1 text-[8px] text-brand" /><div><h2 className="text-xs font-semibold text-ink">{name}</h2><p className="mt-1 text-xs text-muted">{description}</p></div></li>)}
        </ul>}

        {tab === 'projects' && <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {projectImages.slice(0, 8).map((image, index) => <figure key={image} className="aspect-[1.35] overflow-hidden rounded-[10px] bg-surface-2"><img src={image} alt={`${service.name} completed project ${index + 1}`} loading="lazy" className="size-full object-cover transition-transform duration-300 hover:scale-105" /></figure>)}
        </div>}
      </section>

      <div className="fixed inset-x-0 bottom-20 z-10 border-t border-line/70 bg-bg/90 px-5 py-3 backdrop-blur lg:static lg:mt-8 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <Link to="/quote" className="mx-auto flex h-11 w-full max-w-[1280px] items-center justify-center rounded-[9px] bg-brand text-xs font-bold text-brand-ink transition-colors hover:bg-brand/90 md:max-w-2xl">Request a quote</Link>
      </div>
    </main>
  )
}
