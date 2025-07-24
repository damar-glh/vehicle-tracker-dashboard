import { useMemo } from 'react'
import type { Vehicle, VehicleStats } from '@/types/vehicle'

export const useVehicleStats = (vehicles: Vehicle[]): VehicleStats => {
  return useMemo(() => {
    const activeVehicles = vehicles.filter(v => v.status === 'ACTIVE')

    return {
      total: vehicles.length,
      active: activeVehicles.length,
      inactive: vehicles.filter(v => v.status === 'INACTIVE').length,
      maintenance: vehicles.filter(v => v.status === 'MAINTENANCE').length,
      avgSpeed:
        activeVehicles.length > 0
          ? Math.round(activeVehicles.reduce((sum, v) => sum + v.speed, 0) / activeVehicles.length)
          : 0,
    }
  }, [vehicles])
}
