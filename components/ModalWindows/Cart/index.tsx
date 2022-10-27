import { Button } from '../../UI/Button'
import Modal from '../../UI/Modal'
import style from './style.module.scss'

export type Props = {
  isModalVisible: boolean
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const count = 2
const price = 9876

export default function CartModal({
  isModalVisible,
  setIsModalVisible,
}: Props) {
  return (
    <Modal visible={isModalVisible} setVisible={setIsModalVisible}>
      <div className={style.Cart}>
        <div>
          <div className={style.Title}>
            <h2>ВАШ КОШИК ТОВАРІВ</h2>
          </div>

          <ul className={style.List}>
            {/* TODO: {map} */}
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <div className={style.Total}>
            <p>Загалом:</p>
            <p>
              {count} товари на суму {price}
            </p>
          </div>

          <Button className={style.Button} primary>
            Оформити замовлення
          </Button>

          <Button className={style.Button}>Продовжити покупки</Button>
        </div>
      </div>
    </Modal>
  )
}
