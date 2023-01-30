import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// component
import { Private } from './private';

// hooks
import { useAuthLiff } from '../hooks/useAuthLiff';

export const Routes: FC = () => {
  useAuthLiff(); // LIFFにログインする

  const { userId } = useSelector((state: RootState) => state.user);
  return userId ? (
    <BrowserRouter>
      <Private />
    </BrowserRouter>
  ) : (
    <p>login ...</p>
  );
};
