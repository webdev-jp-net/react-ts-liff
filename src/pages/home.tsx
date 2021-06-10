/* eslint @typescript-eslint/ban-ts-comment: 0 */
import React, { FC, useEffect, useCallback } from 'react';

// router
import { useHistory } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateOpen, updateContent, updateClass } from '../store/dialog';
import { updateUserid } from '../store/user';

// liff
import liff from '@line/liff';

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

  const { userid } = useSelector((state: RootState) => state.user);

  // LIFFにログインする
  const actLoginLiff = useCallback(() => {
    try {
      liff
        .init({
          liffId: process.env.REACT_APP_LIFF_ID as string,
        })
        .then(() => {
          if (!liff.isInClient() && !liff.isLoggedIn()) liff.login({}); // LIFFブラウザで起動していない場合はLINEログインする

          // LINE ユーザIDをstoreへ保存
          const decordIdToken = liff.getDecodedIDToken();
          if (decordIdToken?.sub) dispatch(updateUserid(decordIdToken.sub));
        })
        .catch(err => {
          console.log('error', err);
        });
    } catch (err) {
      alert(`LIFF initialize failed ${err}`);
    }
  }, [dispatch]);

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

  // ページタイトル
  useEffect(() => {
    document.title = `HOME`;
  }, [actLoginLiff, history]);

  // ページを表示したとき
  useEffect(() => {
    // LIFFブラウザで起動していない場合はこのタイミングでliff.init
    if (!liff.isInClient()) actLoginLiff();
    reportWebVitals(console.log);
  }, [actLoginLiff]);

  // ページを表示したとき
  // LINEアプリ から LIFF を起動したとき対策
  window.addEventListener(
    'load',
    () => {
      if (!userid) actLoginLiff();
    },
    { once: true }
  );

  return (
    <div className={`l-page ${style.home}`}>
      <h1>HOME</h1>
      <p>ここへページの内容を表示</p>
      <p>{userid}</p>
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
