import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import { ChildrenType } from '../types/globalTypes'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { closeSidebar } from '../redux/features/sidebar/sidebarSlice'

const MainLayout = ({ children }: ChildrenType) => {
  const { showSidebar } = useSelector((state: RootState) => state.sidebar)
  const dispatch = useDispatch()

  return (
    <main className='relative lg:grid lg:grid-cols-12 gap-[2.37rem] max-w-[1280px] m-auto px-[1.8rem] overflow-hidden h-[100vh]'>
      {/* side bar */}
      <aside className='hidden lg:grid  bg-white top-[6.5rem] w-[15rem] col-span-3'>
        <SideBar />
      </aside>
      <section className='col-span-9 w-full'>
        {/* navigation */}
        <Nav />
        {/* page Contents */}
        {children}
      </section>
      {/* sidebar drawer for small screen */}
      <aside
        className={`lg:hidden absolute top-0 left-0 bg-[#242424c4] z-[50] w-[100vw] transition-all duration-200 ease-in h-[100vh] ${
          showSidebar ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => dispatch(closeSidebar())}
      >
        <div
          className={`w-[15rem] ${
            showSidebar
              ? 'visible translate-x-[0]'
              : 'invisible -translate-x-[15rem]'
          } transition-all duration-200 ease-in`}
        >
          <SideBar />
        </div>
      </aside>
    </main>
  )
}

export default MainLayout
