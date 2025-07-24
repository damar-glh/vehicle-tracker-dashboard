import { CarFront } from 'lucide-react'

export default function Logos({ webName }: { webName: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary/10 rounded-lg p-2">
        <CarFront className="text-primary h-6 w-6" />
      </div>
      <span className="text-foreground text-xl font-bold">{webName}</span>
    </div>
  )
}
