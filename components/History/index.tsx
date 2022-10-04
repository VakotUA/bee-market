import { Container } from '../Layout/Container'
import style from './style.module.scss'
import { useRouter } from 'next/router'
import { ROUTES } from '../../lib/addressation_map'

import { BiChevronRight } from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'

export default function History() {
  const router = useRouter()
  const paths = router.asPath.split('/')

  return (
    <section className={style.History}>
      <Container>
        <div>
          {paths.map((path, index) => (
            <React.Fragment key={index}>
              <Link
                href={paths.slice(0, paths.indexOf(path) + 1).join('/') || '/'}
              >{`${ROUTES.get(path) || path}`}</Link>

              {paths.indexOf(path) < paths.length - 1 && (
                <BiChevronRight className={style.Chevron} />
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  )
}
