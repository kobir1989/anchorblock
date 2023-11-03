interface ButtonProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary' // currently has 2 variant, it could be extended if needed.
  onClick?(): void
  type?: 'submit' | 'button'
  disabled?: boolean
}

const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  // style button based on variant
  let buttonClassName = ''

  if (variant === 'secondary') {
    buttonClassName = 'bg-[#F0F5FA] text-[#8A94A6] '
  } else if (variant === 'primary') {
    buttonClassName = 'bg-[#377DFF] text-white hover:bg-[#2a72f8]'
  }

  return (
    <button
      {...props}
      className={`w-full flex items-center justify-center gap-2 text-[1rem] font-[500] py-[1rem] lg:py-[1.25rem] px-[1.75rem] rounded-[1rem] hover:shadow-md transition duration-300 ease-in-out ${buttonClassName} button_animation`}
    >
      {children}
    </button>
  )
}

export default Button
