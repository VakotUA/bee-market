import { SVGProps, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 12}
    height={props.height || 12}
    viewBox="0 0 24.73 28.56"
  >
    <polygon
      fill="currentColor"
      points="24.73 21.42 24.73 7.14 12.37 0 0 7.14 0 21.42 12.37 28.56 24.73 21.42"
    />
  </svg>
)

const Hex = memo(SvgComponent)
export default Hex
