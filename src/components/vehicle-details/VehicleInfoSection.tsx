import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Car, Gauge, Activity, Zap } from 'lucide-react'
import { colorMap } from '@/components/vehicles/color'

interface VehicleInfoSectionProps {
  vehicleId: string
  speed: number
}

const VehicleInfoSection = ({ vehicleId, speed }: VehicleInfoSectionProps) => {
  const getSpeedStatus = (speed: number) => {
    if (speed === 0) return { color: colorMap.info.icon, status: 'Parked' }
    if (speed <= 30) return { color: colorMap.success.icon, status: 'Driving' }
    if (speed <= 60) return { color: colorMap.warning.icon, status: 'Highway' }
    return { color: 'text-red-600', status: 'High Speed' }
  }

  const speedStatus = getSpeedStatus(speed)

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card className="bg-background flex transform items-center justify-center p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="flex w-full items-center justify-between">
          <CardTitle className="flex items-center justify-center gap-2">
            <Gauge className={`h-6 w-6 ${speedStatus.color}`} />
            Current Speed
          </CardTitle>
          <div
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${colorMap.info.bg}`}>
            <Activity className="mr-2 h-4 w-4" />
            <span>{speedStatus.status}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className={`text-lg font-bold md:text-2xl ${speedStatus.color}`}>
            {speed}
            <span className="ml-2 text-2xl">km/h</span>
          </div>
          <p className="text-muted-foreground text-sm">
            This is the current speed of the vehicle. It updates in real-time and reflects the
            latest telemetry data.
          </p>
        </CardContent>
      </Card>
      <Card className="bg-background transform p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className={`h-5 w-5 ${colorMap.warning.icon}`} />
            Vehicle Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className={`rounded-xl p-5 ${colorMap.warning.bg}`}>
              <p className="text-primary mb-2 text-sm font-medium">Vehicle ID</p>
              <p className="text-lg font-bold md:text-2xl">{vehicleId}</p>
            </div>
            <div className={`rounded-xl p-5 ${colorMap.success.bg}`}>
              <p className="text-primary mb-2 text-sm font-medium">Status</p>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-pulse rounded-full bg-green-600"></div>
                <span className="text-lg font-bold md:text-2xl">Active</span>
              </div>
            </div>
          </div>
          <div
            className={`flex items-center justify-center gap-2 rounded-lg p-3 ${colorMap.info.bg}`}>
            <Zap className="h-5 w-5 text-yellow-600" />
            <span className="font-medium">Real-time Monitoring Active</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default VehicleInfoSection
