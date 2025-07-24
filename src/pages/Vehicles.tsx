import { useEffect } from 'react'
import Statistic from '@/components/vehicles/Statistic'
import Filters from '@/components/vehicles/Filters'
import Pagination from '@/components/vehicles/Pagination'
import { useVehicleStore } from '@/store/vehicle-store'
import { LoadingSpinner } from '@/components/vehicles/LoadingSpinner'
import { VehicleCard } from '@/components/vehicles/VehicleCard'
import { Card, CardContent } from '@/components/ui/card'
import { CalendarDays, Car } from 'lucide-react'
import { useVehicleFilters } from '@/hooks/useVehicleFilters'
import { usePagination } from '@/hooks/usePagination'
import { useVehicleStats } from '@/hooks/useVehicleStats'
import { ITEMS_PER_PAGE } from '@/constants.ts'

const Vehicles = () => {
  const { fetchVehicles, vehicles, loading } = useVehicleStore()
  const { filters, filteredVehicles, updateFilter, resetFilters, hasActiveFilters } =
    useVehicleFilters(vehicles)
  const stats = useVehicleStats(vehicles)
  const pagination = usePagination({
    totalItems: filteredVehicles.length,
    itemsPerPage: ITEMS_PER_PAGE,
  })
  const paginatedVehicles = pagination.getPaginatedItems(filteredVehicles)
  useEffect(() => {
    fetchVehicles()
  }, [fetchVehicles])
  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    updateFilter(key, value)
  }
  const handleResetFilters = () => {
    resetFilters()
    pagination.goToPage(1)
  }

  return (
    <section className="bg-background text-text flex min-h-screen w-full flex-col items-start justify-center">
      <div className="container mx-auto flex flex-col gap-6">
        <div className="flex w-full items-start justify-between gap-4">
          <div className="flex flex-col gap-6">
            <h1 className="text-text text-2xl font-bold md:text-4xl">Vehicle Tracker Dashboard</h1>
            <p className="text-text max-w-4xl text-base md:text-xl">
              Monitor, track and manage your entire fleet with real-time telemetry data, advanced
              analytics and comprehensive reporting tools.
            </p>
          </div>
          <div className="bg-primary hidden items-center justify-center gap-2 rounded-full border p-4 md:flex">
            <CalendarDays className="text-primary h-6 w-6" />
            <p className="text-text text-base font-semibold">
              {new Date().toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
        <Statistic stats={stats} />
        <Filters
          search={filters.search}
          onSearchChange={value => handleFilterChange('search', value)}
          statusFilter={filters.statusFilter}
          onStatusFilterChange={value => handleFilterChange('statusFilter', value)}
          speedFilter={filters.speedFilter}
          onSpeedFilterChange={value => handleFilterChange('speedFilter', value)}
          onResetFilters={handleResetFilters}
        />
        {hasActiveFilters && (
          <div className="text-text text-sm">
            Showing {filteredVehicles.length} of {vehicles.length} vehicles
          </div>
        )}
        {loading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={pagination.goToPage}
              onPrevious={pagination.goToPrevious}
              onNext={pagination.goToNext}
              getPageNumbers={pagination.getPageNumbers}
              canGoPrevious={pagination.canGoPrevious}
              canGoNext={pagination.canGoNext}
            />
            {filteredVehicles.length === 0 && (
              <Card className="border-secondary bg-background shadow-sm">
                <CardContent className="p-12 text-center">
                  <Car className="text-text mx-auto mb-4 h-12 w-12" />
                  <h3 className="text-text mb-2 text-lg font-semibold">No vehicles found</h3>
                  <p className="text-text">
                    {hasActiveFilters
                      ? 'Try adjusting your search terms or filters'
                      : 'No vehicles available'}
                  </p>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Vehicles
