import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    {...props}
  >
    <g fill='#B0B7C3' stroke='#B0B7C3' strokeWidth={0.3} clipPath='url(#a)'>
      <path d='M8 8.862c-2.425 0-4.329.574-5.628 1.69C1.069 11.67.395 13.318.395 15.416c0 .405.329.734.734.734H14.87a.734.734 0 0 0 .734-.734c0-2.098-.674-3.745-1.977-4.864-1.3-1.116-3.203-1.69-5.628-1.69Zm6.103 5.82H1.898c.14-1.428.702-2.494 1.67-3.213 1.01-.75 2.483-1.139 4.432-1.139 1.949 0 3.421.388 4.432 1.139.968.72 1.53 1.785 1.67 3.213ZM8-.15c-2.294 0-4.023 1.769-4.023 4.101 0 2.39 1.793 4.355 4.023 4.355 2.23 0 4.024-1.965 4.024-4.355C12.024 1.62 10.293-.15 8-.15Zm0 6.988c-1.393 0-2.556-1.278-2.556-2.887C5.444 2.417 6.52 1.318 8 1.318c1.456 0 2.556 1.125 2.556 2.633 0 1.609-1.163 2.887-2.556 2.887Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
