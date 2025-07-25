import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Car } from 'lucide-react'
import { colorMap } from '@/components/vehicles/color'
import VehicleHeader from '@/components/vehicle-details/VehicleHeader'

interface VehicleErrorStateProps {
  onBackClick: () => void
}

const VehicleErrorState = ({ onBackClick }: VehicleErrorStateProps) => {
  return (
    <div className="from-background to-secondary/20 min-h-screen bg-gradient-to-br">
      <VehicleHeader vehicleId="Unknown" onBackClick={onBackClick} name={''} />

      <div className="container mx-auto px-4 py-12">
        <Card className={`${colorMap.error.bg} border-l-4 border-l-red-500`}>
          <CardContent className="p-12 text-center">
            <Car className="text-muted-foreground mx-auto mb-6 h-16 w-16" />
            <h3 className="mb-4 text-2xl font-bold">Vehicle Not Found</h3>
            <p className="text-muted-foreground mx-auto mb-6 max-w-md">
              The requested vehicle could not be found or does not exist in our system.
            </p>
            <Button onClick={onBackClick} size="lg" className="px-8">
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default VehicleErrorState
