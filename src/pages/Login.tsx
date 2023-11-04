import { useState, useEffect } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import AuthPageLayout from '../layoutes/AuthPageLayout'
import { LoginInput, LoginError } from '../types/globalTypes'
import { validateEmail } from '../utils/inputValidators'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../redux/features/auth/authApi'

// initial form value
const defaultValue = {
  email: '',
  password: '',
  remeberPassword: false
}
const Login = () => {
  // from input state
  const [loginValue, setLoginValue] = useState<LoginInput>(defaultValue)
  // error state
  const [error, setError] = useState<LoginError>({
    email: '',
    password: ''
  })
  // RTK query login mutation hook. (POST)
  const [login, { data: loginResponse, isError, isLoading, isSuccess }] =
    useLoginMutation()
  const navigate = useNavigate()

  //onChange handler
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target
    // check if the input type is checkbox
    const newValue = type === 'checkbox' ? checked : value
    setLoginValue({ ...loginValue, [name]: newValue })
    // reset the error state when user start typing
    if (e.target.value !== '') {
      setError({ email: '', password: '' })
    }
  }

  // Login Submit Form handler
  const handleLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    let emailError = ''
    let passwordError = ''

    // email validation
    if (!validateEmail(loginValue.email)) {
      emailError = 'Invalid credentials'
    }
    // password validation
    // if (!isStrongPassword(loginValue.password)) {
    //   passwordError = 'Invalid credentials'
    // }
    if (loginValue.password.length < 6) {
      passwordError = 'Invalid credentials'
    }
    // Update the error state after validations
    setError({
      email: emailError,
      password: passwordError
    })
    // Check if there any error
    if (emailError || passwordError) {
      return
    }
    // submit form if there isn't any error.
    login({ email: loginValue.email, password: loginValue.password })
  }

  useEffect(() => {
    // if there are any response error, update the error state.
    if (isError) {
      return setError(prev => ({
        ...prev,
        email: 'Invalid credentials',
        password: 'Invalid credentials'
      }))
    }
    // if success navigate to '/user' and reset form
    if (isSuccess) {
      setLoginValue(defaultValue)
      navigate('/')
    }
  }, [isError, isSuccess, loginResponse, navigate])

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
        {/* email */}
        <Input
          name='email'
          type='email'
          iconName='emailIcon'
          placeholder='Your Email'
          value={loginValue.email}
          onChange={inputChangeHandler}
          errorMessage={error.email}
        />
        {/* password */}
        <Input
          name='password'
          type='password'
          iconName='lockIcon'
          placeholder='Password'
          value={loginValue.password}
          onChange={inputChangeHandler}
          errorMessage={error.password}
        />
        {/* checkbox Remember password */}
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
        {/* Submit button */}
        <div className='mt-4 w-full'>
          <Button disabled={isLoading} type='submit' variant='primary'>
            {isLoading ? 'Submiting...' : 'Sign in'}
          </Button>
        </div>
      </form>
      {/* navigaion link to signup page */}
      <div className='text-center mt-[2.18rem]'>
        <p className='text-[#B0B7C3]'>
          Don’t have an account yet?{' '}
          <Link to='/signup'>
            {' '}
            <span className='text-[#377DFF] text-[1rem] font-[500]'>
              Sign Up
            </span>
          </Link>
        </p>
      </div>
    </AuthPageLayout>
  )
}

export default Login
