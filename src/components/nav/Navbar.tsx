import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { Car } from 'lucide-react'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="border-border bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 rounded-lg p-2">
                <Car className="text-primary h-6 w-6" />
              </div>
              <span className="text-foreground text-xl font-bold">VehicleTracker</span>
            </div>
            <Button onClick={() => navigate('/dashboard')} size="lg">
              Access Dashboard
            </Button>
          </div>
        </div>
      </nav>
  )
}