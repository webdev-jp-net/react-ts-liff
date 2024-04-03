import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { RootState } from 'store'

import { usePageTitle } from 'hooks/usePageTitle'

import styles from './Home.module.scss'

export const Home: FC = () => {
  const { userId } = useSelector((state: RootState) => state.user)

  // ページタイトル
  usePageTitle(`HOME`)

  return (
    <div className={styles.page}>
      <div className={styles.body}>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.paragraph}>ここへページの内容を表示</p>
        <p className={styles.paragraph}>{userId}</p>
        <p className={styles.paragraph}>
          <Link to="/sub/1">1のページへ移動</Link>
        </p>
      </div>
    </div>
  )
}
