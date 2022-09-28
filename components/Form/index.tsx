import style from './style.module.scss'
import { Container } from '../Layout/Container'
import { useState } from 'react'
import Link from 'next/link'

import Background from '../../assets/images/form_background.png'
import { Button } from '../UI/Button'

export default function Form() {
  const [message, setMessage] = useState<string>('')

  return (
    <section className={style.Form}>
      <Container className={style.Content}>
        <div
          className={style.Body}
          style={{ backgroundImage: `url(${Background.src})` }}
        >
          <div className={style.Title}>
            <h2>Залишились питання чи пропозиції?</h2>
            <p>Ми відповідаємо за декілька хвилин</p>
          </div>

          <div className={style.formGroup}>
            <input
              type="text"
              name="message"
              placeholder="Введіть ваш запит тут"
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              value={message}
            />
            <label htmlFor="message">Введіть ваш запит тут</label>
          </div>

          <Link href="/blog">
            <a>
              <Button className={style.Button}>НАШ БЛОГ</Button>
            </a>
          </Link>
        </div>
      </Container>
    </section>
  )
}
