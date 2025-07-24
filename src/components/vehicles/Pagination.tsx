import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onPrevious: () => void
  onNext: () => void
  getPageNumbers: () => number[]
  canGoPrevious: boolean
  canGoNext: boolean
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onPrevious,
  onNext,
  getPageNumbers,
  canGoPrevious,
  canGoNext,
}: PaginationProps) => {
  if (totalPages <= 1) return null

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="border-secondary text-text hover:bg-secondary disabled:opacity-50">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <div className="flex items-center gap-1">
          {getPageNumbers().map(pageNum => (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? 'default' : 'outline'}
              size="sm"
              onClick={() => onPageChange(pageNum)}
              className={
                currentPage === pageNum
                  ? 'bg-primary text-background hover:bg-primary'
                  : 'border-secondary text-text hover:bg-secondary'
              }>
              {pageNum}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onNext}
          disabled={!canGoNext}
          className="border-secondary text-text hover:bg-secondary disabled:opacity-50">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default Pagination
