import { Outlet } from 'react-router-dom'
import BottomBar from '../components/BottomBar'

/** Responsive customer shell. */
export default function MobileLayout() {
  return (
    <div className="min-h-screen w-full bg-bg pb-24 pt-0 md:pb-8 md:pt-16">
      <Outlet />
      <BottomBar />
    </div>
  )
}
