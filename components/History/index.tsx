import { Container } from '../Layout/Container'
import style from './style.module.scss'
import { useRouter } from 'next/router'
import { ROUTES } from '../../lib/addressation_map'

export default function History() {
  const router = useRouter()

  return (
    <section className={style.History}>
      <Container>
        <p>
          Головна {'>'} {ROUTES.get(router.asPath)}
        </p>
      </Container>
    </section>
  )
}
