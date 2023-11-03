import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={15}
    fill='none'
    {...props}
  >
    <path
      fill='#B0B7C3'
      d='M7.486 0C3.36 0 0 3.359 0 7.486c0 4.129 3.359 7.487 7.486 7.487 4.129 0 7.487-3.358 7.487-7.487C14.973 3.36 11.615 0 7.486 0Zm0 13.59a6.111 6.111 0 0 1-6.104-6.104 6.111 6.111 0 0 1 6.104-6.104 6.111 6.111 0 0 1 6.105 6.104 6.111 6.111 0 0 1-6.105 6.105Z'
    />
  </svg>
)
export default SvgComponent
