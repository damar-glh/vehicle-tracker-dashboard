import { BrandLogo as Logo } from '@/assets/logos/Brand'
import { formatBrandName } from '@/lib/branding'

interface BrandLogoProps {
  suffix?: string
  className?: string
}

export function BrandLogo({ suffix, className }: BrandLogoProps) {
  return (
    <div className={className}>
      <Logo />
      {suffix && <span className="ml-1 text-xs opacity-70">{suffix}</span>}
    </div>
  )
}

export function BrandText({ suffix, className }: BrandLogoProps) {
  return <div className={`text-primary font-bold ${className}`}>{formatBrandName(suffix)}</div>
}
