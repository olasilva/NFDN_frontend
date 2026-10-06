import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import MobileLayout from './layouts/MobileLayout'
import Stub from './components/Stub'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import ServicesPage from './pages/ServicesPage'
import AdminPage from './pages/admin/AdminPage'
import { serviceTabs } from './data/services'

const mobile: [string, string, string][] = [
  ['services', 'Services', 'services'], ['tracking', 'Project tracking', 'tracking'],
  ['messages', 'Messages', 'messages'], ['account', 'Account', 'account'],
  ['payment-history', 'Payment history', 'paymentHistory'], ['warranty', 'Warranty & After Sales', 'warranty'],
  ['notifications', 'Notifications', 'notifications'], ['my-projects', 'My projects', 'myProjects'],
  ['quote', 'Request a quote', 'quote'], ['quotation', 'Quotation', 'quotation'], ['payment', 'Payment', 'payment'],
]
const admin: [string, string, string][] = [
  ['dashboard', 'Dashboard', 'dashboard'], ['customers', 'Customers', 'customers'], ['leads', 'Leads', 'leads'],
  ['quotations', 'Quotations', 'quotations'], ['projects', 'Projects', 'projects'], ['payment', 'Payment', 'adminPayment'],
  ['inventory', 'Inventory', 'inventory'], ['workers', 'Workers', 'workers'], ['reports', 'Reports', 'reports'],
  ['settings', 'Settings', 'settings'],
]

export const router = createBrowserRouter([
  {
    element: <MobileLayout />,
    children: [
      { index: true, element: <Home /> },
      ...mobile.map(([path, title, node]) => ({ path, element: path === 'services' ? <ServicesPage /> : <Stub title={title} node={node} /> })),
      ...serviceTabs.map((tab) => ({
        path: tab === 'overview' ? 'services/:slug' : `services/:slug/${tab}`,
        element: <ServicePage tab={tab} />,
      })),
    ],
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: admin.map(([path, title, node]) => ({ path, element: <AdminPage title={title} node={node} /> })),
  },
])
