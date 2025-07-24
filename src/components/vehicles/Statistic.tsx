import StatisticCard from '@/components/vehicles/StatisticCard'
import type { StatisticProps } from '@/types/statistics'

const statisticConfig = [
  {
    title: 'Total Vehiclesc',
    value: (stats: StatisticProps['stats']) => stats.total,
    icon: 'car' as const,
  },
  {
    title: 'Active Vehicles',
    value: (stats: StatisticProps['stats']) => stats.active,
    icon: 'users' as const,
  },
  {
    title: 'Inactive Vehicles',
    value: (stats: StatisticProps['stats']) => stats.inactive,
    icon: 'mappin' as const,
  },
  {
    title: 'Maintenance',
    value: (stats: StatisticProps['stats']) => stats.maintenance,
    icon: 'wrench' as const,
  },
  {
    title: 'Average Speed',
    value: (stats: StatisticProps['stats']) => `${stats.avgSpeed} km/h`,
    icon: 'barchart3' as const,
  },
]

export default function Statistic({ stats }: StatisticProps) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {statisticConfig.map((stat, index) => (
        <StatisticCard key={index} title={stat.title} value={stat.value(stats)} icon={stat.icon} />
      ))}
    </div>
  )
}
