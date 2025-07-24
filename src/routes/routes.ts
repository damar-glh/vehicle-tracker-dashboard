import { createBrowserRouter } from 'react-router'
import SidebarLayout from '@/layouts/SidebarLayout'
import Dashboard from '@/pages/Dashboard'
import Vehicles from '@/pages/Vehicles'
import VehicleDetails from '@/pages/VehicleDetails'
import RouteErrorWrapper from '@/components/Error/RouteErrorWrapper'

export default createBrowserRouter([
  {
    path: '/',
    Component: SidebarLayout,
    ErrorBoundary: RouteErrorWrapper,
    children: [
      { index: true, Component: Dashboard },
      { path: 'vehicles', Component: Vehicles },
      { path: 'vehicles/:vehicleId', Component: VehicleDetails },
    ],
  },
  {
    path: '*',
    Component: RouteErrorWrapper,
  },
])
