import { FC } from 'react';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// hooks
import { useAuthLiff } from '../hooks/useAuthLiff';

// component
import { Private } from './private';

export const Routes: FC = () => {
  useAuthLiff(); // LIFFにログインする

  const { userId } = useSelector((state: RootState) => state.user);
  return userId ? <Private /> : <></>;
};
