import { Button } from '../../UI/Button'
import Modal from '../../UI/Modal'
import style from './style.module.scss'

import Link from 'next/link'

import { useAppSelector, useAppDispatch } from '../../../modules/store/hooks'
import { modalsSlice } from '../../../modules/store/reducers/modalsSlice'

const count = 2
const price = 9876

export default function CartModal() {
  const dispatch = useAppDispatch()
  const { toggleCartModal } = modalsSlice.actions
  const visible = useAppSelector((state) => state.modalsReducer.cart)

  return (
    <Modal
      visible={visible === 'open'}
      setVisible={() => dispatch(toggleCartModal())}
    >
      <div className={style.Cart}>
        <div className={style.Title}>
          <h2>ВАШ КОШИК ТОВАРІВ</h2>
        </div>

        <div>
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

          <Button
            className={style.Button}
            onClick={() => dispatch(toggleCartModal())}
            primary
          >
            <Link href="/cart">
              <a>Оформити замовлення</a>
            </Link>
          </Button>

          <Button
            className={style.Button}
            onClick={() => dispatch(toggleCartModal())}
          >
            <a>Продовжити покупки</a>
          </Button>
        </div>
      </div>
    </Modal>
  )
}
