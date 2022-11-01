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

    <path
      fill="#FFFFFF"
      d="M91.75,85.88l2.49-16.24H78.66V59.09c0-4.44,2.18-8.78,9.16-8.78h7.09V36.49c0,0-6.43-1.1-12.58-1.1
		c-12.84,0-21.22,7.78-21.22,21.86v12.38H46.83v16.24H61.1v39.27c2.86,0.45,5.79,0.68,8.78,0.68c2.99,0,5.92-0.23,8.78-0.68V85.88
		H91.75z"
    />
  </svg>
)

const Hexagon = memo(SvgComponent1)

const SvgComponent2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 57.74 108.63"
    xmlSpace="preserve"
    width={props.width || 14}
    height={props.height || 14}
  >
    <path
      fill="#FFFFFF"
      d="M53.96,60.64l2.99-19.51H38.23V28.47c0-5.34,2.62-10.54,11-10.54h8.51V1.32c0,0-7.72-1.32-15.11-1.32
  c-15.42,0-25.5,9.34-25.5,26.26v14.87H0v19.51h17.14v47.17c3.44,0.54,6.96,0.82,10.55,0.82s7.11-0.28,10.55-0.82V60.64H53.96z"
    />
  </svg>
)

const Single = memo(SvgComponent2)

export const Facebook = { Hexagon, Single }
