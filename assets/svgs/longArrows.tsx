import { SVGProps, memo } from 'react'

const SvgComponent1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    height={15}
    style={{
      fill: 'none',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px',
    }}
    viewBox="0 0 46.14 14.5"
  >
    <polyline points="45.39 7.25 0.75 7.25 7.25 0.75 0.75 7.25 7.25 13.75" />
  </svg>
)

const Left = memo(SvgComponent1)

const SvgComponent2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    height={15}
    style={{
      fill: 'none',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px',
    }}
    viewBox="0 0 46.14 14.5"
  >
    <polyline points="0.75 7.25 45.39 7.25 38.89 13.75 45.39 7.25 38.89 0.75" />
  </svg>
)

const Right = memo(SvgComponent2)

export const LongArrow = { Right, Left }
