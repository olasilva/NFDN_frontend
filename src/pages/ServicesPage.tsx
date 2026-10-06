import { Link } from 'react-router-dom'
import { serviceImages } from '../data/contracts'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-[1280px] px-5 pt-8 sm:px-8 md:px-10 md:pt-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-brand">What we do</p>
          <h1 className="mt-1 font-display text-3xl font-bold">Our services</h1>
        </div>
        <p className="max-w-md text-sm text-muted">Explore trusted building, glazing, and finishing services.</p>
      </div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service) => (
          <Link key={service.slug} to={`/services/${service.slug}`} className="overflow-hidden rounded-[10px] border border-line bg-surface transition-colors hover:border-brand/60">
            <div className="h-44 bg-surface-2">
              {serviceImages[service.slug] && <img src={serviceImages[service.slug]} alt="" className="size-full object-cover" />}
            </div>
            <div className="p-4">
              <h2 className="font-semibold">{service.name}</h2>
              <p className="mt-1 text-sm text-muted">{service.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">Explore service <i aria-hidden="true" className="bx bx-right-arrow-alt text-base" /></span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}