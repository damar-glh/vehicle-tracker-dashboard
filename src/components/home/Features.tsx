import { features } from '@/components/home/feature'
import { Card, CardContent } from '@/components/ui/card'

export default function Features() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <Card key={index} className="border-border">
          <CardContent className="p-10 text-center">
            <div className="bg-primary/10 mx-auto mb-6 w-fit rounded-lg p-10">
              <feature.icon className="text-primary h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg font-bold">{feature.title}</h3>
            <p className="text-muted-foreground mx-auto max-w-10/12">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
