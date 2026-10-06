// NOTE: Figma asset URLs expire after 7 days. Download them into /public/img and swap these paths.
export type Contract = {
  id: string; category: string; title: string; location: string; budget: string
  deadline: string; applied: number; urgent?: boolean; image: string
}
const a = (id: string) => `https://www.figma.com/api/mcp/asset/${id}.png`
export const contracts: Contract[] = [
  { id: 'c1', category: 'Glass Works', title: 'Glass partition — 4-storey office block', location: 'Wuse 2, Abuja', budget: '₦1.2M – ₦1.8M', deadline: '25 Sep 2026', applied: 3, urgent: true, image: a('bd64cde3-490b-45b5-90f6-df61300e1ea1') },
  { id: 'c2', category: 'Roofing', title: 'Roofing — 5-bedroom duplex new build', location: 'Gwarimpa, Abuja', budget: '₦2.4M – ₦3.1M', deadline: '30 Sep 2026', applied: 7, image: a('ecb67a8d-c467-4f39-9421-dadab65c1d56') },
  { id: 'c3', category: 'Window Blinds', title: 'Window blinds — 12 rooms, hotel annex', location: 'Kubwa, Abuja', budget: '₦320K – ₦480K', deadline: '4 Oct 2026', applied: 5, image: a('04673f0d-3117-4039-bfe0-8cc2bf39d277') },
  { id: 'c4', category: 'Aco-board / Signage', title: 'Shopfront ACO-board signage rebranding', location: 'GARKI, Abuja', budget: '₦180K – ₦260K', deadline: '6 Oct 2026', applied: 2, urgent: true, image: a('5f74c637-8e6e-4426-b34d-05f45e8ea0ed') },
  { id: 'c5', category: 'Mirrors', title: 'Gym mirror wall — full-height installation', location: 'Asokoro, Abuja', budget: '₦220K – ₦340K', deadline: '10 Oct 2026', applied: 4, image: a('7cadec02-9e47-48fb-af70-9f669f2b57f4') },
]
export const serviceImages: Record<string, string> = {
  windows: a('8ca329ea-322c-42fc-a97d-8f076ce84ce6'),
  'glass-works': a('53513323-d4af-443f-9e04-1033ba7a2680'),
  roofing: a('ecb67a8d-c467-4f39-9421-dadab65c1d56'),
  'window-blinds': a('04673f0d-3117-4039-bfe0-8cc2bf39d277'),
}
export const referImage = a('f2852eef-7fbb-403f-9f9e-8ce3166b6542')
export const activeProjectImage = a('033ff12a-d67d-44c0-831c-7d59caf04133')
