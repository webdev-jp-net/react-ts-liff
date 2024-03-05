import { RouteObject } from 'react-router-dom'

import { Sub } from 'components/pages/Sub'

import { AuthenticatedGuard } from './guard'

export const authenticatedRouter: RouteObject = {
  element: <AuthenticatedGuard />,
  children: [{ path: '/sub/AuthRouter', element: <Sub /> }],
}
