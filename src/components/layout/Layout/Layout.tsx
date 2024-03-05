import { FC, useEffect } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import styles from './Layout.module.scss'

export const Layout: FC = () => {
  const location = useLocation()

  // 初回処理
  useEffect(() => {
    // リダイレクトから来たかどうか
    const isFromRedirect = location.state?.fromRedirect
    console.log(location.pathname, { isFromRedirect })
  }, [location])

  return (
    <div className={styles.layout}>
      <Outlet />
      <div>navigation</div>
    </div>
  )
}
