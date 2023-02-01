import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { store } from 'store';

import { Home } from './Home';

const history = createMemoryHistory();
describe('Home', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  it('Homeのスナップショット', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Home />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
