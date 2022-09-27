import { SVGProps, memo } from 'react'

const SvgComponent1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 13}
    height={props.height || 13}
    viewBox="0 0 13.25 13"
  >
    <polygon
      fill="currentColor"
      points="13.25 6.5 9.28 13 6.2 13 10.16 6.5 6.2 0 9.28 0 13.25 6.5"
    />
    <polygon
      fill="currentColor"
      points="7.05 6.5 3.08 13 0 13 3.97 6.5 0 0 3.08 0 7.05 6.5"
    />
  </svg>
)

const Right = memo(SvgComponent1)

const SvgComponent2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 13}
    height={props.height || 13}
    viewBox="0 0 13.25 13"
  >
    <polygon
      fill="currentColor"
      points="0 6.5 3.97 0 7.05 0 3.08 6.5 7.05 13 3.97 13 0 6.5"
    />
    <polygon
      fill="currentColor"
      points="6.2 6.5 10.16 0 13.25 0 9.28 6.5 13.25 13 10.16 13 6.2 6.5"
    />
  </svg>
)

const Left = memo(SvgComponent2)

export const DoubleChevron = { Right, Left }
