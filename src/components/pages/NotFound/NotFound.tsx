import { FC } from 'react'

import { Link } from 'react-router-dom'

import { usePageTitle } from 'hooks/usePageTitle'

import styles from './NotFound.module.scss'

export const NotFound: FC = () => {
  usePageTitle(`Page Not Found - JURASSIC PARK THE SECRET MISSION`)

  return (
    <div className={styles.page}>
      <div className={styles.body}>
        <h1 className={styles.title}>404 Page Not Found</h1>
        <p className={styles.paragraph}>ページが見つかりませんでした。</p>
        <p className={styles.paragraph}>
          <Link to="/">HOME</Link>
        </p>
      </div>
    </div>
  )
}
