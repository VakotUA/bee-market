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
      d="M105.39,51.83c-0.26-0.75-0.57-0.96-1.05-1.14c-1.05-0.4-2.83,0.2-2.83,0.2S38.42,73.56,34.82,76.07
		c-0.78,0.54-1.04,0.85-1.16,1.22c-0.62,1.79,1.32,2.58,1.32,2.58l16.26,5.3c0,0,0.61,0.09,0.82-0.05
		c3.7-2.34,37.22-23.5,39.15-24.21c0.31-0.09,0.53,0.01,0.47,0.22c-0.77,2.72-29.88,28.59-29.88,28.59s-0.11,0.14-0.18,0.3L61.57,90
		l-1.52,16.13c0,0-0.64,4.94,4.31,0c3.49-3.49,6.86-6.4,8.55-7.82c5.59,3.86,11.61,8.13,14.2,10.36c1.3,1.12,2.4,1.3,3.29,1.27
		c2.47-0.09,3.15-2.8,3.15-2.8s11.5-46.27,11.88-52.47c0.04-0.61,0.09-0.99,0.09-1.41C105.54,52.68,105.48,52.1,105.39,51.83z"
    />
  </svg>
)

const Hexagon = memo(SvgComponent1)

const SvgComponent2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 72 59.4"
    xmlSpace="preserve"
    width={props.width || 14}
    height={props.height || 14}
  >
    <path
      fill="#FFFFFF"
      d="M71.86,1.28c-0.26-0.75-0.57-0.96-1.05-1.14c-1.05-0.4-2.83,0.2-2.83,0.2S4.89,23.01,1.29,25.52
		c-0.78,0.54-1.04,0.85-1.16,1.22c-0.62,1.79,1.32,2.58,1.32,2.58l16.26,5.3c0,0,0.61,0.09,0.82-0.05
		c3.7-2.34,37.22-23.5,39.15-24.21c0.31-0.09,0.53,0.01,0.47,0.22c-0.77,2.72-29.88,28.59-29.88,28.59s-0.11,0.14-0.18,0.3
		l-0.04-0.02l-1.52,16.13c0,0-0.64,4.94,4.31,0c3.49-3.49,6.86-6.4,8.55-7.82c5.59,3.86,11.61,8.13,14.2,10.36
		c1.3,1.12,2.4,1.3,3.29,1.27c2.47-0.09,3.15-2.8,3.15-2.8s11.5-46.27,11.88-52.47c0.04-0.61,0.09-0.99,0.09-1.41
		C72.01,2.13,71.95,1.55,71.86,1.28z"
    />
  </svg>
)

const Single = memo(SvgComponent2)

export const Telegram = { Hexagon, Single }