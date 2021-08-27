import { useCallback, useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateUserId } from '../store/user';

// liff
import liff from '@line/liff';

// Liffアプリ初期化
export const useAuthLiff = (): void => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state: RootState) => state.user);

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
          const decodeIdToken = liff.getDecodedIDToken();
          if (decodeIdToken?.sub) dispatch(updateUserId(decodeIdToken.sub));
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
    if (!liff.isInClient()) actLoginLiff();
  }, [actLoginLiff]);

  // ページを表示したとき
  // LINEアプリ から LIFF を起動したとき対策
  window.addEventListener(
    'load',
    () => {
      if (!userId) actLoginLiff();
    },
    { once: true }
  );
};
