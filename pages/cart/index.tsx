import History from '../../components/History'

import { Container } from '../../components/Layout/Container'
import style from './style.module.scss'

export default function CatalogPage() {
  return (
    <>
      <History />
      <div>
        <Container className={style.Title}>
          <h1>ВАШ КОШИК</h1>
        </Container>
      </div>
    </>
  )
}
