import { useState } from 'react'
import Icon from './Icons/Icon'

//Input Props type
interface InputProps {
  placeholder: string
  value: string
  onChange(_e: React.ChangeEvent<HTMLInputElement>): void
  type: string
  iconName: string
  errorMessage?: string | null
  name: string
}

const Input = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  iconName = 'emailIcon',
  errorMessage,
  name
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // onClicks to the eye icon password type will be text.
  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }
  return (
    <div>
      <div className='relative transition-all duration-300 ease'>
        <input
          className='focus:outline-none focus:border-sky-[#cbdbfa] focus:ring-1 focus:ring-sky-500 w-full relative rounded-[1rem] bg-white px-[3.18rem] py-[1rem] lg:py-[1.25rem] border border-[#F3F3F3]'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={showPassword ? 'text' : type}
          name={name}
        />
        {/* input Icon */}
        <span className='absolute top-1/2 left-[1.2rem] -translate-y-[50%]'>
          <Icon name={iconName} />
        </span>
        {/* eye icon for input type password */}
        {type === 'password' && (
          <span
            className='absolute top-1/2 right-[1.2rem] -translate-y-[50%] cursor-pointer z-10'
            onClick={togglePassword}
          >
            <Icon name={showPassword ? 'eyeCross' : 'eyeIcon'} />
          </span>
        )}
      </div>
      {/* Error Message */}
      <span
        className={`${
          errorMessage !== '' ? 'visible mt-[1rem]' : 'invisible'
        } block tracking-[0.2px] text-[#FF5630] text-sm  transition-all duration-300 ease-in-out`}
      >
        {errorMessage}
      </span>
    </div>
  )
}

export default Input
