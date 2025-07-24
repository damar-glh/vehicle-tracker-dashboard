import type { LucideIcon } from 'lucide-react'

export type SidebarItem = {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: SidebarSubItem[]
}

export interface SidebarSubItem {
  title: string
  url: string
  isActive?: boolean
}

export type SidebarItems = SidebarItem[]

export interface UserProfile {
  name: string
  email: string
  avatar: string
  role?: string
}
