import { FC, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import reportWebVitals from 'reportWebVitals';

import { Button } from 'components/parts/Button';
import { RootState } from 'store';

import { usePageTitle } from 'hooks/usePageTitle';

import styles from './Home.module.scss';

// import { Hoge } from 'components/hoge';

// import { Fuga } from '@types/fuga';

export const Home: FC = () => {
  const navigate = useNavigate();

  const { userId } = useSelector((state: RootState) => state.user);

  // ページを表示したとき
  useEffect(() => {
    reportWebVitals(console.log);
  }, []);

  // ページタイトル
  usePageTitle(`HOME`);

  return (
    <div className={`l-page ${styles.home}`}>
      <h1>HOME</h1>
      <p>ここへページの内容を表示</p>
      <p>{userId}</p>
      <div className={styles.menu}>
        <Button
          handleClick={() => {
            navigate('/sub/1');
          }}
        >
          1のページへ移動
        </Button>
      </div>
    </div>
  );
};
