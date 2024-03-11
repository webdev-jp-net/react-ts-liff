import { FC } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { useNavigation } from './useNavigation'

import styles from './Navigation.module.scss'

type NavigationProps = {
  addClass?: string[]
}

export const Navigation: FC<NavigationProps> = ({ addClass = [] }) => {
  const { pathname } = useLocation()
  const customClass = Array.isArray(addClass) ? addClass : [addClass]

  const { list } = useNavigation()

  return (
    <div className={[styles.navigation, ...customClass].join(' ')}>
      {list.map((item, index) => (
        <Link key={index} to={item.url} className={pathname === item.url ? styles.active : ''}>
          {item.label}
        </Link>
      ))}
    </div>
  )
}
