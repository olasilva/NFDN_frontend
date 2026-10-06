export type Service = { slug: string; name: string; blurb: string }
export const services: Service[] = [
  { slug: 'windows', name: 'Aluminum Works', blurb: 'Windows, doors & partitions' },
  { slug: 'glass-works', name: 'Glass Works', blurb: 'Facades, shower cubicles, railings' },
  { slug: 'roofing', name: 'Roofing', blurb: 'Sheets, trusses & gutters' },
  { slug: 'window-blinds', name: 'Window Blinds', blurb: 'Roller, vertical, wooden' },
  { slug: 'mirrors', name: 'Mirrors', blurb: 'Wall, gym & decorative mirrors' },
  { slug: 'pvc-guttering', name: 'PVC Guttering', blurb: 'Gutters and downpipes' },
  { slug: 'aco-board', name: 'ACO-board', blurb: 'Signage & shopfronts' },
  { slug: 'folding-nets', name: 'Chinese Folding Nets', blurb: 'Insect nets for windows & doors' },
]
export const serviceTabs = ['overview', 'materials', 'projects'] as const
export type ServiceTab = (typeof serviceTabs)[number]
