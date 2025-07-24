const Vehicles = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-center">
      <div className="container mx-auto flex flex-col gap-6">
        <h1 className="text-2xl font-bold md:text-4xl">Vehicle Tracker Dashboard</h1>
        <p className="text-muted-foreground text-base md:text-xl max-w-4xl">
          Monitor, track and manage your entire fleet with real-time telemetry data, advanced
          analytics and comprehensive reporting tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatisticCard />
        </div>
      </div>
    </section>
  )
}

export default Vehicles
