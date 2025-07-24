import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { WEB_NAME } from '@/constants'
import Logos from '@/assets/brand/Logos'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const isOnDashboard = location.pathname === '/vehicles'

  const handleButtonClick = () => {
    if (isOnDashboard) {
      navigate('/')
    } else {
      navigate('/vehicles')
    }
  }

  return (
    <nav className="border-border bg-card fixed z-20 w-full border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logos webName={WEB_NAME} />
          <Button onClick={handleButtonClick} size="lg" className="cursor-pointer">
            {!isOnDashboard ? 'View Vehicles' : 'Back Home'}
          </Button>
        </div>
      </div>
    </nav>
  )
}
