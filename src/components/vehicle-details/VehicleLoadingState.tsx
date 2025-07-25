import { LoadingSpinner } from '@/components/vehicles/LoadingSpinner'

const VehicleLoadingState = () => {
  return (
    <div className="bg-background text-text flex min-h-screen w-full flex-col items-start justify-center py-24">
      <div className="space-y-4 text-center">
        <LoadingSpinner size="lg" />
        <p className="text-muted-foreground">Loading vehicle details...</p>
      </div>
    </div>
  )
}

export default VehicleLoadingState
