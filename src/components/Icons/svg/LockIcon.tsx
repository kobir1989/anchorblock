import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    {...props}
  >
    <path
      fill='#C1C7D0'
      fillRule='evenodd'
      d='M9.62 14.01v1.923c0 .2.176.363.38.363.21 0 .381-.168.381-.363V14.01c.444-.153.762-.564.762-1.048 0-.614-.512-1.111-1.143-1.111s-1.143.497-1.143 1.111c0 .484.318.895.762 1.048ZM4.285 8.149V5.555C4.286 2.486 6.844 0 10 0c3.15 0 5.714 2.487 5.714 5.555v2.593c1.264.004 2.286 1 2.286 2.23v3.696C18 17.34 15.271 20 11.905 20h-3.81C4.732 20 2 17.347 2 14.074v-3.697C2 9.14 3.023 8.152 4.286 8.148Zm2.285 0V5.556c0-1.845 1.535-3.334 3.429-3.334 1.89 0 3.429 1.493 3.429 3.334v2.592H6.57Z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgComponent
