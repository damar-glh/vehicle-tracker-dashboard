import { WEB_NAME } from '@/constants'
import Logo from 'public/car-front.svg'

export const BRAND_LOGO = {
  name: WEB_NAME,
  logo: Logo,
  alt: 'Vitracs Logo',
  width: 150,
  height: 50,
}

export default function BrandLogo() {
  return (
    <img
      src={BRAND_LOGO.logo}
      alt={BRAND_LOGO.alt}
      width={BRAND_LOGO.width}
      height={BRAND_LOGO.height}
    />
  )
}
