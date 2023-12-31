import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    {...props}
  >
    <path fill='#000' d='m4.273 4-.94.94L6.387 8l-3.054 3.06.94.94 4-4-4-4Z' />
    <path fill='#000' d='m8.667 4-.94.94L10.78 8l-3.053 3.06.94.94 4-4-4-4Z' />
  </svg>
)
export default SvgComponent
