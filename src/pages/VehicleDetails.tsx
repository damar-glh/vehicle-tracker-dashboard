import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useVehicleStore } from '@/store/vehicle-store'
import VehicleHeader from '@/components/vehicle-details/VehicleHeader'
import VehicleLoadingState from '@/components/vehicle-details/VehicleLoadingState'
import VehicleErrorState from '@/components/vehicle-details/VehicleErrorState'
import LocationSection from '@/components/vehicle-details/LocationSection'
import VehicleInfoSection from '@/components/vehicle-details/VehicleInfoSection'
import TelemetrySection from '@/components/vehicle-details/TelemetrySection'

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { currentVehicle, loading, fetchVehicleDetail } = useVehicleStore()

  useEffect(() => {
    if (id) {
      fetchVehicleDetail(id)
    }
  }, [id, fetchVehicleDetail])

  const handleBackToDashboard = () => {
    navigate('/vehicles', { replace: true })
  }

  if (loading) {
    return <VehicleLoadingState />
  }

  if (!currentVehicle) {
    return <VehicleErrorState onBackClick={handleBackToDashboard} />
  }

  return (
    <div className="bg-background text-text flex min-h-screen w-full flex-col items-start justify-center py-24">
      <VehicleHeader
        vehicleId={currentVehicle.id}
        onBackClick={handleBackToDashboard}
        name={currentVehicle.name}
      />
      <div className="container mx-auto flex flex-col gap-6 space-y-6 p-6">
        <LocationSection
          latitude={currentVehicle.latitude}
          longitude={currentVehicle.longitude}
          timestamp={currentVehicle.timestamp}
        />
        <VehicleInfoSection vehicleId={currentVehicle.id} speed={currentVehicle.speed} />
        <TelemetrySection
          fuelLevel={currentVehicle.fuel_level}
          odometer={currentVehicle.odometer}
          timestamp={currentVehicle.timestamp}
        />
      </div>
    </div>
  )
}

export default VehicleDetail
