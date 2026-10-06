import { FILE_KEY, nodes } from '../data/figmaNodes'

/** Placeholder for screens not yet translated from Figma. Replace with the real markup. */
export default function Stub({ title, node }: { title: string; node: string }) {
  const id = nodes[node] ?? node
  return (
    <div className="px-6 pt-20 pb-28">
      <h1 className="font-display text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-muted">Scaffolded route. Figma node {id}.</p>
      <a className="mt-4 inline-block text-sm font-semibold text-brand"
         href={`https://www.figma.com/design/${FILE_KEY}/NDFN?node-id=${id.replace(':', '-')}`}
         target="_blank" rel="noreferrer">Open in Figma →</a>
    </div>
  )
}
