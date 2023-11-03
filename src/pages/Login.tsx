import { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import AuthPageLayout from '../layoutes/AuthPageLayout'
import { LoginInput, LoginError } from '../types/globalTypes'
import { isStrongPassword, validateEmail } from '../utils/inputValidators'

const defaultValue = {
  email: '',
  password: '',
  remeberPassword: false
}
const Login = () => {
  const [loginValue, setLoginValue] = useState<LoginInput>(defaultValue)
  const [error, setError] = useState<LoginError>({
    email: '',
    password: ''
  })

  //onChange handler
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    // check if the input type is checkbox
    const newValue = type === 'checkbox' ? checked : value
    setLoginValue({ ...loginValue, [name]: newValue })
    if (e.target.value !== '') {
      setError({ email: '', password: '' })
    }
  }

  // Login Submit Form handler
  const handleLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateEmail(loginValue.email)) {
      setError(prev => ({
        ...prev,
        email: 'Invalid credentials'
      }))
    }
    if (!isStrongPassword(loginValue.password)) {
      setError(prev => ({
        ...prev,
        password: 'Invalid credentials'
      }))
    }
    // Check if there are any error in the errors object.
    const hasError =
      Object.values(error).some(err => err !== '') ||
      Object.values(loginValue).some(val => val === '')
    // Submit if aren't any error
    if (!hasError) {
      console.log(loginValue)
    }
  }

  return (
    <AuthPageLayout
      subTitle={'Welcome back, you’ve been missed!'}
      title={'Sign in'}
      googleBtnLebel='Sign In with Google'
      appleBtnLebel='Sign In with Apple ID'
    >
      <form
        className='flex flex-col gap-[1.2rem] mt-[1.2rem] lg:mt-[1.87rem]'
        onSubmit={handleLoginFormSubmit}
      >
        <Input
          name='email'
          type='email'
          iconName='emailIcon'
          placeholder='Your Email'
          value={loginValue.email}
          onChange={inputChangeHandler}
          errorMessage={error.email}
        />
        <Input
          name='password'
          type='password'
          iconName='lockIcon'
          placeholder='Password'
          value={loginValue.password}
          onChange={inputChangeHandler}
          errorMessage={error.password}
        />
        <div className='flex gap-2'>
          <input
            name='remeberPassword'
            onChange={inputChangeHandler}
            type='checkbox'
            checked={loginValue.remeberPassword}
          />
          <label
            htmlFor='remeberPassword'
            className='text-[#B0B7C3] text-[1rem]'
          >
            Remember Me
          </label>
        </div>
        <div className='mt-4 w-full'>
          <Button type='submit' variant='primary'>
            Sign in
          </Button>
        </div>
      </form>
    </AuthPageLayout>
  )
}

export default Login
