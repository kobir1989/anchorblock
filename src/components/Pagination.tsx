import Icon from './Icons/Icon'

interface PaginationProps {
  totalPages: number
  currentPage: number
  // eslint-disable-next-line no-unused-vars
  onPageChange(page: number): void
  onPrev(): void
  onNext(): void
  onFirst(): void
  onLast(): void
}

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  onNext,
  onPrev,
  onFirst,
  onLast
}: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber)
    console.log(pageNumber)
  }
  return (
    <div className='flex items-center gap-2'>
      {/* First and Previous buttons */}
      <div className='flex gap-2'>
        {currentPage > 1 && (
          <>
            <button className='paginate_button_style' onClick={onFirst}>
              <Icon name='firstIcon' />
            </button>
            <button className='paginate_button_style' onClick={onPrev}>
              <Icon name='prevIcon' />
            </button>
          </>
        )}
      </div>
      {/* Page numbers */}
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`paginate_button_style ${
            currentPage === number ? 'bg-[#2F80ED] text-white' : ''
          }`}
        >
          {number}
        </button>
      ))}

      {/* Next and Last buttons */}
      <div className='flex gap-2'>
        {totalPages > currentPage && (
          <>
            <button className='paginate_button_style' onClick={onNext}>
              <Icon name='nextIcon' />
            </button>
            <button className='paginate_button_style' onClick={onLast}>
              <Icon name='lastIcon' />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Pagination
