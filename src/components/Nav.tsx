import Icon from './Icons/Icon'
import avater from '../assets/Rectangle 17.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/features/auth/authSlice'
import { openSidebar } from '../redux/features/sidebar/sidebarSlice'

const Nav = () => {
  const [isDropdown, setIsDropdown] = useState(false)
  const dispatch = useDispatch()

  // dropdown handler
  const toggleDropdown = () => {
    setIsDropdown(prev => !prev)
  }
  // handle logout
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className='flex justify-between py-[1.5rem] w-full gap-4 items-center'>
      {/* menu bbutton hidden on big screen */}
      <button
        className='lg:hidden text-[3rem] text-[#B0B7C3]'
        onClick={() => dispatch(openSidebar())}
      >
        <Icon name='menuIcon' />
      </button>
      {/* search input */}
      <div className='relative w-[539px]'>
        <input
          className='text bg-[#F0F5FA] text-[#B0B7C3] px-[1.5rem] py-[0.8rem] md:py-[1.12rem] rounded-[1rem] text-[0.87rem] w-full focus:outline-none focus:border-sky-[#cbdbfa] focus:ring-1'
          placeholder='Search'
        />
        <span className='absolute top-1/2 right-6 -translate-y-1/2'>
          <Icon name='searchIcon' />
        </span>
      </div>
      {/* bell icon and avatar */}
      <div className='relative flex items-center gap-6 md:gap-[2.68rem]'>
        <Icon name='bellIcon' />
        <div
          className=' rounded-full w-[47px] h-[47px] cursor-pointer'
          onClick={toggleDropdown}
        >
          <img
            src={avater}
            alt='user'
            className='rounded-full object-cover'
            width={47}
            height={47}
          />
        </div>
        {/* dropdown  (*dropdown wasn't on the design but i want to test the logout so i added it)*/}
        <ul
          className={`flex flex-col gap-6 text-[#333] text-[1rem] absolute -bottom-16 bg-white rounded-md w-[8rem] shadow-lg px-6 py-4 z-[100] transform-all duration-300 ease-out  ${
            isDropdown ? 'visible opacity-100' : 'opacity-0 invisible'
          }`}
        >
          <li onClick={handleLogout} className='cursor-pointer'>
            Logout
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
