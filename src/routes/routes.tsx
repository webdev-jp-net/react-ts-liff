import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { RootState } from 'store';

import { useAuthLiff } from 'hooks/useAuthLiff';

import { Private } from './private';

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
