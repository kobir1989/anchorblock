import Icon from './Icons/Icon'
import avater from '../assets/Rectangle 17.png'

const Nav = () => {
  return (
    <nav className='flex justify-between py-[1.5rem] w-full gap-4 items-center'>
      <div className='relative w-[539px]'>
        <input
          className='text bg-[#F0F5FA] text-[#B0B7C3] px-[1.5rem] py-[1.12rem] rounded-[1rem] text-[0.87rem] w-full focus:outline-none focus:border-sky-[#cbdbfa] focus:ring-1'
          placeholder='Search'
        />
        <span className='absolute top-1/2 right-6 -translate-y-1/2'>
          <Icon name='searchIcon' />
        </span>
      </div>
      <div className='flex items-center gap-[2.68rem]'>
        <Icon name='bellIcon' />
        <div className='rounded-full w-[47px] h-[47px]'>
          <img
            src={avater}
            alt='user'
            className='rounded-full object-cover'
            width={47}
            height={47}
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav
