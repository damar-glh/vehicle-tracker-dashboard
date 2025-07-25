import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Navigation, Clock, Map } from 'lucide-react'
import { colorMap } from '@/components/vehicles/color'
import { formatDistanceToNow } from 'date-fns'

interface LocationSectionProps {
  latitude: number
  longitude: number
  timestamp: string
}

const LocationSection = ({ latitude, longitude, timestamp }: LocationSectionProps) => {
  const handleNavigateToLocation = () => {
    window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank')
  }
  const handleCopyCoordinates = () => {
    navigator.clipboard.writeText(`${latitude}, ${longitude}`)
  }
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="bg-background transform p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Map className={`h-5 w-5 ${colorMap.info.icon}`} />
              Live Location
            </div>
            <div className={`rounded-full px-3 py-1 text-xs font-medium ${colorMap.success.bg}`}>
              <span className={colorMap.success.text}>GPS Active</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative h-96">
            <div
              className={`h-full w-full ${colorMap.success.bg} flex items-center justify-center rounded-lg`}>
              <div className="space-y-4 text-center">
                <MapPin className="text-primary mx-auto h-12 w-12" />
                <div className="space-y-2">
                  <p className="text-lg font-bold md:text-2xl">Interactive Map</p>
                  <p className="text-primary text-sm font-medium">Lat: {latitude}</p>
                  <p className="text-primary text-sm font-medium">Lng: {longitude}</p>
                </div>
                <Button variant="outline" size="default" onClick={handleNavigateToLocation}>
                  <Navigation className="mr-2 h-4 w-4" />
                  Open in Maps
                </Button>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-center text-base">
            This map shows the real-time location of the vehicle. Click the button above to open it
            in Google Maps.
          </p>
        </CardContent>
      </Card>
      <Card className="bg-background transform p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className={`h-5 w-5 ${colorMap.info.icon}`} />
            GPS Coordinates & Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className={`rounded-xl p-5 ${colorMap.info.bg}`}>
              <p className="text-primary mb-2 text-sm font-medium">Latitude</p>
              <p className="text-lg font-bold md:text-2xl">{latitude}</p>
            </div>
            <div className={`rounded-xl p-5 ${colorMap.info.bg}`}>
              <p className="text-primary mb-2 text-sm font-medium">Longitude</p>
              <p className="text-lg font-bold md:text-2xl">{longitude}</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button variant="default" className="h-12 w-full" onClick={handleNavigateToLocation}>
              <Navigation className="mr-2 h-5 w-5" />
              Navigate to Location
            </Button>
            <Button variant="outline" className="h-12 w-full" onClick={handleCopyCoordinates}>
              <MapPin className="mr-2 h-5 w-5" />
              Copy Coordinates
            </Button>
          </div>
          <div className={`rounded-xl p-4 ${colorMap.success.bg} text-center`}>
            <div className="mb-2 flex items-center justify-center gap-2">
              <Clock className={`h-4 w-4 ${colorMap.info.icon}`} />
              <span className="text-primary text-sm font-medium">Last Updated</span>
            </div>
            <p className="text-lg font-bold md:text-2xl">
              {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
            </p>
            <p className="text-muted-foreground mt-2 text-base">
              {new Date(timestamp).toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LocationSection
