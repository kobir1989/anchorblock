import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    {...props}
  >
    <g clipPath='url(#a)'>
      <circle cx={10} cy={10} r={10} fill='#EDEFF1' />
      <path
        fill='#C6CCD4'
        d='M13.387 12.284a4.405 4.405 0 0 1-6.773 0 .968.968 0 0 0-1.488 1.238 6.349 6.349 0 0 0 9.75 0 .968.968 0 0 0-1.489-1.238Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h20v20H0z' />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
