import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    {...props}
  >
    <path
      fill='#333'
      d='m11.727 12 .94-.94L9.613 8l3.054-3.06-.94-.94-4 4 4 4Z'
    />
    <path
      fill='#333'
      d='m7.333 12 .94-.94L5.22 8l3.053-3.06-.94-.94-4 4 4 4Z'
    />
  </svg>
)
export default SvgComponent
