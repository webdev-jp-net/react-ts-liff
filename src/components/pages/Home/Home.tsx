import { FC, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import reportWebVitals from 'reportWebVitals';

import { RootState } from 'store';
import { updateOpen, updateContent, updateClass } from 'store/dialog';

import { usePageTitle } from 'hooks/usePageTitle';

import style from './Home.module.scss';

// import { Hoge } from 'components/hoge';

// import { Fuga } from '@types/fuga';

export const Home: FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { userId } = useSelector((state: RootState) => state.user);

  // ダイアログ
  const openDialog = () => {
    const dialogBody = (
      <div>
        <p>ダイアログです</p>
      </div>
    ) as JSX.Element;
    dispatch(updateContent(dialogBody));
    dispatch(updateClass(['hoge', 'fuga']));
    dispatch(updateOpen(true));
  };

  // ページを表示したとき
  useEffect(() => {
    reportWebVitals(console.log);
  }, []);

  // ページタイトル
  usePageTitle(`HOME`);

  return (
    <div className={`l-page ${style.home}`}>
      <h1>HOME</h1>
      <p>ここへページの内容を表示</p>
      <p>{userId}</p>
      <button type="button" onClick={openDialog}>
        ダイアログ
      </button>
      <button
        type="button"
        onClick={() => {
          navigate('/sub/1');
        }}
      >
        1のページへ移動
      </button>
    </div>
  );
};
