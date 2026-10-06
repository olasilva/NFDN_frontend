import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Contract } from '../data/contracts'
import Pill from './Pill'

export default function ContractCard({ c }: { c: Contract }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="relative h-[100px] bg-surface-2">
        <img src={c.image} alt="" className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/35 to-bg/80" />
        <div className="absolute left-3 top-2.5 flex gap-1.5">
          <Pill>{c.category}</Pill>{c.urgent && <Pill tone="danger">Urgent</Pill>}
        </div>
        <h3 className="absolute bottom-2 left-3 text-[13.5px] font-semibold">{c.title}</h3>
      </div>
      <div className="p-3.5">
        <dl className="grid grid-cols-2 gap-y-1.5 text-xs text-muted">
          <dd><i aria-hidden="true" className="bx bx-map-pin mr-1 align-[-2px] text-sm" />{c.location}</dd><dd><i aria-hidden="true" className="bx bx-wallet mr-1 align-[-2px] text-sm" />{c.budget}</dd>
          <dd><i aria-hidden="true" className="bx bx-calendar mr-1 align-[-2px] text-sm" />Deadline {c.deadline}</dd><dd><i aria-hidden="true" className="bx bx-user mr-1 align-[-2px] text-sm" />{c.applied} applied</dd>
        </dl>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button type="button" aria-expanded={showDetails} onClick={() => setShowDetails((shown) => !shown)} className="h-10 rounded-[8px] border border-line bg-surface-2 text-xs text-muted hover:text-ink">{showDetails ? 'Hide details' : 'View details'}</button>
          <Link to="/account?next=apply" className="flex h-10 items-center justify-center rounded-[8px] bg-brand text-[12.5px] font-semibold text-brand-ink">Apply now</Link>
        </div>
        {showDetails && <p className="mt-3 border-t border-line pt-3 text-xs leading-5 text-muted">This {c.category.toLowerCase()} project is in {c.location}. Budget: {c.budget}. Submit an application before {c.deadline}.</p>}
      </div>
    </article>
  )
}
