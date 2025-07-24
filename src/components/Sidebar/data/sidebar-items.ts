import { LayoutDashboard, MapPin, CarFront, Radio, Route, Bell, Settings, Info } from 'lucide-react'
import type { SidebarItems } from '@/types/sidebar.ts'

export const sidebarItems: SidebarItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    url: '/dashboard',
  },
  {
    title: 'Vehicles',
    icon: CarFront,
    url: '/vehicles',
  },
  {
    title: 'Live Tracking',
    icon: MapPin,
    url: '/live-tracking',
  },
  {
    title: 'Routes',
    icon: Route,
    url: '/routes',
  },
  {
    title: 'Sensors',
    icon: Radio,
    url: '/sensors',
  },
  {
    title: 'Alerts',
    icon: Bell,
    url: '/alerts',
  },
  {
    title: 'Settings',
    icon: Settings,
    url: '/settings',
  },
  {
    title: 'About',
    icon: Info,
    url: '/about',
  },
]
