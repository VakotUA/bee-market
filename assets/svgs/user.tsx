import { SVGProps, memo } from 'react'

const SvgComponent1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 28.03 35.38"
    xmlSpace="preserve"
    width={props.width || 14}
    height={props.height || 14}
  >
    <ellipse
      fill="currentColor"
      transform="matrix(0.9231 -0.3845 0.3845 0.9231 -1.8269 5.968)"
      cx="14.01"
      cy="7.55"
      rx="7.55"
      ry="7.55"
    />
    <path
      fill="currentColor"
      d="M14.01,17.69L14.01,17.69C6.27,17.69,0,23.96,0,31.7l0,0c0,2.03,1.65,3.68,3.68,3.68h20.67c2.03,0,3.68-1.65,3.68-3.68
  l0,0C28.03,23.96,21.75,17.69,14.01,17.69z"
    />
  </svg>
)

export const User = memo(SvgComponent1)
