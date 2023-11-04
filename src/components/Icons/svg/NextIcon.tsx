import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    {...props}
  >
    <path fill='#000' d='M6.94 4 6 4.94 9.053 8 6 11.06l.94.94 4-4-4-4Z' />
  </svg>
)
export default SvgComponent
