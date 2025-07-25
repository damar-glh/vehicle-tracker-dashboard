import { Button } from '@/components/ui/button'
import { Car, ArrowLeft, Activity } from 'lucide-react'
import { colorMap } from '@/components/vehicles/color'

interface VehicleHeaderProps {
  vehicleId: string
  name: string
  onBackClick: () => void
}

const VehicleHeader = ({ vehicleId, name, onBackClick }: VehicleHeaderProps) => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={onBackClick}
              variant="outline"
              size="lg"
              className="flex items-center gap-2">
              <ArrowLeft className="h-6 w-6" />
              <span className="hidden sm:inline">Back</span>
            </Button>
            <div className="flex items-center gap-3">
              <div className={`rounded-xl p-3 ${colorMap.warning.bg}`}>
                <Car className={`h-6 w-6 ${colorMap.warning.icon}`} />
              </div>
              <div>
                <h1 className="text-2xl font-bold md:text-4xl">{name}</h1>
                <p className="text-primary text-sm font-medium">Real-time Vehicle Monitoring</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className={`hidden items-center rounded-full px-4 py-2 text-sm font-semibold md:inline-flex ${colorMap.success.bg}`}>
              <span className={colorMap.success.text}>ID: {vehicleId}</span>
            </div>
            <div
              className={`hidden items-center rounded-full px-4 py-2 text-sm font-semibold md:inline-flex ${colorMap.success.bg}`}>
              <Activity className="mr-2 h-4 w-4" />
              <span className={colorMap.success.text}>Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleHeader
