interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <section className='max-w-[1280px] px-[1.8rem] m-auto'>{children}</section>
  )
}

export default Container
