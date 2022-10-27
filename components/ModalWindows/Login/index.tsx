import Modal from '../../UI/Modal'
import style from './style.module.scss'

export type Props = {
  isModalVisible: boolean
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LoginModal({
  isModalVisible,
  setIsModalVisible,
}: Props) {
  return (
    <Modal visible={isModalVisible} setVisible={setIsModalVisible}>
      <h1>Login modal</h1>
    </Modal>
  )
}
