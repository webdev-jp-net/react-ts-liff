import { FC } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { useAuthLiff } from 'hooks/useAuthLiff'

import { Layout } from 'components/layout/Layout'

import { Home } from 'components/pages/Home'
import { NotFound } from 'components/pages/NotFound'
import { Sub } from 'components/pages/Sub'

import { authenticatedRouter } from './authenticated'
import { unAuthRouter } from './unauthenticated'

export const App: FC = () => {
  useAuthLiff() // LIFFにログインする

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
          // element: <Navigate to='/' replace state={{ fromRedirect: true }} />,
        },
        unAuthRouter,
        authenticatedRouter,
        { path: '/sub/:id', element: <Sub /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
