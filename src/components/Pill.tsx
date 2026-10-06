import type { ReactNode } from 'react'

const tones = {
  brand: 'bg-brand/12 border-brand text-brand',
  danger: 'bg-danger/14 border-danger/30 text-danger',
  neutral: 'bg-surface border-line text-muted',
}
export default function Pill({ tone = 'neutral', children }: { tone?: keyof typeof tones; children: ReactNode }) {
  return <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-[3px] text-[10.5px] font-semibold ${tones[tone]}`}>{children}</span>
}
