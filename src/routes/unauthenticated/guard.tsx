import { useSelector } from 'react-redux'

import { Navigate, Outlet } from 'react-router-dom'

import { RootState } from 'store'

/**
 * 認証前のルーティングを制御する
 * @returns ReactElement
 */
export const UnauthenticatedGuard = () => {
  const { userId } = useSelector((state: RootState) => state.user)

  if (!!userId) {
    return <Navigate to="" replace state={{ fromRedirect: true }} />
  }

  return <Outlet />
}
