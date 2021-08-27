import { FC, useEffect, useCallback } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { updateUserid } from '../store/user';

// liff
import liff from '@line/liff';

// component
import { Private } from './private';

export const Routes: FC = () => {
  const dispatch = useDispatch();
  const { userid } = useSelector((state: RootState) => state.user);

  // LIFFにログインする
  const doLoginLiff = useCallback(() => {
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

  // ページを表示したとき
  useEffect(() => {
    // LIFFブラウザで起動していない場合はこのタイミングでliff.init
    if (!liff.isInClient()) doLoginLiff();
  }, [doLoginLiff]);

  return userid ? <Private /> : <></>;
};
