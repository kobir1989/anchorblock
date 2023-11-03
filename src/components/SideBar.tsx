import Icon from './Icons/Icon'
import { sidebarLinks } from '../constants/sidebarLinks'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside className='p-4 lg:border-r lg:border-[#F3F3F3]'>
      {/* logo */}
      <div className=' ml-[1.2rem] flex gap-2 items-center mb-[2.62rem] mt-[1.19rem]'>
        <Icon name='brandLogo' />{' '}
        <h2 className='text-[#4E5D78] text-[1.75rem] font-[700]'>Stack</h2>
      </div>
      <span className='ml-[1.2rem] text-[#4E5D78] text-[0.75rem] tracking-[0.6px] font-[500]'>
        PAGES
      </span>
      {/* links */}
      <ul className='flex flex-col gap-[1.5rem] mt-[1.75rem]'>
        {sidebarLinks.map(link => (
          <NavLink
            to={link?.linkTo}
            className={({ isActive }) => (isActive ? 'active_link' : '')}
          >
            <li
              key={link?.id}
              className='p-[1rem]  flex gap-[1rem] items-center text-[#A7AFBC] text-[0.87rem] font-[500]'
            >
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
