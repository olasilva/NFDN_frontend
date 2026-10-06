import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ContractCard from '../components/ContractCard'
import Pill from '../components/Pill'
import { activeProjectImage, contracts, referImage, serviceImages } from '../data/contracts'
import { services } from '../data/services'

const label = 'text-[13px] font-medium uppercase tracking-[0.02em] text-muted'

export default function Home() {
  const [query, setQuery] = useState('')
  const [carouselPaused, setCarouselPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const search = query.trim().toLowerCase()
  const visibleServices = services.filter((service) => `${service.name} ${service.blurb}`.toLowerCase().includes(search))
  const visibleContracts = contracts.filter((contract) => `${contract.title} ${contract.category} ${contract.location}`.toLowerCase().includes(search))

  useEffect(() => {
    if (carouselPaused || visibleServices.length < 2) return
    const timer = window.setInterval(() => {
      const carousel = carouselRef.current
      if (!carousel) return
      const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 8
      carousel.scrollTo({ left: atEnd ? 0 : carousel.scrollLeft + carousel.clientWidth * 0.8, behavior: 'smooth' })
    }, 3500)
    return () => window.clearInterval(timer)
  }, [carouselPaused, visibleServices.length])

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current
    if (carousel) carousel.scrollBy({ left: direction * carousel.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <main className="mx-auto w-full max-w-[1280px] px-5 pt-8 sm:px-8 md:px-10 md:pt-10">
      <h1 className="text-[28px] font-bold leading-[42px] tracking-tight">Hi, Chidi</h1>
      <p className="mt-[-2px] text-sm text-muted">What are we building today?</p>

      <label className="mt-[18px] flex max-w-2xl items-center gap-2.5 rounded-[10px] border border-line bg-surface px-4 py-[13px] text-sm text-muted focus-within:border-brand">
        <i aria-hidden="true" className="bx bx-search text-lg" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search services and contracts..." aria-label="Search services and contracts" className="min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-dim" />
        {query && <button type="button" onClick={() => setQuery('')} className="text-xs text-brand">Clear</button>}
      </label>

      {!search && <section className="relative mt-5 h-40 max-w-5xl overflow-hidden rounded-[10px] md:h-52">
        <img src={referImage} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(113deg,rgba(11,11,12,.92)_6%,rgba(11,11,12,.5)_59%,transparent_94%)]" />
        <div className="relative flex h-full max-w-[240px] flex-col justify-center px-[22px]">
          <span className="mb-2 w-fit"><Pill tone="brand"><i className="size-1.5 rounded-full bg-brand" />OFFER</Pill></span>
          <h2 className="font-display text-[17px] font-semibold leading-[25px]">Refer a friend, earn credit</h2>
          <p className="text-[12.5px] leading-[18.75px] text-muted">Share your code · get ₦5,000 off your next project</p>
        </div>
      </section>}

      <div className="mt-[35px] flex items-center justify-between">
        <h2 className={label}>Our services</h2>
        <div className="flex items-center gap-4">
          <Link to="/services" className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand">See all <i aria-hidden="true" className="bx bx-right-arrow-alt text-base" /></Link>
          <div className="hidden gap-2 md:flex">
            <button type="button" aria-label="Previous services" onClick={() => moveCarousel(-1)} className="grid size-9 place-items-center rounded-full border border-line text-ink hover:bg-surface"><i aria-hidden="true" className="bx bx-chevron-left text-xl" /></button>
            <button type="button" aria-label="Next services" onClick={() => moveCarousel(1)} className="grid size-9 place-items-center rounded-full border border-line text-ink hover:bg-surface"><i aria-hidden="true" className="bx bx-chevron-right text-xl" /></button>
          </div>
        </div>
      </div>
      <div ref={carouselRef} onMouseEnter={() => setCarouselPaused(true)} onMouseLeave={() => setCarouselPaused(false)} onFocus={() => setCarouselPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setCarouselPaused(false) }} className="no-scrollbar -mx-5 mt-4 flex snap-x gap-3 overflow-x-auto px-5 sm:-mx-8 sm:px-8 md:mx-0 md:px-0">
        {visibleServices.slice(0, 8).map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`} className="w-[min(72vw,260px)] shrink-0 snap-start overflow-hidden rounded-[10px] border border-line bg-surface md:w-[260px]">
            <div className="relative h-[110px] bg-surface-2">
              {serviceImages[s.slug] && <img src={serviceImages[s.slug]} alt="" className="size-full object-cover" />}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-bg/70" />
            </div>
            <div className="px-3 pb-3 pt-2.5">
              <h3 className="text-[13px] font-semibold tracking-tight">{s.name}</h3>
              <p className="text-[11.5px] text-muted">{s.blurb}</p>
            </div>
          </Link>
        ))}
      </div>

      {!search && <>
      <h2 className={`${label} mt-6`}>Active project</h2>
      <Link to="/tracking" className="mt-3 block max-w-5xl overflow-hidden rounded-[10px] border border-line bg-surface">
        <div className="relative h-[120px] bg-surface-2">
          <img src={activeProjectImage} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-20% to-bg/85" />
          <div className="absolute inset-x-4 bottom-2 flex items-end justify-between">
            <div><p className="text-xs text-ink/70">3-Bedroom Duplex, Gwarinpa</p><h3 className="text-[15px] font-semibold">Aluminum Works</h3></div>
            <Pill tone="brand"><i className="size-[5px] rounded-full bg-brand" />Fabrication</Pill>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3 text-[12.5px] text-muted">
          <span>Next: Ready for installation · Est. 4 days</span><i aria-hidden="true" className="bx bx-chevron-right text-lg" />
        </div>
      </Link>

      </>}
      <h2 className="mt-6 text-xs font-semibold uppercase tracking-[0.05em] text-muted">{search ? 'Matching contracts' : 'Available contracts'}</h2>
      {!search && <div className="mt-3 max-w-5xl rounded-[8px] border border-brand/25 bg-brand/12 px-3.5 py-2.5 text-[12.5px] leading-[18.75px] text-muted">
        <i aria-hidden="true" className="bx bx-bell mr-1 align-[-2px] text-base text-brand" />Open jobs posted by customers. Apply to win the contract — first-come, best-quality wins.
      </div>}
      {visibleContracts.length ? <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{visibleContracts.map((c) => <ContractCard key={c.id} c={c} />)}</div> : <p className="mt-4 text-sm text-muted">No contracts match “{query}”.</p>}
    </main>
  )
}
