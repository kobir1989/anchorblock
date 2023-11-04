import Icon from './Icons/Icon'
import { useGetUsersListQuery } from '../redux/features/users/usersApi'
import { useState } from 'react'
import Pagination from './Pagination'
import Skeleton from './Skeleton'

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const {
    isError,
    isLoading,
    data: usersList
  } = useGetUsersListQuery(currentPage)

  // get total page from response
  const totalPages = usersList?.total_pages

  // handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // handle Prev page Pagination
  const handlePrevPagination = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  // handle next page Pagination
  const handleNextPagination = () => {
    if (totalPages && currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  // handle << button click (reset the page to 1)
  const handleFirstPagination = () => {
    if (currentPage > 1) {
      setCurrentPage(1)
    }
  }
  // handle >> button click (reset the page to total page)
  const handleLastPagination = () => {
    if (totalPages && currentPage < totalPages) {
      setCurrentPage(totalPages)
    }
  }

  return (
    <div>
      <table className='w-full'>
        {/* table head */}
        <thead className='bg-[#FAFBFC]'>
          <tr className='text-[#4E5D78] text-[0.75rem] font-[600]'>
            <th className='py-[0.95rem] px-[3rem] text-start'>#ID</th>
            <th className='py-[0.95rem] text-start'>USER</th>
            <th className='py-[0.95rem]  text-start'>EMAIL</th>
            <th className='py-[0.95rem]  text-start'>OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          {/* if data fetching successfull and not loading or not error then show data */}
          {!isError &&
            !isLoading &&
            usersList &&
            usersList?.data.map(user => (
              // table row
              <tr
                className='text-[#4E5D78] text-[0.87rem] font-[600]'
                key={user?.id}
              >
                <td className='py-2 px-[3rem] w-[4rem]'>{user?.id}</td>
                <td className='py-2 flex gap-[1.12rem] items-center'>
                  <div className='w-[60px] h-[60px]'>
                    <img
                      src={user?.avatar}
                      alt={user?.first_name}
                      className='w-full h-full rounded-[1rem] object-cover'
                    />
                  </div>{' '}
                  {user?.first_name + user?.last_name}
                </td>
                <td className='py-2'>{user?.email}</td>
                <td className='py-2 w-[3rem] flex items-end justify-end'>
                  <Icon name='moreOptionsIcon' />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* if Loading show loadin Skeleton  */}
      {!isError && isLoading && <Skeleton />}
      {/* if Error Happens  show error message */}
      {isError && (
        <p className='text-red-500 text-md text-center mt-6'>
          Something Went wrong Please Reload the page!
        </p>
      )}
      {/* if data fetching successfull then show pagination */}
      {!isError && !isLoading && (
        <div className='mt-[2.93rem]'>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages || 1}
            onPrev={handlePrevPagination}
            onNext={handleNextPagination}
            onFirst={handleFirstPagination}
            onLast={handleLastPagination}
          />
        </div>
      )}
    </div>
  )
}

export default Table
