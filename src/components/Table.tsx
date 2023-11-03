import Icon from './Icons/Icon'
import avater from '../assets/Rectangle 17.png'

const Table = () => {
  return (
    <table className='w-full'>
      <thead className='bg-[#FAFBFC]'>
        <tr className='text-[#4E5D78] text-[0.75rem] font-[600]'>
          <th className='py-[0.95rem] px-[3rem] text-start'>#ID</th>
          <th className='py-[0.95rem] text-start'>USER</th>
          <th className='py-[0.95rem]  text-start'>EMAIL</th>
          <th className='py-[0.95rem]  text-start'>OPTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-[#4E5D78] text-[0.87rem] font-[600]'>
          <td className='py-2 px-[3rem]'>1</td>
          <td className='py-2 flex gap-[1.12rem] items-center'>
            <img
              src={avater}
              alt='user'
              width={60}
              height={60}
              className='rounded-[1rem]'
            />{' '}
            Kabir Hossain
          </td>
          <td className='py-2'>kobir.h.ritu@gmail.com</td>
          <td className='py-2'>
            <Icon name='moreOptionsIcon' />
          </td>
        </tr>
        <tr className='text-[#4E5D78] text-[0.87rem] font-[600]'>
          <td className='py-2 px-[3rem]'>1</td>
          <td className='py-2 flex gap-[1.12rem] items-center'>
            <img
              src={avater}
              alt='user'
              width={60}
              height={60}
              className='rounded-[1rem]'
            />{' '}
            Kabir Hossain
          </td>
          <td className='py-2'>kobir.h.ritu@gmail.com</td>
          <td className='py-2'>
            <Icon name='moreOptionsIcon' />
          </td>
        </tr>
        <tr className='text-[#4E5D78] text-[0.87rem] font-[600]'>
          <td className='py-2 px-[3rem]'>1</td>
          <td className='py-2 flex gap-[1.12rem] items-center'>
            <img
              src={avater}
              alt='user'
              width={60}
              height={60}
              className='rounded-[1rem]'
            />{' '}
            Kabir Hossain
          </td>
          <td className='py-2'>kobir.h.ritu@gmail.com</td>
          <td className='py-2'>
            <Icon name='moreOptionsIcon' />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
