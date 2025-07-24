import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Features from '@/components/home/Features'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <section className="flex min-h-screen w-full flex-col items-start justify-center">
        <div className="container mx-auto flex flex-col gap-6 text-center">
          <h1 className="text-4xl font-bold md:text-7xl">Vehicle Tracking System</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-xl">
            Monitor, track and manage your entire fleet with real-time telemetry data, advanced
            analytics and comprehensive reporting tools.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Button
              onClick={() => navigate('/vehicles')}
              size="lg"
              className="cursor-pointer px-8 py-6 text-base">
              View Vehicles
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer px-8 py-6 text-base"
              onClick={() =>
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
              }>
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="flex min-h-screen w-full flex-col items-start justify-center">
        <div className="container mx-auto flex flex-col gap-6 text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-5xl">Powerful Features</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-xl">
            Everything you need to efficiently monitor and manage your vehicle fleet.
          </p>
          <Features />
        </div>
      </section>
      <section className="flex h-[50vh] w-full flex-col items-start justify-center">
        <div className="container mx-auto">
          <Card className="bg-primary text-primary-foreground shadow-lg">
            <CardContent className="flex flex-col gap-6 p-10 text-center">
              <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-5xl">
                Ready to Start Tracking?
              </h2>
              <p className="mx-auto max-w-2xl text-base md:text-xl">
                Get instant access to our powerful vehicle tracking dashboard and start monitoring
                your fleet today.
              </p>
              <Button
                onClick={() => navigate('/vehicles')}
                size="default"
                variant="secondary"
                className="mx-auto w-fit cursor-pointer px-8 py-6 text-lg">
                View Vehicles
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
