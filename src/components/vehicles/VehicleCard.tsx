import type { Vehicle } from '@/types/vehicle'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CarFront, Clock, Gauge, Calendar, Activity } from 'lucide-react'
import { StatusBadge } from '@/components/ui/status-badge'
import { Button } from '@/components/ui/button'
import { formatDistanceToNow, format } from 'date-fns'
import { colorMap } from '@/components/vehicles/color'

interface VehicleCardProps {
  vehicle: Vehicle
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const navigate = useNavigate()
  const handleViewDetails = () => {
    navigate(`/vehicles/${vehicle.id}`, { state: { vehicle } })
  }

  const getSpeedStatus = (speed: number) => {
    if (speed === 0) return { color: 'error' as const, label: 'Stopped' }
    if (speed <= 30) return { color: 'success' as const, label: 'Normal' }
    if (speed <= 60) return { color: 'default' as const, label: 'Moderate' }
    return { color: 'warning' as const, label: 'Fast' }
  }

  const speedStatus = getSpeedStatus(vehicle.speed)
  const speedColors = colorMap[speedStatus.color]
  const headerColors = colorMap.default

  return (
    <Card className="bg-background transform p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`${headerColors.bg} border-secondary/30 rounded-xl p-3 shadow-md`}>
              <CarFront className={`${headerColors.icon} h-6 w-6`} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold md:text-xl">{vehicle.name}</h3>
              <p className="text-primary text-sm font-medium">ID: {vehicle.id}</p>
            </div>
          </div>
          <StatusBadge status={vehicle.status} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className={`${speedColors.bg} rounded-lg border p-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-background hidden rounded-lg p-2 shadow-sm md:block">
                <Gauge className={`${speedColors.icon} h-5 w-5`} />
              </div>
              <div>
                <p className="text-text text-sm font-medium">Current Speed</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-2xl font-bold ${speedColors.text}`}>{vehicle.speed}</span>
                  <span className="text-primary text-sm font-medium">km/h</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div
                className={`${speedColors.text} flex items-center gap-2 text-xs font-semibold uppercase`}>
                <Activity className="h-4 w-4" />
                {speedStatus.label}
              </div>
            </div>
          </div>
        </div>
        <div className={`${colorMap.info.bg} rounded-lg border p-4`}>
          <div className="flex items-center gap-3">
            <div className="bg-background hidden rounded-lg border p-2 shadow-sm md:block">
              <Calendar className={`${colorMap.info.icon} h-4 w-4`} />
            </div>
            <div className="flex-1 gap-6">
              <p className="text-text text-sm font-medium">Last Update</p>
              <p className="text-primary text-xs font-medium md:text-sm">
                {format(new Date(vehicle.updated_at), 'MMM dd, yyyy • HH:mm')}
              </p>
            </div>
            <div className="flex items-center gap-3 text-right">
              <Clock className={`${colorMap.info.icon} h-4 w-4`} />
              <p className={`${colorMap.info.text} text-sm font-semibold`}>
                {formatDistanceToNow(new Date(vehicle.updated_at), { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>
        <Button
          onClick={handleViewDetails}
          variant="default"
          className="text-background w-full cursor-pointer p-4 font-medium transition-colors duration-200">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}
