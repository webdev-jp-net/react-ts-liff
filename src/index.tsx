import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client';

import { Routes } from './routes/routes';
import { store } from './store/index';

import './assets/style/index.scss';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Routes />
  </Provider>
);
