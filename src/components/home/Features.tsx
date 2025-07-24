import {features} from '@/components/Home/feature'
import { Card, CardContent } from '@/components/ui/card'

export default function Features() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="border-border transform transition-all duration-200 hover:scale-105 hover:shadow-md">
          <CardContent className="p-6 text-center">
            <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-lg p-3">
              <feature.icon className="text-primary h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
