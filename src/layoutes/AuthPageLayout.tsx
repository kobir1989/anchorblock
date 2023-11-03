import Button from '../components/Button'
import Container from '../components/Container'
import Icon from '../components/Icons/Icon'

interface AuthPageLayoutProps {
  children: React.ReactNode
  title: string
  subTitle: string
  googleBtnLebel: string
  appleBtnLebel: string
}

const AuthPageLayout = ({
  children,
  title,
  subTitle,
  googleBtnLebel,
  appleBtnLebel
}: AuthPageLayoutProps) => {
  return (
    <Container>
      <div className='mt-[6.25rem] max-w-[33.75rem] m-auto'>
        <div className='flex flex-col gap-[1rem] lg:gap-[1.87rem]'>
          {/* heading text */}
          <div className='text-center'>
            <h2 className='text-[1.62rem] text-[#323B4B] font-[700]'>
              {title}
            </h2>
            <p className='text-[#8A94A6] text-[1.12rem] font-[500] mt-[1.18rem]'>
              {subTitle}
            </p>
          </div>
          {/* social Auth Buttons */}
          <div className='flex flex-col md:flex-row gap-[1.2rem] lg:gap-[1.87rem] '>
            <Button variant='secondary'>
              <Icon name='googleIcon' /> {googleBtnLebel}
            </Button>
            <Button variant='secondary'>
              <Icon name='appleIcon' /> {appleBtnLebel}
            </Button>
          </div>
          {/* border --OR-- */}
          <div className='text-[#B0B7C3] flex items-center gap-[1.43rem]'>
            <span className='h-2px border-b w-[50%]'></span>OR{' '}
            <span className='h-[2px] border-b w-[50%]'></span>
          </div>
        </div>

        {/* form  (children)*/}
        {children}
      </div>
    </Container>
  )
}

export default AuthPageLayout
