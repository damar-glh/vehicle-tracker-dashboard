import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Fuel, BarChart3, Clock } from 'lucide-react'
import { colorMap } from '@/components/vehicles/color'
import { formatDistanceToNow } from 'date-fns'

interface TelemetrySectionProps {
  fuelLevel: number
  odometer: number
  timestamp: string
}

const TelemetrySection = ({ fuelLevel, odometer, timestamp }: TelemetrySectionProps) => {
  const getFuelLevelColor = (level: number) => {
    if (level > 50) return colorMap.success.icon
    if (level > 25) return colorMap.warning.icon
    return 'text-red-600'
  }

  const getFuelLevelBg = (level: number) => {
    if (level > 50) return 'bg-green-600'
    if (level > 25) return 'bg-orange-600'
    return 'bg-red-600'
  }

  const getFuelStatus = (level: number) => {
    if (level > 50) return 'Good Level'
    if (level > 25) return 'Moderate'
    return 'Low Fuel'
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-background transform p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
          <CardTitle>Fuel Level</CardTitle>
          <Fuel className={`h-6 w-6 ${getFuelLevelColor(fuelLevel)}`} />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className={`text-lg font-bold md:text-2xl ${getFuelLevelColor(fuelLevel)}`}>
            {fuelLevel.toFixed(1)}%
          </div>
          <div className="space-y-2">
            <div className="bg-muted h-4 w-full rounded-full">
              <div
                className={`h-4 rounded-full transition-all duration-700 ${getFuelLevelBg(fuelLevel)}`}
                style={{ width: `${fuelLevel}%` }}
              />
            </div>
            <p className="text-muted-foreground text-sm">{getFuelStatus(fuelLevel)}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-background transform p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
          <CardTitle>Total Distance</CardTitle>
          <BarChart3 className={`h-6 w-6 ${colorMap.info.icon}`} />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className={`text-lg font-bold md:text-2xl ${colorMap.info.icon}`}>
            {odometer.toLocaleString()}
            <span className="ml-1 text-xl">km</span>
          </div>
          <p className="text-muted-foreground text-sm">Lifetime mileage recorded</p>
        </CardContent>
      </Card>
      <Card className="bg-background transform p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
          <CardTitle>Data Freshness</CardTitle>
          <Clock className={`h-6 w-6 ${colorMap.info.icon}`} />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className={`text-2xl font-bold ${colorMap.info.icon}`}>
            {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
          </div>
          <p className="text-muted-foreground text-sm">{new Date(timestamp).toLocaleString()}</p>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-600"></div>
            <span className="text-muted-foreground text-base font-bold">Live Data</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TelemetrySection
