import { SVGProps, memo } from 'react'

const SvgComponent1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 39 54"
    xmlSpace="preserve"
    width="39"
    height="54"
  >
    <path
      fill="#252525"
      d="M38,10.67,20.29.43a1.67,1.67,0,0,0-1.7,0L.85,10.67A1.68,1.68,0,0,0,0,12.14V32.62a1.68,1.68,0,0,0,.85,1.47l15.63,9a9.65,9.65,0,0,1,1.75,1.8,2.64,2.64,0,0,1,.14,2.88l-.89,1.52a2.27,2.27,0,1,0,3.91,0L20.5,47.8a2.66,2.66,0,0,1,.14-2.88,9.7,9.7,0,0,1,1.76-1.8l15.62-9a1.68,1.68,0,0,0,.85-1.47V12.14A1.68,1.68,0,0,0,38,10.67Z"
      transform="translate(0 -0.2)"
    />
    <path
      fill="#ffcf00"
      d="M28.18,15.84l-7.41-4.28a2,2,0,0,0-2,0l-7.41,4.28a2,2,0,0,0-1,1.74v8.56a2,2,0,0,0,1,1.73l7.41,4.28a2,2,0,0,0,2,0l7.41-4.28a2,2,0,0,0,1-1.73V17.58A2,2,0,0,0,28.18,15.84Z"
      transform="translate(0 -0.2)"
    />
  </svg>
)

const Black = memo(SvgComponent1)

const SvgComponent2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 39 54"
    xmlSpace="preserve"
    width="39"
    height="54"
  >
    <path
      fill="#ffcf00"
      d="M38,10.67,20.29.43a1.67,1.67,0,0,0-1.7,0L.85,10.67A1.68,1.68,0,0,0,0,12.14V32.62a1.68,1.68,0,0,0,.85,1.47l15.63,9a9.65,9.65,0,0,1,1.75,1.8,2.64,2.64,0,0,1,.14,2.88l-.89,1.52a2.27,2.27,0,1,0,3.91,0L20.5,47.8a2.66,2.66,0,0,1,.14-2.88,9.7,9.7,0,0,1,1.76-1.8l15.62-9a1.68,1.68,0,0,0,.85-1.47V12.14A1.68,1.68,0,0,0,38,10.67Z"
      transform="translate(0 -0.2)"
    />
    <path
      fill="#fff"
      d="M28.18,15.84l-7.41-4.28a2,2,0,0,0-2,0l-7.41,4.28a2,2,0,0,0-1,1.74v8.56a2,2,0,0,0,1,1.73l7.41,4.28a2,2,0,0,0,2,0l7.41-4.28a2,2,0,0,0,1-1.73V17.58A2,2,0,0,0,28.18,15.84Z"
      transform="translate(0 -0.2)"
    />
  </svg>
)

const White = memo(SvgComponent2)

export const Logo = { Black, White }
