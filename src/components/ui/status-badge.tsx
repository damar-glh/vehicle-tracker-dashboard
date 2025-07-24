import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const statusBadgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset',
  {
    variants: {
      variant: {
        active:
          'bg-green-50 text-green-600 ring-green-500/20 dark:bg-green-950/20 dark:text-green-400 dark:ring-green-400/20',
        inactive:
          'bg-red-50 text-red-600 ring-red-500/20 dark:bg-red-950/20 dark:text-red-400 dark:ring-red-400/20',
        maintenance:
          'bg-orange-50 text-orange-600 ring-orange-500/20 dark:bg-orange-950/20 dark:text-orange-400 dark:ring-orange-400/20',
      },
    },
    defaultVariants: {
      variant: 'inactive',
    },
  },
)

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE'
}

const StatusBadge = ({ className, status, ...props }: StatusBadgeProps) => {
  const variant = status.toLowerCase() as 'active' | 'inactive' | 'maintenance'

  return (
    <div className={cn(statusBadgeVariants({ variant }), className)} {...props}>
      <div
        className={cn(
          'mr-1.5 h-2 w-2 rounded-full',
          variant === 'active' && 'bg-green-500 dark:bg-green-400',
          variant === 'inactive' && 'bg-red-500 dark:bg-red-400',
          variant === 'maintenance' && 'bg-orange-500 dark:bg-orange-400',
        )}
      />
      {status}
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { StatusBadge, statusBadgeVariants }
