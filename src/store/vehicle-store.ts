import { create } from 'zustand/react'
import { fetchVehicles, fetchVehicleDetail } from '@/services/api'
import type { Vehicle, VehicleDetail, VehicleStore } from '@/types/vehicle'

export const useVehicleStore = create<VehicleStore>(set => ({
  vehicles: [],
  currentVehicle: null,
  loading: false,
  error: null,

  fetchVehicles: async () => {
    set({ loading: true, error: null })
    try {
      const apiVehicles = await fetchVehicles()
      const vehicles: Vehicle[] = apiVehicles.map(v => ({
        id: v.id,
        name: v.name,
        status: v.status,
        speed: v.speed,
        updated_at: v.updated_at,
      }))
      set({ vehicles, loading: false })
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch vehicles',
        loading: false,
      })
    }
  },

  fetchVehicleDetail: async (id: string) => {
    set({ loading: true, error: null })
    try {
      const apiDetail = await fetchVehicleDetail(id)
      console.log(apiDetail)
      const vehicleDetail: VehicleDetail = {
        id: apiDetail.id,
        name: apiDetail.name,
        odometer: apiDetail.odometer,
        fuel_level: apiDetail.fuel_level,
        timestamp: apiDetail.timestamp,
        latitude: apiDetail.latitude,
        longitude: apiDetail.longitude,
        speed: apiDetail.speed,
      }
      console.log(vehicleDetail)
      set({ currentVehicle: vehicleDetail, loading: false })
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch vehicle details',
        loading: false,
      })
    }
  },

  clearError: () => set({ error: null }),
}))
