import { SVGProps } from 'react'

const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h11q.425 0 .713.288T16 17q0 .425-.288.713T15 18H4Zm14.9-1.7l-3.6-3.6q-.3-.3-.3-.7t.3-.7l3.6-3.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L17.4 12l2.9 2.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275ZM4 13q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h8q.425 0 .713.288T13 12q0 .425-.288.713T12 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h11q.425 0 .713.288T16 7q0 .425-.288.713T15 8H4Z'
      ></path>
    </svg>
  )
}
export default MenuIcon
