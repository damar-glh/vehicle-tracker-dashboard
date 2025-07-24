import { Filter, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

interface FiltersProps {
  search: string
  onSearchChange: (value: string) => void
  statusFilter: string
  onStatusFilterChange: (value: string) => void
  speedFilter: string
  onSpeedFilterChange: (value: string) => void
  onResetFilters: () => void
}

const Filters = ({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  speedFilter,
  onSpeedFilterChange,
  onResetFilters,
}: FiltersProps) => {
  const hasActiveFilters = statusFilter || speedFilter || search

  return (
    <div className="mb-6 flex flex-col items-start gap-4 md:flex-row md:items-center">
      <div className="relative max-w-md">
        <Search className="text-text/60 dark:text-background/60 absolute top-3 left-3 h-4 w-4" />
        <Input
          placeholder="Search vehicles..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          className="bg-background border-secondary/40 dark:bg-text/5 text-text dark:text-background pl-10"
        />
      </div>

      <div className="flex items-center gap-2">
        <Filter className="text-primary h-4 w-4" />
        <span className="text-text dark:text-background text-sm font-medium">Filters:</span>
      </div>

      <Select value={statusFilter} onValueChange={onStatusFilterChange}>
        <SelectTrigger className="bg-background border-secondary/40 dark:bg-text/5 text-text dark:text-background w-40">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent className="bg-background border-secondary/40 dark:bg-text/5">
          <SelectItem value="ACTIVE" className="text-text dark:text-background">
            Active
          </SelectItem>
          <SelectItem value="INACTIVE" className="text-text dark:text-background">
            Inactive
          </SelectItem>
          <SelectItem value="MAINTENANCE" className="text-text dark:text-background">
            Maintenance
          </SelectItem>
        </SelectContent>
      </Select>

      <Select value={speedFilter} onValueChange={onSpeedFilterChange}>
        <SelectTrigger className="bg-background border-secondary/40 dark:bg-text/5 text-text dark:text-background w-40">
          <SelectValue placeholder="Speed Range" />
        </SelectTrigger>
        <SelectContent className="bg-background border-secondary/40 dark:bg-text/5">
          <SelectItem value="0-30" className="text-text dark:text-background">
            0-30 km/h
          </SelectItem>
          <SelectItem value="31-60" className="text-text dark:text-background">
            31-60 km/h
          </SelectItem>
          <SelectItem value="61-90" className="text-text dark:text-background">
            61-90 km/h
          </SelectItem>
          <SelectItem value="90+" className="text-text dark:text-background">
            90+ km/h
          </SelectItem>
        </SelectContent>
      </Select>

      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={onResetFilters}
          className="text-text/60 dark:text-background/60 border-secondary/40 hover:bg-secondary/20">
          Clear Filters
        </Button>
      )}
    </div>
  )
}

export default Filters
