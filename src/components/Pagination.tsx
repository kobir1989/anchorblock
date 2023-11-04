import { useState, useEffect } from 'react'
import Icon from './Icons/Icon'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange(_page: number): void
  onPrev(): void
  onNext(): void
  onBackward(): void
  onForward(): void
}
interface DisplayedPages {
  start: number
  end: number
}

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  onNext,
  onPrev,
  onBackward,
  onForward
}: PaginationProps) => {
  const paginationWindowCount = 2
  const [displayedPages, setDisplayedPages] = useState<DisplayedPages>({
    start: 1,
    end: paginationWindowCount + 1
  })

  useEffect(() => {
    const startPage = Math.max(currentPage - paginationWindowCount, 1)
    const endPage = Math.min(currentPage + paginationWindowCount, totalPages)
    setDisplayedPages({ start: startPage, end: endPage })
  }, [currentPage, totalPages])

  // crete array from total page.
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className='flex items-center gap-2'>
      {/* First and Previous buttons */}
      <div className='flex gap-2'>
        {currentPage > 1 && (
          <>
            <button className='paginate_button_style' onClick={onBackward}>
              <Icon name='firstIcon' />
            </button>
            <button className='paginate_button_style' onClick={onPrev}>
              <Icon name='prevIcon' />
            </button>
          </>
        )}
      </div>

      {/* Dots and first page if not in the first window */}
      {displayedPages.start > 1 && (
        <>
          <button
            className='paginate_button_style'
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          {displayedPages.start > 2 && (
            <span className='text-[#333333]'>...</span>
          )}
        </>
      )}

      {/* Page numbers */}
      {pageNumbers
        .slice(displayedPages.start - 1, displayedPages.end)
        .map(number => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`paginate_button_style ${
              currentPage === number ? 'bg-[#2F80ED] text-white' : ''
            }`}
          >
            {number}
          </button>
        ))}

      {/* Dots and last page if not in the last window */}
      {displayedPages.end < totalPages && (
        <>
          <span className='text-[#333333]'>...</span>
          <button
            className='paginate_button_style'
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next and Last buttons */}
      <div className='flex gap-2'>
        {currentPage < totalPages && (
          <>
            <button className='paginate_button_style' onClick={onNext}>
              <Icon name='nextIcon' />
            </button>
            <button className='paginate_button_style' onClick={onForward}>
              <Icon name='lastIcon' />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Pagination
