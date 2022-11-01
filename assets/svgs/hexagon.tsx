import { SVGProps, memo } from 'react'

const SvgComponent1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 142 160.79"
    xmlSpace="preserve"
    width={props.width || 14}
    height={props.height || 14}
  >
    <path
      fill="#252525"
      d="M142,115.45V45.34c0-3.67-1.96-7.07-5.14-8.9L76.14,1.38c-3.18-1.84-7.1-1.84-10.28,0L5.14,36.43
	C1.96,38.27,0,41.66,0,45.34v70.12c0,3.67,1.96,7.07,5.14,8.9l60.72,35.06c3.18,1.84,7.1,1.84,10.28,0l60.72-35.06
	C140.04,122.52,142,119.12,142,115.45z"
    />
  </svg>
)

const Black = memo(SvgComponent1)

const SvgComponent2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 142 160.79"
    xmlSpace="preserve"
    width={props.width || 14}
    height={props.height || 14}
  >
    {/* <linearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1="112.9233"
      y1="141.51"
      x2="32.5988"
      y2="24.4119"
    >
      <stop offset="0" style={{ stopColor: '#FFCF00' }} />
      <stop offset="1" style={{ stopColor: '#FFE21C' }} />
    </linearGradient> */}
    <path
      // fill="url(#SVGID_1_)" // BUG: disappears on low res
      fill="#ffcf00"
      d="M142,115.45V45.34c0-3.67-1.96-7.07-5.14-8.9L76.14,1.38c-3.18-1.84-7.1-1.84-10.28,0L5.14,36.43
	C1.96,38.27,0,41.66,0,45.34v70.12c0,3.67,1.96,7.07,5.14,8.9l60.72,35.06c3.18,1.84,7.1,1.84,10.28,0l60.72-35.06
	C140.04,122.52,142,119.12,142,115.45z"
    />
  </svg>
)

const Yellow = memo(SvgComponent2)

const SvgComponent3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 142 160.79"
    xmlSpace="preserve"
    width={props.width || 14}
    height={props.height || 14}
  >
    <path
      fill="transparent"
      stroke="#252525"
      strokeWidth={6}
      d="M142,115.45V45.34c0-3.67-1.96-7.07-5.14-8.9L76.14,1.38c-3.18-1.84-7.1-1.84-10.28,0L5.14,36.43
	C1.96,38.27,0,41.66,0,45.34v70.12c0,3.67,1.96,7.07,5.14,8.9l60.72,35.06c3.18,1.84,7.1,1.84,10.28,0l60.72-35.06
	C140.04,122.52,142,119.12,142,115.45z"
    />
  </svg>
)

const Outline = memo(SvgComponent3)

export const Hexagon = { Black, Yellow, Outline }
