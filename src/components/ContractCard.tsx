import { useState } from 'react'
import type { Contract } from '../data/contracts'
import Pill from './Pill'

export default function ContractCard({ c }: { c: Contract }) {
  const [showDetails, setShowDetails] = useState(false)
  const [showApplication, setShowApplication] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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
          <button type="button" onClick={() => { setShowApplication((shown) => !shown); setSubmitted(false) }} className="h-10 rounded-[8px] bg-brand text-[12.5px] font-semibold text-brand-ink">{showApplication ? 'Cancel' : 'Apply now'}</button>
        </div>
        {showDetails && <p className="mt-3 border-t border-line pt-3 text-xs leading-5 text-muted">This {c.category.toLowerCase()} project is in {c.location}. Budget: {c.budget}. Submit an application before {c.deadline}.</p>}
        {showApplication && <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="mt-3 border-t border-line pt-3">
          {submitted ? <p role="status" className="text-sm font-medium text-brand">Application noted. The project owner can follow up using your contact details.</p> : <>
            <label className="block text-xs text-muted" htmlFor={`contact-${c.id}`}>Your phone or email</label>
            <div className="mt-2 flex gap-2">
              <input id={`contact-${c.id}`} name="contact" type="text" required placeholder="name@example.com" className="min-w-0 flex-1 rounded-[8px] border border-line bg-bg px-3 text-sm text-ink outline-none focus:border-brand" />
              <button type="submit" className="rounded-[8px] bg-brand px-3 text-xs font-semibold text-brand-ink">Send</button>
            </div>
          </>}
        </form>}
      </div>
    </article>
  )
}
