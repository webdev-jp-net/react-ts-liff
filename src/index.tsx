import { render } from 'react-dom';

// router
import { Routes } from './routes/routes';

// redux
import { Provider } from 'react-redux';
import { store } from './store/index';

// asset
import './assets/style/index.scss';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
