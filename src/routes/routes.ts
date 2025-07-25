import { createBrowserRouter } from 'react-router'
import Home from '@/pages/Home'
import Vehicles from '@/pages/Vehicles'
import VehicleDetails from '@/pages/VehicleDetails'
import RouteErrorWrapper from '@/components/error/RouteErrorWrapper'
import DefaultLayout from '@/layouts/DefaultLayout.tsx'

export default createBrowserRouter([
  {
    path: '/',
    Component: DefaultLayout,
    ErrorBoundary: RouteErrorWrapper,
    children: [
      { index: true, Component: Home },
      { path: 'vehicles', Component: Vehicles },
      { path: 'vehicles/:id', Component: VehicleDetails },
    ],
  },
  { path: '*', Component: RouteErrorWrapper },
])
