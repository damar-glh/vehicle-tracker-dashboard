import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CarFront } from 'lucide-react'

interface VehicleErrorStateProps {
  onBackClick: () => void
}

const VehicleErrorState = ({ onBackClick }: VehicleErrorStateProps) => {
  return (
    <div className="bg-background text-text flex min-h-screen w-full flex-col items-start justify-center">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-12 text-center">
            <CarFront className="text-muted-foreground mx-auto mb-6 h-16 w-16" />
            <h3 className="mb-4 text-2xl font-bold md:text-4xl">Vehicle Not Found</h3>
            <p className="text-muted-foreground mx-auto mb-6 max-w-md text-base">
              The requested vehicle could not be found or does not exist in our system. Please check
              the vehicle ID or try again later.
            </p>
            <Button onClick={onBackClick} size="lg" className="px-8">
              Return to Vehicles
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default VehicleErrorState
