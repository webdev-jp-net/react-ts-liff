import { RouteObject } from 'react-router-dom'

import { Sub } from 'components/pages/Sub'

import { UnauthenticatedGuard } from './guard'

export const unAuthRouter: RouteObject = {
  element: <UnauthenticatedGuard />,
  children: [{ path: '/sub/unAuthRouter', element: <Sub /> }],
}
