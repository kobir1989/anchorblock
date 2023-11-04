import Table from '../components/Table'
import MainLayout from '../layoutes/MainLayout'

const Users = () => {
  return (
    <MainLayout>
      <div className='pt-[2.5rem] w-full'>
        <h1 className='text-[1.43rem] font-[600] text-[#323B4B]'>Users List</h1>
        {/* users List table */}
        <div className='mt-[2.62rem] md:overflow-x-hidden overflow-x-scroll'>
          <Table />
        </div>
      </div>
    </MainLayout>
  )
}

export default Users
