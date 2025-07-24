export interface Vehicle {
  id: string
  name: string
  status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE'
  speed: number
  updated_at: string
}

export interface VehicleDetail {
  id: string
  name: string
  status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE'
  speed: number
  updated_at: string
  odometer?: number
  fuel_level?: number
  timestamp?: string
  latitude?: number
  longitude?: number
}

export interface VehicleStore {
  vehicles: Vehicle[]
  currentVehicle: VehicleDetail | null
  loading: boolean
  error: string | null
  fetchVehicles: () => Promise<void>
  fetchVehicleDetail: (id: string) => Promise<void>
  clearError: () => void
}

export interface VehicleStats {
  total: number
  active: number
  inactive: number
  maintenance: number
  avgSpeed: number
}

export interface FilterState {
  search: string
  statusFilter: string
  speedFilter: string
}

export interface PaginationState {
  currentPage: number
  totalPages: number
  itemsPerPage: number
}
