import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, CarFront, MapPin, Users, Wrench } from 'lucide-react'
import { colorMap } from '@/components/vehicles/color'

interface StatisticCardProps {
  title: string
  value: number | string
  icon: 'users' | 'car' | 'barchart3' | 'mappin' | 'wrench'
}

const iconMap = {
  users: Users,
  car: CarFront,
  barchart3: BarChart3,
  mappin: MapPin,
  wrench: Wrench,
}

const StatisticCard = ({ title, value, icon }: StatisticCardProps) => {
  const IconComponent = iconMap[icon]
  const colors = colorMap.default

  return (
    <Card className="bg-background shadow-sm transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-text text-sm font-medium md:text-base">{title}</CardTitle>
        <div className={`flex items-center justify-center rounded-full p-3 ${colors.bg}`}>
          <IconComponent className={`h-5 w-5 ${colors.icon}`} />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className={`text-2xl font-bold ${colors.text} md:text-4xl`}>{value}</div>
      </CardContent>
    </Card>
  )
}

export default StatisticCard
