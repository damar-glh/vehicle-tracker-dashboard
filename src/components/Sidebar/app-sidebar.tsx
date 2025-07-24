import * as React from 'react'
import { NavMain } from '@/components/Sidebar/nav-main'
import { NavUser } from '@/components/Sidebar/nav-user'
import { NavBrand } from '@/components/Sidebar/nav-brand'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { sidebarItems } from '@/components/Sidebar/data/sidebar-items'
import { brandData } from '@/components/Sidebar/data/brand-data'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavBrand brand={brandData} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain SidebarItems={sidebarItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
            role: 'Admin',
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
