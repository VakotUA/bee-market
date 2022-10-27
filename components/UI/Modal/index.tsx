import classNames from 'classnames'
import { Button } from '../Button'
import style from './style.module.scss'
import useLockedBody from '../../../modules/hooks/useLockedBody'
import { IoMdClose } from 'react-icons/io'

export type Props = {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal(props: Props) {
  props.visible ? useLockedBody(true) : useLockedBody(false)

  if (!props.visible) return <></>

  return (
    <>
      <div className={style.Background} />
      <div className={style.Modal} style={props.style}>
        <Button
          className={style.Button}
          onClick={() => props.setVisible(false)}
          primary
        >
          <IoMdClose />
        </Button>

        <div className={classNames(style.Content, props.className)}>
          {props.children}
        </div>
      </div>
    </>
  )
}
