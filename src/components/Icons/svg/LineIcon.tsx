import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={68}
    height={4}
    fill='none'
    {...props}
  >
    <rect width={68} height={4} style={{ fill: 'currentcolor' }} rx={2} />
  </svg>
)
export default SvgComponent
