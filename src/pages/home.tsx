/* eslint @typescript-eslint/ban-ts-comment: 0 */
import React, { FC, useEffect } from 'react';

// router
import { useHistory } from 'react-router-dom';

// redux
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { updateOpen, updateContent, updateClass } from '../store/dialog';
import { updateOpen, updateContent, updateClass } from '../store/dialog';

// WebVitals
import reportWebVitals from '../reportWebVitals';

// assets
import style from '../assets/style/pages/home.module.scss';

// component
// import { Hoge } from '../components/hoge';

// type
// import { Fuga } from '../@types/fuga';

export const Home: FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  // const { aaa, bbb } = useSelector((state: RootState) => state.ccc);

  // ダイアログ
  const openDialog = () => {
    const dialogBody = (
      <div>
        <p>ダイアログです</p>
      </div>
    );
    dispatch(updateContent(dialogBody));
    dispatch(updateClass(['hoge', 'fuga']));
    dispatch(updateOpen(true));
  };

  // ページを表示したとき
  useEffect(() => {
    document.title = `HOME`;
    reportWebVitals(console.log);
  }, [history]);

  return (
    <div className={`l-page ${style.home}`}>
      <h1>HOME</h1>
      <p>ここへページの内容を表示</p>
      <button type="button" onClick={openDialog}>
        ダイアログ
      </button>
      <button
        type="button"
        onClick={() => {
          history.push('/sub/1');
        }}
      >
        1のページへ移動
      </button>
    </div>
  );
};
