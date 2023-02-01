import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { store } from 'store';

import { Sub } from './Sub';

const history = createMemoryHistory();
describe('Sub', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  it('Subのスナップショット', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Sub />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
