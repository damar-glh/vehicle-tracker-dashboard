import { createBrowserRouter } from 'react-router'
import SidebarLayout from '@/layouts/SidebarLayout.tsx'
import Dashboard from '@/pages/Dashboard'
import Vehicles from '@/pages/Vehicles'
import VehicleDetails from '@/pages/VehicleDetails'

export default createBrowserRouter([
  {
    path: '/',
    Component: SidebarLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'vehicles', Component: Vehicles },
      { path: 'vehicles/:vehicleId', Component: VehicleDetails },
    ],
  },
])
