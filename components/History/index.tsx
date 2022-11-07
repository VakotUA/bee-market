import { Container } from '../Layout/Container'
import style from './style.module.scss'

import { BiChevronRight } from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'

export default function History(props: { path?: string[] }) {
  const { path } = props

  return (
    <section className={style.History}>
      <Container>
        <div>
          {path &&
            path.map((item: string, index: number) => (
              <React.Fragment key={index}>
                <Link href={path.slice(0, index + 1).join('/') || '/'}>
                  {item || ''}
                </Link>

                {index < path.length - 1 && (
                  <BiChevronRight className={style.Chevron} />
                )}
              </React.Fragment>
            ))}
        </div>
      </Container>
    </section>
  )
}
