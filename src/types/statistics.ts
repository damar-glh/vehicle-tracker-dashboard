export interface VehicleStats {
  total: number
  active: number
  inactive: number
  maintenance: number
  avgSpeed: number
}

export interface StatisticProps {
  stats: VehicleStats
}
