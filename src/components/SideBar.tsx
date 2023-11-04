import Icon from './Icons/Icon'
import { sidebarLinks } from '../constants/sidebarLinks'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside className='p-4 border-r border-[#F3F3F3] h-[100vh] bg-white'>
      {/* logo */}
      <div className=' ml-[1.2rem] flex gap-2 items-center mb-[1.9rem] mt-[1.19rem]'>
        <Icon name='brandLogo' />{' '}
        <h2 className='text-[#4E5D78] text-[1.75rem] font-[700]'>Stack</h2>
      </div>
      <span className='ml-[1.2rem] text-[#B0B7C3] text-[0.75rem] tracking-[0.6px] font-[500]'>
        PAGES
      </span>
      {/* links */}
      <ul className='flex flex-col gap-[1.5rem] mt-[0.8rem]'>
        {sidebarLinks.map(link => (
          <NavLink
            to={link?.linkTo}
            className={({ isActive }) => (isActive ? 'active_link' : '')}
            key={link?.id}
          >
            <li className='p-[1rem]  flex gap-[1rem] items-center text-[#A7AFBC] text-[0.87rem] font-[500]'>
              <span>
                <Icon name={link?.iconName} />
              </span>
              {link?.lebel}
            </li>
          </NavLink>
        ))}
      </ul>
    </aside>
  )
}

export default SideBar
