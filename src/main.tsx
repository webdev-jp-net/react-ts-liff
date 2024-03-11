import { Provider } from 'react-redux'

import { createRoot } from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'store'

import { App } from 'routes/routes'

import 'style/index.scss'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
