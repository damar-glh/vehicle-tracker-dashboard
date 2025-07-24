import { BarChart3, Car, Clock, type LucideIcon, MapPin, Shield, Zap } from 'lucide-react'

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: MapPin,
    title: 'Real-time Tracking',
    description: 'Track your vehicles in real-time with precise GPS location data',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and reporting for fleet management',
  },
  {
    icon: Shield,
    title: 'Security Monitoring',
    description: 'Advanced security features to protect your valuable assets',
  },
  {
    icon: Zap,
    title: 'Instant Alerts',
    description: 'Get notified immediately about important vehicle events',
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Round-the-clock monitoring and support for your fleet',
  },
  {
    icon: Car,
    title: 'Fleet Management',
    description: 'Efficiently manage your entire vehicle fleet from one place',
  },
]
