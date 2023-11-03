import Nav from '../components/Nav'
import SideBar from '../components/SideBar'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className='grid grid-cols-12 gap-[2.37rem] max-w-[1280px] m-auto px-[1.8rem]'>
      <aside className=' bg-white top-[6.5rem]  w-[15rem] col-span-3'>
        <SideBar />
      </aside>
      <section className='col-span-9 w-full'>
        <Nav />
        {children}
      </section>
    </main>
  )
}

export default MainLayout
