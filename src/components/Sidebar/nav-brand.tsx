import { SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar'
import type { Brand } from '@/types'

export function NavBrand({ brand }: { brand: Brand }) {
  return (
    <SidebarMenu>
      <SidebarMenuButton
        size="lg"
        asChild
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
        <a href={brand.url}>
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <brand.icon className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{brand.name}</span>
            {brand.description && <span className="truncate text-xs">{brand.description}</span>}
          </div>
        </a>
      </SidebarMenuButton>
    </SidebarMenu>
  )
}
