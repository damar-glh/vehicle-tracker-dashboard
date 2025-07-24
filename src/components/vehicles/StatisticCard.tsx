import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface CardProps {
  stats: []
}

const Card = ({ stats }: CardProps) => {
  return (
    <Card className="border-border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
        <Users className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stats.total}</div>
      </CardContent>
    </Card>
  )
}

export default Card
