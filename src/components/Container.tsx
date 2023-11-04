import { ChildrenType } from '../types/globalTypes'

const Container = ({ children }: ChildrenType) => {
  return (
    <section className='max-w-[1280px] px-[1.8rem] m-auto'>{children}</section>
  )
}

export default Container
