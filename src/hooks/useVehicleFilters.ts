import { useCallback, useMemo, useState } from 'react'
import type { Vehicle, FilterState } from '@/types/vehicle'

export const useVehicleFilters = (vehicles: Vehicle[]) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    statusFilter: '',
    speedFilter: '',
  })

  const filterBySpeed = useCallback((vehicle: Vehicle, range: string): boolean => {
    const speed = vehicle.speed
    switch (range) {
      case '0-30':
        return speed >= 0 && speed <= 30
      case '31-60':
        return speed >= 31 && speed <= 60
      case '61-90':
        return speed >= 61 && speed <= 90
      case '90+':
        return speed > 90
      default:
        return true
    }
  }, [])

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      const matchesSearch = vehicle.name.toLowerCase().includes(filters.search.toLowerCase())
      const matchesStatus = !filters.statusFilter || vehicle.status === filters.statusFilter
      const matchesSpeed = !filters.speedFilter || filterBySpeed(vehicle, filters.speedFilter)

      return matchesSearch && matchesStatus && matchesSpeed
    })
  }, [vehicles, filters, filterBySpeed])

  const updateFilter = useCallback((key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilters({
      search: '',
      statusFilter: '',
      speedFilter: '',
    })
  }, [])

  const hasActiveFilters = useMemo(() => {
    return Boolean(filters.search || filters.statusFilter || filters.speedFilter)
  }, [filters])

  return {
    filters,
    filteredVehicles,
    updateFilter,
    resetFilters,
    hasActiveFilters,
  }
}
