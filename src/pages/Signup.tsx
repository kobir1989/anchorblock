import Input from '../components/Input'
import AuthPageLayout from '../layoutes/AuthPageLayout'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icons/Icon'
import { SignupInput, SignupError } from '../types/globalTypes'
import {
  isStrongPassword,
  isValidName,
  validateEmail
} from '../utils/inputValidators'
import { Link, useNavigate } from 'react-router-dom'
import { useSignupMutation } from '../redux/features/auth/authApi'

// initial form value
const defaultValue = {
  email: '',
  name: '',
  password: '',
  termsConditions: false
}

const Signup = () => {
  // form input state
  const [signupValue, setSignupValue] = useState<SignupInput>(defaultValue)
  // error state
  const [error, setError] = useState<SignupError>({
    email: '',
    name: '',
    password: '',
    termsConditions: ''
  })
  // RTK query signup mutaion hook. (POST)
  const [signup, { data: signupResponse, isError, isLoading, isSuccess }] =
    useSignupMutation()

  // validator to check is password strong ro not. to update dash svg.
  const isStrong = isStrongPassword(signupValue.password)
  const navigate = useNavigate()

  //onChange handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    // check if the input type is checkbox
    const newValue = type === 'checkbox' ? checked : value
    // reset the error state when user start typing
    setSignupValue({ ...signupValue, [name]: newValue })
    if (value !== '') {
      setError({ email: '', name: '', password: '', termsConditions: '' })
    }
  }

  // Signup Form Submit Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // should not include number or symble
    if (!isValidName(signupValue.name)) {
      setError(prev => ({
        ...prev,
        name: 'Please enter a valid Name.'
      }))
    }
    // check Valid Email
    if (!validateEmail(signupValue.email)) {
      setError(prev => ({
        ...prev,
        email: 'Please enter a valid email address.'
      }))
    }
    // Check Strong Password
    if (!isStrongPassword(signupValue.password)) {
      setError(prev => ({
        ...prev,
        password:
          'Password must be > 7 characters and include letters, numbers, & symbols.'
      }))
    }
    // Check termsConditions
    if (!signupValue.termsConditions) {
      setError(prev => ({
        ...prev,
        termsConditions: 'Please agree to the Terms & Conditions'
      }))
    }
    // Check if there are any error in the errors object.
    const hasError =
      Object.values(error).some(err => err !== '') ||
      Object.values(signupValue).some(val => val === '')
    // Submit if aren't any error
    if (!hasError) {
      signup({ email: signupValue.email, password: signupValue.password })
    }
  }

  useEffect(() => {
    // if there are any response error, update the error state
    if (isError) {
      setError(prev => ({
        ...prev,
        email: signupResponse?.error || 'Something went wrong!',
        password: signupResponse?.error || 'Something went wrong!'
      }))
    }
    // if success navigate to '/user' and reset form
    if (isSuccess) {
      setSignupValue(defaultValue)
      navigate('/users')
    }
  }, [isError, isSuccess, navigate, signupResponse?.error])

  return (
    <AuthPageLayout
      subTitle='Getting Started'
      title='Create an account to continue!'
      googleBtnLebel='Sign Up with Google'
      appleBtnLebel='Sign Up with Apple ID'
    >
      <form
        className='flex flex-col gap-[1.2rem] mt-[1.2rem] lg:mt-[1.87rem]'
        onSubmit={handleSubmit}
      >
        {/* email */}
        <Input
          name='email'
          type='email'
          iconName='emailIcon'
          placeholder='Your Email'
          value={signupValue.email}
          onChange={onChangeHandler}
          errorMessage={error.email}
        />
        {/* name  */}
        <Input
          name='name'
          type='text'
          iconName='nameIcon'
          placeholder='Your Name'
          value={signupValue.name}
          onChange={onChangeHandler}
          errorMessage={error.name}
        />
        {/* password */}
        <Input
          name='password'
          type='password'
          iconName='lockIcon'
          placeholder='Create Password'
          value={signupValue.password}
          onChange={onChangeHandler}
          errorMessage={error.password}
        />
        {/* green dash */}
        <div className={`flex justify-between`}>
          {Array.from({ length: 6 })
            .fill(0)
            .map((_dash, i) => (
              <span
                key={i}
                className={`${
                  isStrong
                    ? 'text-[#38CB89]'
                    : signupValue.password.length > 6
                    ? 'text-orange-200'
                    : 'text-[#F3F3F3]'
                } transition-all duration-300 ease-out`}
              >
                <Icon name='lineIcon' />
              </span>
            ))}
        </div>
        {/*  Terms & Conditions  */}
        <div className='flex gap-2'>
          <input
            required
            name='termsConditions'
            type='checkbox'
            checked={signupValue.termsConditions}
            onChange={onChangeHandler}
          />
          <label
            htmlFor='termsConditions'
            className='text-[#B0B7C3] text-[1rem]'
          >
            I agree to the Terms & Conditions
          </label>
        </div>
        {/* submit button */}
        <div className='mt-4 w-full'>
          <Button disabled={isLoading} type='submit' variant='primary'>
            {isLoading ? 'Submiting...' : 'Sign up'}
          </Button>
        </div>
      </form>
      <div className='text-center mt-[2.18rem]'>
        <p className='text-[#B0B7C3]'>
          Already have an account?
          <Link to='/'>
            {' '}
            <span className='text-[#377DFF] text-[1rem] font-[500]'>
              Sign in
            </span>
          </Link>
        </p>
      </div>
    </AuthPageLayout>
  )
}

export default Signup
