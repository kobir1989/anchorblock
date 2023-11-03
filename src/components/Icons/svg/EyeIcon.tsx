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
      <path
        fill='#DCDFE5'
        d='M10 4.04c-3.821 0-7.286 2.09-9.844 5.485a.792.792 0 0 0 0 .945c2.558 3.4 6.023 5.49 9.844 5.49 3.821 0 7.287-2.09 9.843-5.485a.792.792 0 0 0 0-.945C17.287 6.13 13.821 4.04 10 4.04Zm.274 10.158a4.21 4.21 0 0 1-4.472-4.472 4.216 4.216 0 0 1 3.924-3.924 4.209 4.209 0 0 1 4.472 4.472 4.23 4.23 0 0 1-3.924 3.924Zm-.127-1.94a2.261 2.261 0 0 1-2.405-2.405 2.275 2.275 0 0 1 2.115-2.115 2.261 2.261 0 0 1 2.405 2.405 2.275 2.275 0 0 1-2.115 2.115Z'
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
