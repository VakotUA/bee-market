import { Dispatch, SetStateAction, useState } from 'react'
import { Container } from '../../Layout/Container'
import classNames from 'classnames'
import style from './style.module.scss'

export interface IFilter {
  title: string
  values: {
    value: string
    selected: boolean
  }[]
}

export type Props = {
  filters: IFilter[]
  setFilters: Dispatch<SetStateAction<IFilter[]>>
}

export function Filters({ filters, setFilters }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <section className={style.Filters}>
      <Container className={style.Content}>
        <div className={style.Wrapper}>
          <div
            className={classNames(style.Filter, { [style.Active]: isActive })}
          >
            <div>
              {filters.map((filter, index) => (
                <div key={index}>
                  <div className={style.Title}>{filter.title}</div>
                  <ul className={style.Values}>
                    {filter.values.map((value, index) => (
                      <li
                        className={classNames({
                          [style.Active]: value.selected,
                        })}
                        key={index}
                      >
                        {value.value}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={style.Button}>ЗАСТОСУВАТИ ФІЛЬТРИ</div>
          </div>

          <div
            className={classNames(style.Button, { [style.Active]: isActive })}
          >
            <div className={style.CornerLeftTop} />
            <div className={style.Body} onClick={() => setIsActive(!isActive)}>
              <p>Фільтри</p>
              <p className={style.Plus}>+</p>
              <p className={style.Minus}>-</p>
            </div>
            <div className={style.CornerRightTop} />
          </div>
        </div>
      </Container>
    </section>
  )
}
