import { useCallback, useMemo, useState, useEffect } from 'react'
import type { PaginationState } from '@/types/vehicle'

interface UsePaginationProps {
  totalItems: number
  itemsPerPage: number
  onPageChange?: (page: number) => void
}

export const usePagination = ({ totalItems, itemsPerPage, onPageChange }: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)

  const paginationState: PaginationState = useMemo(
    () => ({
      currentPage,
      totalPages: Math.ceil(totalItems / itemsPerPage),
      itemsPerPage,
    }),
    [currentPage, totalItems, itemsPerPage],
  )

  const { totalPages } = paginationState

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1)
    }
  }, [totalPages, currentPage])

  const goToPage = useCallback(
    (page: number) => {
      const newPage = Math.max(1, Math.min(page, totalPages))
      setCurrentPage(newPage)
      onPageChange?.(newPage)
    },
    [totalPages, onPageChange],
  )

  const goToPrevious = useCallback(() => {
    goToPage(currentPage - 1)
  }, [currentPage, goToPage])

  const goToNext = useCallback(() => {
    goToPage(currentPage + 1)
  }, [currentPage, goToPage])

  const getPageNumbers = useCallback(() => {
    const maxVisiblePages = 5
    const pages: number[] = []

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }, [currentPage, totalPages])

  const getPaginatedItems = useCallback(
    <T>(items: T[]) => {
      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      return items.slice(startIndex, endIndex)
    },
    [currentPage, itemsPerPage],
  )

  return {
    ...paginationState,
    goToPage,
    goToPrevious,
    goToNext,
    getPageNumbers,
    getPaginatedItems,
    canGoPrevious: currentPage > 1,
    canGoNext: currentPage < totalPages,
  }
}
