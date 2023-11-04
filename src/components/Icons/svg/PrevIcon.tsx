import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    {...props}
  >
    <path fill='#000' d='m10.06 12 .94-.94L7.947 8 11 4.94 10.06 4l-4 4 4 4Z' />
  </svg>
)
export default SvgComponent
